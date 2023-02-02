import type { SyntheticEvent } from 'react'
import React from 'react'
import Menu from '@mui/material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import type { CardMenuProps } from '../../types'

const CardMenu = (props: CardMenuProps) => {
  const { children } = props
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        sx={{
          position: 'absolute',
          zIndex: 2,
          right: 5,
          top: 5,
          background: 'rgba(255, 255, 255, .3)',
        }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        aria-haspopup="true"
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        {children}
      </Menu>
    </>
  )
}

export default CardMenu
