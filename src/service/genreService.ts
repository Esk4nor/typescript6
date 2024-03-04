import {IRes} from "../types/responseType";

import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IGenre, IGenreResults} from "../interfaces/IGenre";
import {IMovies} from "../interfaces/iMovies";

const genreService = {
    getAll:():IRes<IGenreResults>=>apiService.get(urls.genres.getAll()),
    getByGenre:(with_genres:string, page:string):IRes<IMovies> =>apiService.get(urls.movies.getAllMovie(), {params:{with_genres,page}}),
}


export {
    genreService
}