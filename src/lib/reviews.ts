import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Reviews only become public once the author approves them, and drafts are
 * always hidden. Approved reviews are ordered by the date they were submitted
 * so the most recent reader reactions appear first.
 */
export function isPublicReview(review: CollectionEntry<"reviews">): boolean {
	return review.data.approved && !review.data.draft;
}

/**
 * Approved reviews, newest first, shared by the Readers' Corner page and its
 * tests so the publication rule is defined in exactly one place.
 */
export async function getPublicReviews(): Promise<CollectionEntry<"reviews">[]> {
	const reviews = await getCollection("reviews", isPublicReview);
	return reviews.sort((a, b) => {
		const dateA = a.data.reviewDate?.getTime() ?? 0;
		const dateB = b.data.reviewDate?.getTime() ?? 0;
		if (dateA !== dateB) return dateB - dateA;
		return a.id.localeCompare(b.id);
	});
}
