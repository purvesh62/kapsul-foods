# Dynamic Configuration

This document outlines how to manage the content of the Kapsul Foods website and how to deploy the application.

## Making Updates to Site Content

All dynamic content for the website (product information, site titles, descriptions, etc.) is managed through a single JSON file.

**File Location:** `/public/data/app-config.json`

### How to Edit `app-config.json`

1. **Open the File:** Navigate to `public/data/app-config.json` in your code editor.
2. **Understand the Structure:** The JSON file is organized into several main sections:
   * `siteConfig`: Contains general site settings like the header title, section titles, footer text, and copyright information.
   * `products`: An array of product objects. Each product has properties like `id`, `name`, `tagline`, `images` (an array of image paths), `description`, `features` (an array of strings), `color` (for styling), and `amazonUrl`.
   * `trustSection`: An array of items for the "Trust" or "Why Choose Us" section, each with an `icon`, `title`, `description`, and styling colors.
3. **Make Your Changes:**
   * **Text:** To change text (e.g., a product name, description, or site title), simply edit the string value associated with the relevant key.
   * **Images:**
     * Product images are listed in the `images` array for each product. Paths should be relative to the `/public` directory (e.g., `/products/paan/new-image.jpg`).
     * Ensure the new images are placed in the correct folder within `/public/products/`.
   * **Adding a New Product:**
     * Copy an existing product object within the `products` array.
     * Paste it as a new element in the array, ensuring you add a comma `,` after the preceding product object if it\'s not the last one.
     * Update all the details for the new product: `id` (must be unique), `name`, `tagline`, `images`, `description`, `features`, `color`, and `amazonUrl`.
   * **Removing a Product:** Delete the entire product object from the `products` array. Be careful to remove any trailing comma from the now-last item if necessary.
   * **Reordering Products:** Change the order of the product objects within the `products` array.
4. **Syntax Rules:**
   * Ensure all strings are enclosed in double quotes (`"`).
   * Keys and string values are case-sensitive.
   * Objects are enclosed in curly braces `{}`.
   * Arrays are enclosed in square brackets `[]`.
   * Items in an array or key-value pairs in an object are separated by commas `,`. There should be no trailing comma after the last item in an array or the last key-value pair in an object.
5. **Save the File:** After making your changes, save the `app-config.json` file.
6. **Validate (Recommended):** Before committing changes, it\'s a good idea to validate your JSON using an online JSON validator or your IDE\'s built-in linting/validation features to catch any syntax errors.
7. **View Changes:** If your development server is running (`npm run dev`), the changes should be reflected in your browser automatically upon refresh.

### Example: Adding a new feature to a product

Before:

```json
// ...
"features": [
  "No tobacco, no stains",
  "Traditional paan flavor"
],
// ...
```

After adding "New amazing feature":

```json
// ...
"features": [
  "No tobacco, no stains",
  "Traditional paan flavor",
  "New amazing feature"
],
// ...
```

## Deploying the Application to Vercel

Vercel is a platform for deploying modern web projects, with excellent support for Next.js.

### Prerequisites

* A Vercel account (sign up at [vercel.com](https://vercel.com/signup)).
* Your project pushed to a Git repository (e.g., GitHub, GitLab, Bitbucket).

### Quick Deployment Steps

1. **Push to Git:** Ensure your latest code (including `app-config.json` changes) is committed and pushed to your main Git branch.

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Log in to Vercel:** Visit your Vercel dashboard.
3. **Import Project:** Click "Add New..." -> "Project", then import your Git repository.
4. **Configure (Auto-detected):** Vercel usually auto-detects Next.js settings. Confirm if needed.
5. **Deploy:** Click the "Deploy" button.
6. **Access Site:** Use the URL Vercel provides after successful deployment.

### Automatic Deployments (CI/CD)

By default, Vercel sets up CI/CD. Pushing to your main branch automatically triggers a new deployment.