import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	flags: defineTable({
		image: v.id("_storage"),
		user: v.id("users"),
		description: v.any(),
		name: v.optional(v.string()),
		status: v.boolean(),
		archived: v.boolean(),
	}),
	symbols: defineTable({
		name: v.string(),
		user: v.id("users"),
	}),
	gerbs: defineTable({
		image: v.id("_storage"),
		user: v.id("users"),
		description: v.any(),
		name: v.optional(v.string()),
		status: v.boolean(),
		archived: v.boolean(),
	}),
	files: defineTable({
		storageId: v.any(),
	}),
	users: defineTable({
		name: v.string(),
		password: v.any(),
		tokenIdentifier: v.string(),
	}).index("by_token", ["tokenIdentifier"]),
});
