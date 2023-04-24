import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>{heroBanner.smallText}</p>
                <h3>{heroBanner.midText}</h3>
                <h1>{heroBanner.product}</h1>

                <img src={urlFor(heroBanner.image)} alt="amarillocoffee" className='hero-banner-image' />
            </div>
            <div>
                <Link href='https://ecommerce-sanity-coffe.vercel.app/product/khelveti'>
                    <button type='button'>{heroBanner.buttonText}</button>
                </Link>
                <div className='desc'>
                    <h5>Опис</h5>
                    <p>{heroBanner.desc}</p>
                </div>
            </div>

        </div >
    )
}

export default HeroBanner