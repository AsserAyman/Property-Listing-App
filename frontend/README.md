This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

- `src/app/`: Next.js app router pages
- `src/components/`: Reusable React components
- `src/api/`: API client and services
- `src/types/`: TypeScript type definitions
- `src/constants/`: Constant values used across the application

## Key Components

- `PropertyCard`: Displays individual property information
- `SearchBar`: Allows users to search for properties
- `Pagination`: Handles pagination for property listings

## State Management

This project uses React's built-in useState and useEffect hooks for local state management.

## Styling

Tailwind CSS is used for styling components and layouts.

## API Integration

The `propertyService` in `src/api/propertyService.ts` handles all API calls to the backend.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.