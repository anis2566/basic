"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Class as PrismaClass, Shift} from "@prisma/client"
import { StudentSchema } from "../schema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formatString } from "@/lib/utils"
import { UploadButton } from "@/lib/uploadthing"
import { toast } from "sonner"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Trash2 } from "lucide-react"
import { useMutation } from "@tanstack/react-query"
import { STUDENT_REGISTER } from "../action"

export const AdmissionForm = () => {

    const {mutate: registerStudent, isPending} = useMutation({
        mutationFn: STUDENT_REGISTER,
        onSuccess: (data) => {
            toast.success(data?.success, {
                id: "register"
            })
        },
        onError: (error) => {
            toast.error(error.message, {
                id: "register"
            })
        }
    })

    const form = useForm<z.infer<typeof StudentSchema>>({
        resolver: zodResolver(StudentSchema),
        defaultValues: {
            name: "",
            fName: "",
            mName: "",
            gender: "",
            class: undefined,
            school: "",
            section: "",
            shift: undefined,
            fPhone: "",
            mPhone: "",
            imageUrl: ""
        },
    })
    
    function onSubmit(values: z.infer<typeof StudentSchema>) {
        toast.loading("Registering...", {
            id: "register"
        })
        registerStudent(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-3">
                    {/* <div className="w-[100px] h-[100px] ring-4 ring-primary/80 rounded-full shadow-2xl shadow-primary aspect-square p-2 mx-auto">
                    <img
                        src="/logo.jpg"
                        alt="logo"
                        className="object-cover rounded-full"
                    />
                </div> */}
                <h1 className="text-3xl font-bold text-center text-primary">Admission Form</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter name..." {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Father Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter father name..." {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Mother Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter mother name..." {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem className="">
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                                <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={isPending}
                                className="flex gap-x-3"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="male" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                    Male
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="female" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                    Female
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="others" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Others</FormLabel>
                                </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="school"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>School Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter school name..." {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="section"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Section Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter section name..." {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="class"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Class</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select class" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        Object.values(PrismaClass).map((value, index) => (
                                            <SelectItem value={value} key={index}>{formatString(value)}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="shift"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Shift</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select shift" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        Object.values(Shift).map((value, index) => (
                                            <SelectItem value={value} key={index}>{value}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fPhone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Father Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter father phone..." {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mPhone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Mother Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter mother phone..." {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                {
                                    form.watch("imageUrl") ? (
                                        <div className="relative">
                                            <Avatar>
                                                <AvatarImage src={form.getValues("imageUrl")} />
                                            </Avatar>
                                            <Button type="button" disabled={isPending} onClick={() => form.setValue("imageUrl", "")} variant="ghost" size="icon" className="absolute right-0 top-0">
                                                <Trash2 className="w-5 h-5 text-rose-500" />
                                            </Button>
                                        </div>
                                    ) : (
                                        <UploadButton
                                            endpoint="imageUploader"
                                            onClientUploadComplete={(res) => {
                                                field.onChange(res[0].url)
                                                toast.success("Image uploaded")
                                            }}
                                            onUploadError={(error: Error) => {
                                                toast.error("Image upload failed")
                                            }}
                                        />
                                    )
                                }
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="max-w-fit" disabled={isPending}>Submit</Button>
                </div>
            </form>
        </Form>
    )
}