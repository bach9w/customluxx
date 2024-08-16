import { query } from "./_generated/server";

import { v } from "convex/values";

export const getProducts = query({
	args: {},
	handler: async (ctx, args) => {
		const tasks = await ctx.db
			.query("products")

			.order("desc")
			.take(100);
		return tasks;
	},
});
