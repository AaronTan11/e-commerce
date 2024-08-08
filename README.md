# Next.js E-commerce Product Listing

This project is a simple Next.js application that displays a list of products fetched from the FakeStore API and allows users to view individual product details.

## Features

- Product listing page with product name, price, rating, and image
- Product details page displaying the product name and description
- Responsive design

## Technologies Used

- Next.js (Pages Router)
- React Hooks (useState, useEffect)
- Tailwind CSS for styling

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository

2. Navigate to the project directory:

   ```bash
   cd e-commerce
   ```

3. Install the dependencies:

   > [!NOTE]
   > This project is using PNPM as package manager, if you would like to use any other than this, please delete the pnpm-lock.yaml file first.

   ```bash
   pnpm install
   ```

4. Run the development server:

   ```bash
   pnpm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure

- `pages/index.js`: The home page component
- `pages/products/index.js`: The product listing page component
- `pages/products/[id].js`: The product details page component

## API Used

This project uses the [FakeStore API](https://fakestoreapi.com/) to fetch product data.
