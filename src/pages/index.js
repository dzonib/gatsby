import React from 'react'
import { Link } from 'gatsby'


const IndexPage = () => {
    return <div>
        <h1>Hello</h1>
        <h2>I am king of the bongo</h2>

        <p>Go to <Link to="/contact">Contact</Link></p>
    </div>
}

export default IndexPage