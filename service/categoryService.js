const categories = require("../model/categoryModel");
const carService=require("../service/carService")

const createCategory = async (name) => {
  const category = await categories.findOne({ name });
  if (category) {
    return 500
  }

  await categories.create({name})

  return 200
};

const deleteCategory=async(id)=>{
    const category=await categories.findById(id)
    if(!category){
        return 500
    }
    else{
        await categories.findByIdAndDelete(id)
        //delete all cars with the category
        const cars=await carService.getCarsAgainstCategory(id)
        cars.map((car)=>
        carService.deleteCar(car._id)
        )
        return 200
    }
}

const updateCategory=async(id,name)=>{
    const category=await categories.findById(id)
    if(!category){
        return 500
    }
    else{
        await categories.findByIdAndUpdate(id,{
            name
        })
        return 200
    }
}

const getAll=async()=>{
    return await categories.find()
}



const getCategory=async(id)=>{
    return await categories.findById(id)
}

module.exports = {
    createCategory,
    deleteCategory,
    updateCategory,
    getAll,
    getCategory
};
