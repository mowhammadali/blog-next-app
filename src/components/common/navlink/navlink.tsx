'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PropsType = {
    path: string,
    children: React.ReactNode
}

export default function NavLink({ path , children , ...rest }: PropsType) {
    const pathname = usePathname();
    

    return <Link href={path} className={`${pathname === path ? 'text-secondary' : 'text-base-content'} select-none`} {...rest}>
        {children}
    </Link>
}
