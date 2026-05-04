import { useState, type FormEvent } from "react";
import { useLogin } from "../../service/authApi";
import { useNavigate, Link } from "react-router"; // أضفنا Link للتنقل

function Login() {
    const { login, loading, error } = useLogin();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const success = await login(form);
        if (success) {
            navigate("/");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-gray-100">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                        Welcome <span className="text-blue-600">Back</span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Please enter your details to sign in
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                            Email Address
                        </label>
                        <input
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-gray-300"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <div className="flex justify-between items-center mb-2 ml-1">
                            <label className="text-sm font-bold text-gray-700">Password</label>
                            <Link to="/forgot-password" size="sm" className="text-xs text-blue-600 hover:underline font-medium">
                                Forgot?
                            </Link>
                        </div>
                        <input
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-gray-300"
                            required
                        />
                    </div>

                    {/* Error Message Section */}
                    {error && (
                        <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-100 flex items-center gap-2 animate-shake">
                            <span>⚠️</span> {error}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform active:scale-95 shadow-lg shadow-gray-200 flex items-center justify-center mt-4"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Signing in...
                            </span>
                        ) : "Login"}
                    </button>
                </form>

                {/* Footer Link */}
                <div className="mt-10 text-center text-sm text-gray-500">
                    Don't have an account? <Link to="/register" className="text-blue-600 font-bold hover:underline">Create one</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;