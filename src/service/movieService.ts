import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {IMovies} from "../interfaces/iMovies";
import {urls} from "../constants/urls";
import {IMovie} from "../interfaces/IMovie";

const movieService = {
    getAll:(page:string):IRes<IMovies> =>apiService.get(urls.movies.getAllMovie(), {params:{page}}),
    getById:(id:number):IRes<IMovie> =>apiService.get(urls.movies.getByID(id))

}

export {
    movieService
}