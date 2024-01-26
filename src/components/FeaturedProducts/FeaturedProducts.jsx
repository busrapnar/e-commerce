import React from 'react'
import Card from '../Card/Card'
import "./featuredProducts.scss"

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id:1,
            img:"https://productimages.hepsiburada.net/s/473/600-800/110000516284646.jpg",
            img2:"https://productimages.hepsiburada.net/s/473/600-800/110000516284648.jpg",
            title:"Dress",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://productimages.hepsiburada.net/s/377/600-800/110000395832280.jpg",
            img2:"https://productimages.hepsiburada.net/s/377/600-800/110000395832283.jpg",
            title:"Coats",
            isNew:false,
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img:"https://productimages.hepsiburada.net/s/373/600-800/110000390557422.jpg",
            img2:"https://productimages.hepsiburada.net/s/373/600-800/110000390557425.jpg",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:4,
            img:"https://productimages.hepsiburada.net/s/496/600-800/110000547241299.jpg",
            img2:"https://productimages.hepsiburada.net/s/496/600-800/110000547242400.jpg",
            title:"Long Sleeve Graphic T-shirt",
            isNew:false,
            oldPrice:19,
            price:12,
        },
        {
            id:5,
            img:"https://productimages.hepsiburada.net/s/446/600-800/110000480641053.jpg",
            img2:"https://productimages.hepsiburada.net/s/446/600-800/110000480641055.jpg",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:6,
            img:"https://productimages.hepsiburada.net/s/494/600-800/110000545320785.jpg",
            img2:"	https://productimages.hepsiburada.net/s/494/600-800/110000545320784.jpg",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
    ]
  return (
    <div className='featuredProducts'>
        <div className="top">
        <h1>{type} products</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quis. Aliquid rerum vitae natus illo iusto! Ratione alias sequi atque aliquid error pariatur ab excepturi voluptatibus officiis, tempora, iusto in.
        </p>
        </div>
        <div className="bottom">
            {data.map(item => (
                <Card item={item} key={item.id}/>
            ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts