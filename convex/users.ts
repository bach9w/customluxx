import { query } from "./_generated/server";
import { v } from "convex/values";

// Return the last 100 tasks in a given task list.
export const checkUser = query({
	args: { userName: v.optional(v.any()) },
	handler: async (ctx, args) => {
		const user = await ctx.db
			.query("users")
			.filter((q) => q.eq(q.field("name"), args.userName))
			.order("desc")
			.take(1);
		return user;
	},
});
