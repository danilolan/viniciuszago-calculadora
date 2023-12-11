import React from "react";

export default function Box(
    {
        children
    }:
    {
        children: React.ReactNode
    }
){
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm h-72 w-[320px]">
            {children}
        </div>
    )
}