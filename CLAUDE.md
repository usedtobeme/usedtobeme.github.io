# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a React-based portfolio website for Iki Amortegui's professional profile, designed to be deployed as a GitHub Pages site.

## Setup and Development Commands
- `pnpm install` - Install dependencies
- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build locally
- `pnpm run deploy` - Deploy to GitHub Pages

## Architecture Notes
- Portfolio site showcasing professional profile
- Static site optimized for GitHub Pages deployment
- React components for different portfolio sections (About, Projects, Skills, Contact)
- Responsive design for mobile and desktop viewing

## Key Files and Structure
- `/src/components/` - Reusable React components
- `/src/pages/` - Main page components
- `/src/assets/` - Images, documents (resume PDF), and static files
- `/public/` - Public assets and favicon
- Main resume PDF available at: `/home/usedtobeme/Downloads/Iki Amortegui's Resume.pdf`

## GitHub Pages Deployment
- Build output should target `/docs` folder or `gh-pages` branch
- Ensure proper base URL configuration for GitHub Pages subdirectory
- Static assets must use relative paths for proper deployment