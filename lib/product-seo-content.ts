// lib/product-seo-content.ts

export const productSeoContent: Record<string, {
  h1: string
  h2: string
  description: string
  whyChoose: {
    title: string
    items: string[]
  }
  industries: {
    title: string
    items: string[]
  }
}> = {
  'mailer-boxes': {
    h1: 'Custom Mailer Boxes Australia',
    h2: 'Self-Locking Shipping Boxes for E-Commerce & Subscription',
    description: 'Mailer boxes lock without tape and ship as-is, no outer carton needed. Single or double-wall corrugated, kraft, or white SBS. Full-color print on both the outside and the inside for a branded reveal on opening. Right-sized to your product to keep dimensional weight low. No minimum, free Australia-wide shipping, 8–10 business day production.',
    whyChoose: {
      title: 'Why Choose Our Mailer Boxes',
      items: [
        'Tape-free interlocking flaps that hold through normal courier handling',
        'Interior printing for unboxing reveals; exterior printing for shelf and porch appeal',
        'Single-wall for items under ~2 lb, double-wall for fragile or heavier products',
        'Custom sized to your product to lower dimensional weight and shipping cost',
        'Order from 1 unit, free Australia-wide shipping, 8–10 business day production'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'E-commerce, D2C, and subscription brands',
        'Cosmetics, apparel, and accessories',
        'Electronics and tech accessories',
        'PR kits, samples, and promotional drops',
        'Gift programs and limited-edition launches'
      ]
    }
  },
  'tuck-boxes': {
    h1: 'Custom Tuck Boxes Australia',
    h2: 'Folding Cartons with Tuck-End Closure for Retail',
    description: 'Tuck boxes close by folding interlocking flaps into the box body. No glue, no tape, under 10 seconds to assemble. Ideal for products under roughly 12 inches on any side and 2 lb in weight: cosmetics, supplements, candles, jewelry, small electronics. Tuck top, reverse tuck, auto-lock, and snap-lock styles. SBS, kraft, or recycled board. No minimum, free Australia-wide shipping, 8–10 business day production.',
    whyChoose: {
      title: 'Why Choose Our Tuck Boxes',
      items: [
        'Glue-free closure that assembles by hand in seconds',
        'Four closure styles for different product weights and opening habits',
        'Large flat panels for full-bleed CMYK and Pantone print',
        'Window cutouts, foil stamping, embossing, soft-touch lamination',
        'Order from 1 unit, no minimum'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'Cosmetics, skincare, and beauty SKUs',
        'Supplements, vitamins, and OTC products',
        'Candles, fragrance, and home goods',
        'Jewelry and small accessories',
        'Tea, snacks, and dry food'
      ]
    }
  },
  'rigid-boxes': {
    h1: 'Custom Rigid Boxes Australia',
    h2: 'Chipboard Packaging for Jewelry, Cosmetics & Premium Gifts',
    description: 'Rigid boxes use 1200–1800 GSM chipboard wrapped in art paper, linen, fabric, or leather. They do not collapse, ship pre-assembled, and cost more per unit than folding cartons. The trade-off is a heavier, structured feel that customers often keep and reuse. Magnetic closure, ribbon pull, two-piece, drawer, and flip-top options. Foil stamping, embossing, and soft-touch finishes. No minimum, free Australia-wide shipping.',
    whyChoose: {
      title: 'Why Choose Our Rigid Boxes',
      items: [
        '1200–1800 GSM chipboard that holds shape permanently',
        'Magnetic, ribbon, two-piece, drawer, or flip-top closures',
        'Satin lining, velvet trays, foam inserts for product presentation',
        'Foil stamping (gold, silver, rose gold), embossing, soft-touch lamination',
        'Built to be reused; customers keep them, extending brand visibility past the first opening'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'Fine jewelry and watches',
        'Premium cosmetics and skincare sets',
        'High-end electronics and tech accessories',
        'Designer gifts and corporate gifting',
        'Limited-edition and hero product launches'
      ]
    }
  },
  'dispenser-boxes': {
    h1: 'Custom Dispenser Boxes Australia',
    h2: 'Tear-Out, Flip-Top & Push-Through Counter Display Packaging',
    description: 'Dispenser boxes hold multiple units and let customers grab one at a time. Tear-out perforations work for flat items like gum and protein bars; flip-top lids reseal pouches and tubes; push-through openings dispense items that slide. Stand-up footprint for shelves and checkout counters. Cardboard or corrugated, food-safe coatings available. No minimum, free Australia-wide shipping, 8–10 business day production.',
    whyChoose: {
      title: 'Why Choose Our Dispenser Boxes',
      items: [
        'Three access mechanisms (tear-out, flip-top, push-through) matched to your product format',
        'Stand-up structure built for shelf, counter, and impulse-zone display',
        'Cardboard or corrugated stock; food-safe board for edible products',
        'Full-color print on every visible panel for point-of-sale visibility',
        'Custom sized to your product so multi-pack count and footprint stay efficient'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'Candy, gum, mints, and protein bars',
        'Tea bags, sachets, and single-serve samples',
        'Travel-size cosmetics and toiletries',
        'Convenience store and pharmacy checkout',
        'Promotional and trade-show counter displays'
      ]
    }
  },
  'cigarette-boxes': {
    h1: 'Custom Cigarette & Vape Boxes Australia',
    h2: 'Compliant Tobacco, Vape & Cannabis Product Packaging',
    description: 'Boxes for cigarettes, vapes, e-cigarettes, e-liquid, disposables, and cannabis-adjacent products. Panel layouts engineered around health warnings, ingredient disclosures, batch and lot codes, and lab QR codes, without crowding out the front-panel branding. Child-resistant structures available; we work with your CR partner so the carton supports a tested, certified closure. SBS, kraft, or recycled board. No minimum, free Australia-wide shipping, 8–10 business day production.',
    whyChoose: {
      title: 'Why Choose Our Cigarette & Vape Boxes',
      items: [
        'Panel hierarchies that fit warnings and lab data without burying the brand',
        'Carton structures that support 16 CFR §1700-tested child-resistant closures',
        'Tamper-evident options: perforated tear strips, shrink-wrap slots, and label positions',
        'Moisture-resistant coatings for cartridges and e-liquid bottles',
        'Soft-touch, foil stamping, spot UV, and embossing for front-panel and lid differentiation'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'Cigarette, herbal cigarette, and rolling-paper brands',
        'Disposable vapes, vape pens, and pod systems',
        'Vape cartridges and e-liquid bottles',
        'CBD and THC product packaging (subject to your state rules)',
        'Specialty tobacco and accessory items'
      ]
    }
  },
  'burger-boxes': {
    h1: 'Custom Burger Boxes Australia',
    h2: 'PFAS-Free Grease-Resistant Takeout & Delivery Packaging',
    description: 'Burger boxes that handle grease, hold heat, and survive a 25-minute delivery without warping. Grease resistance is now PFAS-free as standard. The FDA confirmed in February 2024 that PFAS grease-proofers are no longer sold for U.S. food contact use, and existing inventory expired June 30, 2025. Our paperboard uses compliant short-chain or fluorine-free coatings. Slider, single, double-stack, and combo sizes for restaurants, food trucks, ghost kitchens, and catering. No minimum, free Australia-wide shipping.',
    whyChoose: {
      title: 'Why Choose Our Burger Boxes',
      items: [
        'PFAS-free grease and moisture resistance, FDA-compliant for direct food contact',
        'Heat-retaining paperboard that holds shape through delivery temperatures',
        'Custom sizes: sliders, singles, doubles, smash-stack, and combo formats',
        'Vented, windowed, or solid lids matched to your menu',
        'Full-color print on lid and sides for branded delivery and dine-in'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'QSR and fast-casual burger restaurants',
        'Food trucks and mobile food vendors',
        'Ghost kitchens and delivery-only brands',
        'Catering, corporate lunch, and event services',
        'Smash-burger and gourmet specialty concepts'
      ]
    }
  },
  'magnetic-closure': {
    h1: 'Custom Magnetic Closure Boxes Australia',
    h2: 'Rigid Boxes With Embedded-Magnet Lids for Premium Unboxing',
    description: 'Magnetic closure boxes are rigid chipboard cartons with neodymium magnets embedded in the lid and base. The lid pulls itself shut with a clean, audible snap. No ribbons, clasps, or tape required. Wrapped in art paper, linen, or fabric. Magnet strength is sized to your box footprint and product weight so closure feels deliberate, not flimsy. Best for products where the box is part of the gift. No minimum, free Australia-wide shipping.',
    whyChoose: {
      title: 'Why Choose Our Magnetic Closure Boxes',
      items: [
        'Neodymium magnets calibrated to box size and product weight',
        '1200–1800 GSM rigid chipboard wrapped in art paper, linen, or fabric',
        'Satin lining, velvet trays, and foam inserts for product fit',
        'Foil stamping, embossing, soft-touch, and spot UV for the lid surface',
        'Reusable build that customers tend to keep, extending brand presence past the first use'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'Fine jewelry and luxury watches',
        'Premium skincare, fragrance, and beauty sets',
        'PR kits and influencer mailers',
        'Wedding favors, anniversary, and milestone gifts',
        'Corporate gifting and onboarding kits'
      ]
    }
  },
  'bakery-boxes': {
    h1: 'Custom Bakery Boxes Australia',
    h2: 'PFAS-Free Food-Safe Packaging for Cakes, Cupcakes & Pastries',
    description: 'Bakery boxes for cakes (4–14 inch), cupcakes (1–12 count), cookies, donuts, pastries, and gable handle boxes. FDA-compliant paperboard with PFAS-free grease-resistant coatings (the FDA confirmed in 2024 that PFAS grease-proofers are no longer sold for U.S. food contact). Optional die-cut PET windows, cupcake and donut tray inserts, full-color food-safe inks. No minimum, free Australia-wide shipping, 8–10 business day production.',
    whyChoose: {
      title: 'Why Choose Our Bakery Boxes',
      items: [
        'PFAS-free, FDA-compliant paperboard and food-safe inks',
        'Grease-resistant coatings that prevent oil seepage and box weakening',
        'Custom PET windows positioned to showcase frosted tops, sprinkles, and crust',
        'Cupcake cavity inserts, donut trays, and cookie dividers to prevent shifting',
        'Custom sizing from single-slice to full sheet cake and 12-count multi-packs'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'Retail bakeries, patisseries, and cafés',
        'Wedding cake and event packaging',
        'Farmers markets and pop-up vendors',
        'Cloud kitchens and bakery delivery brands',
        'Wholesale, grocery, and gifting cookie programs'
      ]
    }
  },
  'cosmetic-boxes': {
    h1: 'Custom Cosmetic Boxes Australia',
    h2: 'Tuck, Rigid & Mailer Packaging for Skincare and Makeup',
    description: 'Cosmetic packaging spans three structures: tuck boxes for retail compacts and lipstick, rigid boxes for gift sets and hero products, and mailers for D2C shipping. Layouts reserve clear panel space for INCI lists, shade names, SPF values, free-from claims, and multilingual copy without crowding the front face. Window cutouts, rose gold foil, holographic, soft-touch, and Pantone-matched colors for full shade ranges. No minimum, free Australia-wide shipping, 8–10 business day production.',
    whyChoose: {
      title: 'Why Choose Our Cosmetic Boxes',
      items: [
        'Three structures (tuck, rigid, mailer) matched to product weight, price point, and channel',
        'Panel zones planned for INCI, regulatory, and free-from claims',
        'Window cutouts placed for shade visibility without weakening the carton',
        'Rose gold foil, holographic, soft-touch, and spot UV for beauty-category finishes',
        'Pantone-matched exterior colors that echo internal shade families'
      ]
    },
    industries: {
      title: 'Best Used For',
      items: [
        'Makeup: palettes, lipstick, foundation, mascara',
        'Skincare: serums, creams, lotions, masks',
        'Fragrance and perfume',
        'Hair care and beauty tools',
        'Beauty subscription boxes and gift sets'
      ]
    }
  }
}
