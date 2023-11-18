import { z } from "zod";

export type UserProfile = z.infer<typeof ProfileModel>;

export const ProfileModel = z.object({
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
  username_lowercase: z.string().toLowerCase(), // used to keep track of unqiue usernames (ex: AWOLDT === awoldt)
});

export type UserUpdateProfile = z.infer<typeof UpdateProfileModel>;

// this object represents the object that is used to update the profile data in database
// this is serperate from regular profile obj as some of the fields are not included when user upadates profile
// for example, created_on is only required when account is created, it is not needed for updating profile
// using the old profile model would throw error if user attempted to update profile cause some properties would not be present

export const UpdateProfileModel = z.object({
  bio: z.optional(z.string().trim().nullable()),
  profile_pic: z.optional(z.string().trim().nullable()),
  profile_pic_filename: z.optional(z.string().trim().nullable()),
});
