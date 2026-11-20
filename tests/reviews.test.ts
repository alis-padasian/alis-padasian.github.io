import { describe, expect, test, vi } from "vitest";

// Mock astro:content so the module can be imported outside an Astro build.
vi.mock("astro:content", () => ({
	getCollection: vi.fn(),
}));

import { isPublicReview } from "../src/lib/reviews";

type ReviewLike = Parameters<typeof isPublicReview>[0];

const review = (approved: boolean, draft = false) =>
	({ data: { approved, draft } }) as ReviewLike;

describe("isPublicReview", () => {
	test("publishes approved reviews that are not drafts", () => {
		expect(isPublicReview(review(true))).toBe(true);
	});

	test("hides reviews awaiting approval", () => {
		expect(isPublicReview(review(false))).toBe(false);
	});

	test("hides approved reviews that are still drafts", () => {
		expect(isPublicReview(review(true, true))).toBe(false);
	});
});
