import SocialLogin from "./socialLogin";

export default function RegisterForm() {
    return (
        <>
            <select className="w-full border rounded px-4 py-2">
                <option>Nam</option>
                <option>Nữ</option>
            </select>

            <input className="w-full border rounded px-4 py-2" placeholder="Tên" />
            <input className="w-full border rounded px-4 py-2" placeholder="Họ" />
            <input
                type="email"
                className="w-full border rounded px-4 py-2"
                placeholder="Địa chỉ Email"
            />

            <input
                type="password"
                className="w-full border rounded px-4 py-2"
                placeholder="Mật khẩu"
            />

            <input
                type="password"
                className="w-full border rounded px-4 py-2"
                placeholder="Xác nhận mật khẩu"
            />

            <button className="w-full bg-slate-600 text-white py-3 rounded font-semibold cursor-pointer">
                THAM GIA YALY
            </button>

            <SocialLogin />
        </>
    )
}
