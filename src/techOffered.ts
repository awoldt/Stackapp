import { z } from "zod";

const TechModel = z.object({
  languages: z.array(z.string().trim()),
  databases: z.array(z.string().trim()),
  apis: z.array(z.string().trim()),
  clouds: z.array(z.string().trim()),
  frameworks: z.array(z.string().trim()),
});

// ALL TECH USER CAN SHOWCASE FOR THEIR STACKS
export const TechOffered = TechModel.parse({
  languages: [
    "JavaScript",
    "CSharp",
    "Go",
    "Java",
    "Swift",
    "Rust",
    "Python",
  ].sort(),
  databases: ["MongoDB", "Postgres", "Mysql"].sort(),
  apis: ["Spotify", "Stripe", "Notion", "Slack"].sort(),
  clouds: ["Google Cloud Platform", "AWS"].sort(),
  frameworks: ["Nextjs", "Larvel"].sort(),
});
