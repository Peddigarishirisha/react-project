import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import requests from '../requests'; // Make sure this file exists and is correctly defined
import { AiFillCaretRight } from "react-icons/ai";
import { ImHistory } from "react-icons/im";

const NavPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(requests.requestMovieDetails(id));
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div className='w-full h-screen text-white'>
      {movie ? (
        <div className='relative w-full h-full'>
          <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
          <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie.title}</h1>
            <div className='mt-2 flex gap-2'>
              <button className='border rounded-2xl bg-red-800 text-white border-red-800 py-2 px-2 flex gap-1 items-center'>
                <AiFillCaretRight className="text-white mr-2 text-2xl" />Play
              </button>
              <button className='border rounded-2xl bg-gray-700 text-white border-gray-700 py-2 px-2 flex items-center'>
                <ImHistory className="mr-2 text-xl" /> Watch Later
              </button>
            </div>
            <p className='text-gray-400 text-sm font-bold mt-4'>Released: {movie.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[35%] xl:max-w-[35%] text-gray-200 mt-4'>
              {movie.overview}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NavPage;
