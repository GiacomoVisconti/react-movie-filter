import movies from '../data/movies'
import { useState, useEffect } from 'react'


export default function MovieTable(){
    // Set a mode for create or search movies
    const [isCreating, setIsCreating] = useState(true)

    // Set Variables

        // create mode
        const [newMovieTitle, setNewMovieTitle] = useState('')
        const [newMovieGenre, setNewMovieGenre] = useState('')
        const [moviesList, setMovieList] = useState(movies)
        
        
        // search mode
        const [search, setSearch] = useState('')
        const [selected, setSelected] = useState('')
        const [filteredMovies, setFilteredMovies] = useState(moviesList)


    useEffect(() => {

        // IF the 'mode' is Not Creating the user can filter the movies
        if(!isCreating){

            
            
            const filtered = moviesList.filter((element) => {
                
                if(element.genre.includes(selected) && element.title.includes(search)){
                    return element
                }
            })
            console.log(filtered);
            
            // setFilteredMovies(filtered)
            setMovieList(filtered)
            
        }
        
        
    },[search, selected])

    // Event Functions
    function handleClickSearch(){
        setIsCreating(false)
    }

    function handleSubmit (e){
        e.preventDefault()

        const newMovieObj = {
            id:moviesList.length + 1,
            title: newMovieTitle,
            genre: newMovieGenre
        }

        
        setMovieList([...moviesList, newMovieObj])
    }

    // Search mode
    function handleChangeSearch(e){
        setSearch(e.target.value)
    }

    function handleSelectSearch(e){
        setSelected(e.target.value)
    }

    // Create mode
    function handleClickReset(){
        setIsCreating(true)
        
    }

    function handleChangeAddTitle(e){
        setNewMovieTitle(e.target.value)
    }

    function handleChangeAddGenre(e){
        setNewMovieGenre(e.target.value)
    }
    



    return (

        <>
            
            
            {/* Movie Forms */}
            <div className="container my-4">
                <h2>{isCreating ? 'Add Movie' : 'Filter Movies'}</h2>
                <hr />

                {/* Filter Movies */}
                <form className={isCreating ? 'd-none' : 'd-block'}>

                    {/* Inputs */}
                    <div className='d-flex gap-3'>
                        <input onChange={handleChangeSearch} type="text" value={search} className='form-control' placeholder='Insert the Movie title'/>
                        <select onChange={handleSelectSearch} className="form-select">
                            <option defaultValue>Select a Genre</option>
                            {moviesList.map(({genre}, index) => {
                                return (

                                    <option key={index} value={genre}>{genre}</option>
                                )
                            })}
                        </select>
                    </div>

                    {/* Button */}
                    <div className="d-flex gap-3 justify-content-center py-3">
                        <button type="button" onClick={handleClickReset} className="btn btn-warning" >Reset</button>
                    </div>
                </form>

                {/* Add Movie */}
                <form onSubmit={handleSubmit} className={isCreating ? 'd-block' : 'd-none'}>
                    <div className="d-flex gap-3 ">

                        <input onChange={handleChangeAddTitle} type="text" value={newMovieTitle} className='form-control' placeholder='Insert the Movie title'/>
                        <select onChange={handleChangeAddGenre} className="form-select">
                            <option defaultValue>Select a Genre</option>
                            {moviesList.map(({genre}, index) => {
                                return (

                                    <option key={index} value={genre}>{genre}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="d-flex gap-3 justify-content-center py-3">
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="button" className="btn btn-info" onClick={handleClickSearch}>Search</button>
                    </div>
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