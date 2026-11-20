import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Announcements are announcements of things that have already happened, so only
 * published, non-draft entries are surfaced. They are ordered newest first and
 * future-dated entries are withheld until their publication moment arrives.
 */
export function isPublicAnnouncement(
	announcement: CollectionEntry<"announcements">,
	now: Date = new Date(),
): boolean {
	return !announcement.data.draft && announcement.data.publishedAt <= now;
}

/**
 * Published announcements, newest first, shared by The Next Chapter page and
 * its tests so the publication rule lives in exactly one place.
 */
export async function getPublicAnnouncements(
	now: Date = new Date(),
): Promise<CollectionEntry<"announcements">[]> {
	const announcements = await getCollection("announcements", (entry) =>
		isPublicAnnouncement(entry, now),
	);
	return announcements.sort(
		(a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
	);
}
