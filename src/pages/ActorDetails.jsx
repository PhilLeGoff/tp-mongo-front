import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../services/MovieService";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieRow from "../components/MovieRow";

export default function ActorDetails() {
  const { actorId } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    MovieService.getActorDetails(actorId).then(setActor);
  }, [actorId]);

  if (!actor)
    return <div className="text-white p-4">Loading actor details...</div>;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
          className="w-60 h-auto rounded-xl shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold text-cyan-400 mb-2">
            {actor.name}
          </h1>
          <p className="italic text-sm text-gray-400 mb-4">
            {actor.birthday} • {actor.place_of_birth}
          </p>
          <p className="text-sm text-gray-200 max-w-xl leading-relaxed">
            {actor.biography || "No biography available."}
          </p>
        </div>
      </div>

      <MovieRow title="🎬 Known for" movies={actor.movies} />
    </div>
  );
}
