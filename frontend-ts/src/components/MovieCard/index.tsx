import React from 'react'
import type { Theme } from '@mui/system'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

import CardMenu from '../CardMenu'

type MovieType = {
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

const CardInfo = styled(CardContent)(({ theme }: { theme?: Theme }) => ({
  '&:last-child': {
    paddingBottom: theme?.spacing(2),
  },
}))

const PlusIcon = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgb(255, 175, 255)',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgb(191, 64, 191)',
  },
}))

export const MovieCard = (props: MovieCardProps) => {
  const { maxWidth = 250, position = 'relative', movie, onCardSelect, backgroundColor } = props
  return (
    <>
      <Card sx={{ maxWidth, position, backgroundColor }}>
        <CardMenu>
          <MenuItem onClick={() => onCardSelect(movie)}>Select</MenuItem>
        </CardMenu>

        <Box sx={{ position: 'relative' }}>
          <CardMedia component="img" height="250" image={movie.image} alt={movie.title} style={{ backgroundColor }} />
          <PlusIcon onClick={() => onCardSelect(movie)}>
            <AddBoxOutlinedIcon sx={{ fontSize: 80 }} />
          </PlusIcon>
        </Box>

        <CardInfo>
          <Typography variant="h6" gutterBottom component="div">
            {movie.title}
          </Typography>

          <Typography mb={0} variant="subtitle1" gutterBottom component="div">
            {movie.releaseDate}
          </Typography>
        </CardInfo>
      </Card>
    </>
  )
}
