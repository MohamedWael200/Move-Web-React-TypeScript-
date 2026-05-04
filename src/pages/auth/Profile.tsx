import { useGetProfile } from "../../service/authApi.ts";
import { Link } from "react-router";

function Profile() {
    const { profile, loading, error } = useGetProfile();

    // رابط الصورة الافتراضية في حال لم يرفع المستخدم صورة
    const defaultAvatar = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";

    return (
        <div className="min-h-screen bg-gray-40 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-gray-100 relative overflow-hidden transition-all duration-300">

                {/* Decorative Header Background (Blue Strip) */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-blue-600 z-0"></div>

                {loading ? (
                    // --- حالة التحميل: Skeleton Loading ---
                    <div className="relative z-10 animate-pulse text-center">
                        {/* Avatar Skeleton */}
                        <div className="relative inline-block mt-10">
                            <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-xl"></div>
                        </div>
                        {/* Name & Email Skeletons */}
                        <div className="mt-6 flex flex-col items-center gap-3">
                            <div className="h-6 bg-gray-200 rounded-full w-3/4"></div>
                            <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
                        </div>
                        {/* Bio Skeleton */}
                        <div className="mt-8 space-y-2.5">
                            <div className="h-3 bg-gray-100 rounded-full"></div>
                            <div className="h-3 bg-gray-100 rounded-full w-5/6"></div>
                        </div>
                    </div>
                ) : error ? (
                    // --- حالة الخطأ: Error Message ---
                    <div className="relative z-10 text-center py-10">
                        <div className="text-6xl mb-4">⚠️</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Failed to load profile</h3>
                        <p className="text-gray-500 text-sm">{error}</p>
                        <Link to="/login" className="mt-6 inline-block bg-gray-900 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-600 transition-colors">
                            Try Logging In Again
                        </Link>
                    </div>
                ) : (
                    // --- حالة عرض البيانات (Profile Content) ---
                    <div className="relative z-10 text-center">
                        {/* Avatar Section */}
                        <div className="relative inline-block mt-10 group">
                            <img
                                // استخدم الصورة المرفوعة أو الصورة الافتراضية
                                src={profile?.avatar ? `http://127.0.0.1:8000/storage/${profile.avatar}` : defaultAvatar}
                                alt={profile?.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl shadow-gray-200 group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* Status Indicator (Online) */}
                            <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
                        </div>

                        {/* Name & Email Section */}
                        <div className="mt-6">
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                                {profile?.name}
                            </h2>
                            <p className="text-sm font-medium text-gray-400 mt-1 flex items-center justify-center gap-1.5">
                                ✉️ {profile?.email}
                            </p>
                        </div>

                        {/* Divider Line */}
                        <div className="h-px bg-gray-100 my-8"></div>

                        {/* Bio Section */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                                Bio & Movie Taste
                            </h4>
                            <p className="text-gray-600 italic leading-relaxed text-base bg-gray-50 p-6 rounded-2xl border border-gray-100 min-h-[100px]">
                                "{profile?.bio || "This user hasn't added a bio yet. They probably just love movies too much to write about it."}"
                            </p>
                        </div>

                        {/* Edit Button Placeholder (Optional) */}
                        {/*<div className="mt-10">*/}
                        {/*    <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all transform active:scale-95 shadow-lg shadow-gray-200">*/}
                        {/*        Edit Profile*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;