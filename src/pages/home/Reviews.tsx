import { useContact } from "../../service/contactApi.ts";

function Reviews() {
    const { contact, loading } = useContact();

    return (
        <div className="bg-gray-50 py-16 px-6 min-h-[400px]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                        User <span className="text-blue-600">Feedbacks</span>
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
                        See what our community thinks about their movie experience on our platform.
                    </p>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        // حالة التحميل: 3 كروت وهمية
                        Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm animate-pulse border border-gray-100">
                                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                                <div className="h-3 bg-gray-100 rounded mb-2"></div>
                                <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                            </div>
                        ))
                    ) : (
                        contact?.map((item) => (
                            <div
                                key={item.id}
                                className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                            >
                                {/* Quote Icon Decorative */}
                                <div className="absolute top-4 right-6 text-6xl text-blue-50 font-serif pointer-events-none group-hover:text-blue-100 transition-colors">
                                    “
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        {/* Avatar Placeholder: أول حرف من الاسم */}
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-md shadow-blue-100">
                                            {item.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 leading-none">
                                                {item.name}
                                            </h4>
                                            <p className="text-xs text-gray-400 mt-1 truncate max-w-[150px]">
                                                {item.email}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                                        {item.message}
                                    </p>

                                    <div className="mt-6 flex text-yellow-400 text-xs">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Empty State: لو مفيش رسائل */}
                {!loading && contact?.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-400 font-medium text-lg">No reviews yet. Be the first to contact us!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Reviews;