import { mutation, query } from "./_generated/server";

import { v } from "convex/values";

export const createFlag = mutation({
	args: {
		name: v.string(),
		user: v.any(),
		image: v.any(),
		description: v.any(),
	},
	handler: async (ctx, args) => {
		const create = await ctx.db.insert("flags", {
			user: args.user,
			image: args.image,
			name: args.name,
			description: args.description,
			status: true,
			archived: false,
		});
	},
});

export const deleteFlag = mutation({
	args: { id: v.id("flags") },
	handler: async (ctx, args) => {
		const deleteFlag = await ctx.db.delete(args.id);
	},
});

export const getFlags = query({
	args: {},
	handler: async (ctx, args) => {
		const flags = await ctx.db.query("flags").collect();
		return flags;
	},
});

export const getFlagById = query({
	args: { id: v.id("flags") },
	handler: async (ctx, args) => {
		const flag = await ctx.db.get(args.id);
		return flag;
	},
});

export const editFlag = mutation({
	args: {
		id: v.id("flags"),
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
