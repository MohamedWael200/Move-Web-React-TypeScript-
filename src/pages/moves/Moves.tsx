import { useMoves } from "../../service/movesApi.ts";
import { Link } from "react-router";
import { useState } from "react"; // 1. استيراد useState

function Moves() {
    const { moves, loading } = useMoves();

    // --- منطق الـ Pagination ---
    const [currentPage, setCurrentPage] = useState(1); // الصفحة الحالية
    const itemsPerPage = 6; // عدد الأفلام في كل صفحة

    // حساب المؤشرات (Indices)
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // استخراج الأفلام الخاصة بالصفحة الحالية فقط
    const currentMoves = moves?.slice(indexOfFirstItem, indexOfLastItem);

    // حساب إجمالي عدد الصفحات
    const totalPages = Math.ceil((moves?.length || 0) / itemsPerPage);

    // وظيفة لتغيير الصفحة والتمرير للأعلى
    const paginate = (pageNumber : number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            <h1 className="text-center text-4xl font-extrabold p-8 text-gray-800 tracking-tight">
                Explore <span className="text-blue-600">Movies</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {loading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
                            <div className="h-80 bg-gray-200"></div>
                            <div className="p-6 space-y-4">
                                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-10 bg-gray-200 rounded-xl mt-4"></div>
                            </div>
                        </div>
                    ))
                    : currentMoves?.map((move) => (
                        <div key={move.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-blue-100">
                            {/* ... (نفس كود الكارت الخاص بك بدون تغيير) ... */}
                            <div className="relative h-80 overflow-hidden">
                                <img src={`http://127.0.0.1:8000/storage/${move.image}`} alt={move.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-yellow-400 px-3 py-1 rounded-lg flex items-center font-bold text-sm shadow-xl">★ {move.rating}</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate group-hover:text-blue-600 transition-colors">{move.name}</h3>
                                <p className="text-gray-500 text-sm line-clamp-3 mb-4 leading-relaxed">{move.brief}</p>
                                <Link to={`/move/${move.id}`} className="w-full mt-6 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 flex items-center justify-center text-center">
                                    View Details <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>

            {/* --- أزرار الـ Pagination --- */}
            {!loading && totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 gap-2">
                    {/* زر السابق */}
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        Prev
                    </button>

                    {/* أرقام الصفحات */}
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`w-10 h-10 rounded-lg font-bold transition-all ${
                                currentPage === i + 1
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                    : "bg-white text-gray-600 border border-gray-300 hover:border-blue-500 hover:text-blue-500"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {/* زر التالي */}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Moves;