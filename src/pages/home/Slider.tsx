import { Link } from 'react-router';
import type { moveData } from "../../types/moveData.ts";

type SliderProps = {
    moves: moveData[];
    loading: boolean;
    title: string;
};

function TrendingRow({ moves, loading, title }: SliderProps) {
    return (
        <div className="py-8 px-6 bg-gray-100"> {/* خلفية بيضاء لتناسب الـ Header والـ Hero */}
            <div className="max-w-7xl mx-auto">
                {/* Header: Title & Show More */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight border-l-4 border-blue-600 pl-3">
                        {title}
                    </h2>
                    <Link
                        to="/moves"
                        className="bg-blue-600 text-white text-xs font-bold px-5 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-100 uppercase tracking-wider active:scale-95"
                    >
                        Show More
                    </Link>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto gap-5 pb-6 no-scrollbar scroll-smooth">
                    {loading
                        ? // حالة التحميل: Skeleton Cards
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="min-w-[160px] md:min-w-[200px] animate-pulse">
                                <div className="aspect-[2/3] bg-gray-200 rounded-2xl mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>
                        ))
                        : // عرض الأفلام الحقيقية
                        moves?.map((move) => (
                            <Link
                                to={`/move/${move.id}`}
                                key={move.id}
                                // قمنا بتثبيت العرض هنا ومنعنا العنصر من التقلص أو التمدد
                                className="w-[160px] md:w-[200px] flex-none group cursor-pointer"
                            >
                                {/* Card Image Wrapper */}
                                {/* تأكد من وجود h-full و object-cover للـ img */}
                                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-3 shadow-sm group-hover:shadow-xl transition-all duration-300 bg-gray-100">
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${move.image}`}
                                        alt={move.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* ... باقي الأكواد الخاصة بـ Badges ... */}
                                </div>

                                {/* Movie Title */}
                                <h3 className="text-gray-800 text-sm font-bold truncate group-hover:text-blue-600 transition-colors px-1">
                                    {move.name}
                                </h3>
                            </Link>
                        ))}
                </div>
            </div>

            {/* CSS لإخفاء شريط التمرير */}
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}

export default TrendingRow;