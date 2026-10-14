export interface TabItem {
  name: string
  image: string
  description?: string
}

// Materials
export const materialsData: Record<string, TabItem[]> = {
  'mailer-boxes': [
    { name: 'Card Stock', image: '/images/thumbnail-card-stock.webp', description: 'Lighter than corrugated, card stock works for low-weight products and printed inserts. Flat surface takes high-resolution CMYK print cleanly.' },
    { name: 'Natural Kraft Board', image: '/images/thumbnail-natural-kraft-board.webp', description: 'Unbleached mix of virgin and recycled pulp with a raw brown finish. Common in natural food, organic skincare, and zero-waste product lines.' },
    { name: 'Oyster White Kraft Corrugated', image: '/images/thumbnail-oyster-white-kraft-corrugated.webp', description: 'Off-white linerboard with a smooth surface for sharp print detail. Sits between kraft brown and bleached white in tone.' },
    { name: 'Bleached White Board', image: '/images/thumbnail-bleached-white-corrugated.webp', description: 'Bright white surface for vivid CMYK output and sharp logo reproduction. Standard choice for retail packaging and branded mailers.' },
    { name: 'Kraft', image: '/images/thumbnail-kraft.webp', description: 'Tear-resistant, recyclable brown board. Used by brands with natural, raw, or minimal visual identities.' },
    { name: 'White Kraft', image: '/images/thumbnail-white-kraft.webp', description: 'White liner with a slightly softer tone than bleached board. Prints cleanly without the stark brightness of fully bleached stock.' },
  ],
  'tuck-boxes': [
    { name: 'Card Stock', image: '/images/thumbnail-card-stock.webp', description: 'Lighter than corrugated, card stock works for low-weight products and printed inserts. Flat surface takes high-resolution CMYK print cleanly.' },
    { name: 'Natural Kraft Board', image: '/images/thumbnail-natural-kraft-board.webp', description: 'Made from a mix of virgin and recycled pulp, this unbleached board has a raw, earthy finish. Great for eco-conscious, organic branding.' },
    { name: 'Oyster White Kraft Corrugated', image: '/images/thumbnail-oyster-white-kraft-corrugated.webp', description: 'Smooth, off-white linerboard great for sharp, detailed prints. Offers a subtle background alternative to bright whites.' },
    { name: 'Bleached White Board', image: '/images/thumbnail-bleached-white-corrugated.webp', description: 'Bright white surface for vivid CMYK output and sharp logo reproduction. Standard choice for retail packaging and branded mailers.' },
    { name: 'Kraft', image: '/images/thumbnail-kraft.webp', description: 'Tear-resistant and recyclable brown surface. Best for brands going for a natural, raw, or minimalist style.' },
    { name: 'White Kraft', image: '/images/thumbnail-white-kraft.webp', description: 'Smooth white liner for crisp artwork. Provides a balanced white look without harsh brightness.' },
  ],
  'rigid-boxes': [
    { name: 'Grey Chipboard', image: '/images/thumbnail-grey-chipboard.webp', description: 'Thick, uncoated chipboard used as the structural base for rigid boxes. Holds shape without collapsing and does not require an outer corrugated shipper for most applications.' },
    { name: 'Card Stock', image: '/images/thumbnail-card-stock%20(1).webp', description: 'Smooth-surface paper used as the printed outer wrap on rigid boxes. Takes foil stamping, spot UV, and high-resolution CMYK cleanly.' },
    { name: 'Black Kraft', image: '/images/thumbnail-black-kraft.webp', description: 'Deep black surface that eliminates the need for heavy ink coverage on dark backgrounds. Used in sustainable and minimal brand packaging where the material itself carries the visual.' },
    { name: 'Holographic', image: '/images/thumbnail-holographic.webp', description: 'Specialty outer wrap that produces a shifting rainbow effect under light. Common in cosmetics, tech accessories, and promotional packaging where the surface itself is part of the design.' },
    { name: 'Natural Brown Kraft', image: '/images/thumbnail-kraft%20(1).webp', description: 'Unbleached brown board with a visible porous texture. Often left unlaminated. Used by eco-conscious and organic product brands where the material communicates the brand position.' },
    { name: 'Metallic', image: '/images/thumbnail-metallic.webp', description: 'Specialty paper with a glossy or matte metallic finish. Used for cosmetics, fragrance, and seasonal gift boxes where a reflective surface is part of the shelf presence.' },
    { name: 'White Kraft', image: '/images/thumbnail-white-kraft%20(1).webp', description: 'White kraft combines a printable surface with the recyclable credentials of kraft board. Used where brands want an eco-friendly material that still takes clean CMYK print.' },
    { name: 'Textured', image: '/images/thumbnail-textured-linen.webp', description: 'Textured specialty paper used as an outer wrap. Adds a tactile surface to rigid boxes. Common in jewelry, fragrance, and electronics packaging where physical feel reinforces price point.' },
  ],
  'dispenser-boxes': [
    { name: 'White', image: '/images/cardboard-paper.webp', description: 'Smooth bright white paperboard with a flat surface for high-resolution print. Standard choice for retail shelf packaging and branded counter displays.' },
    { name: 'Card Stock', image: '/images/64560be3b9c3f71ff4381e26-20sheets-glitter-cardstock-paper-10.webp', description: 'Smooth paper stock with good structural integrity. Available uncoated, matte, or gloss. Takes foil stamping, embossing, and CMYK cleanly. Used for retail cartons, cosmetic boxes, and counter displays.' },
    { name: 'Corrugated', image: '/images/what-is-corrugated-packaging-1.webp', description: 'Fluted inner layer between two flat linerboards. Provides cushioning and compression strength for heavier or fragile products. Used in shipping, storage, and display applications where rigidity matters more than a thin profile.' },
    { name: 'Foil', image: '/images/7-411.webp', description: 'Metallic foil applied to packaging surfaces to create reflective highlights on logos, text, or patterns. Available in gold, silver, rose gold, and holographic. Applied via stamping die to specific areas.' },
    { name: 'Kraft', image: '/images/istockphoto-1375373998-612x612.webp', description: 'Recyclable brown paper board made from recycled content. Biodegradable and compatible with water-based and soy inks. Used by brands with natural, sustainable, or minimal visual identities.' },
    { name: 'Rigid', image: '/images/Duplex-Board.webp', description: 'Thick non-collapsible chipboard used for rigid boxes. Does not flatten under normal handling. Compatible with embossing, foil stamping, magnetic closures, and fabric or satin linings. Used for gift boxes, electronics, and cosmetic sets.' },
  ],
  'magnetic-closure': [
    { name: 'White', image: '/images/cardboard-paper.webp', description: 'Smooth bright white paperboard with a flat surface for high-resolution print. Standard choice for retail shelf packaging and branded counter displays.' },
    { name: 'Card Stock', image: '/images/64560be3b9c3f71ff4381e26-20sheets-glitter-cardstock-paper-10.webp', description: 'Smooth paper stock with good structural integrity. Available uncoated, matte, or gloss. Takes foil stamping, embossing, and CMYK cleanly. Used for retail cartons, cosmetic boxes, and counter displays.' },
    { name: 'Corrugated', image: '/images/what-is-corrugated-packaging-1.webp', description: 'Fluted inner layer between two flat linerboards. Provides cushioning and compression strength for heavier or fragile products. Used in shipping, storage, and display applications where rigidity matters more than a thin profile.' },
    { name: 'Foil', image: '/images/7-411.webp', description: 'Metallic foil applied to packaging surfaces to create reflective highlights on logos, text, or patterns. Available in gold, silver, rose gold, and holographic. Applied via stamping die to specific areas.' },
    { name: 'Kraft', image: '/images/istockphoto-1375373998-612x612.webp', description: 'Recyclable brown paper board made from recycled content. Biodegradable and compatible with water-based and soy inks. Used by brands with natural, sustainable, or minimal visual identities.' },
    { name: 'Rigid', image: '/images/Duplex-Board.webp', description: 'Thick non-collapsible chipboard used for rigid boxes. Does not flatten under normal handling. Compatible with embossing, foil stamping, magnetic closures, and fabric or satin linings. Used for gift boxes, electronics, and cosmetic sets.' },
  ],
}

// Printing
export const printingData: Record<string, TabItem[]> = {
  'mailer-boxes': [
    { name: 'Digital Printing', image: '/images/bf037986cf978e92147a49d08bdad316_larger_format_p.webp', description: 'Offset-quality printing for high-volume runs. Delivers consistent color and sharp detail across large quantities. Used when per-unit cost matters and brand color accuracy is required at scale.' },
    { name: 'Digital Print', image: '/images/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.webp', description: 'Direct digital printing for short runs and prototypes. No plate setup required, so cost is consistent whether you print 1 or 500. Faster turnaround than offset for small quantities.' },
    { name: 'Water-base Ink', image: '/images/Water-based-screen-printing-inks-for-fabrics.webp', description: 'Water-based ink with lower VOC output than solvent alternatives. Compatible with most paperboard stocks. Used by brands with sustainability requirements or eco-certification goals.' },
    { name: 'Soy / Vegetable Ink', image: '/images/images%20(1).webp', description: 'Plant-derived ink that releases from paper fibers more cleanly during recycling. Produces strong color output. Common in food, organic, and certified sustainable packaging.' },
    { name: 'Pantone', image: '/images/GP6102B-Pantone-Color-Bridge-Guide-Set-5_web-740x450.webp', description: 'Spot color matching system that keeps brand colors consistent across print runs. Used when CMYK approximation is not close enough for logos, brand marks, or specific shade families.' },
    { name: 'Pantone Metallic', image: '/images/PANTONE_877_vs_PANTONE_Silver_10077_C.webp', description: 'Pantone metallic inks produce a reflective sheen that standard CMYK cannot replicate. Used in cosmetics, fragrance, and gift packaging where a metallic accent on specific elements is part of the design.' },
  ],
  'tuck-boxes':[
    { name: 'Digital Printing', image: '/images/bf037986cf978e92147a49d08bdad316_larger_format_p.webp', description: 'Offset-quality printing for high-volume runs. Delivers consistent color and sharp detail across large quantities. Used when per-unit cost matters and brand color accuracy is required at scale.' },
    { name: 'Digital Print', image: '/images/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.webp', description: 'Direct digital printing for short runs and prototypes. No plate setup required, so cost is consistent whether you print 1 or 500. Faster turnaround than offset for small quantities.' },
    { name: 'Water-base Ink', image: '/images/Water-based-screen-printing-inks-for-fabrics.webp', description: 'Water-based ink with lower VOC output than solvent alternatives. Compatible with most paperboard stocks. Used by brands with sustainability requirements or eco-certification goals.' },
    { name: 'Soy / Vegetable Ink', image: '/images/images%20(1).webp', description: 'Plant-derived ink that releases from paper fibers more cleanly during recycling. Produces strong color output. Common in food, organic, and certified sustainable packaging.' },
    { name: 'Pantone', image: '/images/GP6102B-Pantone-Color-Bridge-Guide-Set-5_web-740x450.webp', description: 'Spot color matching system that keeps brand colors consistent across print runs. Used when CMYK approximation is not close enough for logos, brand marks, or specific shade families.' },
    { name: 'Pantone Metallic', image: '/images/PANTONE_877_vs_PANTONE_Silver_10077_C.webp', description: 'Pantone metallic inks produce a reflective sheen that standard CMYK cannot replicate. Used in cosmetics, fragrance, and gift packaging where a metallic accent on specific elements is part of the design.' },
  ],
  'rigid-boxes': [
    { name: 'Digital Printing', image: '/images/bf037986cf978e92147a49d08bdad316_larger_format_p.webp', description: 'Offset-quality printing for high-volume runs. Delivers consistent color and sharp detail across large quantities. Used when per-unit cost matters and brand color accuracy is required at scale.' },
    { name: 'Digital Print', image: '/images/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.webp', description: 'Direct digital printing for short runs and prototypes. No plate setup required, so cost is consistent whether you print 1 or 500. Faster turnaround than offset for small quantities.' },
    { name: 'Water-base Ink', image: '/images/Water-based-screen-printing-inks-for-fabrics.webp', description: 'Water-based ink with lower VOC output than solvent alternatives. Compatible with most paperboard stocks. Used by brands with sustainability requirements or eco-certification goals.' },
    { name: 'Soy / Vegetable Ink', image: '/images/images%20(1).webp', description: 'Plant-derived ink that releases from paper fibers more cleanly during recycling. Produces strong color output. Common in food, organic, and certified sustainable packaging.' },
    { name: 'Pantone', image: '/images/GP6102B-Pantone-Color-Bridge-Guide-Set-5_web-740x450.webp', description: 'Spot color matching system that keeps brand colors consistent across print runs. Used when CMYK approximation is not close enough for logos, brand marks, or specific shade families.' },
    { name: 'Pantone Metallic', image: '/images/PANTONE_877_vs_PANTONE_Silver_10077_C.webp', description: 'Pantone metallic inks produce a reflective sheen that standard CMYK cannot replicate. Used in cosmetics, fragrance, and gift packaging where a metallic accent on specific elements is part of the design.' },
  ],
  'dispenser-boxes': [
    { name: 'Digital Printing', image: '/images/bf037986cf978e92147a49d08bdad316_larger_format_p.webp', description: 'Offset-quality printing for high-volume runs. Delivers consistent color and sharp detail across large quantities. Used when per-unit cost matters and brand color accuracy is required at scale.' },
    { name: 'Digital Print', image: '/images/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.webp', description: 'Direct digital printing for short runs and prototypes. No plate setup required, so cost is consistent whether you print 1 or 500. Faster turnaround than offset for small quantities.' },
    { name: 'Water-base Ink', image: '/images/Water-based-screen-printing-inks-for-fabrics.webp', description: 'Water-based ink with lower VOC output than solvent alternatives. Compatible with most paperboard stocks. Used by brands with sustainability requirements or eco-certification goals.' },
    { name: 'Soy / Vegetable Ink', image: '/images/images%20(1).webp', description: 'Plant-derived ink that releases from paper fibers more cleanly during recycling. Produces strong color output. Common in food, organic, and certified sustainable packaging.' },
    { name: 'Pantone', image: '/images/GP6102B-Pantone-Color-Bridge-Guide-Set-5_web-740x450.webp', description: 'Spot color matching system that keeps brand colors consistent across print runs. Used when CMYK approximation is not close enough for logos, brand marks, or specific shade families.' },
    { name: 'Pantone Metallic', image: '/images/PANTONE_877_vs_PANTONE_Silver_10077_C.webp', description: 'Pantone metallic inks produce a reflective sheen that standard CMYK cannot replicate. Used in cosmetics, fragrance, and gift packaging where a metallic accent on specific elements is part of the design.' },
  ],
  'magnetic-closure': [
    { name: 'Digital Printing', image: '/images/bf037986cf978e92147a49d08bdad316_larger_format_p.webp', description: 'Offset-quality printing for high-volume runs. Delivers consistent color and sharp detail across large quantities. Used when per-unit cost matters and brand color accuracy is required at scale.' },
    { name: 'Digital Print', image: '/images/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.webp', description: 'Direct digital printing for short runs and prototypes. No plate setup required, so cost is consistent whether you print 1 or 500. Faster turnaround than offset for small quantities.' },
    { name: 'Water-base Ink', image: '/images/Water-based-screen-printing-inks-for-fabrics.webp', description: 'Water-based ink with lower VOC output than solvent alternatives. Compatible with most paperboard stocks. Used by brands with sustainability requirements or eco-certification goals.' },
    { name: 'Soy / Vegetable Ink', image: '/images/images%20(1).webp', description: 'Plant-derived ink that releases from paper fibers more cleanly during recycling. Produces strong color output. Common in food, organic, and certified sustainable packaging.' },
    { name: 'Pantone', image: '/images/GP6102B-Pantone-Color-Bridge-Guide-Set-5_web-740x450.webp', description: 'Spot color matching system that keeps brand colors consistent across print runs. Used when CMYK approximation is not close enough for logos, brand marks, or specific shade families.' },
    { name: 'Pantone Metallic', image: '/images/PANTONE_877_vs_PANTONE_Silver_10077_C.webp', description: 'Pantone metallic inks produce a reflective sheen that standard CMYK cannot replicate. Used in cosmetics, fragrance, and gift packaging where a metallic accent on specific elements is part of the design.' },
  ],
}

// Finishes
export const finishesData: Record<string, TabItem[]> = {
  'mailer-boxes': [
    { name: 'Aqueous Coating', image: '/images/thumbnail-aqueous-coating.webp', description: 'A fast-drying, water-based finish that adds light protection and a clean surface feel. Available in gloss or matte, this eco-friendly coating is ideal for print-heavy boxes and helps resist fingerprints and minor scuffs.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-soft-touch-coating.webp', description: 'Velvet-texture matte coating that reduces shine and adds a tactile surface. Resists fingerprints better than standard gloss. Used on cartons where physical feel is a design consideration.' },
    { name: 'Varnish', image: '/images/thumbnail-varnish.webp', description: 'A clear coating that adds shine, smoothness, and print protection. Applied using CMYK presses and available in gloss, satin, or matte finishes. Best for enhancing colors while keeping costs low.' },
    { name: 'Spot Gloss UV', image: '/images/thumbnail-spot-gloss-uv.webp', description: 'Gloss coating applied to select areas of the print, adding contrast and focus. Often used on logos or text to create shine that stands out against a matte background. UV cured for durability.' },
    { name: 'Lamination', image: '/images/thumbnail-lamination.webp', description: 'A thin film layered over the surface of the box to increase durability and moisture resistance. Ideal for protecting full-color designs and maintaining box integrity during shipping or retail handling.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-anti-scratch-lamination.webp', description: 'BOPP (biaxially oriented polypropylene) lamination that resists scuffs, scratches, and fingerprints. Provides a smooth finish with added protection for heavily handled boxes.' },
  ],
  'tuck-boxes': [
    { name: 'Aqueous Coating', image: '/images/thumbnail-aqueous-coating.webp', description: 'A fast-drying, water-based finish that adds light protection and a clean surface feel. Available in gloss or matte, this eco-friendly coating is ideal for print-heavy boxes and helps resist fingerprints and minor scuffs.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-soft-touch-coating.webp', description: 'Velvet-texture matte coating that reduces shine and adds a tactile surface. Resists fingerprints better than standard gloss. Used on cartons where physical feel is a design consideration.' },
    { name: 'Varnish', image: '/images/thumbnail-varnish.webp', description: 'A clear coating that adds shine, smoothness, and print protection. Applied using CMYK presses and available in gloss, satin, or matte finishes. Best for enhancing colors while keeping costs low.' },
    { name: 'Spot Gloss UV', image: '/images/thumbnail-spot-gloss-uv.webp', description: 'Gloss coating applied to select areas of the print, adding contrast and focus. Often used on logos or text to create shine that stands out against a matte background. UV cured for durability.' },
    { name: 'Lamination', image: '/images/thumbnail-lamination.webp', description: 'A thin film layered over the surface of the box to increase durability and moisture resistance. Ideal for protecting full-color designs and maintaining box integrity during shipping or retail handling.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-anti-scratch-lamination.webp', description: 'BOPP (biaxially oriented polypropylene) lamination that resists scuffs, scratches, and fingerprints. Provides a smooth finish with added protection for heavily handled boxes.' },
  ],
  'rigid-boxes': [
    { name: 'Aqueous Coating', image: '/images/thumbnail-aqua-coating.webp', description: 'Water-based coating that adds moisture resistance and reduces smudging. Available in gloss or matte. Applied over the printed surface to protect against handling and humidity.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-soft-touch-coating%20(1).webp', description: 'Velvet-texture matte coating applied to rigid box surfaces. Reduces glare and adds a tactile feel. Can be combined with spot UV on logos or text for contrast between matte and gloss areas.' },
    { name: 'Varnish', image: '/images/thumbnail-varnish%20(1).webp', description: 'Clear coating applied over the printed surface for protection. Available in gloss, matte, silk, and spot. Adds scratch resistance and surface durability without significantly changing the look.' },
    { name: 'Spot Gloss UV', image: '/images/thumbnail-spot-uv-gloss.webp', description: 'UV gloss applied to a defined area rather than the full surface. Creates contrast between a gloss element (logo, text, image) and the surrounding matte or soft-touch finish.' },
    { name: 'Lamination', image: '/images/thumbnail-lamination%20(1).webp', description: 'Protective film applied to the outer surface of rigid boxes. Available in gloss and matte. Adds durability against scuffing and handling, and seals the printed surface.' },
    { name: 'Anti-scratch Lamination', image: '/images/thumbnail-anti-scratch-lamination%20(1).webp', description: 'Lamination film engineered to resist surface scratches and abrasion. Keeps the box surface intact through extended shelf time and repeated handling.' },
    { name: 'Soft Touch / Silk Lamination', image: '/images/thumbnail-soft-touch-coating%20(1).webp', description: 'Silk lamination produces a smooth, low-gloss surface with a soft hand feel. Applied to the full box or a defined panel. Often combined with spot UV for contrast between matte and gloss areas.' },
    { name: 'Matte Lamination', image: '/images/thumbnail-matt-lamination.webp', description: 'Matte film lamination that removes surface glare and produces a flat, low-reflection finish. Common on gift boxes, limited-edition packaging, and cosmetic sets where the brand aesthetic avoids shine.' },
  ],
  'dispenser-boxes': [
    { name: 'Aqueous Coating', image: '/images/thumbnail-aqueous-coating.webp', description: 'A fast-drying, water-based finish that adds light protection and a clean surface feel. Available in gloss or matte, this eco-friendly coating is ideal for print-heavy boxes and helps resist fingerprints and minor scuffs.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-soft-touch-coating.webp', description: 'Velvet-texture matte coating that reduces shine and adds a tactile surface. Resists fingerprints better than standard gloss. Used on cartons where physical feel is a design consideration.' },
    { name: 'Varnish', image: '/images/thumbnail-varnish.webp', description: 'A clear coating that adds shine, smoothness, and print protection. Applied using CMYK presses and available in gloss, satin, or matte finishes. Best for enhancing colors while keeping costs low.' },
    { name: 'Spot Gloss UV', image: '/images/thumbnail-spot-gloss-uv.webp', description: 'Gloss coating applied to select areas of the print, adding contrast and focus. Often used on logos or text to create shine that stands out against a matte background. UV cured for durability.' },
    { name: 'Lamination', image: '/images/thumbnail-lamination.webp', description: 'A thin film layered over the surface of the box to increase durability and moisture resistance. Ideal for protecting full-color designs and maintaining box integrity during shipping or retail handling.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-anti-scratch-lamination.webp', description: 'BOPP (biaxially oriented polypropylene) lamination that resists scuffs, scratches, and fingerprints. Provides a smooth finish with added protection for heavily handled boxes.' },
  ],
  'magnetic-closure': [
    { name: 'Aqueous Coating', image: '/images/thumbnail-aqueous-coating.webp', description: 'A fast-drying, water-based finish that adds light protection and a clean surface feel. Available in gloss or matte, this eco-friendly coating is ideal for print-heavy boxes and helps resist fingerprints and minor scuffs.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-soft-touch-coating.webp', description: 'Velvet-texture matte coating that reduces shine and adds a tactile surface. Resists fingerprints better than standard gloss. Used on cartons where physical feel is a design consideration.' },
    { name: 'Varnish', image: '/images/thumbnail-varnish.webp', description: 'A clear coating that adds shine, smoothness, and print protection. Applied using CMYK presses and available in gloss, satin, or matte finishes. Best for enhancing colors while keeping costs low.' },
    { name: 'Spot Gloss UV', image: '/images/thumbnail-spot-gloss-uv.webp', description: 'Gloss coating applied to select areas of the print, adding contrast and focus. Often used on logos or text to create shine that stands out against a matte background. UV cured for durability.' },
    { name: 'Lamination', image: '/images/thumbnail-lamination.webp', description: 'A thin film layered over the surface of the box to increase durability and moisture resistance. Ideal for protecting full-color designs and maintaining box integrity during shipping or retail handling.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-anti-scratch-lamination.webp', description: 'BOPP (biaxially oriented polypropylene) lamination that resists scuffs, scratches, and fingerprints. Provides a smooth finish with added protection for heavily handled boxes.' },
  ],
}

// Box Styles
export const boxStylesData: Record<string, TabItem[]> = {
  'mailer-boxes': [
    { name: 'Roll Ends With Lid (C005)', image: '/images/thumbnail-roll-end-with-lid.webp', description: 'Separate lid sits over a roll-end base. Opens from the top without flaps. Used for gift-style presentation or products that need to be displayed inside the box when open.' },
    { name: 'Roll End Tuck Front Corrugated Box (C003)', image: '/images/thumbnail-roll-end-tuck-front-corrugated-box.webp', description: 'Roll-end base with a tuck-front closure. The front panel tucks in to secure contents. Common for subscription boxes, apparel, and products that ship without additional tape.' },
    { name: 'Roll End Tuck Top Corrugated Box (C002)', image: '/images/thumbnail-roll-end-tuck-top-corrugated-box.webp', description: 'Roll-end base with a tuck-top lid. The top panel folds and tucks to close. Standard mailer structure for e-commerce, holds without tape under normal courier handling.' },
    { name: 'Roll End 3 Flap Lock Corrugated Box (C004)', image: '/images/thumbnail-roll-end-3-flap-lock-corrugated.webp', description: 'Three-flap interlocking closure on top that locks without tape. More secure than a standard tuck top. Used for heavier products or where tamper evidence at the top closure matters.' },
  ],
  'tuck-boxes': [
    { name: 'Roll Ends With Lid (C005)', image: '/images/thumbnail-roll-end-with-lid.webp', description: 'Separate lid sits over a roll-end base. Opens from the top without flaps. Used for gift-style presentation or products that need to be displayed inside the box when open.' },
    { name: 'Roll End Tuck Front Corrugated Box (C003)', image: '/images/thumbnail-roll-end-tuck-front-corrugated-box.webp', description: 'Roll-end base with a tuck-front closure. The front panel tucks in to secure contents. Common for subscription boxes, apparel, and products that ship without additional tape.' },
    { name: 'Roll End Tuck Top Corrugated Box (C002)', image: '/images/thumbnail-roll-end-tuck-top-corrugated-box.webp', description: 'Roll-end base with a tuck-top lid. The top panel folds and tucks to close. Standard mailer structure for e-commerce, holds without tape under normal courier handling.' },
    { name: 'Roll End 3 Flap Lock Corrugated Box (C004)', image: '/images/thumbnail-roll-end-3-flap-lock-corrugated.webp', description: 'Three-flap interlocking closure on top that locks without tape. More secure than a standard tuck top. Used for heavier products or where tamper evidence at the top closure matters.' },
  ],
  'rigid-boxes': [
    { name: 'Magnetic Closure Boxes', image: '/images/thumbnail-magnetic-closure.webp', description: 'Rigid chipboard box with embedded neodymium magnets in lid and base. The lid closes with a firm snap and stays shut without ribbons or clasps. Used for jewelry, cosmetics, and gift sets.' },
    { name: 'Collapsible / Foldable Boxes', image: '/images/thumbnail-collapsible-foldable.webp', description: 'Rigid boxes that fold flat for storage and shipping, then assemble by hand without tools. Reduces inbound freight cost compared to pre-assembled rigid boxes. Used for high-volume gift and retail programs.' },
    { name: 'Lift-Off / Detachable Lid', image: '/images/thumbnail-liftoff-detachable-lid.webp', description: 'Two-piece rigid box with a removable lid. The lid lifts off the base completely. Used for jewelry, watches, electronics, and gift sets where the base stays visible after opening.' },
    { name: 'Shoulder / Neck', image: '/images/thumbnail-shoulder-neck.webp', description: 'Two-piece rigid box where the lid closes over a visible inner collar (the neck or shoulder). The border line is visible when closed. Used for apparel, jewelry, and fragrance packaging.' },
    { name: 'Sleeve and Tray', image: '/images/thumbnail-match-slide.webp', description: 'Sleeve slides over a rigid tray, similar to a matchbox. The tray holds the product; the sleeve pulls off to reveal it. Used for candles, tinctures, cosmetics, and subscription products.' },
  ],
  'dispenser-boxes': [
    { name: 'Roll Ends With Lid (C005)', image: '/images/thumbnail-roll-end-with-lid.webp', description: 'Separate lid sits over a roll-end base. Opens from the top without flaps. Used for gift-style presentation or products that need to be displayed inside the box when open.' },
    { name: 'Roll End Tuck Front Corrugated Box (C003)', image: '/images/thumbnail-roll-end-tuck-front-corrugated-box.webp', description: 'Roll-end base with a tuck-front closure. The front panel tucks in to secure contents. Common for subscription boxes, apparel, and products that ship without additional tape.' },
    { name: 'Roll End Tuck Top Corrugated Box (C002)', image: '/images/thumbnail-roll-end-tuck-top-corrugated-box.webp', description: 'Roll-end base with a tuck-top lid. The top panel folds and tucks to close. Standard mailer structure for e-commerce, holds without tape under normal courier handling.' },
    { name: 'Roll End 3 Flap Lock Corrugated Box (C004)', image: '/images/thumbnail-roll-end-3-flap-lock-corrugated.webp', description: 'Three-flap interlocking closure on top that locks without tape. More secure than a standard tuck top. Used for heavier products or where tamper evidence at the top closure matters.' },
  ],
   'magnetic-closure': [
    { name: 'Roll Ends With Lid (C005)', image: '/images/thumbnail-roll-end-with-lid.webp', description: 'Separate lid sits over a roll-end base. Opens from the top without flaps. Used for gift-style presentation or products that need to be displayed inside the box when open.' },
    { name: 'Roll End Tuck Front Corrugated Box (C003)', image: '/images/thumbnail-roll-end-tuck-front-corrugated-box.webp', description: 'Roll-end base with a tuck-front closure. The front panel tucks in to secure contents. Common for subscription boxes, apparel, and products that ship without additional tape.' },
    { name: 'Roll End Tuck Top Corrugated Box (C002)', image: '/images/thumbnail-roll-end-tuck-top-corrugated-box.webp', description: 'Roll-end base with a tuck-top lid. The top panel folds and tucks to close. Standard mailer structure for e-commerce, holds without tape under normal courier handling.' },
    { name: 'Roll End 3 Flap Lock Corrugated Box (C004)', image: '/images/thumbnail-roll-end-3-flap-lock-corrugated.webp', description: 'Three-flap interlocking closure on top that locks without tape. More secure than a standard tuck top. Used for heavier products or where tamper evidence at the top closure matters.' },
  ],
}
