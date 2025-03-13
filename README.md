# Next.js Boilerplate

A modern, feature-rich starting point for your Next.js projects with TypeScript, Tailwind CSS, and a collection of pre-built components.

## Features

- ⚡️ **Next.js 15** - The latest version of Next.js with App Router
- 🔥 **TypeScript** - Type checking for enhanced developer experience
- 💅 **Tailwind CSS** - Utility-first CSS framework
- 📦 **Pre-built Components** - Button, Card, Container, and more
- 🪝 **Custom Hooks** - Form handling, local storage, and more
- 🛠️ **Utility Functions** - API handling, validation, date formatting
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode Support** - Built-in dark mode compatibility
- 🧩 **Type Definitions** - Common type definitions for the application

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-boilerplate.git
cd nextjs-boilerplate
```

2. Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # App router pages
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── styles/         # Additional styles
│   └── types/          # TypeScript type definitions
├── .eslintrc.js        # ESLint configuration
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Available Components

- **Button** - Customizable button with different variants and sizes
- **Card** - Container for displaying content in a contained box
- **Container** - Wrapper for consistent layout widths
- **Header** - Application header with navigation
- **Footer** - Application footer with links and information

## Custom Hooks

- **useForm** - Form state management with validation
- **useLocalStorage** - Persistent state with localStorage

## Utility Functions

- **API Utilities** - Functions for handling API requests
- **Validation** - Common form validation functions
- **Date Utilities** - Functions for formatting dates

## Customization

### Styling

This boilerplate uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file.

### Adding New Pages

Create new pages in the `src/app` directory. For example, to add an about page:

```tsx
// src/app/about/page.tsx
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```

### Adding New Components

Create new components in the `src/components` directory:

```tsx
// src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
}

export const MyComponent = ({ title }: MyComponentProps) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default MyComponent;
```

## Deployment

This project can be deployed on any platform that supports Next.js, such as Vercel, Netlify, or your own server.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
# This is a simple change
