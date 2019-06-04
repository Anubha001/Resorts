import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import  { Link } from 'react-router-dom'
import Services from '../components/Services'


function Home() {
    return (
        <>
        <Hero>
         
          <Banner title="luxurious rooms" subtitle="delux room starting at $2999" price="this is the lowest value">
          
          <Link to='/rooms' className="btn-primary">
          our rooms
          </Link>
          </Banner>
          </Hero>
          <Services></Services>


          
        </>
    )
}

export default Home
