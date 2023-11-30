import { z } from "zod";

export type Stack = z.infer<typeof StackModel>;

export const StackModel = z.object({
  aid: z.string().trim(), // THE ID OF THE ACCOUNT DOCUMENT THAT CREATED THE STACK
  apis_used: z.array(z.string().trim()).nullable(),
  clouds_used: z.array(z.string().trim()).nullable(),
  created_on: z.coerce.date(),
  databases_used: z.array(z.string().trim()).nullable(),
  description: z.string().max(2500).trim(),
  frameworks_used: z.array(z.string().trim()).nullable(),
  github_repo_id: z.number().nullable(),
  github_repo_name: z.string().trim().nullable(),
  icon_filename: z.string().trim(),
  icon_url: z.string().trim(),
  languages_used: z.array(z.string().trim()),
  likes: z.number(),
  name: z.string().trim(),
  thumbnail_filename: z.string().trim(),
  thumbnail_url: z.string().trim(),
  website_url: z.string().url().trim().nullable(),
});

export type UpdatedStack = z.infer<typeof UpadateStackModel>;

// this object represents the object that is used to update the stack data in database
// this is serperate from regular stack obj as some of the fields are not included when user upadates stack
// for example, created_on is only required when account is created, it is not needed for updating stack
// using the old stack model would throw error if user attempted to update stack cause some properties would not be present

export const UpadateStackModel = z.object({
  apis_used: z.optional(z.array(z.string().trim()).nullable()),
  clouds_used: z.optional(z.array(z.string().trim()).nullable()),
  databases_used: z.optional(z.array(z.string().trim()).nullable()),
  description: z.optional(z.string().max(2500).trim()),
  frameworks_used: z.optional(z.array(z.string().trim()).nullable()),
  github_repo_id: z.optional(z.number().nullable()),
  github_repo_name: z.optional(z.string().trim().nullable()),
  icon_filename: z.optional(z.string().trim()),
  icon_url: z.optional(z.string().trim()),
  languages_used: z.optional(z.array(z.string().trim())),
  name: z.optional(z.string().trim()),
  thumbnail_filename: z.optional(z.string().trim()),
  thumbnail_url: z.optional(z.string().trim()),
  website_url: z.optional(z.string().url().trim().nullable()),
});
