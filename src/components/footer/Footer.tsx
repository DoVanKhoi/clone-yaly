import Link from "next/link";
import ScrollToTopButton from "../ScrollToTopButton";
import Image from "next/image";
import { Logo4 } from "@/public/images";

export default function Footer() {
  return (
    <footer className="w-full">
      <ScrollToTopButton />

      {/* NEWSLETTER */}
      <div className="bg-slate-600 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
          <h3 className="text-white text-xl md:text-2xl font-medium">
            Đăng ký nhận bản tin YALY
          </h3>

          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 px-4 py-2 rounded-l-md border border-slate-400 focus:outline-none focus:border-orange-500 bg-gray-400"
            />
            <button className="bg-slate-500 text-white px-4 rounded-r-md hover:bg-slate-400 transition">
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-zinc-600 text-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* LOGO */}
          <div className="space-y-4">
            <div className="flex justify-center gap-3 ">
              <Image src={Logo4} alt="Yaly Couture" width={100} height={100} />
            </div>

            <p className="flex justify-center italic text-sm text-zinc-300">
              &#x002D; Custom Tailoring. Traditional Value &#x002D;
            </p>
          </div>

          {/* DỊCH VỤ KHÁCH HÀNG */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dịch vụ khách hàng</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Liên hệ với chúng tôi</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Địa chỉ cửa hàng</Link>
              </li>
              <li>
                <Link href="#">Trạng thái & Lịch sử đơn hàng</Link>
              </li>
              <li>
                <Link href="#">Chính sách & Vận chuyển và hoàn trả</Link>
              </li>
            </ul>
          </div>

          {/* VỀ YALY */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Về Yaly</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Thương Hiệu YALY COUTURE</Link>
              </li>
              <li>
                <Link href="#">Yaly Couture - Thời Trang May Đo Cao Cấp</Link>
              </li>
              <li>
                <Link href="#">Khách Hàng của YALY</Link>
              </li>
              <li>
                <Link href="#">Cách chọn Sizes</Link>
              </li>
              <li>
                <Link href="#">Nữ - Hướng Dẫn Lấy Số Đo</Link>
              </li>
              <li>
                <Link href="#">Nam - Hướng Dẫn Lấy Số Đo</Link>
              </li>
              <li>
                <Link href="#">Vận Chuyển & Trả Hàng</Link>
              </li>
              <li>
                <Link href="#">Bảo Mật Thông Tin</Link>
              </li>
            </ul>
          </div>

          {/* NỔI BẬT */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nổi bật</h4>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>
                <Link href="#">Calla Diva: The New Shape of Grace</Link>
              </li>
              <li>
                <Link href="#">
                  Satin Seduction: Feel the touch, Own the moment
                </Link>
              </li>
              <li>
                <Link href="#">
                  Khám phá Bộ sưu tập váy lễ hội mới của Yaly
                </Link>
              </li>
              <li>
                <Link href="#">Earth Essence New Collection</Link>
              </li>
              <li>
                <Link href="#">Portofino Prestige Collection</Link>
              </li>
              <li>
                <Link href="#">Endless Summer Collection</Link>
              </li>
              <li>
                <Link href="#">Modern Gentleman Collection</Link>
              </li>
              <li>
                <Link href="#">The Edge of Elegance - Fashion Show 2024</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-zinc-700 text-zinc-300 text-center text-sm py-3">
        © 2024 YALY COUTURE All right reserved. Developed by PNL.
      </div>
    </footer>
  );
}
