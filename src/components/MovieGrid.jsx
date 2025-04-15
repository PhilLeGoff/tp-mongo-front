export default function MovieGrid({ movies = [] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.length === 0 ? (
        <p className="col-span-full text-center text-gray-400">No movies found</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 rounded-xl overflow-hidden shadow">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg truncate">{movie.title}</h3>
              <p className="text-sm text-gray-400">{movie.releaseDate}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}