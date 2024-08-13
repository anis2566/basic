import { z } from "zod"
import {Class as PrismaClass, Shift} from "@prisma/client"
const requiredString = z.string().trim().min(1, {message: "required"})

export const StudentSchema = z.object({
  name: requiredString.min(4, { message: "min length 4" }),
  fName: requiredString.min(4, { message: "min length 4" }),
  mName: requiredString.min(4, { message: "min length 4" }),
  gender: requiredString,
  class: z
    .nativeEnum(PrismaClass)
    .refine((val) => Object.values(PrismaClass).includes(val), {
      message: "required",
    }),
  shift: z
    .nativeEnum(Shift)
    .refine((val) => Object.values(Shift).includes(val), {
      message: "required",
    }),
  school: requiredString.min(4, { message: "min length 4" }),
  section: z.string().optional(),
  fPhone: requiredString.min(11, { message: "Invalid phone number" }),
  mPhone: requiredString.min(11, { message: "Invalid phone number" }),
  imageUrl: requiredString,
});

export type StudentSchemaType = z.infer<typeof StudentSchema>