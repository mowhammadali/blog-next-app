'use client'
import React from "react";

type PropsType = {
    onclick?: () => any;
    className?: string;
    variant?: string;
    children?: React.ReactNode;
};

export default function Button({
    onclick,
    variant = "primary",
    className = '',
    children = null,
    ...rest
}: PropsType) {
    return <button className={`btn btn-${variant}`} onClick={onclick} {...rest}>
        {children}
    </button>;
}
