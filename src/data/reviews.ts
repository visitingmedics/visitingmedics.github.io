// Paste your real Google reviews here, exactly as written. While this list is empty,
// the "What families say" section stays hidden. Example of one entry:
// { text: "Exact review text.", name: "First name", area: "Andheri West" },
export type Review = { text: string; name: string; area?: string };
export const reviews: Review[] = [];
