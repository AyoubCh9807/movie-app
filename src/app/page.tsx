"use client"
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import movies from "../../public/data/movies";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Link from "next/link";

const page = () => {
  return (
      <>
        <div className="bg-gradient-to-b from-purple-900 to-black">
          <Navbar />
          <Header title="Movie browser" desc="Choose from any type" />
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4"'>
            {movies.map((movie, index) => {
              return (
                <Link href={`/movie/${movie.id}`} key={index}>
                  <MovieCard
                    title={movie.title}
                    desc={movie.desc}
                    sourceCover={movie.sourceCover}
                    key={index}
                  ></MovieCard>
                </Link>
              );
            })}
          </div>
          <Form />
          <Footer />
        </div>
      </>
  );
};

export default page;
