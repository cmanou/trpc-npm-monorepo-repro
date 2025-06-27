import { publicProcedure, router } from "../trpc.js";

export const appRouter = router({
  hello: publicProcedure.query(() => "Hello World"),
});
