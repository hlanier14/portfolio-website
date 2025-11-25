import React from "react";

function InitialsLogo({ className = "w-12 h-12" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="ring" x1="0" y1="0" x2="64" y2="64">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
            </defs>

            <circle
                cx="32"
                cy="32"
                r="30"
                fill="#0f172a"
                stroke="url(#ring)"
                strokeWidth="2"
            />

            <text
                x="32"
                y="34"
                fontSize="28"
                fontWeight="bold"
                fill="url(#ring)"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Give You Glory, cursive"
            >
                HL
            </text>
        </svg>
    );
}

export default InitialsLogo;
