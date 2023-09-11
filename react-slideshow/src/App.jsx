import { useState } from 'react'
import './App.css'
import filmData from './film-data.json'
import FilmDetail from './film-detail.jsx'

function App() {
    const [activeFilmIndex, setActiveFilmIndex] = useState(0);
    const lastFilmIndex = filmData.length - 1;

    return (
        <>
            {filmData.map((film, index) =>
                activeFilmIndex === index && (
                    <div className='slideshow-container' key={index}>
                        <FilmDetail film={film} />
                    </div>
                ))}
            <button onClick={() => setActiveFilmIndex(0)} disabled={activeFilmIndex === 0}>
                Refresh
            </button>
            <button onClick={() => setActiveFilmIndex(activeFilmIndex - 1)} disabled={activeFilmIndex === 0}>
                Back
            </button>
            <button onClick={() => setActiveFilmIndex(activeFilmIndex + 1)} disabled={activeFilmIndex === lastFilmIndex}>
                Next
            </button>
        </>
    )
}

export default App
