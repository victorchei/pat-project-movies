import React, { styled } from '@mui/material/styles'
import type { JSXElementConstructor, ReactElement } from 'react'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import noMoviesImageSrc from '../../assets/no_movies.png'
import MovieCardSelected from '../MovieCardSelected'
import SelectedMoviesForm from '../SelectedMoviesForm'

type MoviesType = {
  length: string
  map: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>>
  movies: string
  id: string
}

export type SelectedMoviesSectionProps = {
  selectedMovies: MoviesType[]
  deleteMovie: (selectedMovies: MoviesType) => void
}

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 140px)',
  position: 'sticky',
  top: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
}))

const MoviesList = styled(Stack)(() => ({
  overflow: 'scroll',
  height: '100%',
}))

const NoMovies = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}))

const SelectedMoviesSection = (props: SelectedMoviesSectionProps) => {
  const { selectedMovies, deleteMovie } = props
  if (!selectedMovies.length) {
    return (
      <SelectedMovies>
        <NoMovies>
          <Box
            component="img"
            sx={{
              width: '50%',
              opacity: '.6',
            }}
            alt="No images."
            src={noMoviesImageSrc}
          />
          <Typography variant="h5" mt={2}>
            No selected movies
          </Typography>
        </NoMovies>
      </SelectedMovies>
    )
  }

  return (
    <SelectedMovies>
      <MoviesList spacing={2}>
        {selectedMovies.map((movie) => (
          <MovieCardSelected key={movie.id} movie={movie} onCardDelete={deleteMovie} />
        ))}
      </MoviesList>
      <Box pt={2}>
        <SelectedMoviesForm />
      </Box>
    </SelectedMovies>
  )
}

export default SelectedMoviesSection
