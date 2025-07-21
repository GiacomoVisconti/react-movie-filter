import movies from '../data/movies'
import { useState, useEffect } from 'react'


export default function MovieTable(){

    const [moviesList, setMovieList] = useState(movies)
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState('')
    const [filteredMovies, setFilteredMovies] = useState(moviesList)

    useEffect(() => {
        console.log(moviesList);
        
        const filtered = moviesList.filter((element) => {
            
            if(element.genre.includes(selected) && element.title.includes(search)){
                return element
            }
        })
        setFilteredMovies(filtered)
        
        
    },[search, selected, moviesList])

    // Event Functions
    function handleSubmit (e){
        e.preventDefault()
    }

    function handleChange(e){
        setSearch(e.target.value)
    }

    function handleSelect(e){
        setSelected(e.target.value)
    }

    return (

        <>
            {/* Movie Filters */}
            <div className="container my-4">
                <h2>Filter Movies</h2>
                <hr />
                <form onSubmit={handleSubmit} className='d-flex gap-3'>
                    <input onChange={handleChange} type="text" value={search} className='form-control' placeholder='Insert the Movie title'/>
                    <select onChange={handleSelect} className="form-select">
                        <option defaultValue>Select a Genre</option>
                        {moviesList.map(({genre}, index) => {
                            return (

                                <option key={index} value={genre}>{genre}</option>
                            )
                        })}
                    </select>
                    <button type="submit" className="btn btn-success">Search</button>
                </form>
            </div>
            {/* Movie Table */}
            <div className="container my-4">
                <h1 className='py-2'>Movies</h1>
                <hr />
                <div className="">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Movie Name</th>
                            <th scope="col">Genre</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMovies.map(({id, title, genre}, index) => {
                                return (

                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{title}</td>
                                        <td>{genre}</td>
                                    
                                    </tr>
                                )


                            })}
                        
                        </tbody>
                        </table>
                </div>
            </div>
        </>
    )
}