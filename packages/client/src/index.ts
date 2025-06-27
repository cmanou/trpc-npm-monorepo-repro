/**
 * This is the client-side code that uses the inferred types from the server
 */
import {
  createTRPCClient,
  httpBatchStreamLink,
  httpSubscriptionLink,
  splitLink,
} from "@trpc/client";
/**
 * We only import the `AppRouter` type from the server - this is not available at runtime
 */
import type { AppRouter } from "@acme/server";
import waitPort from "wait-port";

// Initialize the tRPC client
const trpc = createTRPCClient<AppRouter>({
  links: [
    splitLink({
      condition: (op) => op.type === "subscription",
      true: httpSubscriptionLink({
        url: "http://localhost:3000",
      }),
      false: httpBatchStreamLink({
        url: "http://localhost:3000",
      }),
    }),
  ],
});

await waitPort({
  host: "localhost",
  port: 3000,
});

const result = await trpc.hello.query();
console.log(result);
