import type { ReactNode } from 'react'

/** CardMenu component */
export type CardMenuProps = {
  children: ReactNode
}

/** MovieCard component */
export type MovieType = {
  title?: string
  image?: string
  releaseDate?: string
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

/** MovieCardSelected component */
type Genres = {
  name: string
}

type MovieType2 = {
  title?: string
  image?: string
  releaseDate?: string
  runtime?: string
  genres: Genres[]
  id: string
}

export type MovieCardSelectedProps = {
  movie: MovieType2
  display?: 'flex' | 'block'
  /** what the type of minheight is
   * @default 164
   */
  minHeight?: number
  onCardDelete: (movie: MovieType2) => void
}
