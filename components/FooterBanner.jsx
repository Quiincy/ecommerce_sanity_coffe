import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, buttonText, desc, product, image } }) => {
    return (
        <div className='footer-banner-container'>
            <div className='banner-desc'>
                <div className='left'>
                    <p>{discount}</p>
                    <h3>{largeText2}</h3>
                    <h3>{largeText1}</h3>
                    <p>{saleTime}</p>
                </div>
                <div className='right'>
                    <p>{smallText}</p>
                    <h3>{midText}</h3>
                    <p>{desc}</p>
                    <Link href='https://ecommerce-sanity-coffe.vercel.app/product/khelveti'>
                        <button type='button'>{buttonText}</button>
                    </Link>

                    <img
                        src={urlFor(image)}
                        className="footer-banner-image"
                        width={300}
                        height={400}
                        top={150}
                        alt="helvetiya"
                    />
                </div>
            </div>
        </div >
    )
}

export default FooterBanner