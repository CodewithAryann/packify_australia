# Deploy notes — GSC indexing fixes (July 2026)

## What was changed in the code

| # | Fix | Files |
|---|-----|-------|
| 1 | Added trailing slashes to **252 internal links** across 13 files | `lib/industries-data.ts` (107), `components/BlogInlineLinks.tsx` (49), `lib/blog-content.ts` (27), `components/Footer.tsx` (16), + 9 more |
| 2 | Rewrote `.htaccess` — `/index.html` redirect now fires first; all legacy `.html` redirects ported over from the dead `next.config.js` block | `public/.htaccess` |
| 3 | Removed the dead `redirects()` block; added a comment explaining why it can never work | `next.config.js` |
| 4 | Added a 301 for the retired `/blog/future-of-packaging-manufacturing/` post | `public/.htaccess` |

Verified: `tsc --noEmit` clean, `next build` succeeds, and **zero** slash-less internal
links remain in the generated HTML.

---

## ⚠️ Two things you MUST do on the server — code alone won't fix these

### 1. ~~Fix the live robots.txt~~ — VERIFIED FINE, NO ACTION NEEDED

Checked on 2026-07-15: the live robots.txt matches this repo exactly and blocks
nothing. `/index.html` is fully crawlable.

The GSC "Blocked by robots.txt" report is stale data — it shows the last known state
until Google re-crawls. Once the `.htaccess` fix below is live, Googlebot will fetch
`/index.html`, follow the 301, and the report will clear on its own.

If it does NOT clear after ~2 weeks, check **GSC → Settings → robots.txt report**. It
shows every version Google has fetched and whether any fetch returned an error. A
robots.txt that intermittently 5xx's or times out is treated by Google as
"disallow everything" — which produces this exact label even when the file is correct.

### 2. Delete stale files from the server

You're deploying a static export over FTP/cPanel, which **uploads new files but never
deletes removed ones**. Old pages linger and keep serving their old canonicals — that's
exactly what "Alternate page with proper canonical tag" was reporting.

Confirmed orphan — delete this folder:

```
/blog/future-of-packaging-manufacturing/
```

It does not exist in `lib/blog-content.ts` and is not in the build output. There are
almost certainly others. To find them all:

1. Build locally: `npm run build`
2. Compare the file list in `out/` against what's actually on the server
3. Delete anything on the server that isn't in `out/`

Best long-term fix: deploy with `rsync --delete` or a CI job that wipes the web root
before upload, so this class of bug can't recur.

### 3. Re-request validation in GSC

Only **after** #1 and #2 are live. Validating before the server is fixed just burns
another cycle and Google backs off re-crawling.

---

## What is NOT a bug — don't chase these

- **`/robots.txt` under "Crawled – currently not indexed"** — completely normal for
  every site on the web. Ignore it permanently.
- **`vape-juice-boxes`, `thc-e-cigarette-boxes`** — Google is deliberately conservative
  about vape/THC content. No technical fix exists. This is a trust judgment, not a
  crawl error.
- **"Page with redirect" as a category** — 301s are correct, working behavior. The
  report is informational. The fix was to stop *linking* to the redirecting URLs
  (done), not to remove the redirects.

---

## Still needs real work: thin variant pages

These are under "Crawled – currently not indexed" because Google judges them too
similar to their parent pages:

- `/products/bakery-boxes/cookie-boxes/`
- `/products/tuck-boxes/roll-end-tuck-boxes/`
- `/products/tuck-boxes/snap-lock-bottom-boxes/`
- `/products/cosmetic-boxes/custom-printed-cosmetic-display-boxes/`

No config change will fix this — they need genuinely distinct copy (real specs, real
use cases, real photos), not reworded boilerplate.

You already solved this exact problem once: `app/sitemap.ts` uses
`hasUniqueProductContent()` to keep generic industry-product pages out of the sitemap
until someone writes real content for them. **Apply that same gate to product variants.**
Pages with only fallback copy shouldn't be in the sitemap asking to be indexed.
