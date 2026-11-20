import { describe, expect, test, vi } from "vitest";

// Mock astro:content so the module can be imported outside an Astro build.
vi.mock("astro:content", () => ({
	getCollection: vi.fn(),
}));

import { isPublicAnnouncement } from "../src/lib/announcements";

type AnnouncementLike = Parameters<typeof isPublicAnnouncement>[0];

const announcement = (publishedAt: string, draft = false) =>
	({ data: { publishedAt: new Date(publishedAt), draft } }) as AnnouncementLike;

const now = new Date("2026-06-01T00:00:00Z");

describe("isPublicAnnouncement", () => {
	test("publishes past announcements that are not drafts", () => {
		expect(isPublicAnnouncement(announcement("2026-05-01T00:00:00Z"), now)).toBe(
			true,
		);
	});

	test("withholds scheduled announcements until their date arrives", () => {
		expect(isPublicAnnouncement(announcement("2026-07-01T00:00:00Z"), now)).toBe(
			false,
		);
	});

	test("withholds drafts even when their date has passed", () => {
		expect(
			isPublicAnnouncement(announcement("2026-05-01T00:00:00Z", true), now),
		).toBe(false);
	});

	test("treats an announcement dated exactly now as public", () => {
		expect(isPublicAnnouncement(announcement("2026-06-01T00:00:00Z"), now)).toBe(
			true,
		);
	});
});
