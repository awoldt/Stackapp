import { z } from "zod";

export type Stack = z.infer<typeof StackModel>;

export const StackModel = z.object({
  aid: z.string().trim(), // THE ID OF THE ACCOUNT DOCUMENT THAT CREATED THE STACK
  apis_used: z.array(z.string().trim()).nullable(),
  clouds_used: z.array(z.string().trim()).nullable(),
  created_on: z.coerce.date(),
  databases_used: z.array(z.string().trim()).nullable(),
  description: z.string().max(2000).trim(),
  frameworks_used: z.array(z.string().trim()).nullable(),
  github_repo_id: z.number().nullable(),
  icon_filename: z.string().trim(),
  icon_url: z.string().trim(),
  languages_used: z.array(z.string().trim()),
  likes: z.number(),
  name: z.string().trim(),
  thumbnail_filename: z.string().trim(),
  thumbnail_url: z.string().trim(),
  website_url: z.string().url().trim().nullable(),
});
