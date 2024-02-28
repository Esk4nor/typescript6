

interface IGenre{
    id:number
    name: string
}
 interface IGenreResults{
     genres:IGenre[]
}

export type {
    IGenre,
    IGenreResults
}