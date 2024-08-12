import { mutation, query } from "./_generated/server";

import { v } from "convex/values";

export const createGerb = mutation({
	args: {
		name: v.string(),
		user: v.any(),
		image: v.any(),
		description: v.any(),
	},
	handler: async (ctx, args) => {
		const create = await ctx.db.insert("gerbs", {
			user: args.user,
			image: args.image,
			name: args.name,
			description: args.description,
			status: true,
			archived: false,
		});
	},
});

export const deleteGerb = mutation({
	args: { id: v.id("gerbs") },
	handler: async (ctx, args) => {
		const deleteGerb = await ctx.db.delete(args.id);
	},
});

export const getGerbs = query({
	args: {},
	handler: async (ctx, args) => {
		const gerbs = await ctx.db.query("gerbs").collect();
		return gerbs;
	},
});

export const getGerbById = query({
	args: { id: v.id("gerbs") },
	handler: async (ctx, args) => {
		const flag = await ctx.db.get(args.id);
		return flag;
	},
});

export const editGerb = mutation({
	args: {
		id: v.id("gerbs"),
		name: v.optional(v.string()),
		description: v.optional(v.any()),
	},
	handler: async (ctx, args) => {
		await ctx.db.patch(args.id, {
			name: args.name,
			description: args.description,
		});
	},
});
