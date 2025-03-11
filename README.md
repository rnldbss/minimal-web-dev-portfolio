# Developer Portfolio

A minimalist developer portfolio built with Astro, React, and Sanity CMS. Inspired by designs featured on [Dead Simple Sites](https://deadsimplesites.com/).

## Tech Stack

- **Frontend**: [Astro](https://astro.build/) with a few React components
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Hosting**: [Netlify](https://netlify.com/)

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Fill in your Sanity project details and other required variables

4. Start the development server:

   ```bash
   # Run Astro and Sanity Studio
   astro dev
   ```

## Documentation

- [Frontend Structure](./src/README.md)
- [Sanity Configuration](./sanity/README.md)

## Deployment

This project is configured for deployment on Netlify. The Sanity Studio is integrated into the Astro project and deployed together. Sanity Studio is at `/studio` route.

## License

Feel free to use this template for your own portfolio. Please give credit where due.

## Acknowledgments

- Design inspiration from [Dead Simple Sites](https://deadsimplesites.com/)
- Built with [Astro](https://astro.build/)
- Content management by [Sanity](https://www.sanity.io/)
- Hosted on [Netlify](https://netlify.com/)
