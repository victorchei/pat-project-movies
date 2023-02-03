import * as React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

export type IconLabelButtonsProps = {
  /**	If true, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /** The color of the component.
   *  It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  /**	If given, uses a negative margin to counteract the padding on one side */
  edge?: 'end' | 'start'
  /** The size of the component. small is equivalent to the dense button styling.
   * @defaul medium
   */
  size?: 'small' | 'large'
  /** @default contained */
  variant?: 'outlined' | 'contained'
  /** @default horizontal */
  direction?: 'horizontal' | 'vertical'
  /** @default 2 */
  zoom?: number
}

export const IconLabelButtons = (props: IconLabelButtonsProps) => {
  const {
    size = 'medium',
    disabled = false,
    color,
    edge = 'end',
    variant = 'contained',
    direction = 'horizontal',
    zoom = 2,
  } = props
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: edge === 'start' ? 'flex-start' : 'flex-end',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
      }}
    >
      <Button
        size={size}
        disabled={disabled}
        color={color}
        variant={variant}
        startIcon={<DeleteIcon />}
        sx={{ '&:hover': { transform: `scale${zoom}` } }}
      >
        Delete
      </Button>
      <Button size={size} disabled={disabled} color={color} variant={variant} endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  )
}
