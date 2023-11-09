import { z } from "zod";

// this object represents the object that is used to update the profile data in database
// this is serperate from regular profile obj as some of the fields are not included when user upadates profile
// for example, created_on is only required when account is created, it is not needed for updating profile
// using the old profile model would throw error if user attempted to update profile cause some properties would not be present

export type UserUpdateProfile = z.infer<typeof UpdateProfileModel>;

export const UpdateProfileModel = z.object({
  bio: z.optional(z.string().trim().nullable()),
  first_name: z.optional(z.string().trim()),
  last_name: z.optional(z.string().trim()),
  profile_pic: z.optional(z.string().trim().nullable()),
  profile_pic_filename: z.optional(z.string().trim().nullable()),
});
