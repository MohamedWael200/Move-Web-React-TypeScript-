import { useMakeRegister } from "../../service/authApi.ts";
import { type FormEvent, useEffect, useState } from "react";
import { Link } from "react-router";

function Register() {
    const { makeRegister, loading, error, success } = useMakeRegister();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        bio: "",
        avatar: null
    });

    useEffect(() => {
        if (success) {
            setForm({
                name: "",
                email: "",
                password: "",
                bio: "",
                avatar: "",
            });
        }
    }, [success]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await makeRegister(form);
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                        Create <span className="text-blue-600">Account</span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Join our movie community today!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Full Name</label>
                        <input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Email Address</label>
                        <input
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Password</label>
                        <input
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Bio Field */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Bio</label>
                        <textarea
                            value={form.bio}
                            onChange={(e) => setForm({ ...form, bio: e.target.value })}
                            placeholder="Tell us about your movie taste..."
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none h-24"
                        />
                    </div>

                    {/* Avatar Upload */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Profile Picture</label>
                        <div className="relative group cursor-pointer">
                            <input
                                onChange={(e) =>
                                    setForm({ ...form, avatar: e.target.files?.[0] })
                                }
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-gray-500 group-hover:border-blue-400 group-hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                                <span className="text-xl">📷</span>
                                <span className="text-sm font-medium">Click to upload avatar</span>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    {success && (
                        <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-100 flex items-center gap-2">
                            <span>✅</span> Registered successfully!
                        </div>
                    )}

                    {error && (
                        <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-100 flex items-center gap-2">
                            <span>⚠️</span> {error}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform active:scale-95 shadow-lg shadow-gray-200 flex items-center justify-center"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Creating Account...
                            </span>
                        ) : "Register"}
                    </button>
                </form>

                {/* Footer Link */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;