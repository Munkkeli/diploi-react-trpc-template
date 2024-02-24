import { z } from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { publicProcedure, router } from './trpc';

const appRouter = router({
  test: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    return { foo: 'bar' as const, input };
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3001);

console.log('Server listening at :3001');
