import React from 'react';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';

export const metadata = {
  title: 'About | Next.js Boilerplate',
  description: 'Learn more about our Next.js boilerplate project',
};

export default function AboutPage() {
  return (
    <Container>
      <div className="py-12 md:py-20">
        <h1 className="text-4xl font-bold mb-8">About This Boilerplate</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To provide developers with a clean, efficient starting point for building modern web applications with Next.js.
            </p>
          </Card>
          
          <Card>
            <h2 className="text-xl font-semibold mb-4">Built With</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Next.js 15</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>React Hooks</li>
            </ul>
          </Card>
          
          <Card>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Modern architecture</li>
              <li>Performance optimized</li>
              <li>SEO friendly</li>
              <li>Responsive design</li>
            </ul>
          </Card>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Use This Boilerplate?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This boilerplate is designed to save you time and effort when starting a new Next.js project. 
            It includes a collection of pre-built components, custom hooks, and utility functions that 
            you can use to build your application faster.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Whether you're building a personal project, a startup, or an enterprise application, 
            this boilerplate provides a solid foundation that you can build upon.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Check out the README.md file for detailed instructions on how to get started with this boilerplate.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions or feedback, please feel free to open an issue on GitHub.
          </p>
        </div>
      </div>
    </Container>
  );
} 