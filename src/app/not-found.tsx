'use client';
import { redirect } from 'next/navigation'
import React from 'react';

export default function NotFound() {
    return (
        <div className='mx-auto my-20 w-fit flex flex-col items-center gap-6'>
            <h2 className='text-3xl'>صفحه مورد نظر یافت نشد</h2>
            <button className="btn btn-neutral" onClick={() => redirect('/')}>بازگشت به صفحه اصلی</button>
        </div>
    )
}
