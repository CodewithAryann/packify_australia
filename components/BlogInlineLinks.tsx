'use client'

import Link from 'next/link'
import React from 'react'

// Map of keywords → internal URLs
// Longer/more specific phrases first so they match before shorter ones
const KEYWORD_MAP: { keyword: string; href: string; external?: boolean }[] = [
  // Product pages - specific first
  { keyword: 'custom mailer boxes', href: '/products/mailer-boxes/' },
  { keyword: 'mailer boxes', href: '/products/mailer-boxes/' },
  { keyword: 'mailer box', href: '/products/mailer-boxes/' },
  { keyword: 'custom tuck boxes', href: '/products/tuck-boxes/' },
  { keyword: 'tuck boxes', href: '/products/tuck-boxes/' },
  { keyword: 'tuck box', href: '/products/tuck-boxes/' },
  { keyword: 'folding cartons', href: '/products/tuck-boxes/' },
  { keyword: 'folding carton', href: '/products/tuck-boxes/' },
  { keyword: 'custom rigid boxes', href: '/products/rigid-boxes/' },
  { keyword: 'rigid boxes', href: '/products/rigid-boxes/' },
  { keyword: 'rigid box', href: '/products/rigid-boxes/' },
  { keyword: 'luxury packaging', href: '/products/rigid-boxes/' },
  { keyword: 'dispenser boxes', href: '/products/dispenser-boxes/' },
  { keyword: 'dispenser box', href: '/products/dispenser-boxes/' },
  { keyword: 'cigarette boxes', href: '/products/cigarette-boxes/' },
  { keyword: 'vape boxes', href: '/products/cigarette-boxes/' },
  { keyword: 'vape packaging', href: '/products/cigarette-boxes/' },
  { keyword: 'burger boxes', href: '/products/burger-boxes/' },
  { keyword: 'burger box', href: '/products/burger-boxes/' },
  { keyword: 'magnetic closure boxes', href: '/products/magnetic-closure/' },
  { keyword: 'magnetic closure', href: '/products/magnetic-closure/' },
  { keyword: 'cosmetic boxes', href: '/products/cosmetic-boxes/' },
  { keyword: 'cosmetic box', href: '/products/cosmetic-boxes/' },
  { keyword: 'custom lipstick boxes', href: '/products/cosmetic-boxes/lipstick-boxes/' },
  { keyword: 'lipstick packaging', href: '/products/cosmetic-boxes/lipstick-boxes/' },
  { keyword: 'lipstick boxes', href: '/products/cosmetic-boxes/lipstick-boxes/' },
  { keyword: 'lipstick box', href: '/products/cosmetic-boxes/lipstick-boxes/' },
  { keyword: 'cupcake boxes', href: '/products/bakery-boxes/cupcake-packaging-boxes/' },
  { keyword: 'cupcake box', href: '/products/bakery-boxes/cupcake-packaging-boxes/' },
  { keyword: 'cookie boxes', href: '/products/bakery-boxes/cookie-boxes/' },
  { keyword: 'cookie box', href: '/products/bakery-boxes/cookie-boxes/' },
  { keyword: 'cake boxes', href: '/products/bakery-boxes/cake-boxes/' },
  { keyword: 'cake box', href: '/products/bakery-boxes/cake-boxes/' },
  { keyword: 'donut shop boxes', href: '/products/bakery-boxes/donut-boxes/' },
  { keyword: 'donut boxes', href: '/products/bakery-boxes/donut-boxes/' },
  { keyword: 'donut box', href: '/products/bakery-boxes/donut-boxes/' },
  { keyword: 'pizza boxes', href: '/industries/food/custom-pizza-boxes/' },
  { keyword: 'pizza box', href: '/industries/food/custom-pizza-boxes/' },
  { keyword: 'bakery boxes', href: '/products/bakery-boxes/' },
  { keyword: 'bakery box', href: '/products/bakery-boxes/' },
  { keyword: 'custom packaging', href: '/products/' },
  { keyword: 'sustainable packaging', href: '/products/' },
  { keyword: 'eco-friendly packaging', href: '/products/' },
  { keyword: 'corrugated cardboard', href: '/products/mailer-boxes/' },
  { keyword: 'corrugated boxes', href: '/products/mailer-boxes/' },
  { keyword: 'unboxing experience', href: '/products/rigid-boxes/' },
  { keyword: 'premium packaging', href: '/products/rigid-boxes/' },
  { keyword: 'e-commerce packaging', href: '/products/mailer-boxes/' },
  // Utility / static pages (multi-word anchors so they only fire on intent)
  { keyword: 'how to measure your box', href: '/how-to-measure/' },
  { keyword: 'measure your product', href: '/how-to-measure/' },
  { keyword: 'measuring guide', href: '/how-to-measure/' },
  { keyword: 'how to order', href: '/how-to-order/' },
  { keyword: 'artwork guidelines', href: '/artwork-guidelines/' },
  { keyword: 'get a quote', href: '/get-quote/' },
  { keyword: 'request a quote', href: '/get-quote/' },
  { keyword: 'free quote', href: '/get-quote/' },
  // Blog cross-links (specific phrases → related posts)
  { keyword: 'corrugated box weight', href: '/blog/cardboard-box-weight-chart/' },
  { keyword: 'cardboard box weight', href: '/blog/cardboard-box-weight-chart/' },
  { keyword: 'dimensional weight', href: '/blog/how-packaging-affects-shipping-costs/' },
  { keyword: 'shipping costs', href: '/blog/how-packaging-affects-shipping-costs/' },
  { keyword: 'cake box sizes', href: '/blog/cake-box-sizes-6-8-10-12-14-inch/' },
  { keyword: 'cake box dimensions', href: '/blog/cake-box-sizes-6-8-10-12-14-inch/' },
  { keyword: 'cupcake box capacity', href: '/blog/cupcake-box-capacity/' },
  { keyword: 'mailer box weight', href: '/blog/mailer-box-weight-limits-ect-32-vs-ect-44/' },
  { keyword: 'ect 32 vs ect 44', href: '/blog/mailer-box-weight-limits-ect-32-vs-ect-44/' },
  { keyword: 'pizza box sizes', href: '/blog/pizza-box-sizes/' },
  { keyword: 'how many cookies fit', href: '/blog/how-many-cookies-fit-in-a-box/' },
  { keyword: 'donut box sizes', href: '/blog/donut-box-sizes/' },
  { keyword: 'donut box dimensions', href: '/blog/donut-box-sizes/' },
  { keyword: 'box styles', href: '/blog/comparing-box-styles-guide/' },
  { keyword: 'packaging psychology', href: '/blog/packaging-design-psychology/' },
  { keyword: 'small business packaging', href: '/blog/small-business-packaging-tips/' },
  { keyword: 'brand value', href: '/blog/custom-packaging-boosts-brand-value/' },
  { keyword: 'lipstick tube dimensions', href: '/blog/lipstick-tube-dimensions-carton-sizes/' },
  { keyword: 'lipstick carton dimensions', href: '/blog/lipstick-tube-dimensions-carton-sizes/' },
  { keyword: 'lipstick box size', href: '/blog/lipstick-tube-dimensions-carton-sizes/' },
  { keyword: 'standard lipstick height', href: '/blog/lipstick-tube-dimensions-carton-sizes/' },
  { keyword: 'advent calendar box design', href: '/blog/advent-calendar-box-design/' },
  { keyword: 'advent calendar packaging', href: '/blog/advent-calendar-box-design/' },
  { keyword: 'advent calendar box', href: '/blog/advent-calendar-box-design/' },
  { keyword: 'candle vessel weight', href: '/blog/candle-vessel-weight/' },
  { keyword: 'glass candle jar weight', href: '/blog/candle-vessel-weight/' },
  { keyword: 'empty candle jar weight', href: '/blog/candle-vessel-weight/' },
  { keyword: 'candle shipping weight', href: '/blog/candle-vessel-weight/' },
  { keyword: '510 thread cartridge dimensions', href: '/blog/510-thread-cartridge-dimensions/' },
  { keyword: '510 cartridge dimensions', href: '/blog/510-thread-cartridge-dimensions/' },
  { keyword: 'vape cartridge sizes', href: '/blog/510-thread-cartridge-dimensions/' },
  { keyword: '510 cartridge specs', href: '/blog/510-thread-cartridge-dimensions/' },
  { keyword: 'vape cartridge box dimensions', href: '/blog/510-thread-cartridge-dimensions/' },
  // 510 cartridge post anchors → live vape product pages
  { keyword: '510-thread vape cartridge boxes', href: '/products/cigarette-boxes/vape-cartridge-packaging/' },
  { keyword: 'vape cartridge boxes', href: '/products/cigarette-boxes/vape-cartridge-packaging/' },
  { keyword: 'scored platform or a 1.5mm greyboard divider', href: '/products/cigarette-boxes/vape-cartridge-packaging/' },
  { keyword: 'child-resistant locking tuck', href: '/products/cigarette-boxes/' },
  // Candle post anchors → live candle product / industry pages
  { keyword: 'candle shipping boxes with vessel inserts', href: '/products/mailer-boxes/candle-shipping-boxes/' },
  { keyword: 'candle shipping boxes', href: '/products/mailer-boxes/candle-shipping-boxes/' },
  { keyword: 'molded pulp vessel insert', href: '/products/mailer-boxes/candle-shipping-boxes/' },
  { keyword: 'fitted insert', href: '/products/mailer-boxes/candle-shipping-boxes/' },
  { keyword: '18 pt SBS vessel carton', href: '/products/tuck-boxes/' },
  { keyword: 'four-candle gift sets', href: '/industries/candle/candle-gift-box-packaging/' },
  { keyword: 'two-candle sets', href: '/industries/candle/candle-shipping-boxes/' },
  { keyword: 'candle packaging', href: '/industries/candle/' },
  { keyword: 'candle boxes', href: '/industries/candle/' },
  // Halloween candle drop post. Commercial anchors point at the candle
  // industry pages that actually sell each format. The manual anchor the
  // article specifies ('candle packaging built for seasonal drops') is longer
  // than the generic 'candle packaging' entry above, so the length sort fires
  // it first and the sentence links as one phrase rather than two words.
  { keyword: 'candle packaging built for seasonal drops', href: '/industries/candle/' },
  { keyword: 'candle gift box packaging', href: '/industries/candle/candle-gift-box-packaging/' },
  { keyword: 'candle subscription boxes', href: '/industries/candle/candle-subscription-boxes/' },
  { keyword: 'candle boxes with window', href: '/industries/candle/candle-boxes-with-window/' },
  { keyword: 'two-piece candle boxes', href: '/industries/candle/two-piece-candle-boxes/' },
  { keyword: 'candle sleeve packaging', href: '/industries/candle/candle-sleeve-packaging/' },
  { keyword: 'candle tin boxes', href: '/industries/candle/candle-tin-boxes/' },
  { keyword: 'kraft candle boxes', href: '/industries/candle/kraft-candle-boxes/' },
  { keyword: 'halloween candle packaging', href: '/industries/candle/' },
  { keyword: 'halloween candle boxes', href: '/industries/candle/' },
  { keyword: 'limited edition candle packaging', href: '/industries/candle/' },
  { keyword: 'seasonal candle packaging', href: '/industries/candle/' },
  { keyword: 'fall candle boxes', href: '/industries/candle/' },
  // Blog anchors for the same post. These self-skip inside the article and
  // pull fall-drop intent into it from every other post.
  { keyword: 'autumn candle box design', href: '/blog/halloween-candle-packaging/' },
  { keyword: 'fall candle box sizes', href: '/blog/halloween-candle-packaging/' },
  { keyword: 'halloween candle box sizes', href: '/blog/halloween-candle-packaging/' },
  { keyword: 'fall scent drop packaging', href: '/blog/halloween-candle-packaging/' },
  // Soap post anchors → live soap industry / product pages
  { keyword: 'custom soap packaging', href: '/industries/soap/' },
  { keyword: 'custom soap boxes', href: '/industries/soap/soap-packaging-boxes/' },
  { keyword: 'soap packaging boxes', href: '/industries/soap/soap-packaging-boxes/' },
  { keyword: 'soap packaging', href: '/industries/soap/' },
  { keyword: 'soap boxes', href: '/industries/soap/soap-packaging-boxes/' },
  // Format-specific anchors, each pointing at the soap product page that
  // actually sells that structure. Phrases are deliberately long so they only
  // fire inside the soap posts and never collide with other articles.
  { keyword: 'reverse tuck with a locking tab', href: '/industries/soap/soap-packaging-boxes/' },
  { keyword: 'die-cut paperboard collar', href: '/industries/soap/soap-packaging-boxes/' },
  { keyword: 'cold process bar', href: '/industries/soap/brown-organic-bar-box/' },
  { keyword: 'guest bars', href: '/industries/soap/handmade-bar-box-with-die-cut/' },
  { keyword: 'sampler sets', href: '/industries/soap/bath-set-packaging-boxes/' },
  { keyword: 'shampoo puck', href: '/industries/soap/soap-packaging-boxes/' },
  { keyword: 'liquid hand soap', href: '/industries/soap/liquid-soap-boxes/' },
  { keyword: 'soap subscription boxes', href: '/industries/soap/pillow-soap-box/' },
  // TODO: repoint once Blog #S3 and #S5 publish. Until then these fall back to
  // the matching soap product page rather than the homepage, so the anchor
  // still lands somewhere relevant.
  { keyword: 'multi-bar gift sets', href: '/industries/soap/luxury-soap-gift-box/' },
  { keyword: 'band versus sleeve versus full box', href: '/industries/soap/soap-packaging-box-with-tear-strip/' },
  { keyword: 'soap box sizes', href: '/blog/soap-box-sizes/' },
  { keyword: 'soap box dimensions', href: '/blog/soap-box-sizes/' },
  { keyword: 'standard soap bar size', href: '/blog/soap-box-sizes/' },
  { keyword: 'soap box depth', href: '/blog/soap-box-sizes/' },
  // Halloween lead-time post. The quote anchor is the one manual link the
  // article specifies; it is longer than the generic 'request a quote' entry
  // so the length sort fires it first.
  { keyword: 'request a packaging quote', href: '/get-quote/' },
  { keyword: 'when to order halloween packaging', href: '/blog/when-to-order-halloween-packaging/' },
  { keyword: 'halloween packaging lead time', href: '/blog/when-to-order-halloween-packaging/' },
  { keyword: 'seasonal packaging deadlines', href: '/blog/when-to-order-halloween-packaging/' },
  { keyword: 'rush halloween boxes', href: '/blog/when-to-order-halloween-packaging/' },
  { keyword: 'order halloween boxes', href: '/blog/when-to-order-halloween-packaging/' },
  // Halloween restaurant packaging post. The two manual anchors the article
  // specifies sit first: 'custom pizza boxes' is longer than the generic
  // 'pizza boxes' entry above, so the length sort fires it as one phrase, and
  // 'halloween packaging deadlines' points at the live lead-time post (H8)
  // rather than the homepage fallback the brief allowed for.
  { keyword: 'custom pizza boxes', href: '/industries/food/custom-pizza-boxes/' },
  { keyword: 'halloween packaging deadlines', href: '/blog/when-to-order-halloween-packaging/' },
  // Commercial anchors point at the pages that sell the box. 'themed burger
  // boxes' is longer than 'burger boxes' so it still lands on the product page
  // rather than being split across two matches.
  { keyword: 'themed burger boxes', href: '/products/burger-boxes/' },
  { keyword: 'halloween restaurant packaging', href: '/industries/food/' },
  { keyword: 'halloween food packaging', href: '/industries/food/' },
  { keyword: 'custom food packaging', href: '/industries/food/' },
  // Blog anchors for the same post. These self-skip inside the article and
  // pull seasonal restaurant intent into it from every other post.
  { keyword: 'halloween food packaging ideas', href: '/blog/halloween-restaurant-packaging/' },
  { keyword: 'seasonal menu packaging', href: '/blog/halloween-restaurant-packaging/' },
  { keyword: 'themed takeout boxes', href: '/blog/halloween-restaurant-packaging/' },
  { keyword: 'seasonal print run', href: '/blog/halloween-restaurant-packaging/' },
  // Halloween candy box sizing post. 'custom treat boxes in standard sizes' is
  // the one manual anchor the article specifies; it is longer than the generic
  // 'bakery boxes' entry above, so the length sort fires it as a single phrase.
  // 'halloween packaging deadlines' already resolves to the live lead-time post
  // (H8) via the restaurant-post entry above, so no fallback is needed here.
  { keyword: 'custom treat boxes in standard sizes', href: '/products/bakery-boxes/' },
  // Commercial anchors point at the chocolate industry pages that sell the
  // cavity formats this article specifies.
  { keyword: 'chocolate cavity boxes', href: '/industries/chocolate/chocolate-cavity-boxes/' },
  { keyword: 'chocolate bonbon boxes', href: '/industries/chocolate/chocolate-bonbon-boxes/' },
  { keyword: 'candy packaging', href: '/industries/chocolate/' },
  // Blog anchors for the same post. These self-skip inside the article and
  // pull treat-box sizing intent into it from every other post.
  { keyword: 'halloween candy box sizes', href: '/blog/halloween-candy-box-sizes/' },
  { keyword: 'halloween treat box dimensions', href: '/blog/halloween-candy-box-sizes/' },
  { keyword: 'halloween goodie box size', href: '/blog/halloween-candy-box-sizes/' },
  { keyword: 'candy gift box sizes', href: '/blog/halloween-candy-box-sizes/' },
  { keyword: 'candy box insert layout', href: '/blog/halloween-candy-box-sizes/' },
  { keyword: 'treat box weight capacity', href: '/blog/halloween-candy-box-sizes/' },
  // Christmas / holiday lead-time post. 'see how to place an order' is the one
  // manual link the article specifies; it is longer than the generic
  // 'how to order' entry so the length sort fires it first.
  { keyword: 'see how to place an order', href: '/how-to-order/' },
  { keyword: 'christmas packaging deadlines', href: '/blog/christmas-packaging-deadlines/' },
  { keyword: 'holiday packaging lead time', href: '/blog/christmas-packaging-deadlines/' },
  { keyword: 'when to order christmas boxes', href: '/blog/christmas-packaging-deadlines/' },
  { keyword: 'holiday rush order packaging', href: '/blog/christmas-packaging-deadlines/' },
  { keyword: 'holiday cutoffs', href: '/blog/christmas-packaging-deadlines/' },
  // Christmas gift box sizing post. The two manual anchors the article
  // specifies sit first: 'december carrier cutoffs' points at the deadlines
  // post (C2), and the B-flute shipper phrase lands on the corrugated mailer
  // page until a dedicated corrugated product page exists.
  { keyword: 'december carrier cutoffs', href: '/blog/christmas-packaging-deadlines/' },
  { keyword: '32 ect b-flute shipper', href: '/products/mailer-boxes/' },
  { keyword: 'christmas gift box sizes', href: '/blog/christmas-gift-box-sizes/' },
  { keyword: 'holiday gift box dimensions', href: '/blog/christmas-gift-box-sizes/' },
  { keyword: 'christmas box size chart', href: '/blog/christmas-gift-box-sizes/' },
  { keyword: 'gift box sizes for wrapping', href: '/blog/christmas-gift-box-sizes/' },
  { keyword: 'apparel gift box sizes', href: '/blog/christmas-gift-box-sizes/' },
  { keyword: 'standard gift box size', href: '/blog/christmas-gift-box-sizes/' },
  // Commercial-intent Christmas anchors point at the industry pages that sell
  // the box, not back at the article. Inside the Christmas post the blog
  // anchors above self-skip, so these are what actually render as links there;
  // in every other post they send holiday intent straight to a buying page.
  { keyword: 'christmas gift boxes', href: '/industries/christmas/christmas-gift-boxes/' },
  { keyword: 'holiday gift boxes', href: '/industries/christmas/christmas-gift-boxes/' },
  { keyword: 'christmas cookie boxes', href: '/industries/christmas/christmas-cookie-boxes/' },
  { keyword: 'christmas cupcake boxes', href: '/industries/christmas/christmas-cupcake-boxes/' },
  { keyword: 'christmas mailer boxes', href: '/industries/christmas/christmas-mailer-boxes/' },
  { keyword: 'christmas candy boxes', href: '/industries/christmas/christmas-candy-boxes/' },
  { keyword: 'christmas candle boxes', href: '/industries/christmas/christmas-candle-boxes/' },
  { keyword: 'christmas treat boxes', href: '/industries/christmas/christmas-treat-boxes/' },
  { keyword: 'christmas stacking boxes', href: '/industries/christmas/christmas-stacking-boxes/' },
  { keyword: 'custom christmas packaging', href: '/industries/christmas/' },
  { keyword: 'christmas packaging', href: '/industries/christmas/' },
  { keyword: 'holiday packaging', href: '/industries/christmas/' },
  // Corporate Christmas gift box post (C4). The four manual anchors the brief
  // specifies sit first. All four target pages are live, so none needs the
  // homepage fallback the brief allowed for: 'corporate gift boxes' lands on
  // the gift industry product page, the two cluster anchors point at C2 and C1,
  // and 'die-cut foam inserts' falls back to the rigid box page, which
  // documents insert options. 'corporate christmas gift boxes' is longer than
  // the generic 'christmas gift boxes' entry below, so the length sort fires it
  // as one phrase rather than splitting the BLUF sentence in half.
  { keyword: 'corporate christmas gift boxes', href: '/industries/gift/corporate-gift-boxes/' },
  { keyword: 'corporate gift boxes', href: '/industries/gift/corporate-gift-boxes/' },
  { keyword: 'corporate gifting programs', href: '/industries/gift/corporate-gift-boxes/' },
  { keyword: 'packaging production deadlines', href: '/blog/christmas-packaging-deadlines/' },
  { keyword: 'gift box sizes by gift type', href: '/blog/christmas-gift-box-sizes/' },
  { keyword: 'die-cut foam inserts', href: '/products/rigid-boxes/' },
  // Blog anchors for the same post. These self-skip inside the article and
  // pull corporate gifting intent into it from every other post.
  { keyword: 'corporate gift box packaging', href: '/blog/corporate-christmas-gift-boxes/' },
  { keyword: 'holiday client gifts packaging', href: '/blog/corporate-christmas-gift-boxes/' },
  { keyword: 'corporate christmas gift box ideas', href: '/blog/corporate-christmas-gift-boxes/' },
  { keyword: 'branded holiday gifts', href: '/blog/corporate-christmas-gift-boxes/' },
  // Halloween bakery packaging post (H2). The article specifies two manual
  // anchors, and both target pages are live, so neither needs the homepage
  // fallback the brief allowed for: 'halloween packaging deadline guide' points
  // at the lead-time post (H8), and 'cake box dimensions' already resolves to
  // the live dimensional post via the entry further up.
  { keyword: 'halloween packaging deadline guide', href: '/blog/when-to-order-halloween-packaging/' },
  // Commercial anchors point at the bakery product pages that sell each
  // format. Each phrase is longer than the generic 'cookie boxes',
  // 'cupcake boxes', and 'cake boxes' entries above, so the length sort fires
  // the whole seasonal phrase rather than splitting it after 'halloween'.
  { keyword: 'halloween cookie boxes', href: '/products/bakery-boxes/cookie-boxes/' },
  { keyword: 'halloween cupcake boxes', href: '/products/bakery-boxes/cupcake-packaging-boxes/' },
  { keyword: 'halloween cake boxes', href: '/products/bakery-boxes/cake-boxes/' },
  { keyword: 'halloween bakery boxes', href: '/products/bakery-boxes/' },
  // Blog anchors for the same post. These self-skip inside the article and
  // pull seasonal bakery intent into it from every other post.
  // 'spooky bakery box ideas' is the watch item the brief raised: it contains
  // the auto-linked string 'bakery box', which would otherwise fire mid-phrase
  // and link three words out of a secondary keyword. Listing it here makes it
  // the longer match, so the length sort consumes the whole phrase, and inside
  // this post it self-skips and renders as plain text.
  { keyword: 'spooky bakery box ideas', href: '/blog/halloween-bakery-packaging/' },
  { keyword: 'halloween bakery packaging', href: '/blog/halloween-bakery-packaging/' },
  { keyword: 'seasonal bakery packaging', href: '/blog/halloween-bakery-packaging/' },
  { keyword: 'halloween bakery box sizes', href: '/blog/halloween-bakery-packaging/' },
  { keyword: 'halloween cookie box size', href: '/blog/halloween-bakery-packaging/' },
  { keyword: 'cupcake box depth for tall frosting', href: '/blog/halloween-bakery-packaging/' },
  { keyword: 'orange print on kraft', href: '/blog/halloween-bakery-packaging/' },
  // Halloween beauty packaging post. Commercial anchors point at the live
  // cosmetic product and variant pages. Variant URLs follow the
  // name.toLowerCase().replace(/\s+/g, '-') rule in app/products/[slug]/[variant].
  // SKU names are also linked inside that post's dieline table (linkCells).
  { keyword: 'limited edition cosmetic boxes', href: '/products/cosmetic-boxes/' },
  { keyword: 'seasonal beauty collection boxes', href: '/products/cosmetic-boxes/' },
  { keyword: 'halloween makeup packaging', href: '/products/cosmetic-boxes/makeup-boxes/' },
  { keyword: 'halloween palette carton', href: '/products/cosmetic-boxes/makeup-boxes/' },
  { keyword: 'eyeshadow palette', href: '/products/cosmetic-boxes/makeup-boxes/' },
  { keyword: 'highlighter compact', href: '/products/cosmetic-boxes/makeup-boxes/' },
  { keyword: 'mini gift set', href: '/products/cosmetic-boxes/' },
  { keyword: 'lip trio', href: '/products/cosmetic-boxes/lipstick-boxes/' },
  { keyword: 'lip set', href: '/products/cosmetic-boxes/lipstick-boxes/' },
  { keyword: 'print-ready halloween file', href: '/artwork-guidelines/' },
  { keyword: 'october 15 in-hands date', href: '/blog/when-to-order-halloween-packaging/' },
  // Blog cross-links into the Halloween beauty post (self-links are skipped)
  { keyword: 'halloween beauty packaging', href: '/blog/halloween-beauty-packaging-limited-edition-boxes/' },
  { keyword: 'halloween cosmetic packaging', href: '/blog/halloween-beauty-packaging-limited-edition-boxes/' },
  { keyword: 'limited-edition beauty packaging', href: '/blog/halloween-beauty-packaging-limited-edition-boxes/' },
  // Trick-or-treat giveaway packaging post (H5). The brief listed 'gable box /
  // gable boxes' as a manual link pending a live page — the variant page at
  // /products/bakery-boxes/gable-boxes/ IS live (products-data.ts, Bakery Boxes
  // variant 'Gable Boxes'), so it is wired into the auto-linker here instead of
  // being hand-linked, and no homepage fallback is needed. These phrases are
  // longer than the generic 'bakery boxes' entry above, so the length sort
  // fires them as whole phrases.
  { keyword: 'custom gable boxes', href: '/products/bakery-boxes/gable-boxes/' },
  { keyword: 'gable boxes', href: '/products/bakery-boxes/gable-boxes/' },
  { keyword: 'gable box', href: '/products/bakery-boxes/gable-boxes/' },
  // Blog anchors for the same post. These self-skip inside the article and pull
  // giveaway / handout intent into it from every other post.
  { keyword: 'trick-or-treat packaging', href: '/blog/trick-or-treat-packaging-ideas-branded-boxes/' },
  { keyword: 'trick or treat packaging', href: '/blog/trick-or-treat-packaging-ideas-branded-boxes/' },
  { keyword: 'halloween giveaway boxes', href: '/blog/trick-or-treat-packaging-ideas-branded-boxes/' },
  { keyword: 'branded halloween boxes', href: '/blog/trick-or-treat-packaging-ideas-branded-boxes/' },
  { keyword: 'halloween promotional packaging', href: '/blog/trick-or-treat-packaging-ideas-branded-boxes/' },
  { keyword: 'trick-or-treat boxes', href: '/blog/trick-or-treat-packaging-ideas-branded-boxes/' },
  // Halloween cookie box sizing post (H-cookie). The article specifies one
  // manual anchor that is not already wired: the long phrase pointing at the
  // cookie capacity guide. It is longer than the generic 'how many cookies fit'
  // entry above, so the length sort fires it as a single phrase instead of
  // linking three words out of the middle of the sentence. The article's other
  // manual anchors already resolve: 'halloween candy box sizes' (H4),
  // 'when to order halloween packaging' (H8), and
  // 'custom treat boxes in standard sizes' (bakery product page).
  { keyword: 'how many cookies fit in a box by diameter and spacing', href: '/blog/how-many-cookies-fit-in-a-box/' },
  // Blog anchors for the same post. These self-skip inside the article and pull
  // cookie-sizing intent into it from every other post. Each is longer than the
  // singular 'halloween cookie box size' entry (which points at H2) and than
  // the generic 'halloween cookie boxes' product anchor, so the length sort
  // fires the whole phrase.
  { keyword: 'halloween cookie box sizes', href: '/blog/halloween-cookie-box-sizes/' },
  { keyword: 'halloween cookie box dimensions', href: '/blog/halloween-cookie-box-sizes/' },
  { keyword: 'how many cookies fit in a halloween box', href: '/blog/halloween-cookie-box-sizes/' },
  { keyword: 'halloween cookie packaging sizes', href: '/blog/halloween-cookie-box-sizes/' },
  { keyword: 'cookie decorating kit box', href: '/blog/halloween-cookie-box-sizes/' },
  { keyword: 'iced cookie spacing', href: '/blog/halloween-cookie-box-sizes/' },
  // External citations (open in a new tab) — used where a post makes a
  // specific regulatory claim and should point at the primary source.
  {
    keyword: '21 cfr 701.3',
    href: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-G/part-701/subpart-A/section-701.3',
    external: true,
  },
]

/**
 * Parses a plain text string and wraps matching keywords with <Link> components.
 * Each keyword is only linked ONCE per paragraph to avoid over-linking.
 */
export function linkifyContent(text: string, currentPath?: string): React.ReactNode[] {
  // Build a regex from all keywords (longest first, case-insensitive)
  const sorted = [...KEYWORD_MAP].sort((a, b) => b.keyword.length - a.keyword.length)
  const pattern = sorted.map((k) => k.keyword.replace(/[-()[\]./*+?^${}|\\]/g, '\\$&')).join('|')
  const regex = new RegExp(`(${pattern})`, 'gi')

  const usedKeywords = new Set<string>()
  const parts = text.split(regex)

  return parts.map((part, i) => {
    const lower = part.toLowerCase()
    const match = sorted.find((k) => k.keyword === lower)

    // Skip a link that points at the page we're already on (no self-links)
    if (match && currentPath && match.href === currentPath) {
      return part
    }

    if (match && !usedKeywords.has(match.keyword)) {
      usedKeywords.add(match.keyword)
      if (match.external) {
        return (
          <a
            key={i}
            href={match.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 underline underline-offset-2 decoration-orange-300 hover:decoration-orange-500 transition-colors font-medium"
          >
            {part}
          </a>
        )
      }
      return (
        <Link
          key={i}
          href={match.href}
          className="text-orange-600 hover:text-orange-700 underline underline-offset-2 decoration-orange-300 hover:decoration-orange-500 transition-colors font-medium"
        >
          {part}
        </Link>
      )
    }
    return part
  })
}

interface Props {
  content: string
  className?: string
  currentPath?: string
}

export default function BlogInlineLinks({ content, className = '', currentPath }: Props) {
  // Section copy uses a blank line ("\n\n") to separate paragraphs. Render each
  // as its own <p> — previously the whole section collapsed into a single
  // run-on block because HTML ignores the newlines.
  const paragraphs = content.split(/\n\s*\n/).filter((p) => p.trim().length > 0)

  return (
    <>
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className={`text-ink/70 leading-relaxed text-base ${i > 0 ? 'mt-4' : ''} ${className}`}
        >
          {linkifyContent(para, currentPath)}
        </p>
      ))}
    </>
  )
}
