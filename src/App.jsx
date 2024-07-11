import React from 'react'
import "./app.scss";
import Navbar from './components/navbar/Navbar';
import Test from './components/navbar/Test';

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
      </section>
      <section id='Services'>Parallex</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section id='Contact'>Contact</section>
      {/* <section id='About'>About</section> */}
      {/* <Test /> */}
    </div>
  )
}

export default App;