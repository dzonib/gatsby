import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'
import Layout from '../components/layout';


const About = () => {
    return (
        <div>
            <Layout>
                <h1>O_o</h1>
                <p>Want to work with me? <Link to="/contact">Reach out</Link></p>
            </Layout>
        </div>
    )
}

export default About