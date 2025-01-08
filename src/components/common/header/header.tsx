import React from "react";
import Navlink from "@/components/common/navlink/navlink";

export default function Header() {
    const user = false;

    return (
        <div className="w-screen shadow-lg flex justify-between py-4 tablet:px-24 px-8">
            <section className="flex items-center gap-10">
                <Navlink path="/">خانه</Navlink>
                <Navlink path="/blogs">بلاگ ها</Navlink>
            </section>
            <section>
                {user ? (
                    <Navlink path="/profile">حساب کاربری</Navlink>
                ) : (
                    <Navlink path="/signin">ورود</Navlink>
                )}
            </section>
        </div>
    );
}
