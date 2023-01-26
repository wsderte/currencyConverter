import React from 'react'
import Header from './components/header/header'
import Clients from './components/clients/clients'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Work from './components/work/work'

function App() {
    return (
        <div>
            <Header />
            <Clients />
            <Work />
            <About />
            <Footer />
        </div>
    )
}

export default App
