# Alis Padasian Author Website

![Status](https://img.shields.io/badge/Status-Prototype-orange)

The official website for fictional author Alis Padasian. This site is built to act as a commercial conversion funnel, following the **Attention ? Action ? Memory ? Return** strategy to attract readers, showcase books, and build long-term relationships.

> **Note:** This site is currently in **prototype** phase. While the core architecture and content funnels are live, ongoing refinements to design, CMS workflows, and data validation are in progress.

## How to Manage Content

You have two primary ways to update this site. Because this is a Git-based site, both methods ultimately commit changes to your GitHub repository and trigger the automated build pipeline.

### Option 1: Via PagesCMS (Recommended for Content)
To update text, reviews, blog posts, or book details without touching code:

1.  Visit [PagesCMS](https://pagescms.org/).
2.  Log in with your GitHub account.
3.  Select the lis-padasian/alis-padasian.github.io repository.
4.  Use the intuitive editor interface to add or edit content across the five core collections (Books, Series, Behind the Stories, Reader Reviews, Announcements).
5.  Click **Save**. This automatically commits the changes to GitHub and triggers the live site update.
6.  *Local sync:* If you are working locally in VS Code, run git pull origin main to bring those content changes down to your computer.

### Option 2: Via Code (VS Code)
To make structural or technical changes to the site:

1.  **Clone the repository** to your local machine and install dependencies: pnpm install.
2.  **Develop:** Run pnpm dev to start a local server at http://localhost:4321.
3.  **Validate:** Before pushing, always run pnpm verify to ensure your changes pass type-checks, build assertions, and integration tests.
4.  **Publish:** Commit your changes and git push to main. GitHub Actions will automatically build and deploy the updated site to your live URL.

## Technical Overview
*   **Built with:** [Astro](https://astro.build/) (v7.3.1).
*   **Styling:** [UnoCSS](https://unocss.dev/).
*   **Deployment:** GitHub Pages (via GitHub Actions).
*   **Content Management:** PagesCMS.

## Credits & Acknowledgements
This project is built upon the **[Scholar Pages](https://github.com/jxpeng98/astro-theme-scholars)** theme foundation by **Jiaxin Peng**. 

We have substantially repurposed this technical foundation, stripping away the original academic portfolio design and structure to build a custom commercial author-website solution. We are grateful for the robust, well-engineered Astro/UnoCSS foundation provided by the original theme.

## License
[MIT](./LICENSE)
