"use client";
import React, { useEffect } from "react";
import Navlink from "@/components/common/navlink/navlink";
import { MdWbSunny } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setDarkMode, setLightMode } from "@/features/theme/themeSlice";

export default function Header() {
    const user = false;
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.theme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className="w-screen shadow-lg flex justify-between py-4 tablet:px-24 px-8">
            <section className="flex items-center gap-10">
                {theme === "night" ? (
                    <MdWbSunny
                        className="text-base-content cursor-pointer"
                        onClick={() => dispatch(setLightMode())}
                    />
                ) : (
                    <BsFillMoonFill
                        className="text-base-content cursor-pointer"
                        onClick={() => dispatch(setDarkMode())}
                    />
                )}
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
