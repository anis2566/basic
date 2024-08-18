// ADMISSION FEE
import { AssignFeeModal } from "@/app/dashboard/fee/admission/_components/create-fee-modal"
import { DeleteFeeModal } from "@/app/dashboard/fee/admission/_components/delete-fee-modal"
import { UpdateFeeModal } from "@/app/dashboard/fee/admission/_components/update-fee-modal"

// MONTHLY FEE
import { AssignMonthlyFeeModal } from "@/app/dashboard/fee/monthly/_components/create-fee-modal"
import { DeleteMonthlyFeeModal } from "@/app/dashboard/fee/monthly/_components/delete-fee-modal"
import { UpdateMonthlyFeeModal } from "@/app/dashboard/fee/monthly/_components/update-fee-modal"

export const ModalProvider = () => {
    return (
        <>
            {/* ADMISSION FEE */}
            <AssignFeeModal />
            <UpdateFeeModal />
            <DeleteFeeModal />

            {/* MONTHLY FEE */}
            <AssignMonthlyFeeModal />
            <UpdateMonthlyFeeModal />
            <DeleteMonthlyFeeModal />
        </>
    )
}