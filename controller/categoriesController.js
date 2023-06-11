const categoryService=require('../service/categoryService')

const categoryController={
    add:async(req,res)=>{
        try{
        const {name}=req.body
        const resp=await categoryService.createCategory(name)
        console.log(resp)
        return res.status(resp).json(resp==200?{msg:"Category Created"}:{msg:"Category Already Exist"})
        }
        catch(error){
            console.error(error)
            return res.status(500).json(error)
        }
    },
    delete:async(req,res)=>{
        try{
        const {id}=req.params
        const resp=await categoryService.deleteCategory(id)
        return res.status(resp).json(resp==200?{msg:"Category Deleted"}:{msg:"Category does not exist"})
        }
        catch(error){
            console.error(error)
            return res.status(500).json(error)
        }
    },
    update:async(req,res)=>{
        try{
        const {id,name}=req.query
        const resp=await categoryService.updateCategory(id,name)
        return res.status(resp).json(resp==200?{msg:"Category Updated"}:{msg:"Category does not exist"})
        }
        catch(error){
            return res.status(500).json(error)
        }
    },
    getAll:async(req,res)=>{
        try{
        return res.status(200).json(await categoryService.getAll())
        }
        catch(error){
            return res.status(500).json(error)
        }
    }
}

module.exports=categoryController