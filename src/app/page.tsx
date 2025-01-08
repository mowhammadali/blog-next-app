import React from "react";

export default function Home() {
    return (
        <div className="w-fit mx-auto my-20 flex flex-col items-center gap-16 p-8">
            <h1 className="text-3xl tablet:text-5xl font-bold text-cener">
                اپلیکیشن مدیریت بلاگ
            </h1>
            <section className="flex flex-col items-center gap-1">
                <p className="text-center">
                    جایی که قراره یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
                </p>
                <p className="text-center">
                    بتونی بلاگ بذاری ، کامنت بذاری و درپنلت همه اتفاقات رو رصد
                    کنی!
                </p>
            </section>
            <section className="flex items-center gap-10">
                <button className="btn btn-ghost border-base-200 border-2 text-slate-500">
                    مطالعه بلاگ ها
                </button>
                <button className="btn btn-secondary sm:btn-primary">
                    مطالعه بلاگ ها
                </button>
            </section>
        </div>
    );
}
