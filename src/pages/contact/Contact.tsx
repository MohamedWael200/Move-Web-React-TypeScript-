import {useMakeContact} from "../../service/contactApi.ts";
import {useState} from "react";

function Contact() {
    const {makeContact, loading, success, error} = useMakeContact();
    const [form , setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        makeContact(form);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Get In <span className="text-blue-600">Touch</span>
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Have a question about a movie or a suggestion? We'd love to hear from you.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-gray-100">

                    {/* Left Side: Contact Info */}
                    <div className="bg-blue-600 p-10 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <p className="text-blue-100 mb-8 leading-relaxed">
                                Fill up the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="p-3 bg-blue-500 rounded-xl">📍</span>
                                    <span>123 Movie Lane, Cinema City</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="p-3 bg-blue-500 rounded-xl">📞</span>
                                    <span>+1 (555) 000-0000</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="p-3 bg-blue-500 rounded-xl">✉️</span>
                                    <span>support@movesapp.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons Placeholder */}
                        <div className="flex gap-4 mt-10">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all cursor-pointer">FB</div>
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all cursor-pointer">TW</div>
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all cursor-pointer">IG</div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="p-10 bg-white">
                        <form  className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                <input
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea
                                    //rows="4"
                                    value={form.message}
                                    onChange={(e) =>
                                        setForm({ ...form, message: e.target.value })
                                    }
                                    placeholder="Tell us how we can help..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button disabled={loading} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all transform active:scale-95 shadow-lg shadow-gray-200">
                                {loading ? "Sending..." : "Send"}
                            </button>
                            {success && <p>Message sent ✅</p>}
                            {error && <p>{error}</p>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;