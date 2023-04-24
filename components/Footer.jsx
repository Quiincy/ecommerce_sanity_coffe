import React from 'react'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'


const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2023 Broadway Coffee All rights reserved</p>
            <p className='icons'>
                <a href="https://www.instagram.com/coffee_broadway_/" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
                <a href="https://www.facebook.com/BroadwayCoffeeVerbitskogo/" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
            </p>
        </div>
    )
}

export default Footer