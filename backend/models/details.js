import mongoose from 'mongoose';

const detailsSchema = new mongoose.Schema(
  {
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  mobile:{
    type:Number,
    required:true,
  },
},
{timestamps:true}
)

const Details = mongoose.model('Details',detailsSchema);

export default Details;