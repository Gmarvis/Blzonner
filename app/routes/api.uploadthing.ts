import { createRouteHandler } from "uploadthing/remix";
import { getAuth } from "@clerk/remix/ssr.server";

import { createUploadthing, type FileRouter } from "uploadthing/remix";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const uploadRouter = {
  videoOrAudioUploader: f({
    video: {
      maxFileSize: "32MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ event }) => {
      const { userId } = await getAuth(event);

      if (!userId) throw new UploadThingError("Unauthorized");

      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);

      return { uploadedBy: metadata.userId, fileUrl: file.url };
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;

export const { loader, action } = createRouteHandler({
  router: uploadRouter,
});
