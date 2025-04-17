import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../services/MovieService";
import MovieRow from "../components/MovieRow";
import Loader from "../components/Loader";

export default function ActorDetails() {
  const { actorId } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    MovieService.getActorDetails(actorId).then(setActor);
  }, [actorId]);

  if (!actor) {
     return <Loader text="Loading actor details..." />;
  }
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans py-10 px-4">
      {/* Card Layout like MovieDetails */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl shadow-xl overflow-hidden grid md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-1">
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-cyan-400 mb-2">
              {actor.name}
            </h1>
            <p className="italic text-sm text-gray-400 mb-4">
              {actor.birthday || "N/A"}
              {actor.place_of_birth && ` • ${actor.place_of_birth}`}
            </p>
            <p className="text-sm text-gray-200 max-w-xl leading-relaxed whitespace-pre-line">
              {actor.biography || "No biography available."}
            </p>
          </div>
        </div>
      </div>

      {/* Known For Movies */}
      {actor.movies?.length > 0 && (
        <div className="max-w-5xl mx-auto mt-10">
          <MovieRow title="🎬 Known For" movies={actor.movies} />
        </div>
      )}
    </div>
  );
}
