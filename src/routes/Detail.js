import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Detail() {
    const {id} = useParams();
    const [loding, SetLoding] = useState(true);
    const [data, Setdata] = useState([]);
    useEffect(() => {
        const fetchMovie = async () => {
            const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            SetLoding(false);
            Setdata(json);
        };
        fetchMovie();
    }, [id]); 
    console.log(data);
    return <div>
        {loding?
        <h1>Loading...</h1>:null}
    </div>;
}

export default Detail;