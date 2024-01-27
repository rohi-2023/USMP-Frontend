import product1 from "./image/staticImages/bag1.jpeg"
import product2 from "./image/staticImages/edge_control.jpeg"
import product3 from "./image/staticImages/hairband1.jpeg"
import product4 from "./image/staticImages/laptopbag1.jpeg"
import product5 from "./image/staticImages/lipgloss.jpeg"
import product6 from "./image/staticImages/necklace2.jpeg"
import product7 from "./image/staticImages/perfume1.jpeg"
import product8 from "./image/staticImages/shirt1.jpeg"
import product9 from "./image/staticImages/skirt1.jpeg"
import product10 from "./image/staticImages/watch1.jpeg"


export const latestProducts=[
    {
        id:1,
        images:product1,
        name:"Bag",
        price:10000,
        rating:Math.floor(Math.random()*5)
    },{
        id:2,
        images:product2,
        name:"Edge Control",
        price:2000,
        rating:Math.floor(Math.random()*5)
    },{
        id:3,
        images:product3,
        name:"Hair Band",
        price:500,
        rating:Math.floor(Math.random()*5)
    },{
        id:4,
        images:product4,
        name:"Laptop Bag",
        price:Math.floor(Math.random()*10000),
        rating:Math.floor(Math.random()*5)
    },{
        id:5,
        images:product5,
        name:"Lip gloss",
        price:Math.floor(Math.random()*500),
        rating:Math.floor(Math.random()*5)
    },{
        id:6,
        images:product6,
        name:"Necklace",
        price:Math.floor(Math.random()*3000),
        rating:4.2
    },{
        id:7,
        images:product7,
        name:"Perfume",
        price:Math.floor(Math.random()*5000),
        rating:Math.floor(Math.random()*5)
    },{
        id:8,
        images:product8,
        name:"Shirt",
        price:Math.floor(Math.random()*5000),
        rating:Math.floor(Math.random()*5)
    },{
        id:9,
        images:product9,
        name:"Skirt",
        price:Math.floor(Math.random()*5000),
        rating:Math.floor(Math.random()*5)
    },{
        id:10,
        images:product10,
        name:"Watch",
        price:Math.floor(Math.random()*10000),
        rating:Math.floor(Math.random()*5)
    }
]