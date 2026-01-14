"use client";

import {
  Background1,
  Background2,
  Background3,
  Background4,
  Background5,
} from "@/public/images";

export default function SectionPannelLanding() {
  const listPannel = [
    {
      title_VN: "EARTH ESSENCE",
      title_EN: "EARTH ESSENCE",
      link_VN: "KHÁM PHÁ BỘ SƯU TẬP",
      link_EN: "EXPLORE COLLECTION",
      img: Background1.src,
    },
    {
      title_VN: "",
      title_EN: "",
      link_VN: "KHÁM PHÁ BỘ SƯU TẬP",
      link_EN: "EXPLORE COLLECTION",
      img: Background2.src,
    },
    {
      title_VN: "MÙA HÈ BẤT TẬN",
      title_EN: "ENDLESS SUMMER",
      link_VN: "KHÁM PHÁ BỘ SƯU TẬP",
      link_EN: "EXPLORE COLLECTION",
      img: Background3.src,
    },
    {
      title_VN: "",
      title_EN: "",
      link_VN: "KHÁM PHÁ BỘ SƯU TẬP",
      link_EN: "EXPLORE COLLECTION",
      img: Background4.src,
    },
    {
      title_VN: "Đỉnh Cao Của Sự Thanh Lịch FASHION SHOW 2024",
      title_EN: "The Edge of Elegance FASHION SHOW 2024",
      link_VN: "BỘ SƯU TẬP THỜI TRANG",
      link_EN: "OUR COLLECTION",
      img: Background5.src,
    },
  ];

  return (
    <>
      {listPannel.map((pannel, index) => (
        <div
          key={index}
          className="h-dvh bg-cover bg-center bg-fixed flex items-center justify-center flex-col"
          style={{ backgroundImage: `url(${pannel.img})` }}
        >
          <h1 className="text-6xl font-semibold text-center text-white mb-4 w-3xl">
            {pannel.title_VN}
          </h1>
          <a
            className="text-3xl font-bold uppercase text-[#333] bg-white px-4 py-3 text-center rounded"
            href="#"
          >
            {pannel.link_VN}
          </a>
        </div>
      ))}
    </>
  );
}
