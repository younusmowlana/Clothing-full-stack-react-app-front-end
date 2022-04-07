import axios from 'axios'
import React,{useEffect} from 'react'
import Announcement from '../Component/Announcement'
import Categories from '../Component/Categories'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Newsletter from '../Component/Newsletter'
import Products from '../Component/Products'
import Slider from '../Component/Slider'


function Home() {
  useEffect(async()=>{

    const response =await axios.get("http://localhost:8000/api/test")
    console.log(response.data)

  },[])
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
