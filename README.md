<img src="https://raw.githubusercontent.com/Basaltic/react-turbo-vite-shadcn-monorepo-template/main/title.png" alt="banner" align="center" />

# React Turbo Vite Shadcn Monorepo Template

A react monorepo template based on turbo & vite. A start point of your project.

## Get Start

### 1. clone the template or click the 「use this template」 button

### 2. setup template

```bash
# go to the project folder
cd your-project-folder-name

# install the dependency
pnpm i

```

### 3. that's it

Use the template as your project's start point. Change it whatever you like.

## Commands

```ts
pnpm run build
pnpm run dev
pnpm run test
pnpm run lint
pnpm run clean
pnpm run format
pnpm run changeset
pnpm run version
```

## File Structure

```ts

| - apps                  // application templates
  | - desktop-tauri         // an tauri based desktop template
  | - desktop-electron      // an electron based desktop template
  | - web-spa               // a web single page application template
| - packages              // shared packages used by applications
  | - tsconfig              // shared typescript configurations
  | - ui                    // shared ui components which are mostly generated by shadcn
| - biome.json            // biome configuration file

```

## Prerequisites

- node 18+
- pnpm 10+
- rust 1.70+
