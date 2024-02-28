import {IRes} from "../types/responseType";

import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IGenre, IGenreResults} from "../interfaces/IGenre";

const genreService = {
    getAll:():IRes<IGenreResults>=>apiService.get(urls.genres.getAll()),
    getById:(id:number):IRes<IGenreResults>=>apiService.get(urls.genres.getByID(id))
}


export {
    genreService
}