"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="mx-auto my-20 w-fit flex flex-col items-center gap-6">
            <h2 className="text-3xl">صفحه مورد نظر یافت نشد</h2>
            <button className="btn btn-neutral" onClick={() => router.push('/')}>
                < FaArrowRightLong />
                بازگشت
            </button>
        </div>
    );
}
