import { initTRPC } from "@trpc/server";

/**
 * Initialization of tRPC backend
 */
const t = initTRPC.create({
  // ..,
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
