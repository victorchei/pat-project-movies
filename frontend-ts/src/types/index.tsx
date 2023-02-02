import type { ReactNode } from 'react'

/** MovieCardProps component and MovieCardSelectedProps component. */
type Genres = {
  name: string
}

/** MovieCardProps component and MovieCardSelectedProps component. */
type MovieType = {
  title?: string
  image?: string
  releaseDate?: string
  runtime?: string
  genres: Genres[]
  id: string
}

/** CardMenu component. */
export type CardMenuProps = {
  children: ReactNode
}

/** MovieCardProps component. */

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
  /** possibility to choose a background color. */
  backgroundColor?: string
}

/** MovieCardSelectedProps component. */
export type MovieCardSelectedProps = {
  movie: MovieType
  display?: 'flex' | 'block'
  /** what the type of minheight is.
   * @default 164
   */
  minHeight?: number
  onCardDelete: (movie: MovieType) => void
}

/** Navigation component. */
export type NavigationProps = {
  /** the default number.
   * @default 1
   */
  flexGrow: number
  /** width number.
   * @default 250
   */
  width: number
}

/** SelectedMoviesSection component. */

export type SelectedMoviesSectionProps = {
  selectedMovies: MovieCardSelectedProps['movie'][]
  deleteMovie: (selectedMovie: MovieType) => void
}
