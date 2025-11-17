import z from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"];
export const courseStatus = ["Draft", "Published", "Archived"];

export const courseCategories = [
  "Development",
  "Bussines",
  "Finance",
  "It & Software",
  "Office productivity",
  "Desgign",
  "Marketing",
  "Music",
  "Health & Fitness",
  "Personal development",
  "Teachig and academics",
];

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "File key must be at least 3 characteres long" })
    .max(100, { message: "Title must be at most 100 characters long" }),
  description: z
    .string()
    .min(3, { message: "Descripton must be at least 3 characteres long" })
    .max(300, { message: "Descripton must be at most 100 characters long" }),
  fileKey: z.string().min(1, { message: "File key is required" }),
  price: z.coerce
    .number<number>()
    .min(1, { message: "Price must be a positive number" }),
  duration: z.coerce
    .number<number>()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(500, { message: "Duration must be at most 500 hour" }),
  level: z.enum(courseLevels, { message: "Level is required" }),
  category: z.enum(courseCategories, { message: "Category is required" }),
  smallDescription: z
    .string()
    .min(3, { message: "Small Description must be at least 3 characters" })
    .max(200, {
      message: "Small Description must be at most 200 characters long",
    }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
  status: z.enum(courseStatus, { message: "Status is required" }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
