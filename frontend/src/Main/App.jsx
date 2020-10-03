import'bootstrap/dist/css/bootstrap.min.css'
import'font-awesome/css/font-awesome.min.css'
import './App.css'

import { HashRouter } from 'react-router-dom'
import React from 'react'
import Routes from './Routes'

import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Footer from '../components/templates/Footer'



export default props =>
<HashRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
    </div>
</HashRouter>