const CarMakes=[
    {
        id:1,
        name:"Audi",
    },
    {
        id:2,
        name:"BMW",
    },
    {
        id:3,
        name:"Ford",
    }
    

]

const Pricing=[
    {
        id:1,
        amount:"1000$"
    },
    {
        id:2,
        amount:"2000$"
    },
    {
        id:3,
        amount:"5000$"
    },
    {
        id:4,
        amount:"10000$"
    }
]

const Category=[
    {
        id:1,
        name:'SUV',
        img_src:"/CarIcons/suv.png"
    },
    {
        id:2,
        name:'Sedan',
        img_src:"/CarIcons/sedan.png" 
    },
    {
        id:3,
        name:'Hatchback',
        img_src:"/CarIcons/hatchback.png" 
    },
    {
        id:4,
        name:'Coupe',
        img_src:"/CarIcons/coupe.png" 


    },
    
    {
        id:5,
        name:'Hybrid',
        img_src:"/CarIcons/hatchback.png" 
    }, 
    {
        id:6,
        name:'Convertible',
        img_src:"/CarIcons/convertible.png" 
    }, 
    {
        id:7,
        name:'Van',
        img_src:"/CarIcons/van.png" 
    }, 
    {
        id:8,
        name:'Truck',
        img_src:"/CarIcons/truck.png" 
    }, 
    {
        id:9,
        name:'Electric',
        img_src:"/CarIcons/electric-car.png" 
    },
]
export default {
    CarMakes,
    Pricing,
    Category
}