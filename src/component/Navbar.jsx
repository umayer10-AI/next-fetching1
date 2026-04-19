"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const p = usePathname()

    const links = <>
        <Link href={"/"} className={p==="/" ? "btn btn-accent btn-outline" : "btn"}>Home</Link>
        <Link href={"/about"} className={p==="/about" ? "btn btn-accent btn-outline" : "btn"}>About</Link>
        <Link href={"/post"} className={p==="/post" ? "btn btn-accent btn-outline" : "btn"}>Post</Link>
        <Link href={"/product"} className={p==="/product" ? "btn btn-accent btn-outline" : "btn"}>Product</Link>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;