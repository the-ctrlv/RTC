import { put } from "@vercel/blob";
import { readFile } from "fs/promises";
import { resolve } from "path";

async function uploadVideos() {
  const videos = [
    { path: "public/videos/about-mob.mp4", name: "about-mob.mp4" },
    { path: "public/videos/about.mp4", name: "about.mp4" },
    { path: "public/videos/home.mp4", name: "home.mp4" },
  ];

  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (!token) {
    console.error(
      "Error: BLOB_READ_WRITE_TOKEN environment variable is not set"
    );
    console.log("Please set it in your .env file or run:");
    console.log("export BLOB_READ_WRITE_TOKEN=your_token_here");
    process.exit(1);
  }

  console.log("Starting video upload to Vercel Blob...\n");

  for (const video of videos) {
    try {
      console.log(`Uploading ${video.name}...`);
      const file = await readFile(resolve(video.path));

      const blob = await put(video.name, file, {
        access: "public",
        token: token,
      });

      console.log(`✓ ${video.name} uploaded successfully`);
      console.log(`  URL: ${blob.url}\n`);
    } catch (error) {
      console.error(`✗ Failed to upload ${video.name}:`, error.message);
    }
  }

  console.log("Upload complete!");
  console.log(
    "\nUpdate your video paths to use these URLs in your components."
  );
}

uploadVideos();
