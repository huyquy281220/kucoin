import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import NavLink from "./NavLink";
import UserItem from "./UserItem";
import DownloadTooltip from "../tooltip/Download";
import LangTooltip from "../tooltip/Languege";

const navUserData = [
    {
        position: "center",
        title: "Tài sản",
        overview: {
            title: "",
        },
        children: [
            {
                title: "Tài khoản chính",
                image: "",
            },
            {
                title: "Tài khoản Exchange",
                image: "",
            },
            {
                title: "Tài khoản ký quỹ",
                image: "",
            },
            {
                title: "Tài khoản Futures",
                image: "",
            },
            {
                title: "Tài khoản Bot giao dịch",
                image: "",
            },
            {
                title: "Tài khoản tài chính",
                image: "",
            },
        ],
        payment: {
            card: "",
            coin: "",
        },
    },
    {
        position: "center",
        title: "Lệnh",
        children: [
            {
                title: "Lệnh Spot",
                image: "",
            },
            {
                title: "Lệnh Ký quỹ",
                image: "",
            },
            {
                title: "Lệnh Futures",
                image: "",
            },
            {
                title: "Lệnh chốt lãi",
                image: "",
            },
            {
                title: "Divide",
            },
            {
                title: "Lệnh mua Crypto",
                image: "",
            },
            {
                title: "Divide",
            },
            {
                title: "Lịch sử Giao dịch Spot",
                image: "",
            },
            {
                title: "Lịch sử Giao dịch Ký quỹ",
                image: "",
            },
            {
                title: "Lịch sử Giao dịch hợp đồng",
                image: "",
            },
        ],
    },
];

const listUserData = [
    {
        title: "",
        image: "",
        children: [
            {
                title: "",
            },
        ],
    },
];

function NavUser() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="flex items-center">
                {navUserData.map((item, index) => {
                    return (
                        <div key={index} className="group relative flex items-center cursor-pointer">
                            <NavLink title={item.title} position={item.position} childrens={item.children} overview={item.overview} payment={item.payment} />
                        </div>
                    );
                })}
                {listUserData.map((item, index) => {
                    return (
                        <div key={index} className="group relative w-[28px] h-[28px] bg-[#000] cursor-pointer">
                            <UserItem key={index} title={item.title} image={item.image} children={item.children} />
                        </div>
                    );
                })}
                <FontAwesomeIcon icon={faBell} className="ms-5 text-[20px] cursor-pointer" />
                <FontAwesomeIcon data-tooltip-id="download" icon={faCircleDown} className="ms-5 text-[20px] cursor-pointer" />
                <DownloadTooltip />
                <FontAwesomeIcon icon={faGlobe} onClick={() => setIsOpen(!isOpen)} className="ms-5 text-[20px] cursor-pointer" />
                <div className="ms-5 cursor-pointer">USD</div>
            </div>
            <LangTooltip isOpen={isOpen} onHandleCloseModal={handleCloseModal} />
        </>
    );
}

export default NavUser;
