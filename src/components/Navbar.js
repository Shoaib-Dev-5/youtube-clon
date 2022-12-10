import {  Stack } from '@mui/material'
import React from 'react'
import {logo} from '../utils/Constants'
import { Search } from './Search'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-between' sx={{backgroundColor:'black',p:1,position:'sticky',top:'0',left:'0',zIndex:'99'}}>
      <Link to="/" >
        <img src={logo} alt="" height={45}/>
      </Link>
      <Search/>
    </Stack>
  )
}
