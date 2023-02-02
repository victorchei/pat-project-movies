import type { ReactNode } from 'react'

/** CardMenu component */
export type CardMenuProps = {
  children: ReactNode
}

type Genres = {
  name: string
}

type MovieType = {
  title?: string
  image?: string
  releaseDate?: string
  runtime?: string
  genres: Genres[]
  id: string
}

export type MovieCardProps = {
  /** what  the max-width is in number.
   * @default 250
   */
  maxWidth: number
  /** what is the position in string.
   * @default relative
   */
  position?: 'absolute' | 'relative'
  movie: MovieType
  onCardSelect: (movie: MovieType) => void
  /** possibility to choose a background color */
  backgroundColor?: string
}

export type MovieCardSelectedProps = {
  movie: MovieType
  display?: 'flex' | 'block'
  /** what the type of minheight is
   * @default 164
   */
  minHeight?: number
  onCardDelete: (movie: MovieType) => void
}

/** Navigation component */
export type NavigationProps = {
  /** the default number
   * @default 1
   */
  flexGrow: number
  /** width number
   * @default 250
   */
  width: number
}

/** SelectedMoviesSection component */
type MovieSelectedType = MovieCardSelectedProps['movie']

export type SelectedMoviesSectionProps = {
  selectedMovies: MovieSelectedType[]
  deleteMovie: (selectedMovie: MovieType) => void
}
