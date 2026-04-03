import { useParams, Link } from "react-router";
import { useMoveDetails } from "../../service/movesApi.ts";

function MoveDetails() {
    const { id } = useParams();
    const moveId = Number(id);
    const { move, loading } = useMoveDetails(moveId);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
            </div>
        );
    }

    if (!move) return <div className="text-center py-20 text-2xl font-bold">Movie not found!</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Back Button */}
                <Link to="/moves" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors">
                    <span className="mr-2">←</span> Back to Movies
                </Link>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

                    {/* Movie Poster Section */}
                    <div className="md:w-2/5 relative group">
                        <img
                            src={`http://127.0.0.1:8000/storage/${move.image}`}
                            alt={move.name}
                            className="w-full h-full object-cover min-h-[400px] md:min-h-[600px] transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-1.5 rounded-full font-bold shadow-lg flex items-center">
                            ★ <span className="ml-1">{move.rating}/10</span>
                        </div>
                    </div>

                    {/* Movie Details Section */}
                    <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {move.categories?.map((cat) => (
                                    <span key={cat.id} className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                                        {cat.name}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                {move.name}
                            </h1>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 bg-gray-50 py-4 rounded-r-lg">
                                {move.brief}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Director</p>
                                    <p className="text-gray-800 font-semibold text-lg">{move.Director}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Author</p>
                                    <p className="text-gray-800 font-semibold text-lg">{move.author}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Release Date</p>
                                    <p className="text-gray-800 font-semibold text-lg">
                                        {new Date(move.dateOfPublication).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {/*<div className="flex flex-col sm:flex-row gap-4 mt-8">*/}
                        {/*    <button className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">*/}
                        {/*        Watch Now*/}
                        {/*    </button>*/}
                        {/*    <button className="flex-1 bg-gray-100 text-gray-800 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all active:scale-95">*/}
                        {/*        Add to Wishlist*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MoveDetails;