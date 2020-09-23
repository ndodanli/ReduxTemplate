import React from 'react'
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <Link to="/post">Go Post Page</Link>
            <br />
            <Link to="/get">Go Get Page</Link>
            <br />
            <Link to="/put">Go Put Page</Link>
            <br />
            <Link to="/delete">Go Delete Page</Link>
        </div>
    )
}

export default HomePage
