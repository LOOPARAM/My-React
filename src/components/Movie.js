import PropTyptes from "prop-types"
import {Link} from "react-router-dom"

function Movie({id,medium_cover_image, title, summary, genres}) {
    return (
    <div>
        <img src={medium_cover_image} alt={title} />
        <h2><Link to={`/movies/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
    );
}

Movie.PropTyptes = {
    id: PropTyptes.number.isRequired,
    medium_cover_image: PropTyptes.string.isRequired,
    title: PropTyptes.string.isRequired,
    summary: PropTyptes.string.isRequired,
    genres: PropTyptes.arrayOf(PropTyptes.string).isRequired,
}

export default Movie