import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responseType";
import {IMovies} from "../interfaces/iMovies";

const searchService = {
    findFilm:(query:string):IRes<IMovies> => apiService.get(urls.search.base, {params:{query}})

}



export {searchService}