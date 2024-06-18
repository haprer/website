
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';
import { Paper } from '@mui/material';

import './PrimeCarousel.css';


export default function CircularDemo() {
    const products = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];  


    /**
     * Product: 
     *     { 
     *          name: str,
     *          imgrsrc: str, 
     *          caption: str - optional
     *     }
     */
    

    const productTemplate = (product) =>{
        return (
            <div className='product-item' id="product">
                <Paper>
                    <h1>{product}</h1>
                    <Image src="../../public/assets/img/orion/ucOccupancyThreshold.png" alt="Product" width="100" />
                    <p>Carousel Item</p>
                </Paper>
            </div>
        );
    };

    return (
        <div className='carousel-container'>
\            <Carousel value={products} numVisible={3} numScroll={3} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}
        