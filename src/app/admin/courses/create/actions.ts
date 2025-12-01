"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { ApiResponse } from "@/lib/types";
import { type CourseSchemaType, courseSchema } from "@/lib/zodSchemas";
import { headers } from "next/headers";

export async function CreateSchema(
  values: CourseSchemaType,
): Promise<ApiResponse> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    const validation = courseSchema.safeParse(values);
    if (!validation.success) {
      return {
        status: "error",
        message: "Invalid Form Data",
      };
    }
    await prisma.course.create({
      data: {
        ...validation.data,
        userId: session?.user.id as string,
      },
    });
    return {
      status: "success",
      message: "Course created succesfully",
    };
  } catch {
    return {
      status: "error",
      message: "Failed to ctreate course",
    };
  }
}
