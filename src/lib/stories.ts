import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Editorial tags that mark a post as "Behind the Stories" content: fictional
 * world-building, historical research, and craft reflections. Everything else
 * stays in the site-news stream at /posts.
 */
export const EDITORIAL_TAGS = [
	"Worldbuilding",
	"Setting Inspiration",
	"The St. Jude Chronicles",
	"Research",
	"Historical Mystery",
	"Cartography",
	"Writing Craft",
	"Author Journal",
	"Behind the Scenes",
] as const;

const editorialTagSet = new Set(EDITORIAL_TAGS.map((tag) => tag.toLowerCase()));

/** Minimal shape needed to classify an entry, so the rule stays testable. */
export interface StoryEntryLike {
	readonly data: { readonly tags: readonly string[] };
}

export function isEditorialStory(post: StoryEntryLike): boolean {
	return post.data.tags.some((tag) =>
		editorialTagSet.has(tag.trim().toLowerCase()),
	);
}

/**
 * Published editorial entries, newest first, shared by the /stories hub and
 * its detail route so both surfaces always agree on what is included.
 */
export async function getEditorialStories(): Promise<CollectionEntry<"posts">[]> {
	const posts = await getCollection("posts", ({ data }) => !data.draft);
	return posts
		.filter(isEditorialStory)
		.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

