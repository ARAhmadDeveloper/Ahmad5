'use client'
import Link from "next/link";       
import { useRouter } from "next/navigation";
export default function Dashboard(){
    const router = useRouter();
    return(
        <div className="w-full flex-1 flex-col items-center justify-center gap-20 text-xl md:text-3xl lg:text-5xl text-center">
            <h1 className="text-4xl font-bold animate-pulse text-blue-500 ">Dashboard Page</h1>
            <div className="flex flex-col gap-4">
                <Link href="/dashboard/invoices"
                className="text-blue-500 hover:text-blue-600"
                >Invoices</Link>
                <Link href="/dashboard/customers"
                className="text-blue-500 hover:text-blue-600"
                >Customers</Link>
            </div>
        </div>
    )
}