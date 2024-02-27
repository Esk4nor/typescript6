import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {IMovie} from "../interfaces/iMovie";
import {urls} from "../constants/urls";

const movieService = {
    getAll:(page:string):IRes<IMovie>=>apiService.get(urls.movies.getAllMovie(), {params:{page}})

}

export {
    movieService
}