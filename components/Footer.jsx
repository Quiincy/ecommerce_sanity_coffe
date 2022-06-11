import React from 'react'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'


const Footer = () => {
    return (
        <div className='footer-container'>
            <p>2022 Broadway Coffee All rights reserved</p>
            <p className='icons'>
                <a href="https://www.instagram.com/coffee_broadway_/" target="_blank"><AiFillInstagram /></a>
                <a href="https://www.facebook.com/BroadwayCoffeeVerbitskogo/" target="_blank"><AiFillFacebook /></a>
            </p>
        </div>
    )
}

export default Footer