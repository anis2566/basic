"use server"

import { db } from "@/lib/prisma"
import { StudentSchema, StudentSchemaType } from "./schema"

export const STUDENT_REGISTER = async (values: StudentSchemaType) => {
    const { data, success } = StudentSchema.safeParse(values)
    
    if (!success) {
        throw new Error("Invalid input value")
    }

    const studentId = Math.floor(
      100000 + Math.random() * 900000
    )

    await db.student.create({
        data: {
            ...data,
            studentId
        }
    })

    return {
        success: "Registration successful"
    }
}