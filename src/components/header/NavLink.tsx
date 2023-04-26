import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import Arrow from "../../../public/images/arrow.svg";
import ArrowRight from "../../../public/images/arrow_right.svg";
import Logo from "../../../public/next.svg";
import Block from "../../../public/images/block.svg";

interface NavLinkProps {
    position?: string;
    title?: string;
    image?: string;
    children?: {
        title?: string;
        desc?: string;
        image?: string;
    }[];
    overview?: {
        title: string;
    };
    payment?: {
        card: string;
        coin: string;
    };
}

function NavLink({ title, children, image, overview, payment, position }: NavLinkProps) {
    const [show, setShow] = useState<boolean>(true);

    const handleShowAsset = () => {
        setShow(!show);
    };

    return (
        <div className="flex items-center pe-4 after:content-[''] after:absolute after:top-[20px] after:w-full after:h-[50px] after:bg-transparent">
            {children ? (
                <>
                    {title ? <span className="group-hover:text-[#01BC8D]">{title}</span> : <Image src={image || Block} alt="block" width={13} />}
                    <Image src={Arrow} alt="arrow" className="inline-block mx-[5px] group-hover:scale-y-[-1]" />
                    <div className={`group-hover:block hidden absolute ${position === "center" ? "left-[30%] translate-x-[-50%]" : null} top-[52px] w-[400px] max-h-[calc(100vh-100px)] py-4 rounded bg-[#fff] z-[100] overflow-auto shadow-dropdown`}>
                        {/* Overview */}
                        {overview && (
                            <div className="group/overview relative px-4 pb-[14px] hover:bg-[#737E8D]/[.08]">
                                <div className="text-[#000d1d66]">
                                    <span className="me-2">Tổng quan</span>
                                    <FontAwesomeIcon icon={show ? faEye : faEyeSlash} onClick={handleShowAsset} />
                                </div>
                                <div>
                                    <span className="me-2 text-[20px]">{show ? "0" : "***"}</span>
                                    <span className="text-[#000d1d66]">BTC</span>
                                </div>
                                <div className="text-[#000d1d66]">
                                    <span className="me-2">{show ? "0" : "***"}</span>
                                    <span>USD</span>
                                </div>
                                <Image src={ArrowRight} alt="arrow-right" className="group-hover/overview:block hidden absolute right-[20px] " />
                            </div>
                        )}
                        {/*  */}
                        {children?.map((item, index) => {
                            return (
                                <>
                                    {item.title === "Divide" ? (
                                        <hr className="my-[16px] mx-[28px]" />
                                    ) : (
                                        <div key={index} className="group/item relative flex items-center w-full ps-4 py-[11px] pe-[32px] hover:bg-[#737E8D]/[.08] cursor-pointer">
                                            <Image src={Logo} alt="icon" width={36} className="h-[36px] me-4" />
                                            <div>
                                                <h4 className="font-bold">{item.title}</h4>
                                                <p className="text-[12px] text-[#000D1D]">{item.desc}</p>
                                            </div>
                                            <Image src={ArrowRight} alt="arrow-right" className="group-hover/item:block hidden absolute right-[20px] " />
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </div>
                </>
            ) : (
                <Link href="/">{title}</Link>
            )}
        </div>
    );
}

export default NavLink;
