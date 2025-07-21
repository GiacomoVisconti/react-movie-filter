import movies from '../data/movies'
import { useState, useEffect } from 'react'


export default function MovieTable(){

    const [moviesList, setMovieList] = useState(movies)
    const [search, setSearch] = useState('')


    return (

        <>
            {/* Movie Filters */}
            <div className="container my-4">
                <h2>Filter Movies</h2>
                <hr />
                <form className='d-flex gap-3'>
                    <input type="text" className='form-control' placeholder='Insert the Movie title'/>
                    <select className="form-select">
                        <option defaultValue>Select a Genre</option>
                        {moviesList.map(({genre}, index) => {
                            return (

                                <option key={index} value={genre}>{genre}</option>
                            )
                        })}
                    </select>
                    <button type="submit" class="btn btn-success">Search</button>
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
                            {moviesList.map(({id, title, genre}, index) => {
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