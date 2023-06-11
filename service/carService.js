const carModel=require('../model/carModel')
const categoryService=require('../service/categoryService')

const createCar=async(body)=>{
    await carModel.create(body)
    return 200
}

const deleteCar=async(id)=>{
    console.log(id)
    const car=await carModel.findById(id)
    if(!car) return 400
    await carModel.findByIdAndDelete(id)
    return 200
}

const updateCar=async(id,body)=>{
    const car=await carModel.findById(id)
    if(!car) return 400
    await carModel.findByIdAndUpdate(id,body)
    return 200
}

const getCars=async()=>{
    return await carModel.find();
}

const getCarsAgainstCategory=async(id)=>{
    const cars=carModel.find({categories:id})
    if(cars.length==0)
    return []
    else
    return cars
}


module.exports={
    createCar,
    deleteCar,
    updateCar,
    getCars,
    getCarsAgainstCategory
}