# Book Store Frontend

This project is the frontend for a Book Store application. It provides a user interface for searching and marking books as favorites. The project emphasizes performance and developer experience, utilizing a modern tech stack.

## Features

- **Debounced Search**: Implements a custom `useDebounce` hook to optimize search input handling, improving performance and user experience by reducing the number of API calls.
- **Path Aliases**: Utilizes TypeScript path aliases for cleaner and more manageable imports, making the codebase easier to navigate and maintain.
- **Tailwind CSS**: Employs Tailwind CSS for styling, allowing for rapid UI development with utility-first classes for a custom, responsive design.
- **Vite + SWC + TypeScript**: Leverages Vite as the build tool, which uses SWC for super-fast development rebuilds and TypeScript for type-safe code at compile time.

### Prerequisites

Before running the project, ensure you have `pnpm` installed on your system. If you don't have `pnpm`, install it globally using the following command:

```bash
npm install -g pnpm
```

## Installing
Clone the repository to your local machine:

```bash
git clone https://github.com/svetlyr/orange-frontend-task
```

Navigate to the project directory:

```bash
cd orange-frontend-task
cp .env.example .env.development # Setup the env file

pnpm install
pnpm dev
```