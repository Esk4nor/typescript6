const baseURL = 'https://api.themoviedb.org/3'



const movie = '/movie'
const list = '/list'
const discover = '/discover'
const search = '/search/movie'
const genre = '/genre'

const urls = {
    movies:{
        getAllMovie:():string =>`${discover}${movie}`,
        getByID:(id:number):string => `${movie}/${id}`
    },
    genres:{
        getAll:():string => `${genre}${movie}${list}`,
        getByGenre:():string =>`${discover}${movie}`,

    },
    search:{
        base:search
    }
}


export {
    baseURL,
    urls
}