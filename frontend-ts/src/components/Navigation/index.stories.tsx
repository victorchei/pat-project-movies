import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import type { NavigationProps } from '.'
import Navigation from '.'

export default {
  title: 'Example/Components/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => {
  return <Navigation {...args} />
}

const defaultProps: Partial<NavigationProps> = {
  flexGrow: 2,
}

export const Card = Template.bind({})
Card.args = {
  ...defaultProps,
}
