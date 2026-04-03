# E-commerce Frontend (Next.js)

A modern, scalable e-commerce frontend built leveraging the Next.js App Router, Tailwind CSS for styling, and Zustand for state management. This project is part of a scalable e-commerce architecture designed to provide a seamless shopping experience.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand

## Features

- Dynamic product catalog
- Interactive user shopping cart
- Responsive and premium UI design
- Service layer for API abstraction

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Next.js App Router files (pages, layouts)
- `src/components`: Reusable UI components (e.g., `ProductCard`, `AddToCartButton`, `Header`)
- `src/services`: API simulation and backend connection layers (e.g., `product.service.ts`)
- `src/store`: Zustand stores for global state (e.g., cart)
