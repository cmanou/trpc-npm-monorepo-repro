import { createHTTPServer } from "@trpc/server/adapters/standalone";

import { appRouter } from "./routers/_app.js";

const server = createHTTPServer({
  router: appRouter,
});

console.log(process.env["PORT"]);
server.listen(process.env["PORT"] ?? 3000, () => {
  console.log(
    `Server is running on port http://localhost:${process.env["PORT"] ?? 3000}`
  );
});

export type AppRouter = typeof appRouter;
