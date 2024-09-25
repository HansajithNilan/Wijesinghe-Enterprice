const Item = require ("../Model/ItemModel");




const getAllitems = async(req,res,next) =>{
    let items;

    try {
        items = await Item.find()
    }catch(err){
        console.log(err);
    }

    //not found
    if(!items){
        return res.status(404).json ({message : "Item Not found"})
    }

    //Display all Users
    return res.status(200).json({items});


};

//data insert
const additems = async(req,res,next)=>{
    const {itemname,getprice ,sellprice,pices,date } = req.body;

    let items;

    try{
        items = new  Item({itemname,getprice ,sellprice,pices,date});
        await items.save();
    }catch (err){
        console.log(err);
    }
     //not insert data
     if(!items){
        return res.status(404).json({message:"Item not Insert"})
        
     }
     return res.status(200).json ({items});

 
}

//data retrive 
const getById = async(req,res,next)=>{
    const id = req.params.id;

    let items;

    try{
        items = await Item.findById(id);
    }catch (err){
        console.log(err);
    }
    if(!items){
        return res.status(404).json({message:"Item not found"})
        
     }
     return res.status(200).json ({items});
}

const updateItems = async(req,res,next)=>{
    const id = req.params.id;
    const {itemname,getprice ,sellprice,pices,date } = req.body;

    let items;

    try{
        items = await Item.findByIdAndUpdate(id,{itemname:itemname,getprice:getprice,sellprice: sellprice,pices:pices,date :date});
        items = await items.save()
    }
    catch(err){
        console.log(err);
    }
    if(!items){
        return res.status(404).json({message:"Item not found"})
        
     }
     return res.status(200).json ({items});
    
}


//Update Item Details 

const deleteItem = async(req,res,next)=>{
    const id = req.params.id;

    let items;
    try {
        items = await Item.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }
    if(!items){
        return res.status(404).json({message:"Unable to delete"})
        
     }
     return res.status(200).json ({items});
}

   



exports.getAllitems = getAllitems;
exports.additems = additems;
exports.getById = getById;
exports. updateItems= updateItems;
exports. deleteItem= deleteItem;


