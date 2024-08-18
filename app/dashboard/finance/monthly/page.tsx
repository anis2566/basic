import Link from "next/link";
import { Metadata } from "next";
import { Class, PaymentStatus } from "@prisma/client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ContentLayout } from "../../_components/content-layout"
import { db } from "@/lib/prisma";
import { PaymentList } from "./_components/payment-list";
import { Header } from "./_components/header";
import { CustomPagination } from "@/components/custom-pagination";

export const metadata: Metadata = {
    title: "BEC | Monthly Payment",
    description: "Basic Education Care",
};

interface Props {
    searchParams: {
        session: string;
        className: Class;
        id: string;
        name: string;
        status: PaymentStatus;
        page: string;
        perPage: string;
    }
}

const MonthlyPayment = async ({ searchParams }: Props) => {
    const { session, className, id, name, status, page, perPage } = searchParams;
    const itemsPerPage = parseInt(perPage) || 5;
    const currentPage = parseInt(page) || 1;
    const formatedSession = session ? parseInt(session) : new Date().getFullYear()
    const formatedId = id ? id.toString() : undefined;

    const payments = await db.student.findMany({
        where: {
            session: formatedSession,
            ...(className && { class: className }),
            ...(formatedId && { id: { contains: formatedId, mode: "insensitive" } }),
            ...(name && { name: { contains: name, mode: "insensitive" } }),
            ...(status && {
                payments: {
                    some: {
                        status: status
                    }
                }
            })

        },
        select: {
            id: true,
            name: true,
            studentId: true,
            imageUrl: true,
            class: true,
            payments: true
        },
        orderBy: {
            createdAt: "desc"
        },
        skip: (currentPage - 1) * itemsPerPage,
        take: itemsPerPage,
    })

    const totalPayment = await db.student.count({
        where: {
            session: formatedSession,
            ...(className && { class: className }),
            ...(formatedId && { id: { contains: formatedId, mode: "insensitive" } }),
            ...(name && { name: { contains: name, mode: "insensitive" } }),
            ...(status && {
                payments: {
                    some: {
                        status: status
                    }
                }
            })
        }
    })

    const totalPage = Math.ceil(totalPayment / itemsPerPage)

    return (
        <ContentLayout title="Payment">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/dashboard">Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Monthly Payment</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <Card className="mt-4">
                <CardHeader>
                    <CardTitle>Payment List</CardTitle>
                    <CardDescription>
                        A collection of payment.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Header />
                    <PaymentList payments={payments} />
                    <CustomPagination totalPage={totalPage} />
                </CardContent>
            </Card>
        </ContentLayout>
    )
}

export default MonthlyPayment
