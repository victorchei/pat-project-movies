import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import CardMenu from '../CardMenu'

type Genres = {
  name: string
}

type MovieType = {
  title?: string
  image?: string
  releaseDate?: string
  runtime?: string
  genres: Genres[]
}

export type MovieCardSelectedProps = {
  movie: MovieType
  display: 'flex'
  /** what the type of minheight is
   * @default 164
   */
  minHeight: number
  onCardDelete: (movie: MovieType) => void
}

export const MovieCardSelected = (props: MovieCardSelectedProps) => {
  const { movie, display = 'flex', minHeight = 164, onCardDelete } = props
  return (
    <Card sx={{ display, minHeight }}>
      <CardMedia component="img" sx={{ width: 100 }} image={movie.image} alt={movie.title} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          position: 'relative',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {movie.releaseDate}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, pt: 0 }}>
          {movie.genres?.length ? (
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {movie.genres[0].name}
            </Typography>
          ) : null}
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Length: {movie.runtime}
          </Typography>
        </Box>
        <CardMenu>
          <MenuItem onClick={() => onCardDelete(movie)}>Delete</MenuItem>
        </CardMenu>
      </Box>
    </Card>
  )
}
