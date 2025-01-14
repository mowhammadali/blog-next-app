import type { Metadata } from "next";
import Header from "@/components/common/header/header";
import Providers from "@/store/providers";
import vazirFont from "@/constants/localfont";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: {
        template: "%s | بلاگ اپ",
        default: "بلاگ اپ",
    },
    description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" data-theme="emerald">
            <Providers>
                <body className={`${vazirFont.variable} font-sans`}>
                    <Header />
                    {children}
                </body>
            </Providers>
        </html>
    );
}
