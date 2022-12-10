import { Stack } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { global } from '../App'
import {categories} from '../utils/Constants'
export const Sidebar = () => {
  const {selected,setSelected}=useContext(global);
  return (
    <div className='sidebar'>
        <Stack  sx={{overflowX:'auto',height: { xs: "auto", md: "95%"},flexDirection:{xs:"row",md:'column'} } }>
        {
            categories.map(({name,icon},ind)=>{
                return(
                  
                    <button key={ind} className="btn" onClick={()=>setSelected(name)}
                    style={{backgroundColor: name === selected && 'red'}}>
                       <span className='icon'>{icon}</span>
                       <span className='name'>{name}</span>
                    </button>
                     )
            })
        }
        </Stack>
    </div>
  )
}
