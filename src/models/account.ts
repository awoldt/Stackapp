import { z } from "zod";

export type UserAccount = z.infer<typeof AccountModel>;

export const AccountModel = z.object({
  bio: z.string().trim().nullable(),
  created_on: z.coerce.date(),
  email: z.string().trim().email(),
  first_name: z.string().trim(),
  github_access_token: z.string().trim().nullable(),
  github_account_id: z.string().trim().nullable(),
  last_name: z.string().trim(),
  liked_stacks: z.array(z.string().trim()).nullable(),
  profile_pic: z.string().trim().nullable(),
  profile_pic_filename: z.string().trim().nullable(),
  username: z.string().trim(),
});
