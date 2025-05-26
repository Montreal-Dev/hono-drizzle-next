# hono-drizzle-next

A monorepo template integrating **Hono.js**, **Drizzle ORM**, **Next.js 14**, and **shadcn/ui**. Designed for building modern, full-stack TypeScript applications with a focus on modularity and developer experience.([GitHub][1])

## 🧰 Tech Stack

* **Next.js 14**: Frontend framework for building React applications.
* **Hono.js**: Lightweight web framework for the backend.
* **Drizzle ORM**: Type-safe ORM for database interactions.
* **shadcn/ui**: Component library built with Radix UI and Tailwind CSS.
* **Turborepo**: Monorepo build system for managing multiple packages.
* **pnpm**: Fast, disk space-efficient package manager.([GitHub][2])

## 📦 Monorepo Structure

* `apps/web`: Main Next.js application.
* `packages/ui`: Shared UI components using shadcn/ui.
* `packages/config`: Shared configurations (e.g., Tailwind, ESLint).([GitHub][1])

## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Montreal-Dev/hono-drizzle-next.git
   cd hono-drizzle-next
   ```



2. **Install dependencies**:

   ```bash
   pnpm install
   ```



3. **Run the development server**:

   ```bash
   pnpm dev
   ```



This will start the Next.js application at `http://localhost:3000`.

## 🧩 Adding UI Components

To add a new component (e.g., `button`) to the `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```



This will place the UI component in the `packages/ui/src/components` directory.

## 🎨 Tailwind CSS Configuration

The `tailwind.config.ts` and `globals.css` are pre-configured to utilize components from the `ui` package.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
