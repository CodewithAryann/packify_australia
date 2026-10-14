// lib/quote-industry-products.ts
//
// Industry slug -> the products that industry page actually lists.
// Mirrors `products[].name` in lib/industries-data.ts, which is the source of
// truth. Keys are the real page slugs ('pharmaceutical', 'auto-parts'), so
// QuoteRequestForm can look an industry up straight from the URL.
//
// Kept as a separate slim file on purpose: importing industries-data.ts into
// the quote form would pull ~200 KB of page copy into every client bundle.
// When an industry page gains or loses a product, regenerate with:
//
//   node -e "const {industries}=require('./lib/industries-data');console.log(JSON.stringify(Object.fromEntries(industries.map(i=>[i.slug,{label:i.name,products:i.products.map(p=>p.name)}])),null,2))"
//
// Last synced: 2026-08-19

export type IndustryProductGroup = { label: string; products: string[] }

export const INDUSTRY_PRODUCTS: Record<string, IndustryProductGroup> = {
  apparel: { label: 'Apparel', products: ['Custom Shirt Box', 'Luxury Clothing Gift Box', 'Custom Clothing Bag', 'Luxury Shoe Gift Box', 'Underwear Packaging', 'Sock Packaging', 'Shoe Box'] },
  food: { label: 'Food', products: ['Custom Macaron Boxes', 'Custom Dessert Boxes', 'Custom Chinese Take Out Box', 'Custom Single Hook Paper Take Out Boxes', 'Custom Front Tuck Collapsible Take Out Boxes', 'Frozen Food Packaging Box', 'Custom Printed Kraft Cup Sleeves', 'Custom Pizza Boxes'] },
  ecommerce: { label: 'E-Commerce', products: ['Rigid Mailers', 'Financial Kit Box', 'Custom Printed Tape', 'Sport Product Release Box', 'Ecommerce Custom Packaging'] },
  cannabis: { label: 'Cannabis', products: ['CBD Pre Roll Boxes', 'Cannabis Mylar Bags', 'CBD Gummies Boxes', 'CBD Hemp Oil Boxes', 'CBD Mailer Boxes', 'Cannabis Flower Packaging', 'Custom Cannabis Boxes'] },
  jewelry: { label: 'Jewelry', products: ['Bracelet Boxes Luxury', 'Necklace Packaging', 'Custom Jewelry Boxes with Logo', 'Jewelry Metal Clasp Gift Box', 'Jewelry Subscription Boxes', 'Kraft Jewelry Boxes', 'Sliding Drawer Jewelry Box', 'Earring Boxes'] },
  electronics: { label: 'Electronics', products: ['Custom Printed Electronic Box', 'Earphone Box with Magnetic Closure', 'Cell Phone Charger Packaging Boxes', 'HDMI Cable Packaging', 'Headphone Packaging', 'Smart Watch Packaging Box', 'Electronics Window Boxes', 'USB Car Charger Packaging Boxes'] },
  gift: { label: 'Gift', products: ['Rigid Gift Boxes with Lids', 'Custom Jewelry Packaging Boxes', 'Watch Box with Double Magnetic Closure', 'Gift Bag with Handle', 'Foil Paper Boxes with Protective Insert', 'Custom Cardboard Box Packaging Sleeves', 'Corporate Gift Boxes', 'Gift Card Boxes'] },
  retail: { label: 'Retail', products: ['Display Box with Logo', 'Custom PR Boxes', 'Sustainable Die Cut Box', 'Round Oval Shape Box', 'Tissue Boxes', 'Custom Condom Boxes', 'Shelf Ready Display Trays'] },
  pharmaceutical: { label: 'Pharmaceutical', products: ['Medicine Box', 'Medical Test Kit Boxes', 'Health Counter Display Boxes', 'Pharmaceutical Display Boxes', 'Adhesive Bandage Boxes', 'Four Corner Health Packaging', 'Skin Health Product Boxes', 'Supplement Bottle Boxes'] },
  beverage: { label: 'Beverage', products: ['Beverage Carrier Trays (2/4/6 Cup)', 'Custom Drink Sleeves', 'Bottle Neckers & Tags'] },
  shipping: { label: 'Shipping', products: ['Heavy Duty Shipping Boxes', 'Custom Printed Shipping Labels & Tape'] },
  candle: { label: 'Candle', products: ['Two Piece Candle Boxes', 'Candle Shipping Boxes', 'Candle Subscription Boxes', 'Candle Gift Box Packaging', 'Candle Boxes with Window', 'Candle Tin Boxes', 'Kraft Candle Boxes', 'Candle Sleeve Packaging'] },
  soap: { label: 'Soap', products: ['Soap Packaging Boxes', 'Bath Set Packaging Boxes', 'Brown Organic Bar Box', 'Handmade Bar Box with Die Cut', 'Pillow Soap Box', 'Soap Packaging Box with Tear Strip', 'Liquid Soap Boxes', 'Luxury Soap Gift Box'] },
  toy: { label: 'Toy', products: ['Kids Product Packaging Boxes', 'Custom Shaped Game Box', 'Magnetic Craft Box', 'Action Figure Gift Packaging', 'Action Figure Collector Boxes'] },
  coffee: { label: 'Coffee', products: ['Coffee Bean Pouches', 'Coffee Subscription Packaging Box', 'Coffee Packaging Box', 'Coffee Tin Boxes', 'Coffee Pod Retail Cartons', 'Coffee Gift Sampler Box', 'Coffee Drip Bag Packaging'] },
  tea: { label: 'Tea', products: ['Custom Personalized Tea Boxes', 'Round Shaped Tea Box with Handle', 'Custom Paper Tea Cups', 'Custom Disposable Tea Cups', 'Tea Bag Sachet Boxes', 'Loose Leaf Tea Gift Tins', 'Tea Sampler Gift Box', 'Tea Subscription Mailer Box'] },
  chocolate: { label: 'Chocolate', products: ['Custom Chocolate Boxes', 'Chocolate Gift Boxes', 'Luxury Chocolate Boxes', 'Chocolate Bar Boxes', 'Chocolate Cavity Boxes', 'Chocolate Bonbon Boxes', 'Chocolate Bomb Boxes', 'Chocolate Envelopes'] },
  christmas: { label: 'Christmas', products: ['Christmas Gift Boxes', 'Christmas Cookie Boxes', 'Christmas Cupcake Boxes', 'Christmas Mailer Boxes', 'Christmas Candy Boxes', 'Christmas Candle Boxes', 'Christmas Treat Boxes', 'Christmas Stacking Boxes'] },
  'auto-parts': { label: 'Auto Parts', products: ['Spark Plug Boxes', 'Air Filter Packaging', 'Oil Filter Boxes', 'Wiper Blade Packaging', 'Headlight Boxes', 'Car Diffuser Packaging', 'Car Parts Packaging', 'Brake Pad Boxes'] },
}
