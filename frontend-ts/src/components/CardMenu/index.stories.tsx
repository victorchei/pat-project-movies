import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import type { CardMenuProps } from '.'
import { CardMenu } from '.'

export default {
  title: 'Example/Components/Button',
  component: CardMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardMenu>

const Template: ComponentStory<typeof CardMenu> = (args) => {
  return <CardMenu {...args} />
}

const defaultProps: Partial<CardMenuProps> = {
  backgroundColor: { control: 'color' },
}

export const Large = Template.bind({})
Large.args = {
  ...defaultProps,
}

export const Small = Template.bind({})
Small.args = {
  ...defaultProps,
}
