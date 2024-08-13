import Link from "next/link";
import { Metadata } from "next";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import { ContentLayout } from "../../_components/content-layout"
import { AdmissionForm } from "./_components/admission-form";

export const metadata: Metadata = {
  title: "Basic | Admission",
  description: "Basic Education Care",
};

const Admission = () => {
    return (
        <ContentLayout title="Admission">
            <Breadcrumb>
                <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                    <Link href="/dashboard">Dashboard</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Admission</BreadcrumbPage>
                </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            
            <AdmissionForm />
        </ContentLayout>
    )
}

export default Admission;