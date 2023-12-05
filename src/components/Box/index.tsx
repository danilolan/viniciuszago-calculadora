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
        <div className="bg-white p-8 rounded-lg shadow-sm overflow-y-auto h-72">
            {children}
        </div>
    )
}