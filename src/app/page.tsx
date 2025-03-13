import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="py-12 md:py-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Your Next.js Boilerplate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
            A modern, feature-rich starting point for your Next.js projects with TypeScript, 
            Tailwind CSS, and a collection of pre-built components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/docs#getting-started">
              <Button size="lg">
                Get Started
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Pre-built components and utilities to speed up your development process.
                </p>
              </div>
            </Card>
            
            <Card className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Easily customize and extend the boilerplate to fit your project needs.
                </p>
              </div>
            </Card>
            
            <Card className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built with modern best practices for performance, accessibility, and SEO.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Edit <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/app/page.tsx</code> to customize this page.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Explore the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/components</code> directory to see available components.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Check out <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/hooks</code> for custom React hooks.
            </p>
          </div>
          <div className="mt-6">
            <Link href="/docs#getting-started">
              <Button>Start Building</Button>
            </Link>
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://nextjs.org/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="mr-4">
                    <Image
                      src="/next.svg"
                      alt="Next.js"
                      width={40}
                      height={40}
                      className="dark:invert"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Next.js Documentation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Learn about Next.js features and API.
                    </p>
                  </div>
                </div>
              </Card>
            </a>
            
            <a 
              href="https://tailwindcss.com/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="mr-4 text-teal-500 dark:text-teal-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 64 64">
                      <path fill="currentColor" d="M32 16.3c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C35.744 29.39 38.808 32.5 45.5 32.5c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C41.756 19.41 38.692 16.3 32 16.3zM18.5 32.5c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C22.244 45.59 25.308 48.7 32 48.7c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C28.256 35.61 25.192 32.5 18.5 32.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tailwind CSS Documentation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Style your application with Tailwind CSS.
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
