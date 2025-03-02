import {faker} from '@faker-js/faker'
function createRandomeCarList(){
    return{
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        
        images:'https://www.google.com/imgres?q=cars&imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0556%2F8587%2F3825%2Ffiles%2F00722-Cars-_Blackstone__Rounded.png%3Fv%3D1716407951&imgrefurl=https%3A%2F%2Fau.yotoplay.com%2Fproducts%2Fcars&docid=rN5DqGECtPc7gM&tbnid=tD8IBp6st_qUbM&vet=12ahUKEwiLypHNjOuLAxXr-gIHHaWBAKcQM3oFCIMBEAA..i&w=641&h=1021&hcb=2&ved=2ahUKEwiLypHNjOuLAxXr-gIHHaWBAKcQM3oFCIMBEAA',
        miles:1000,
        gearType:'Automatic',
        price:faker.finance.amount({min:4000,max:20000})
    }
}  
const carList =faker.helpers.multiple(createRandomeCarList,{
    
    count:7
})

export default {
    carList
}