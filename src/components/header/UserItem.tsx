import Image from "next/image";

import ArrowRight from "../../../public/images/arrow_right.svg";
import Logo from "../../../public/next.svg";

interface dataUserLoggedIn {
    title?: string;
    image?: string;
    children?: Array<{
        title: string;
    }>;
}

function UserItem({ title, image, children }: dataUserLoggedIn) {
    return (
        <div className="after:content-[''] after:absolute after:top-[20px] after:w-full after:h-[50px] after:bg-transparent">
            {children?.map((item, index) => {
                return (
                    <div key={index} className="group-hover:flex hidden group/item absolute top-[56px] left-[50%] translate-x-[-50%] items-center w-[350px] h-[300px] ps-4 py-[11px] pe-[32px] hover:bg-[#737E8D]/[.08] cursor-pointer shadow-dropdown">
                        <Image src={Logo} alt="icon" width={36} className="h-[36px] me-4" />
                        <div>
                            <h4 className="font-bold">{item.title}</h4>
                        </div>
                        <Image src={ArrowRight} alt="arrow-right" className="group-hover/item:block hidden absolute right-[20px] " />
                    </div>
                );
            })}
        </div>
    );
}

export default UserItem;
