import Movie from '../components/Movie';
import React, { useState, useEffect } from'react';

function Home(){
    const [loding, SetLoding] = useState(true);
    const [movies, SetMomies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=6&sort_by=year")).json();
        SetMomies(json.data.movies);
        SetLoding(false);
    };
    useEffect(() => { getMovies() }, []);
    return <div>
        {loding ? <h1>Loding ...</h1> :
            <div>{movies.map(movie => (
                <Movie
                    key = {movie.id}
                    id={movie.id}
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            ))}</div>
        }
    </div>
}

export default Home;