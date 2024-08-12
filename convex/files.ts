import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation({
	args: {},
	handler: async (ctx, args) => {
		return await ctx.storage.generateUploadUrl();
	},
});

export const saveStorageId = mutation({
	args: {
		storageId: v.string(),
	},
	handler: async (ctx, args) => {
		ctx.db.insert("files", {
			storageId: args.storageId,
		});
	},
});

export const getImageUrl = query({
	args: { imageId: v.id("_storage") },
	handler: async (ctx, args) => {
		return await ctx.storage.getUrl(args.imageId);
	},
});
