import IGenre from "./IGenre";

export default interface IGame{
    id: number,
    title: string,
    description: string, 
    genre: IGenre[],
    releaseDate: Date,
    creationDate: Date,
    coverUrl: string
} 