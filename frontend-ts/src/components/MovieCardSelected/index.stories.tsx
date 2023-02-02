import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import type { MovieCardSelectedProps } from '.'
import { MovieCardSelected } from '.'

export default {
  title: 'Example/Components/MovieCardSelected',
  component: MovieCardSelected,
} as ComponentMeta<typeof MovieCardSelected>

const Template: ComponentStory<typeof MovieCardSelected> = (args) => {
  return <MovieCardSelected {...args} />
}

const defaultProps: Partial<MovieCardSelectedProps> = {
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
