import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import type { MovieCardProps } from '.'
import { MovieCard } from '.'

export default {
  title: 'Example/Components/MovieCard',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>

const Template: ComponentStory<typeof MovieCard> = (args) => {
  return <MovieCard {...args} />
}

const defaultProps: Partial<MovieCardProps> = {
  maxWidth: 250,
  position: 'relative',
  movie: {
    title: 'new title',
    image: 'img',
    releaseDate: '12.03.45',
  },
}

export const Card = Template.bind({})
Card.args = {
  ...defaultProps,
}

export const Card2 = Template.bind({})
Card2.args = {
  ...defaultProps,
  maxWidth: 500,
  movie: {
    title: 'card2',
    image: 'img2',
    releaseDate: '15.05.2023',
  },
}
