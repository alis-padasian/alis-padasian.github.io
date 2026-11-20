import { describe, expect, test, vi } from "vitest";

// Mock astro:content before importing the module under test
vi.mock("astro:content", () => ({
	getCollection: vi.fn(),
}));

import { EDITORIAL_TAGS, isEditorialStory } from "../src/lib/stories";

const story = (...tags: string[]) => ({ data: { tags } });

describe("isEditorialStory", () => {
	test("accepts an entry carrying a world-building tag", () => {
		expect(isEditorialStory(story("Worldbuilding"))).toBe(true);
		expect(isEditorialStory(story("Research", "Cartography"))).toBe(true);
	});

	test("matches tags case-insensitively and ignores surrounding spaces", () => {
		expect(isEditorialStory(story("  writing craft "))).toBe(true);
		expect(isEditorialStory(story("BEHIND THE SCENES"))).toBe(true);
	});

	test("rejects site-news entries", () => {
		expect(isEditorialStory(story("astro", "web"))).toBe(false);
		expect(isEditorialStory(story("grants", "lab-updates"))).toBe(false);
	});

	test("rejects entries without tags", () => {
		expect(isEditorialStory({ data: { tags: [] } })).toBe(false);
	});

	test("keeps the tag list free of duplicates", () => {
		expect(new Set(EDITORIAL_TAGS).size).toBe(EDITORIAL_TAGS.length);
	});
});
