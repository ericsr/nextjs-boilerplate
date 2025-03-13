# Continuous Integration Setup

This document provides instructions for setting up continuous integration for your Next.js project.

## GitHub Actions

To set up GitHub Actions for your project, create a file at `.github/workflows/ci.yml` with the following content:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - run: npm run lint
```

## Setting Up as a Template Repository

To make this repository a template:

1. Go to your repository on GitHub
2. Click on "Settings" at the top of the repository page
3. Scroll down to the "Template repository" section
4. Check the box that says "Template repository"

This allows you to create new repositories from this template with a single click, preserving all files and folder structure.

## Using Your Template for New Projects

Once you've set up your repository as a template, you can use it for new projects in two ways:

### Method 1: Create a New Repository from the Template (Recommended)

1. Go to your template repository on GitHub
2. Click the green "Use this template" button
3. Select "Create a new repository"
4. Fill in the repository name and other details
5. Click "Create repository from template"

### Method 2: Clone and Reinitialize

If you prefer to start from scratch:

```bash
# Clone the repository
git clone https://github.com/yourusername/nextjs-boilerplate.git my-new-project

# Navigate to the project directory
cd my-new-project

# Remove the Git history
rm -rf .git

# Initialize a new Git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit from boilerplate"

# Create a new repository on GitHub and push
git remote add origin https://github.com/yourusername/my-new-project.git
git branch -M main
git push -u origin main
```