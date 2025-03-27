import React from "react";


interface MovieCardProps {
    title: string;
    desc: string;
    sourceCover: string; 
}

const MovieCard: React.FC<MovieCardProps> = ({ title, desc, sourceCover }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-full h-0" style={{ paddingBottom: '150%' }}>
                <img 
                    src={sourceCover} 
                    alt="movie-cover" 
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-out overflow-hidden transform hover:scale-102 hover:shadow-lg hover:shadow-gray-500 hover:cursor-pointer"
                />
            </div>
            <h2 className="text-xl font-bold mt-2">{title}</h2>
            <p className="text-sm text-gray-600 text-center mt-1">{desc}</p>
        </div>
    );
}

export default MovieCard;