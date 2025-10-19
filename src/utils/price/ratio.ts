// src/
// ├── app/
// │   ├── store.ts
// │   └── hooks/
// │       ├── storeHooks.ts
// │       └── useFetchRatio.ts       ← custom hooks (if you fetch API data)
// │
// ├── features/
// │   ├── gemsData/
// │   │   ├── gemsDataSlice.ts
// │   │   ├── gemsData.types.ts
// │   │   └── gemsData.selectors.ts  ← selectors like getGems, getStatus
// │   └── filters/
// │       ├── filtersSlice.ts
// │       ├── filters.selectors.ts
// │       └── filters.types.ts
// │
// ├── components/
// │   ├── GemList/
// │   │   ├── GemList.tsx
// │   │   └── GemListItem.tsx
// │   ├── UI/
// │   │   └── Tag/
// │   │       └── Tag.tsx
// │   └── common/                    ← shared UI pieces
// │
// ├── utils/
// │   ├── price/
// │   │   ├── priceConversion.ts     ← chaosOrDivine(), ratio helpers
// │   │   └── ratio.ts               ← handles fetching or caching ratio
// │   ├── formatters.ts              ← text or number formatters
// │   ├── filters.ts                 ← gem filters (e.g. 21/20, corrupted)
// │   └── logger.ts                  ← optional, debugging helpers
// │
// ├── assets/
// │   └── images/
// │       ├── Chaos.png
// │       ├── Divine.png
// │       └── ...
// │
// └── index.tsx
