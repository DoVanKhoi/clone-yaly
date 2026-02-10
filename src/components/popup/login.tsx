import SocialLogin from "./socialLogin";

export default function LoginForm() {
    return (
        <>
            <label>
                <span className="text-red-600 pb-2">*</span> Địa chỉ Email
            </label>

            <input
                type="email"
                className="w-full border rounded px-4 py-2"
                placeholder="Địa chỉ Email"
            />

            <label>
                <span className="text-red-600 pb-2">*</span> Mật khẩu
            </label>

            <input
                type="password"
                className="w-full border rounded px-4 py-2"
                placeholder="Mật khẩu"
            />

            <button className="w-full bg-slate-600 text-white py-3 rounded font-semibold cursor-pointer">
                ĐĂNG NHẬP
            </button>

            <div className="text-center">
                <button className="text-blue-600 text-sm hover:text-orange-400 cursor-pointer">
                    Quên mật khẩu
                </button>
            </div>

            <SocialLogin />
        </>
    )
}
