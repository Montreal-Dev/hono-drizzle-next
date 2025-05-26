
<!-- PROJECT LOGO -->
<div align="center">
      <a href="https://github.com/Montreal-Dev/hono-drizzle-next">
         <img src="https://i.postimg.cc/YqJQLbk2/screencapture-localhost-3000-en-2023-12-21-01-10-11.png" alt="Logo" width="320" height="180">
      </a> 
  <h3 align="center">hono-drizzle-next</h3>

  <p align="center">
   A monorepo template integrating Hono.js, Drizzle ORM, Next.js, and shadcn/ui.
   <br/>
   Designed for quick, full-stack TypeScript applications with a focus on modularity.
    <br />
    <br />
   &middot;
      <a href="/">View Demo</a>
   &middot;
  </p>
</div>

---
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#commands">Commands</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
**hono-drizzle-next** is a full-stack monorepo starter combining:

- **Next.js 15** for high-performance frontend
- **shadcn/ui** for reusable, shared UI components & accelerates prototyping.
- **Hono** for Batteries Included API with fully typed client-server contracts. (RPC) 
- **Drizzle ORM** for database-agnostic & type-safe database access out of the box.

<!-- PROJECT STRUCTURE -->
## Project Structure
```tree
apps/
  ├─ web     # Next.js frontend
  └─ api     # Hono backend

packages/
  ├─ ui          # Shared UI components (shadcn/ui)
  ├─ database    # Drizzle ORM and schema
  └─ ...config      # Shared config: TypeScript, ESLint, Tailwind, etc.
```

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Before running this project, make sure you have the following installed:

- [pnpm](https://pnpm.io/installation) – Fast, disk-efficient package manager
- [PostgreSQL](https://www.postgresql.org/download/) – Open-source SQL database
- [Turborepo](https://turbo.build/repo/docs/install) – High-performance monorepo build system
- [Node.js (v20+)](https://nodejs.org/en/download/) – Required runtime for Turbo and pnpm


### Installation

1. Clone the repo
2. ...

<!-- USAGE EXAMPLES -->
## Commands
### 📦 Root
| Script    | Description                                   |
| --------- | --------------------------------------------- |
| `dev`     | Starts all dev servers via Turborepo          |
| `dev:web` | Starts frontend & backend TypeScript watchers |
| `dev:api` | Runs the Hono API dev server                  |
| `dev:tsc` | Runs all TypeScript compilers in watch mode   |
| `build`   | Builds the whole monorepo                     |
| `lint`    | Runs ESLint across all packages               |
| `format`  | Formats code using Prettier                   |


### 🖥 Web
| Script      | Description                            |
| ----------- | -------------------------------------- |
| `dev`       | Runs Web only                          |
| `dev:web`   | Starts Next.js                         |
| `dev:tsc`   | Watches for TS changes                 |
| `build`     | Builds the Next.js app                 |
| `start`     | Starts the production build            |
| `lint`      | Lints with ESLint                      |
| `lint:fix`  | Fixes lint issues                      |
| `typecheck` | Type-checks without emitting output    |

### 🗄 Database
| Script      | Description                     |
| ----------- | ------------------------------- |
| `db:studio` | Opens Drizzle Studio            |
| `db:check`  | Checks schema diff              |
| `db:pull`   | Introspects current DB schema   |
| `db:push`   | Pushes schema updates to the DB |

<!-- USEFUL LINKS -->
## Usefull Links
[![Hono][hono-shield]][hono-url]
[![Drizzle][drizzle-shield]][drizzle-url]
[![Next.js][next-shield]][next-url]
[![shadcn/ui][shad-shield]][shad-url]
[![Turborepo][turborepo-shield]][turborepo-url]

## license
This project is licensed under the [MIT License](LICENSE).


<!-- MARKDOWN LINKS & IMAGES -->
<!-- __shields -->
[hono-shield]: https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff
[drizzle-shield]: https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000
[next-shield]: https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white
[next-url]: https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white
[shad-shield]: https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff
[turborepo-shield]: https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=fff

<!-- __urls -->
[hono-url]: https://hono.dev
[drizzle-url]: https://orm.drizzle.team
[next-url]: https://nextjs.org
[shad-url]: https://ui.shadcn.dev
[turborepo-url]: https://turbo.build/repo
