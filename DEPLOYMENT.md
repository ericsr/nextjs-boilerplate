# Deployment Guide

This document provides instructions for deploying your Next.js application to various platforms.

## Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. Create an account on [Vercel](https://vercel.com/signup)
2. Install the Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project directory and follow the prompts
4. For subsequent deployments, run `vercel --prod`

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments.

## Netlify

To deploy on Netlify:

1. Create an account on [Netlify](https://app.netlify.com/signup)
2. Create a new site from Git
3. Connect your GitHub repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add an environment variable: `NETLIFY_NEXT_PLUGIN_SKIP=true`
6. Deploy the site

## AWS Amplify

To deploy on AWS Amplify:

1. Create an account on [AWS](https://aws.amazon.com/)
2. Go to the AWS Amplify Console
3. Connect your GitHub repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Deploy the site

## Docker

To deploy using Docker:

1. Create a `Dockerfile` in your project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

2. Create a `.dockerignore` file:

```
node_modules
.next
.git
```

3. Build the Docker image:

```bash
docker build -t nextjs-app .
```

4. Run the Docker container:

```bash
docker run -p 3000:3000 nextjs-app
```

## Custom Server

To deploy on a custom server:

1. Build your application:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

3. Your application will be available at `http://localhost:3000`

## Environment Variables

Remember to set up environment variables for your production environment. You can create a `.env.production` file for production-specific variables.