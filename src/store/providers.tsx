"use client";
import React from "react";
import { store } from "@/store/store";
import { Provider } from "react-redux";

interface PropsType {
    children: React.ReactNode;
}

export default function Providers({ children }: PropsType) {
    return <Provider store={store}>{children}</Provider>;
}
