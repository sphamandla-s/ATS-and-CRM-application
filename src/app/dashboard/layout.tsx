import { ReactNode } from "react"
import Sidebar from "@/components/dashboard/sideBar"
import DashboardHeader from "@/components/dashboard/header"



export default async function Layout({ children }: { children: ReactNode }) {

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Sidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <DashboardHeader />
                <main className="p-4 sm:px-6 sm:py-0">
                    {children}
                </main>
            </div>
        </div>
    )
}