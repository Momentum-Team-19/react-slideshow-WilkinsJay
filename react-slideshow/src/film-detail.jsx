const FilmDetail = ({ film }) => {
    return (
        <div className='film-detail'>
            <div className='film-title'>
                {film.title}
            </div>
            <img className='film-image' src={film.image}>
            </img>
            <div className='film-orginal-title'>
                {film.original_title}
            </div>
            <div className='film-release-date'>
                {film.release_date}
            </div>
            <p>{film.description}</p>
            <div className='film-director'>
                <h4>Directed By: {film.director}</h4>
            </div>
            <div className='film-producer'>
                <h4>Produced By: {film.producer}</h4>
            </div>
        </div>
    )
}
export default FilmDetail