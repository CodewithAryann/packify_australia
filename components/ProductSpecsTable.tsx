// components/ProductSpecsTable.tsx

import React from 'react'

export interface SpecRow {
  label: string
  value: string
}

interface Props {
  specs?: SpecRow[]
  productSlug?: string
}

// Default specs per product – these are overridden when a variant passes its own
const defaultSpecs: Record<string, SpecRow[]> = {
  'mailer-boxes': [
    { label: 'Box Style', value: 'Mailer / Shipping Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '18pt to 32pt Corrugated, Kraft, White SBS' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Gloss AQ, Spot UV, Embossing, Foiling' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled Boxes, Biodegradable' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Australia)' },
  ],
  'tuck-boxes': [
    { label: 'Box Style', value: 'Tuck End / Folding Carton' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '12pt to 24pt SBS, Kraft, Recycled Board' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Gloss AQ, Gloss UV, Matte UV, Spot UV, Embossing, Foiling' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled Boxes, Biodegradable' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Australia)' },
  ],
  'rigid-boxes': [
    { label: 'Box Style', value: 'Rigid / Set-Up Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '1200–1800 GSM Chipboard, Wrapped in Art Paper, Linen, Fabric, or Leather' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS color, CMYK + 2 PMS colors' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Gloss AQ, Gloss UV, Matte UV, Spot UV, Embossing, Foiling' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled Boxes, Biodegradable' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Australia)' },
  ],
  'dispenser-boxes': [
    { label: 'Box Style', value: 'Counter Display / Dispenser Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '14pt to 24pt SBS, E-Flute Corrugated, Kraft' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Gloss AQ, Spot UV, Embossing, Foiling' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation, Tear Strip' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled Boxes, Biodegradable' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Australia)' },
  ],
  'cigarette-boxes': [
    { label: 'Box Style', value: 'Cigarette / Vape / E-Cigarette Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '12pt to 24pt SBS, Kraft, Recycled Board' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Matte UV, Spot UV, Embossing, Foil Stamping' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation, CR Closure Available' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled, Health Warning Space, Compliance Labeling' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Australia)' },
  ],
  'burger-boxes': [
    { label: 'Box Style', value: 'Burger / Food Service Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: 'Grease-Resistant Coated SBS, Kraft Paperboard' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS (Water-Based Inks)' },
    { label: 'Finishing', value: 'Gloss AQ, Matte Lamination, Spot UV' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Grease-Resistant Coating' },
    { label: 'Additional Options', value: 'Eco-Friendly, Compostable, Recycled Materials' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Australia)' },
  ],
  'magnetic-closure': [
    { label: 'Box Style', value: 'Magnetic Closure / Rigid Gift Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '18pt to 48pt Chipboard, Wrapped Rigid Board' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Soft-Touch, Spot UV, Embossing, Hot Foil Stamping' },
    { label: 'Included Options', value: 'Embedded Magnets, Ribbon Pull, Foam Insert, Satin Liner' },
    { label: 'Additional Options', value: 'Eco-Friendly Wrapping, Custom Inserts, Logo Debossing' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Australia)' },
  ],
  'cosmetic-boxes': [
    { label: 'Box Style', value: 'Cosmetic / Beauty Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: '12pt to 24pt SBS, Kraft, Recycled Board' },
    { label: 'Printing', value: 'No Printing, CMYK, CMYK + 1 PMS, CMYK + 2 PMS' },
    { label: 'Finishing', value: 'Gloss Lamination, Matte Lamination, Soft-Touch, Spot UV, Embossing, Foiling, Window Cutout' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Scored, Perforation' },
    { label: 'Additional Options', value: 'Eco-Friendly, Recycled, Biodegradable, UV Coating' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Australia)' },
  ],
  'bakery-boxes': [
    { label: 'Box Style', value: 'Bakery / Food Box' },
    { label: 'Dimension (L + W + H)', value: 'All Custom Sizes & Shapes' },
    { label: 'Quantities', value: 'No Minimum Order Required' },
    { label: 'Stock', value: 'Grease-Resistant Coated Paperboard, Kraft, Recycled Board' },
    { label: 'Printing', value: 'CMYK, CMYK + 1 PMS, CMYK + 2 PMS (Water-Based Inks)' },
    { label: 'Finishing', value: 'Gloss AQ, Matte Lamination, Spot UV, Window Cutout (PET Film)' },
    { label: 'Included Options', value: 'Die Cutting, Gluing, Cupcake Inserts, Donut Trays, Dividers' },
    { label: 'Additional Options', value: 'Eco-Friendly, Compostable, Recycled Board' },
    { label: 'Proof', value: 'Flat View, 3D Mock-up, Physical Sampling (On request)' },
    { label: 'Turnaround', value: '8 – 10 Business Days, RUSH' },
    { label: 'Shipping', value: 'FREE (Australia)' },
  ],
}

export default function ProductSpecsTable({ specs, productSlug }: Props) {
  // Merge logic: when a variant provides `specs`, each spec row overrides the
  // matching parent default row by `label`. Parent rows without an override
  // are kept in their original order. If a variant supplies a label that
  // isn't in the parent defaults, it's appended at the end. This way variants
  // only need to specify the fields that genuinely differ, and the common
  // brand-fact rows (Quantities, Turnaround, Shipping, etc.) stay visible.
  const baseRows = productSlug ? defaultSpecs[productSlug] : undefined

  let rows: SpecRow[] | undefined
  if (baseRows && specs && specs.length > 0) {
    const overrideMap = new Map(specs.map((s) => [s.label, s]))
    const usedLabels = new Set<string>()
    const merged = baseRows.map((row) => {
      const override = overrideMap.get(row.label)
      if (override) {
        usedLabels.add(row.label)
        return override
      }
      return row
    })
    // Append any variant-supplied labels that didn't exist in parent defaults
    const extras = specs.filter((s) => !usedLabels.has(s.label))
    rows = [...merged, ...extras]
  } else {
    rows = specs ?? baseRows
  }

  if (!rows || rows.length === 0) return null

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="dieline notch-tl bg-white overflow-hidden">
        {/* Header */}
        <div className="bg-ink px-8 py-6 dieline-b border-kraft-400/25">
          <h2 className="font-display text-2xl font-black uppercase tracking-tight text-white">
            Product Specification
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`dieline-b border-kraft-200 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-kraft-50/60'} hover:bg-orange-50/40 transition-colors`}
                >
                  <td className="px-8 py-4 w-1/3">
                    <span className="font-bold text-ink text-sm md:text-base">
                      {row.label}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-ink/60 text-sm md:text-base">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer CTA */}
        <div className="bg-kraft-50 dieline-t border-kraft-400/25 px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-ink/60">
            Need custom dimensions or special finishes?{' '}
            <span className="font-semibold text-ink">We manufacture to your exact specs.</span>
          </p>
          <a
            href="/get-quote/"
            className="notch-sm-tl inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wide px-6 py-3 transition-colors text-sm whitespace-nowrap"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
