const carService=require('../service/carService')

const carController={
    add:async(req,res)=>{
        try{
        const body=req.body
        const car=await carService.createCar(body)
        return res.status(car).json({msg:"Car Created"})
        }
        catch(error){
            return res.status(500).json(error)
        }
    },
    update:async(req,res)=>{
        try{
        const {id,name,categories,color,model,registrationNumber,make}=req.query
        const body={name,categories,color,model,registrationNumber,make}
        const car=await carService.updateCar(id,body)
        return res.status(car).json(car==200?{msg:"Car updated"}:{msg:"Car not found!"})
        }
        catch(error){
            return res.status(500).json(error)
        }
    },
    delete:async(req,res)=>{
        try{
        const {id}=req.params
        const car=await carService.deleteCar(id)
        return res.status(car).send(car==200?{msg:"Car Deleted"}:{msg:"Car not found"})
        }
        catch(error){
            return res.status(500).json(error)
        }
    },
    getAll:async(req,res)=>{
        try{
        return res.status(200).json(await carService.getCars())
        }
        catch(error){
            console.error(error)
            return res.status(500).json(error)
        }
    },
    getAgainstCategory:async(req,res)=>{
        try{
        const {id}=req.params
        const cars=await carService.getCarsAgainstCategory(id)
        return res.status(cars.length==0?400:200).json(cars)
        }
        catch(error){
            return res.status(500).json(error)
        }
    }
}

module.exports=carController