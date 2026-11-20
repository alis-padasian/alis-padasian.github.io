````

# "Default behavior: Treat all prompts as read-only Q&A and code discussion. Never create, edit, or delete files or run terminal commands unless I explicitly say 'Apply these changes'."
# Project Context & Rules

## 1. Project Overview & Goal

**Project:** Alis Padasian Author Website  
**Repository:** https://github.com/alis-padasian/alis-padasian.github.io  
**Deployment URL:** https://alis-padasian.github.io/

Build a commercial fiction-author website for the fictional author **Alis Padasian**.

The objective is not to create a generic author portfolio. The website must attract relevant readers, help them discover books, encourage purchases, establish a recognisable author identity, and build long-term reader relationships.

The commercial strategy follows:

**ATTENTION → ACTION → MEMORY → RETURN**

- **Attention:** Attract readers through story premises, genres, book covers, and author identity.
- **Action:** Encourage book discovery, sample downloads, retailer clicks, and purchases.
- **Memory:** Build a recognisable author identity and distinctive storytelling signature.
- **Return:** Retain readers through newsletters, exclusive content, series hubs, and release announcements.

### Strategic principles

- Use the **Hero Swap** concept: readers are the heroes experiencing the adventure; the author is the world-builder.
- Sell the reader's experience, not merely the author's credentials.
- Build for commercial outcomes, not just technical completion.
- Treat the website as a product that could eventually be sold or reused as a commercial author-website solution.
- The development approach is **built to sell**: learn development while building the actual product, rather than studying coding separately.

### Six core website sections

1. **Homepage:** Attract attention, establish the storytelling identity, feature books, and direct readers towards discovery.
2. **Books Showcase:** Present books, individual book pages, synopses, genres, reviews, formats, and purchase links.
3. **Meet the Author:** Establish trust through biography, creative identity, influences, and themes.
4. **Behind the Stories:** Publish research notes, setting inspiration, character origins, writing routines, and other editorial content.
5. **Readers' Corner:** Present approved reader reviews, discussion prompts, and social proof.
6. **The Next Chapter:** Encourage repeat engagement through newsletters, exclusive excerpts, series hubs, and announcements.

### Success measures

- Attention: bounce rate and click-through to Books Showcase.
- Action: purchase conversion and sample downloads.
- Memory: repeat brand searches and social mentions.
- Return: newsletter subscriptions and repeat book sales.

---

## 2. Tech Stack & Libraries

### Core technology

- **Static-site generator:** Astro 7.3.1
- **Theme foundation:** Scholar Pages, based on `jxpeng98/astro-theme-scholars`
- **Hosting:** GitHub Pages
- **Repository and version control:** GitHub and Git
- **Deployment:** GitHub Actions
- **CMS:** PagesCMS, Git-based content management
- **Package manager:** pnpm 11.16.0
- **Runtime:** Node.js v26.3.0
- **Minimum Node requirement:** >=22.13.0
- **Language:** TypeScript
- **Content formats:** Markdown and MDX
- **Styling:** UnoCSS 66
- **Editor:** Visual Studio Code
- **Operating environment:** Windows PowerShell

### Installed packages and versions

From the current `package.json`:

**Dependencies**
- `@astrojs/check`: 0.9.10
- `@astrojs/mdx`: 8.0.0
- `@astrojs/sitemap`: ^3.7.4
- `astro`: 7.3.1
- `astro-seo`: ^1.2.0
- `sharp`: 0.35.4
- `typescript`: ^6.0.3
- `yaml`: ^2.9.0

**Development dependencies**
- `@iconify-json/academicons`: ^1.2.4
- `@iconify-json/mdi`: ^1.2.3
- `@iconify-json/ph`: ^1.2.2
- `@playwright/test`: 1.63.0
- `@unocss/astro`: ^66.13.0
- `unocss`: ^66.10.0
- `vitest`: ^5.0.0

### Important configuration files

- `astro.config.ts`: Astro integrations and build configuration.
- `site.config.ts`: Site-level configuration.
- `src/content.config.ts`: Content collection schemas.
- `.pages.yml`: PagesCMS configuration.
- `.template-sync.json`: Theme synchronisation protection and exclusion rules.
- `.template-version`: Current theme version.
- `uno.config.ts`: UnoCSS configuration.
- `tsconfig.json`: TypeScript configuration.
- `pnpm-lock.yaml`: Dependency lockfile.
- `.node-version`: Runtime version configuration.

### Development commands

- `pnpm dev`: Start local development server.
- `pnpm build`: Build the static website.
- `pnpm preview`: Preview the production build.
- `pnpm test`: Run Vitest tests.
- `pnpm astro check`: Run Astro and TypeScript checks.
- `pnpm test:content`: Run content validation.
- `pnpm verify`: Run the project's verification sequence.
- `pnpm check:release`: Check release readiness.

The `verify` script runs tests, Astro checks, production build, built-site assertions, and content validation.

---

## 3. My Coding Rules & Preferences

### Development approach

- I am an entrepreneur, not a full-time coder.
- I have limited time to study coding separately.
- Teach development through the actual website-building process.
- Prioritise practical implementation and commercial value.
- Explain technical concepts when they are relevant to the task.
- Do not turn the project into an unnecessary coding course.
- Do not use unexplained, opaque code or commands.
- Explain PowerShell commands briefly, including what they do and why they are needed.
- Work sequentially, one concrete step at a time.
- Do not assume a command succeeded until I provide its output.
- When I say **"Next."**, continue with the next concrete implementation step.

### Required explanation perspectives

For significant development tasks, explain:

1. **Developer perspective:** What is being built, how it works, which files and technologies are involved, and what needs testing.
2. **Entrepreneur perspective:** Why the feature matters commercially and how it supports readers, discovery, sales, or retention.
3. **Learning perspective:** What development concept I am learning through the task.

Keep explanations relevant and concise.

### Coding and project constraints

- Use Astro, not Hugo. The original Hugo idea was superseded by the Astro migration.
- Use Scholar Pages as a technical foundation, not as the final website design.
- Adapt the academic theme into a commercial fiction-author website.
- Do not preserve the old website's design, CSS, content, or structure. The only retained element from the old site is the fictional author name, Alis Padasian.
- Avoid unnecessary dependencies.
- Avoid unnecessary technical detours.
- Avoid long diagnostic commands when a shorter inspection will work.
- Do not repeat inspections whose results are already known.
- Do not ask me to repeat information that is already available.
- Do not claim that inaccessible source code is available.
- Inspect existing project files before asking me to reproduce source code.
- Do not blindly blame the user or the project when an assistant-generated instruction or code change is incorrect. Identify and correct errors directly.

### Repository and Git rules

- Work on the `migrate-to-scholar-pages` branch unless the project direction explicitly changes.
- Keep `main` as the original safety/reference branch.
- Do not commit, push, merge, or synchronise theme updates without my explicit approval.
- Do not delete project files merely because they are untracked.
- Treat untracked Scholar Pages files as migration source until reviewed.
- Preserve backups and do not assume recovery has been tested beyond what was actually verified.
- Review destructive operations before executing them.
- Back up the project before applying upstream theme updates.

### Content and architecture rules

- Design all five content collections as one system from the beginning.
- All five collections must be manageable through PagesCMS without editing Astro source code.
- Use slug-based relationships between collections.
- Do not implement filtering for the Books Showcase. For a small catalogue of two or three books, display all books.
- Genres and series information can be displayed as metadata without adding filtering functionality.
- Do not carry academic publication interfaces or academic filtering into the Books Showcase.
- Only show approved, non-draft reviews publicly.
- Do not publish reviewer names without permission.
- Use descriptive alternative text for images.
- Preserve the relationship between books, series, reviews, announcements, and editorial posts.

### Editor and workflow preferences

- Use Windows PowerShell commands suitable for the existing VS Code environment.
- Keep VS Code configuration that is useful to the project.
- Ignore local editor history using `.history/` in `.gitignore`.
- Keep instructions text-based.
- Do not provide project archives or downloadable project files for me to develop separately. Give implementation instructions and code directly in the conversation.

---

## 4. Current Progress & Architecture

### Repository and environment

**Local project:**
`C:\Users\Eboh\Documents\Alis-Padasian\Author-Website-Not-Book`

**Scholar Pages reference clone:**
`C:\Users\Eboh\Documents\Alis-Padasian\astro-theme-scholars-reference`

**Backup:**
`C:\Users\Eboh\Documents\Alis-Padasian\Author-Website-Backup`

**Restore test:**
`C:\Users\Eboh\Documents\Alis-Padasian\Author-Website-Backup-Test`

**GitHub repository:**
`alis-padasian/alis-padasian.github.io`

**Remote:**
`https://github.com/alis-padasian/alis-padasian.github.io.git`

**Current branch:**
`migrate-to-scholar-pages`

**Last recorded commit:**
`b7d923e Preserve initial Alis author website design foundation`

No migration changes have been committed or pushed after that checkpoint.

### Current Astro architecture

```text
Author-Website-Not-Book/
├── .github/
├── docs/
├── e2e/
├── public/
├── scripts/
├── src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── content/
│   ├── data/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── scripts/
│   └── types/
├── tests/
├── astro.config.ts
├── site.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
├── uno.config.ts
└── README.md
```

### Five content collections

The content system is designed around five collections:

1. `books`
2. `series`
3. `posts`
4. `reviews`
5. `announcements`

Their relationships:

- A series contains books.
- A book can have multiple reviews.
- An announcement can relate to a book.
- Posts attract readers and build connection.

Relationship fields use slugs:

- Book: `seriesSlug`
- Review: `bookSlug`
- Announcement: `relatedBookSlug`

The current `src/content.config.ts` defines these five collections and temporarily retains two academic collections, `projects` and `teaching`, because existing academic pages still depend on them.

### Current content directories

```text
src/content/
├── books/
│   └── images/
├── series/
│   └── images/
├── posts/
│   └── images/
├── reviews/
├── announcements/
├── projects/
└── teaching/
```

The new author collections have schemas but no actual Markdown entries yet.

### Existing schema fields

**Books**
- title
- description
- optional tagline
- optional publicationDate
- status: forthcoming, available, unavailable
- optional cover and coverAlt
- genres
- formats: paperback, hardcover, ebook, audiobook
- optional seriesSlug and seriesOrder
- purchaseLinks
- optional sampleLink
- featured
- draft

**Series**
- title
- description
- order
- optional cover and coverAlt
- featured
- draft

**Posts**
- title
- description
- publishedAt
- optional updatedAt
- tags
- featured
- optional heroImage and heroImageAlt
- draft

**Reviews**
- quote
- optional reviewerName
- optional bookSlug
- optional source
- optional reviewDate
- approved
- featured
- draft

**Announcements**
- title
- description
- type: release, update, exclusive-content
- publishedAt
- optional relatedBookSlug
- featured
- draft

Shared schema helpers include non-empty trimmed text, external links with labels and HTTP(S) URLs, and metadata objects.

### PagesCMS configuration

`.pages.yml` exists but is currently a temporary test configuration.

It defines media sources for:

- Book images
- Series images
- Behind the Stories images

It currently exposes only a temporary Books collection with title, description, cover, and coverAlt fields.

The intended final CMS configuration must expose all five author collections.

**Unresolved technical issue:** Astro's `image()` schema expects image paths relative to the Markdown file, while PagesCMS has separate `input` and `output` media paths. The proposed `output: ./images` arrangement has not yet been verified through an actual hosted PagesCMS upload test.

### Current Astro configuration

`astro.config.ts` has been corrected to use:

- `UnoCSS()` through `unocss/astro`
- `@astrojs/sitemap`
- `@astrojs/mdx`

It also configures the site URL, build asset inlining, responsive image styles, and prefetching.

The duplicate UnoCSS imports and invalid top-level plugin configuration from the original file were removed.

### Existing academic pages and components

Existing routes include:

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/projects.astro`
- `src/pages/researches.astro`
- `src/pages/teaching.astro`
- `src/pages/posts/index.astro`
- `src/pages/posts/[...slug].astro`
- `src/pages/projects/[...slug].astro`
- `src/pages/teaching/[...slug].astro`

Existing components:

- `DetailShell.astro`
- `FilterBar.astro`
- `PageJumpNav.astro`
- `PostCard.astro`
- `PublicationList.astro`

Migration decisions:

- Adapt `DetailShell.astro` as a foundation for individual book pages.
- Adapt `PostCard.astro` for Behind the Stories.
- Retain or adapt `PageJumpNav.astro` if useful.
- Do not use `FilterBar.astro` for Books Showcase.
- Retire `PublicationList.astro` after removing its academic dependencies.
- Remove academic publication utilities and data only after all references have been migrated and builds/tests pass.
- Redesign the academic About page rather than merely changing its labels.
- Do not carry academic publication layouts or filtering into the book catalogue.

### Existing scripts

```text
scripts/
├── assert-built-site.mjs
├── check-content-variants.mjs
├── check-release.mjs
├── migrate-legacy-content.mjs
├── sync-template-release.mjs
├── template-latest-version.mjs
└── lib/
    └── release-version.mjs
```

The template synchronisation script reads `.template-sync.json`, protects specified paths, excludes specified paths, copies unprotected incoming files, and removes obsolete paths listed by the incoming theme configuration.

### Template protection configuration

`.template-sync.json` currently protects:

- `.template-sync.json`
- `site.config.ts`
- `src/data/**`
- Existing posts, projects, and teaching content
- Existing project and teaching assets
- `.pages.yml`
- `src/content/books/**`
- `src/content/series/**`
- `src/content/reviews/**`
- `src/content/announcements/**`
- Public profile and favicon files
- Environment files

Excluded paths include Git metadata, Astro cache, build output, dependencies, and pnpm store.

The removal list currently contains six obsolete academic-theme paths.

The configuration was validated successfully:

- 17 protected entries
- 5 excluded entries
- 6 removal paths
- Valid JSON

No theme synchronisation has been performed.

### Repository hygiene and metadata

- `.history/` has been added to `.gitignore`.
- `.vscode/extensions.json` recommends the official Astro extension.
- `.vscode/launch.json` contains a development-server launch configuration. Consider changing its command to `pnpm dev`.
- `package.json` identifies the project as `alis-padasian-author-website`.
- Author metadata is `Alis Padasian`.
- Repository URL has been corrected to the Alis GitHub repository.
- Package manager is pnpm 11.16.0.
- Theme version is recorded as 0.9.0.

### Verification already completed

Previously confirmed:

- `pnpm astro check`: 0 errors, 0 warnings, 0 hints.
- `pnpm build`: successful.
- 20 pages generated.
- 29 optimised image variants generated.
- Backup restore tested locally.
- `npm ci` and `npm run build` succeeded in the restore test.

A complete successful `pnpm verify` has not yet been established.

---

## 5. Where We Left Off

### Immediate status

The repository hygiene and template-sync review has been completed.

The latest task corrected and verified `package.json`:

- Package name: `alis-padasian-author-website`
- Author: `Alis Padasian`
- Repository: `https://github.com/alis-padasian/alis-padasian.github.io.git`

The last assistant response confirmed that the next phase is adapting Scholar Pages into the six-section commercial author website.

### Next development phase

Begin the actual author-site architecture and migration.

Priorities:

1. Establish the final route structure for the six website sections.
2. Map existing academic pages and components to the new architecture.
3. Design the five content collections and their relationships as one integrated system.
4. Build the Books Showcase and individual book pages.
5. Build the author biography and Behind the Stories sections.
6. Build Readers' Corner and The Next Chapter.
7. Complete the PagesCMS configuration for all five collections.
8. Test the CMS image upload and Astro image-path integration.
9. Add cross-collection slug/reference validation.
10. Remove obsolete academic pages, components, collections, and dependencies only after their replacements work.
11. Run the full verification process.
12. Review the completed site before any commit or deployment.

### Unresolved decisions and work

- Final URL and route structure for the six website sections.
- Final PagesCMS fields and editor experience for all five collections.
- Actual PagesCMS media upload compatibility with Astro's relative image paths.
- Cross-collection reference validation.
- Whether books need MDX support or Markdown is sufficient.
- Whether every book assigned to a series must have a `seriesOrder`.
- Whether book status should be required rather than defaulting to `forthcoming`.
- Removal of temporary `projects` and `teaching` collections after academic-page migration.
- Whether the VS Code launch configuration should be changed to `pnpm dev`.
- Final README replacement with Alis-specific project documentation.
- Full `pnpm verify` execution.

### Git and deployment constraints

- Current migration branch: `migrate-to-scholar-pages`.
- Main branch remains the original reference.
- Do not commit or push without explicit approval.
- Do not run theme synchronisation without reviewing incoming overwrites and deletion paths.
- Do not assume the live website has been visually or functionally verified by the user.
- Preserve the existing backup and restore-test folders.

**Working principle:** Build the commercial author website, not an academic portfolio with its labels changed.

# "Default behavior: Treat all prompts as read-only Q&A and code discussion. Never create, edit, or delete files or run terminal commands unless I explicitly say 'Apply these changes'."

````