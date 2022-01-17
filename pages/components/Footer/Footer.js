import React from 'react'
import fb from './fb.svg'
import ig from './ig.svg'
import twitter from './twitter.svg'
import github from './github.svg'


function Footer() {
    return (
        <div className='Footer'>
            <div className="rights-text">© 2021 Yassine Chih</div>
            <div className="social-media">
                <ul>
                    <li><img src={fb} alt="fb" /></li>
                    <li><img src={twitter} alt="twitter" /></li>
                    <li><img src={ig} alt="ig" /></li>
                    <li><img src={github} alt="github" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
