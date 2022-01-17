import React from 'react'

function NavBar() {
    return (
        <div className='NavBar'>
            <div className="Logo">
                <h1>Yassine Chih</h1>
            </div>

            <div className="navigation-list">
                <div className="main-list">
                <ul>
                    <li>About me </li>
                    <li>Skillset</li>
                    <li>Technologies </li>
                    <li>Projects</li>
                </ul></div>

                <div className="sec-list">
                    <ul>
                        <li>Portfolio</li>
                        <li><button>Cantact me</button></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavBar
