"use client";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
export function ConvexImage({ imageId }: { imageId: Id<"_storage"> }) {
	const imageUrl = useQuery(api.files.getImageUrl, { imageId });

	return (
		imageUrl && (
			<Image alt="image test image" width={200} height={200} src={imageUrl} />
		)
	);
}
