# Site Search — dedicated /search page (no backend)

The navbar search icon links to a dedicated /search page that matches the site
design. No overlay, no pop-up, nothing overlaps the navbar. Cmd/Ctrl+K jumps
to the search page from anywhere.

## What's searchable (219 items, auto-indexed from your data)
- Products (9), Box Styles (63 variants), Industries (16),
  By Industry (107 industry products), Pages (13), Blog (11)
Add items to the usual data files and they appear automatically. Optional:
add `displayName: '...'` to a product entry to override its title.

## Files
- app/search/page.tsx             NEW    — builds index on the server (noindex)
- app/search/SearchPageClient.tsx NEW    — search UI (your card style)
- components/SearchLink.tsx       NEW    — navbar icon -> /search + Cmd/Ctrl+K
- lib/search-index.ts             NEW    — index builder
- components/Header.tsx           EDITED — uses SearchLink; nav spacing fix
- app/layout.tsx, tailwind.config.ts  unchanged from original

## Verified
- tsc: 0 errors
- next build: succeeds; /search prerenders; all 219 links map to real pages (0 broken)

Nothing else in the project was modified.
