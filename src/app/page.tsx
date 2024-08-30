import GridCells from '@/components/gridcells'
import Navbar from '@/components/navbar'
import Toolbar from '@/components/toolbar'
import React from 'react'

export default function page() {
  return (
    <div className='p-2' >
      <Navbar/>
      <Toolbar/>
      <GridCells/>
    </div>
  )
}
