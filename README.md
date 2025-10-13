# Pokemon Carousel

A simple React app that displays Pokemon data in an interactive carousel.
Gowish's Assignment

## Features

-  **Interactive Carousel** - Swiper.js powered carousel
-  **Modern UI** - Tailwind CSS styling
-  **GraphQL Data** - Apollo Client with PokéAPI
-  **Error Handling** - User-friendly error states
-  **Loading States** - Skeleton loading animations
-  **Responsive** - Mobile-first design

## Tech Stack

- **React 19** + **TypeScript** - Modern React with type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Apollo Client** - GraphQL client
- **Swiper.js** - Carousel component

## GraphQL Setup

This app uses Apollo Client with simple TypeScript-based queries:

- **Queries**: `src/graphql/queries/pokemon.ts`
- **Types**: `src/types/pokemon.ts`
- **API**: PokéAPI GraphQL endpoint

No complex tooling or code generation needed for this small app.

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 (or **yarn** >= 1.22.0, or **pnpm** >= 7.0.0)

### Installation

1. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using pnpm
   pnpm install
   ```

2. **Start development server**
   ```bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   
   # Using pnpm
   pnpm dev
   ```

3. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── apollo/             # Apollo Client configuration
├── assets/             # Static assets (images, icons)
├── components/         # React components (Atomic Design)
│   ├── atoms/         # Basic UI elements (Badge)
│   ├── molecules/     # Simple combinations (Card, PokemonImage, etc.)
│   └── organisms/     # Complex components (PokemonCard)
├── config/            # Configuration files
├── graphql/           # GraphQL queries and mutations
│   └── queries/       # GraphQL query definitions
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```
