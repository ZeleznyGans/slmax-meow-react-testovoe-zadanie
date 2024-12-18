import React from "react";
import Link from "next/link";
export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
})  {
    return (
        <div>
            <h1>
                About
            </h1>
            <ul>
                <li><Link href='/about/contact'>Contact</Link></li>
                <li><Link href='/about/team'>Team</Link></li>
            </ul>
            {children}
        </div>
    )
}