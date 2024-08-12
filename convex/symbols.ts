import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createSymbol = mutation({
	args: {
		name: v.string(),
		user: v.any(),
	},
	handler: async (ctx, args) => {
		const create = await ctx.db.insert("symbols", {
			user: args.user,
			name: args.name,
		});
	},
});

export const getAllSymbols = query({
	args: {},
	handler: async (ctx, args) => {
		const symbols = await ctx.db.query("symbols").collect();
		return symbols;
	},
});
