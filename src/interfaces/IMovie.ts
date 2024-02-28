interface IGenre{
    id: number,
    name: string
}
interface IMovie{
    genres: IGenre[],
    original_title: string,
    overview: string,
    release_date: number,
    runtime: number,
    poster_path: string,
}

export type {
    IMovie
}