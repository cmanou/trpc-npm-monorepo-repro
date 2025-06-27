# tRPC NPM Monorepo Example

A TypeScript monorepo demonstrating tRPC with client and server packages using npm workspaces.

## Project Structure

```
trpc-monorepo-npm/
├── package.json         # Root workspace configuration
├── package-lock.json
├── tsconfig.base.json   # Base TypeScript configuration
├── .nvmrc               # Node.js version specification
├── packages/
│   ├── client/          # tRPC client package
│   │   ├── src/
│   │   │   └── index.ts # Client implementation
│   │   ├── dist/        # Compiled JavaScript output
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── server/          # tRPC server package
│       ├── src/
│       │   ├── index.ts # Server entry point
│       │   ├── trpc.ts  # tRPC configuration
│       │   └── routers/
│       │       └── _app.ts # API route definitions
│       ├── dist/        # Compiled JavaScript output
│       ├── package.json
│       └── tsconfig.json
└── tooling/
    └── typescript/      # Shared TypeScript configuration
        ├── base.json
        ├── node24.json
        └── package.json
```

## Features

- Type-safe APIs with tRPC
- Monorepo architecture with npm workspaces
- Shared TypeScript configuration
- Development workflow with hot reloading
- Node.js 24+ with ES modules

## Prerequisites

- Node.js 24.0.0 or higher
- npm 9.0.0 or higher

## Setup

1. **Clone the repository**

   ```bash
   git clone git@github.com:trpc/examples-npm-monorepo.git
   cd examples-npm-monorepo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build all packages**
   ```bash
   npm run build
   ```

## Development

### Start both client and server in development mode

```bash
npm run dev
```

### Start only the server

```bash
npm run dev:server
```

### Start only the client

```bash
npm run dev:client
```

## Production

### Start both client and server

```bash
npm run start
```

### Start only the server

```bash
npm run start:server
```

### Start only the client

```bash
npm run start:client
```

## Package Details

### `@acme/server`

The tRPC server package containing:

- API route definitions
- tRPC server configuration
- Type-safe procedure definitions

### `@acme/client`

The tRPC client package containing:

- Client-side tRPC configuration
- Type-safe API calls
- Integration with the server

### `@acme/tsconfig`

Shared TypeScript configuration used across all packages.

## Available Scripts

### Root Level

- `npm run build` - Build all packages
- `npm run dev` - Start both client and server in development mode
- `npm run start` - Start both client and server in production mode

### Server Package (`packages/server`)

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Start development server with hot reload
- `npm run start` - Start production server

### Client Package (`packages/client`)

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Start development client with hot reload
- `npm run start` - Start production client

## Architecture

This monorepo uses npm workspaces to manage multiple packages. The workspace configuration is defined in the root `package.json`:

```json
{
  "workspaces": ["packages/*", "tooling/*"]
}
```

This enables:

- Installing dependencies at the root level
- Running scripts across all packages
- Sharing dependencies between packages
- Maintaining consistent versions across the monorepo

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes with `npm run build` and `npm run dev`
5. Submit a pull request

## License

MIT License - see the LICENSE file for details.
