import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/header/header.jsx'
import Project from './components/projects/projects.jsx'
import About from './components/about/about.jsx'
import Scroll from './components/scroll/scroll.jsx'
import Footer from './components/footer/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Project />
    <About />
    <Footer/>
    <Scroll/>
  </React.StrictMode>,
)
