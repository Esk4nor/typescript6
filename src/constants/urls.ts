const baseURL = 'https://api.themoviedb.org/3'



const movie = '/movie'
const collection = '/collection'
const discover = '/discover'
const search = '/search'
const genre = '/genre'

const urls = {
    movies:{
        getAllMovie:():string =>`${discover}/${movie}`,
        getByID:(id:number):string => `${discover}/${movie}/${id}`
    }
}


export {
    baseURL,
    urls
}