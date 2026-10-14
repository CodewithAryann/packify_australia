'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import {
  ARTWORK_STATES,
  BOX_TYPES,
  PACKAGING_OPTIONS,
  PACKAGING_OTHER,
  CARD_THICKNESSES,
  COATINGS,
  DIMENSION_UNITS,
  EXTRA_FINISHES,
  INDUSTRY_PRODUCTS,
  MATERIALS,
  PRINT_SIDES,
  QUANTITY_RANGES,
  QUOTE_ENDPOINT,
  TIMELINES,
  useQuoteSubmit,
} from '@/lib/quote-form'
import {
  ErrorNote,
  FieldIdProvider,
  FileField,
  HoneypotField,
  SelectField,
  SuccessPanel,
  TextAreaField,
  TextField,
} from '@/components/quote/QuoteFields'

/**
 * One form, two densities.
 *
 * The shape is deliberate: six questions are visible, everything else lives
 * behind a single "Add box specs" toggle. A customer who only wants to start a
 * conversation answers six things and leaves; a customer who already knows
 * their spec opens the drawer and gives the team enough to quote without a
 * follow-up email. Neither one is made to scroll past fields they cannot
 * answer, which is what the old long forms did.
 */
export default function QuoteRequestForm({
  variant = 'full',
  source,
  productName,
  industry,
  industrySlug,
  defaultBoxType,
  showConsent = false,
  submitLabel = 'Get my quote',
  specsOpenByDefault,
}: {
  variant?: 'full' | 'compact'
  /** Identifies which page the lead came from, sent as form_source. */
  source: string
  productName?: string
  industry?: string
  industrySlug?: string
  defaultBoxType?: string
  showConsent?: boolean
  submitLabel?: string
  specsOpenByDefault?: boolean
}) {
  const { status, errorMessage, handleSubmit, reset } = useQuoteSubmit(source)
  // Which question to ask depends on what the page already knows. A product
  // page knows the box; an industry page knows the industry; the homepage and
  // quote page know nothing. Never ask for something the URL already told us.
  const knownIndustry = industrySlug && INDUSTRY_PRODUCTS[industrySlug] ? industrySlug : ''
  const mode: 'product' | 'industry' | 'general' = productName
    ? 'product'
    : knownIndustry
      ? 'industry'
      : 'general'
  // Held in state rather than passed straight to <details open>, so that a
  // re-render (picking an industry, say) cannot snap the drawer shut on
  // someone mid-way through filling it in.
  const [specsOpen, setSpecsOpen] = useState(specsOpenByDefault ?? variant === 'full')
  // Namespaces every field id, so two forms on one page (homepage, industry
  // pages) do not collide. Colons are stripped because useId's output is not
  // a valid CSS selector.
  const formId = useId().replace(/:/g, '')

  if (status === 'success') {
    return <SuccessPanel onReset={reset} compact={variant === 'compact'} />
  }

  const compact = variant === 'compact'
  const gap = compact ? 'gap-3' : 'gap-4'
  const stack = compact ? 'space-y-3' : 'space-y-5'
  const twoCol = `grid grid-cols-1 sm:grid-cols-2 ${gap}`

  const industryProducts = knownIndustry ? INDUSTRY_PRODUCTS[knownIndustry].products : []

  return (
    <FieldIdProvider prefix={formId}>
      <form
        onSubmit={handleSubmit}
        // action/method kept so the form still submits if JavaScript fails.
        action={QUOTE_ENDPOINT}
        method="POST"
        encType="multipart/form-data"
        className={`relative ${stack}`}
        noValidate={false}
      >
        <HoneypotField />
        {productName && <input type="hidden" name="product" value={productName} />}
        {industry && <input type="hidden" name="industry" value={industry} />}

        {/* ── Essentials ─────────────────────────────────────────────────── */}
        <p className="text-[11px] text-gray-400">
          <span className="text-orange-500">*</span> Required. Everything else is optional.
        </p>
        <div className={twoCol}>
          <TextField
            name="name"
            label="Your name"
            required
            placeholder="Jordan Ellis"
            autoComplete="name"
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            required
            placeholder="you@company.com"
            autoComplete="email"
            inputMode="email"
          />
        </div>

        <div className={twoCol}>
          <TextField
            name="phone"
            label="Phone"
            type="tel"
            placeholder="(555) 012 3456"
            autoComplete="tel"
            inputMode="tel"
            hint="Fastest way to settle spec questions"
          />
          <TextField name="company" label="Company" placeholder="Ellis & Co." autoComplete="organization" />
        </div>

        {mode === 'general' && (
          <SelectField
            name="industry_type"
            label="What are you packaging?"
            options={PACKAGING_OPTIONS}
            extraOption={PACKAGING_OTHER}
            required
            placeholder="Select your product type"
            hint="Pick the closest match, we will sort out the box"
          />
        )}

        {mode === 'industry' && (
          // Named `product` to match the hidden field a product page sends, so
          // the answer to "which product" always lands under one inbox key.
          <SelectField
            name="product"
            label="Which product is this for?"
            options={industryProducts}
            extraOption="Something else, or not sure"
            placeholder="Select one"
          />
        )}

        <div className={twoCol}>
          <SelectField
            name="quantity"
            label="How many do you need?"
            options={QUANTITY_RANGES}
            required
            placeholder="Select a range"
            hint="Any quantity, there is no minimum order"
          />
          <SelectField
            name="timeline"
            label="When do you need them?"
            options={TIMELINES}
            required
            placeholder="Select a timeline"
            hint="Decides whether it is a standard or rush run"
          />
        </div>

        <TextAreaField
          name="message"
          label="Anything else we should know?"
          rows={compact ? 3 : 4}
          placeholder="What goes in the box, how it ships, any design ideas or deadlines."
        />

        {/* ── Optional specs, one click away ─────────────────────────────── */}
        <details
          open={specsOpen}
          onToggle={(e) => setSpecsOpen((e.currentTarget as HTMLDetailsElement).open)}
          className="group dieline bg-kraft-50">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-ink/80 hover:text-orange-600 [&::-webkit-details-marker]:hidden">
            <span>
              Add box specs
              <span className="ml-2 font-normal text-ink/40">
                Optional, speeds up your quote
              </span>
            </span>
            <svg
              className="h-4 w-4 shrink-0 text-ink/40 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <div className={`dieline-t px-4 py-4 ${stack}`}>
            {mode !== 'product' && (
              <SelectField
                name="box_style"
                label="Box style, if you know it"
                options={BOX_TYPES}
                placeholder="Select a style"
                defaultValue={defaultBoxType}
                hint="Skip this and our team will recommend one"
              />
            )}

            <fieldset>
              <legend className="mb-1.5 text-xs font-semibold text-gray-600">Interior dimensions</legend>
              <div className={`grid grid-cols-2 sm:grid-cols-4 ${gap}`}>
                <TextField name="length" label="Length" placeholder="8" inputMode="decimal" />
                <TextField name="width" label="Width" placeholder="6" inputMode="decimal" />
                <TextField name="height" label="Height" placeholder="3" inputMode="decimal" />
                <SelectField
                  name="dimension_unit"
                  label="Unit"
                  options={DIMENSION_UNITS}
                  placeholder="in"
                />
              </div>
            </fieldset>

            <div className={twoCol}>
              <SelectField name="material" label="Material" options={MATERIALS} placeholder="Select material" />
              <SelectField
                name="card_thickness"
                label="Card thickness"
                options={CARD_THICKNESSES}
                placeholder="Select thickness"
              />
            </div>

            <div className={twoCol}>
              <SelectField
                name="print_sides"
                label="Printed sides"
                options={PRINT_SIDES}
                placeholder="Select printing"
              />
              <SelectField
                name="coating"
                label="Coating / lamination"
                options={COATINGS}
                placeholder="Select coating"
              />
            </div>

            <div className={twoCol}>
              <SelectField
                name="extra_finishing"
                label="Extra finishing"
                options={EXTRA_FINISHES}
                placeholder="Select finishing"
                hint="Foil and spot UV add 2 to 4 business days"
              />
              <TextField
                name="skus"
                label="Number of SKUs"
                placeholder="1"
                inputMode="numeric"
                hint="Different designs on the same box size"
              />
            </div>

            <SelectField
              name="artwork_status"
              label="Where is your artwork?"
              options={ARTWORK_STATES}
              placeholder="Select one"
              hint="Design support is free either way"
            />

            <FileField hint="PDF, AI, EPS, PNG or JPG, up to 8 MB" />
          </div>
        </details>

        {showConsent && (
          <label className="flex cursor-pointer items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" name="sms_consent" value="yes" className="mt-0.5 shrink-0" />
            <span>
              Text me updates about this quote. Message and data rates may apply, reply STOP to opt out.{' '}
              <Link href="/privacy/" className="text-orange-500 underline">
                Privacy Policy
              </Link>
            </span>
          </label>
        )}

        {status === 'error' && <ErrorNote message={errorMessage} />}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="notch-tl w-full bg-orange-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : submitLabel}
        </button>

        <p className="text-center text-[11px] leading-tight text-gray-400">
          Free quote within 4 business hours. No minimum order, no obligation, no spam.
        </p>
      </form>
    </FieldIdProvider>
  )
}
