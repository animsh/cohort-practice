export interface Env {
	DATABASE_URL: string;
}

import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { Pool } from '@neondatabase/serverless';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const neon = new Pool({ connectionString: env.DATABASE_URL });
		const adapter = new PrismaNeon(neon);
		const prisma = new PrismaClient({ adapter });

		const users = await prisma.user.findMany();
		const result = JSON.stringify(users);
		return new Response(result);
	},
};
