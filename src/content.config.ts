
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.string().trim().min(1);

const externalLink = z
    .object({
        label: text,
        href: z.url({
            protocol: /^https?$/,
            message: 'Resource links must use an absolute HTTP(S) URL'
        })
    })
    .strict();

const metadata = z.object({
    label: text,
    value: text
}).strict();

// BEHIND THE STORIES
const posts = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/posts'
    }),
    schema: ({ image }) =>
        z
            .object({
                title: text,
                description: text,
                publishedAt: z.coerce.date(),
                updatedAt: z.coerce.date().optional(),
                tags: z.array(text).default([]),
                featured: z.boolean().default(false),
                heroImage: image().optional(),
                heroImageAlt: text.optional(),
                draft: z.boolean().default(false)
            })
            .superRefine((data, ctx) => {
                if (data.heroImage && !data.heroImageAlt) {
                    ctx.addIssue({
                        code: 'custom',
                        path: ['heroImageAlt'],
                        message: 'heroImageAlt is required when heroImage is set'
                    });
                }
            })
});

// BOOKS
const books = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/books'
    }),
    schema: ({ image }) =>
        z
            .object({
                title: text,
                description: text,
                tagline: text.optional(),
                publicationDate: z.coerce.date().optional(),
                status: z.enum([
                    'forthcoming',
                    'available',
                    'unavailable'
                ]).default('forthcoming'),
                cover: image().optional(),
                coverAlt: text.optional(),
                genres: z.array(text).default([]),
                formats: z.array(
                    z.enum([
                        'paperback',
                        'hardcover',
                        'ebook',
                        'audiobook'
                    ])
                ).default([]),
                seriesSlug: text.optional(),
                seriesOrder: z.number().int().positive().optional(),
                purchaseLinks: z.array(externalLink).default([]),
                sampleLink: externalLink.optional(),
                featured: z.boolean().default(false),
                draft: z.boolean().default(false)
            })
            .superRefine((data, ctx) => {
                if (data.cover && !data.coverAlt) {
                    ctx.addIssue({
                        code: 'custom',
                        path: ['coverAlt'],
                        message: 'coverAlt is required when cover is set'
                    });
                }

                if (data.seriesOrder !== undefined && !data.seriesSlug) {
                    ctx.addIssue({
                        code: 'custom',
                        path: ['seriesSlug'],
                        message: 'seriesSlug is required when seriesOrder is set'
                    });
                }
            })
});

// SERIES
const series = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/series'
    }),
    schema: ({ image }) =>
        z
            .object({
                title: text,
                description: text,
                order: z.number().int().nonnegative().default(0),
                cover: image().optional(),
                coverAlt: text.optional(),
                featured: z.boolean().default(false),
                draft: z.boolean().default(false)
            })
            .superRefine((data, ctx) => {
                if (data.cover && !data.coverAlt) {
                    ctx.addIssue({
                        code: 'custom',
                        path: ['coverAlt'],
                        message: 'coverAlt is required when cover is set'
                    });
                }
            })
});

// READER REVIEWS
const reviews = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/reviews'
    }),
    schema: z.object({
        quote: text,
        reviewerName: text.optional(),
        bookSlug: text.optional(),
        source: externalLink.optional(),
        reviewDate: z.coerce.date().optional(),
        approved: z.boolean().default(false),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false)
    })
});

// ANNOUNCEMENTS
const announcements = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/announcements'
    }),
    schema: z.object({
        title: text,
        description: text,
        type: z.enum([
            'release',
            'update',
            'exclusive-content'
        ]),
        publishedAt: z.coerce.date(),
        relatedBookSlug: text.optional(),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false)
    })
});


// ABOUT
const about = defineCollection({
    loader: glob({
        pattern: '**/index.md',
        base: './src/content/about'
    }),
    schema: z.object({
        biography: text,
        storytellingVision: text,
        themes: z.array(z.object({
            title: text,
            description: text,
            icon: text
        })).default([]),
        influences: z.array(text).default([])
    })
});

export const collections = {
    books,
    series,
    posts,
    reviews,
    announcements,
    about
};

