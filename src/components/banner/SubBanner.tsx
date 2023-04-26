import Link from "next/link";
import Image from "next/image";
import { Navigation } from "swiper";

import CustomSwiper from "../ui/Swiper";
import Banner from "../../../public/images/sub-banner-1.jpg";

const news = [
    {
        title: "Ongoing Spot Campaigns",
        date: "04-18",
    },
    {
        title: "Ongoing Spot Campaigns",
        date: "04-18",
    },
    {
        title: "Ongoing Spot Campaigns",
        date: "04-18",
    },
];

function SubBanner() {
    const images = [
        <Image src={Banner} alt="sub-banner" className="rounded" />,
        <Image src={Banner} alt="sub-banner" className="rounded" />,
        <Image src={Banner} alt="sub-banner" className="rounded" />,
        <Image src={Banner} alt="sub-banner" className="rounded" />,
        <Image src={Banner} alt="sub-banner" className="rounded" />,
        <Image src={Banner} alt="sub-banner" className="rounded" />,
        <Image src={Banner} alt="sub-banner" className="rounded" />,
        <Image src={Banner} alt="sub-banner" className="rounded" />,
    ];

    return (
        <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex">
                {news.map((item, index) => {
                    return (
                        <div key={index} className="inline-flex flex-1 justify-between my-[20px] me-3 text-[14px]">
                            <Link href="/" className="text-ellipsis line-clamp-1 ...">
                                {item.title}
                            </Link>
                            <span className="w-[50px] text-[rgba(0,20,42,.6)]">{item.date}</span>
                        </div>
                    );
                })}
            </div>
            <CustomSwiper slides={images} modules={[Navigation]} loop navigation spaceBetween={24} allowTouchMove={false} slidesPerGroup={4} slidesPerView={4} />
        </div>
    );
}

export default SubBanner;
