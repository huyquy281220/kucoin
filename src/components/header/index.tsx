"use client";
import Link from "next/link";

import NavLink from "./NavLink";
import NavUser from "./NavUser";

const navLinkData = [
    {
        image: "",
        children: [
            {
                title: "a",
                desc: "b",
                image: "",
            },
        ],
    },
    {
        title: "Mua tiền điện tử",
        children: [
            {
                title: "a",
                desc: "b",
                image: "",
            },
        ],
    },
    {
        title: "Thị trường",
    },
    {
        title: "Giao dịch",
        children: [
            {
                title: "a",
                desc: "b",
                image: "",
            },
        ],
    },
    {
        title: "Phái sinh",
        children: [
            {
                title: "a",
                desc: "b",
                image: "",
            },
        ],
    },
    {
        title: "Kiếm tiền",
        children: [
            {
                title: "a",
                desc: "b",
                image: "",
            },
        ],
    },
    {
        title: "NFT",
        children: [
            {
                title: "a",
                desc: "b",
                image: "",
            },
        ],
    },
    {
        title: "Ví",
        children: [
            {
                title: "a",
                desc: "b",
                image: "",
            },
        ],
    },
];

function Header() {
    return (
        <div className="flex justify-between px-[16px] h-[80px]">
            {/* left */}
            <div className="flex items-center">
                <h2>Header</h2>
                {navLinkData.map((item, index) => {
                    return (
                        <div key={index} className="group relative flex items-center cursor-pointer">
                            <NavLink title={item.title} children={item.children} image={item.image} />
                        </div>
                    );
                })}
                <Link href="/" className="flex items-center py-[7px] px-[10px] rounded-[8px] text-[14px] text-[#21C397] bg-[#2DBD96]/[.12] ">
                    Khu vực người mới
                </Link>
            </div>
            {/* right */}
            <NavUser />
        </div>
    );
}

export default Header;
