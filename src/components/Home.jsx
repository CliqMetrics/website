import React from 'react'
import Footer from "./Footer"
import Form from "./Form"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Product from "./Product"
import Services from "./Services"


const Home = () => {
  return (
    <div>
      <Navbar />

      <section>
        <Hero />
      </section>

      <section id="product">
        <Product />
      </section>
      
      <section>
        <Services />
      </section>

      <section id="demo">
        <Form />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default Home