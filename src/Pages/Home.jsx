import React from 'react'
import Announcement from '../Component/Announcement'
import Categories from '../Component/Categories'
import Navbar from '../Component/Navbar'
import Slider from '../Component/Slider'


function Home() {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
    </div>
  )
}

export default Home
