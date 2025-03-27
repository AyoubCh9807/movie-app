"use client";
import movies from "../../../../public/data/movies";
import React, { useEffect, useState } from "react";

interface Params {
  id: string;
}

const MovieDetails: React.FC<{ params: Promise<Params> }> = ({ params }) => {
  const [id, setId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
      setLoading(false);
    };

    fetchParams();
  }, [params]);

  if (loading) {
    return <p>Loading...</p>; // Show loading state while params are being resolved
  }

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="flex flex-col align-center justify-evenly">
      <p className="text-3xl text-white font-mono font-extrabold text-center mt-5">
        {movie.title}
      </p>
      <div className="grid place-content-center my-5">
        <img
          src={movie.sourceCover}
          alt="movie"
          className="object-cover transition-transform duration-300 ease-out transform hover:scale-102 hover:shadow-lg hover:shadow-gray-500 hover:cursor-pointer w-80 h-120"
        />
      </div>

      <div className="grid place-content-center mx-20">
        <p className="text-2xl text-gray-200 text-center">{movie.desc}</p>
      </div>

      <div className="grid place-content-center">
        <button className="bg-purple-800 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-purple-700 transition duration-300 w-32 my-5">
          <a href="../" className="no-underline">
            Return
          </a>
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;