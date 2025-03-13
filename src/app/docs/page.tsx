import React from 'react';
import { Container } from '@/components/Container';
import { Card } from '@/components/Card';

export const metadata = {
  title: 'Documentation | Next.js Boilerplate',
  description: 'Documentation for our Next.js boilerplate',
};

export default function DocsPage() {
  return (
    <Container>
      <div className="py-12 md:py-20">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-3">
            <Card>
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Welcome to the documentation for our Next.js boilerplate. This guide will help you get started with using our boilerplate for your projects.
              </p>
            </Card>
          </div>
          
          <Card>
            <h2 className="text-xl font-semibold mb-4">Installation</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Clone the repository and install dependencies:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                <code>
                  git clone https://github.com/yourusername/nextjs-boilerplate.git<br />
                  cd nextjs-boilerplate<br />
                  npm install
                </code>
              </pre>
            </div>
          </Card>
          
          <Card>
            <h2 className="text-xl font-semibold mb-4">Development</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Start the development server:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                <code>
                  npm run dev
                </code>
              </pre>
              <p className="text-gray-600 dark:text-gray-300">
                Open <a href="http://localhost:3000" className="text-blue-600 dark:text-blue-400 hover:underline">http://localhost:3000</a> in your browser.
              </p>
            </div>
          </Card>
          
          <Card>
            <h2 className="text-xl font-semibold mb-4">Building</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Build for production:
              </p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                <code>
                  npm run build<br />
                  npm start
                </code>
              </pre>
            </div>
          </Card>
          
          <div className="md:col-span-3">
            <Card>
              <h2 className="text-2xl font-semibold mb-4">Components</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our boilerplate includes several pre-built components to help you get started quickly.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Button</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A customizable button component with different variants and sizes.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mt-2">
                    <code>
                      {`import { Button } from '@/components/Button';\n\n<Button>Default Button</Button>\n<Button variant="secondary">Secondary Button</Button>\n<Button variant="outline">Outline Button</Button>`}
                    </code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Card</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A container for displaying content in a contained box.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mt-2">
                    <code>
                      {`import { Card } from '@/components/Card';\n\n<Card>\n  <h2>Card Title</h2>\n  <p>Card content goes here.</p>\n</Card>`}
                    </code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Container</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A wrapper for consistent layout widths.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mt-2">
                    <code>
                      {`import { Container } from '@/components/Container';\n\n<Container>\n  <h1>Page Title</h1>\n  <p>Page content goes here.</p>\n</Container>`}
                    </code>
                  </pre>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <Card>
              <h2 className="text-2xl font-semibold mb-4">Custom Hooks</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our boilerplate includes several custom hooks to help you manage state and side effects.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">useForm</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A hook for managing form state with validation.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mt-2">
                    <code>
                      {`import { useForm } from '@/hooks/useForm';\n\nconst { values, handleChange, handleSubmit } = useForm({\n  initialValues: { name: '', email: '' },\n  onSubmit: (values) => console.log(values),\n});`}
                    </code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">useLocalStorage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A hook for persisting state in localStorage.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mt-2">
                    <code>
                      {`import { useLocalStorage } from '@/hooks/useLocalStorage';\n\nconst [value, setValue] = useLocalStorage('key', 'initial value');`}
                    </code>
                  </pre>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
} 