import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import type { ButtonProps } from '.'
import { Button } from '.'

export default {
  title: 'Example/Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />
}

const defaultProps: Partial<ButtonProps> = {
  primary: false,
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  ...defaultProps,
  size: 'large',
  label: 'ButtonLarge',
}

export const Small = Template.bind({})
Small.args = {
  ...defaultProps,
  size: 'small',
  label: 'ButtonSmall44444',
}
