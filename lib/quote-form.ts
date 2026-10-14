// lib/quote-form.ts
//
// Single source of truth for every quote form on the site.
//
// Before this file existed there were six separate form implementations, each
// with its own field names ('depth' vs 'height', 'material' vs 'materials',
// 'file' vs 'attachment', 'message' vs 'additional_info'). Every one posted to
// the same Basin inbox, so the same answer arrived under a different key
// depending on which page the customer happened to be on. Keep new fields in
// this file so the inbox stays sortable.

'use client'

import { useCallback, useState } from 'react'

import { INDUSTRY_PRODUCTS } from '@/lib/quote-industry-products'

export const QUOTE_ENDPOINT = 'https://usebasin.com/f/a24a59909c70'
export const SUPPORT_EMAIL = 'hello@packifycustomboxes.com.au'

/** Basin rejects large attachments; catch it client-side with a clear message. */
export const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024
export const ACCEPTED_ATTACHMENTS = '.pdf,.ai,.eps,.svg,.png,.jpg,.jpeg,.zip'

// ─── Option lists ────────────────────────────────────────────────────────────

export const BOX_TYPES = [
  'Mailer Box',
  'Tuck / Folding Carton',
  'Rigid Box',
  'Magnetic Closure Box',
  'Corrugated Shipping Box',
  'Dispenser Box',
  'Cosmetic Box',
  'Bakery Box',
  'Burger / Food Box',
  'Cigarette / Vape Box',
  'Pouch or Bag',
  'Not sure yet, need a recommendation',
]

export const MATERIALS = [
  'Standard White Cardstock',
  'Kraft (Eco-friendly Brown)',
  'Corrugated Stock',
  'Rigid Press Board',
  'Textured Neenah Cardstock',
  'Foil Metallic Cardstock',
  'Holographic Stock',
  'Colored Stock',
  'Not sure, recommend one',
]

export const CARD_THICKNESSES = [
  '11 pt / 230 GSM',
  '12 pt / 250 GSM',
  '13 pt / 270 GSM',
  '14 pt / 300 GSM',
  '18 pt / 350 GSM',
  '24 pt / 460 GSM',
  '800 GSM',
  '1000 GSM',
  '1200 GSM',
  '1400 GSM',
  '1600 GSM',
  'E-flute',
  'B-flute',
]

export const PRINT_SIDES = ['Outside only', 'Inside only', 'Inside and outside', 'Unprinted / plain']

export const COATINGS = [
  'Gloss lamination',
  'Matte lamination',
  'Soft touch',
  'Silk lamination',
  'Aqueous coating',
  'Crystal UV',
  'Liquid UV',
  'None',
]

export const EXTRA_FINISHES = [
  'Embossing',
  'Debossing',
  'Foiling',
  'Holographic foiling',
  'Spot UV',
  'Raised spot UV',
  'Spot gloss',
  'PVC window',
  'None',
]

export const DIMENSION_UNITS = ['in', 'cm', 'mm']

/**
 * Ranges rather than a free-text number. Most first-time buyers do not have an
 * exact figure and an empty box makes them abandon; a range they can pick is
 * still enough for the team to price a tier.
 *
 * The bottom of this list is deliberately fine-grained. Packify has no minimum
 * order, so a 20-box sample run is a real order, not a rounding error — and a
 * single "Under 100" bucket would hide the difference between someone testing
 * 25 units and someone ordering 99. Sample-sized runs get their own steps so
 * the no-MOQ promise is visible in the form itself, not just in the copy
 * around it.
 */
export const QUANTITY_RANGES = [
  '1 to 25 (sample or test run)',
  '25 to 50',
  '50 to 100',
  '100 to 250',
  '250 to 500',
  '500 to 1,000',
  '1,000 to 2,500',
  '2,500 to 5,000',
  '5,000 to 10,000',
  '10,000+',
  'Not sure yet',
]

/**
 * The highest-value field on the form and the one none of the old versions
 * asked for. Lead time decides whether a job is standard, expedited, or
 * impossible, and knowing it up front stops the team quoting a date that has
 * already passed.
 */
export const TIMELINES = [
  'ASAP (within 2 weeks)',
  '2 to 4 weeks',
  '1 to 2 months',
  '3+ months',
  'Just researching for now',
]

export const ARTWORK_STATES = [
  'Print-ready files with a dieline',
  'Artwork, but no dieline yet',
  'A rough idea or reference images',
  'Nothing yet, I need design help',
]

/**
 * Industry → the products actually sold under it. Drives the cascading select.
 *
 * Re-exported from lib/quote-industry-products.ts, which mirrors the product
 * list on each industry page. Do not hand-maintain a second copy here: when
 * the form offers a product the industry page does not sell, the lead arrives
 * asking for something that was never on the site.
 */
export type { IndustryProductGroup } from '@/lib/quote-industry-products'
export { INDUSTRY_PRODUCTS }

/**
 * Product families with a product page but no industry page of their own.
 * They still belong in the "What are you packaging?" list, otherwise a bakery
 * or a skincare brand has to pick "Something else" on a site that sells them
 * a dedicated box.
 */
const EXTRA_PACKAGING_OPTIONS = ['Bakery', 'Cosmetics & Beauty']

/**
 * The main "What are you packaging?" question, asked the way a customer
 * thinks about it. Most first-time buyers cannot tell a tuck carton from a
 * mailer and should not have to; they know they sell candles. One flat list,
 * alphabetical, no grouping: every industry stands on its own so nothing is
 * implied about how one relates to another. Values are the industry labels,
 * so the answer lines up with the industry pages.
 */
export const PACKAGING_OPTIONS: string[] = [
  ...Object.values(INDUSTRY_PRODUCTS).map((i) => i.label),
  ...EXTRA_PACKAGING_OPTIONS,
].sort((a, b) => a.localeCompare(b))

/** Shown at the end of the packaging dropdown for anything the list misses. */
export const PACKAGING_OTHER = 'Something else'

// ─── Submission ──────────────────────────────────────────────────────────────

export type QuoteStatus = 'idle' | 'submitting' | 'success' | 'error'

/** Bots fill every field they find. A real person never sees this one. */
export const HONEYPOT_FIELD = 'company_fax'

export function useQuoteSubmit(source: string) {
  const [status, setStatus] = useState<QuoteStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      // Capture the element now. React nulls out e.currentTarget once the
      // handler yields, so reading it after `await` throws — which is why the
      // old forms silently failed to reset themselves after a send.
      const form = e.currentTarget
      const data = new FormData(form)

      const trap = data.get(HONEYPOT_FIELD)
      if (typeof trap === 'string' && trap.trim() !== '') {
        // Show the bot a success screen and send nothing.
        setStatus('success')
        return
      }
      data.delete(HONEYPOT_FIELD)

      const attachment = data.get('attachment')
      if (attachment instanceof File && attachment.size > MAX_ATTACHMENT_BYTES) {
        setStatus('error')
        setErrorMessage(
          `That file is ${(attachment.size / 1024 / 1024).toFixed(1)} MB. Attachments need to be under 8 MB. Send larger artwork to ${SUPPORT_EMAIL} and we will match it to this request.`
        )
        return
      }

      // Context the sales team would otherwise have to ask for.
      data.append('form_source', source)
      if (typeof window !== 'undefined') {
        data.append('page_url', window.location.href)
      }

      setStatus('submitting')
      setErrorMessage('')

      try {
        const response = await fetch(QUOTE_ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        })

        // fetch only rejects on a network failure, so a 4xx/5xx still lands
        // here as a resolved promise. Without this check the old forms told
        // customers their request was sent when the server had refused it.
        if (!response.ok) throw new Error(`Basin returned ${response.status}`)

        form.reset()
        setStatus('success')
      } catch {
        setStatus('error')
        setErrorMessage(
          `We could not send that request. Please try again, or email us at ${SUPPORT_EMAIL} and we will pick it up from there.`
        )
      }
    },
    [source]
  )

  const reset = useCallback(() => {
    setStatus('idle')
    setErrorMessage('')
  }, [])

  return { status, errorMessage, handleSubmit, reset }
}
