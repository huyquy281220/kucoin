import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js/auto";
import axios from "axios";

import SubBanner from "./SubBanner";
import SpotLight from "../../../public/images/spotlight.png";
import LogoSpotLight from "../../../public/images/logo-spotlight.svg";
import ArrowRight from "../../../public/images/arrow_right.svg";

function Banner() {
    // const [chartData, setChartData] = useState<ChartData>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await axios.get("https://api.kucoin.com/api/v1/market/candles?type=1min&symbol=BTC-USDT&startAt=1566703297&endAt=1566789757", {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "KC-APi-SIGN": `${process.env.KUCOIN_API_SECRET}`,
                        "KC-API-TIMESTAMP": Date.now(),
                        "KC-API-KEY": `${process.env.KUCOIN_API_KEY}`,
                        "KC-API-PASSPHRASE": "kucoin2812",
                        "KC-API-KEY-VERSION": "2",
                    },
                });
                const chartData = response.data.data.map((candle: number[]) => ({
                    x: new Date(candle[0]),
                    y: candle.slice(1),
                }));
                // setChartData({
                //     labels: chartData.map((candle) => candle.x.toLocaleTimeString()),
                //     datasets: [
                //         {
                //             label: "BTC/USDT",
                //             data: chartData,
                //             borderColor: "rgba(255, 99, 132, 1)",
                //             backgroundColor: "rgba(255, 99, 132, 0.2)",
                //         },
                //     ],
                // });
                // setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchChartData();
    }, []);

    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    return (
        <>
            <div className="relative flex items-center w-full h-[440px] bg-gradient-to-l from-[#0a1221] to-[#0c1a2a] ">
                <Image src={SpotLight} alt="spot-light" className="absolute right-0 w-[816px] h-full" />
                <div className="w-full max-w-[1200px] mx-auto ">
                    <Image src={LogoSpotLight} alt="logo-spot-light" />
                    <h1 className="mb-6 text-[40px] text-[#fff] font-bold">Nhận SUI trên KuCoin Spotlight</h1>
                    <Link
                        href="https://www.kucoin.com/vi/land/spotlight_r6/153_Sui"
                        target="_blank"
                        className="
                        inline-block min-w-[200px] px-[20px] py-[14px] border-[1px] rounded-[4px] 
                        bg-gradient-to-r from-[#01bc8d33] to-[#01bc8d03] border-primary
                    "
                    >
                        <span className="text-[#fff] font-[500]">Nhận SUI ngay</span>
                        <Image src={ArrowRight} alt="arrow-right" className="inline-block w-[25px] h-[15px] ms-4 " />
                    </Link>
                </div>
            </div>
            <SubBanner />
            {/* <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "BTC/USDT",
                        },
                        legend: {
                            display: true,
                            position: "bottom",
                        },
                    },
                    scales: {
                        x: {
                            type: "time",
                            time: {
                                unit: "minute",
                                displayFormats: {
                                    minute: "h:mm:ss A",
                                },
                            },
                            title: {
                                display: true,
                                text: "Time",
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Price (USDT)",
                            },
                        },
                    },
                }}
            /> */}
        </>
    );
}

export default Banner;
// const axios = require('axios').default;

// const API_KEY = '<YOUR_API_KEY>';
// const API_SECRET = '<YOUR_API_SECRET>';

// const endpoint = 'https://api.kucoin.com/api/v1/user/create';
// const email = 'example@email.com';
// const password = 'password123';
// const country = 'US';
// const nickname = 'John Doe';

// axios.post(endpoint, {
//   email,
//   password,
//   country,
//   nickname
// }, {
//   headers: {
//     'Content-Type': 'application/json',
//     'KC-API-KEY': API_KEY,
//     'KC-API-NONCE': Date.now(),
//     'KC-API-SIGNATURE': generateSignature(API_SECRET),
//   }
// }).then((response) => {
//   console.log(response.data);
// }).catch((error) => {
//   console.error(error);
// });

// function generateSignature(secret) {
//   const nonce = Date.now();
//   const strForSign = `${nonce}POST${endpoint}`;
//   const signature = crypto.createHmac('sha256', secret).update(strForSign).digest('hex');
//   return signature;
// }
