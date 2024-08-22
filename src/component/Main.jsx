import axios from 'axios';
import { ImHistory } from "react-icons/im";
import React, { useEffect, useState } from 'react';
import requests from '../requests';
import { AiFillCaretRight } from "react-icons/ai";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '....';
        } else {
            return str;
        }
    };

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full relative'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='mt-2 flex gap-2'>
                        <button className='border rounded-2xl bg-red-800 text-white border-red-800 py-2 px-2 flex gap-1 items-center hover:bg-orange-600'> < AiFillCaretRight  className="text-white mr-2 text-2xl"/>Play</button>
                        <button className='border rounded-2xl bg-gray-700 text-white border-gray-700 py-2 px-2 flex items-center  hover:bg-gray-900' >
                            <ImHistory className="mr-2 text-xl" /> Watch Later
                        </button>
                    </div>
                    <p className='text-gray-400 text-sm absolute bottom-3 font-bold'>Released: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[35%] xl:max-w-[35%] text-gray-200 mt-14'>
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
