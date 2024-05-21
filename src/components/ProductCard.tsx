import { FC } from "react"
import Image from "./ui/Image"
import Button from "./ui/Button"
import { IProduct } from "./interfaces"
import {txtSlicer} from "./utils/functions"

interface IProps{

  product:IProduct

}
const ProductCard:FC<IProps>= ({product}) => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto  border  border-white rounded-md text-sm  p-3 flex flex-col gap-2 md:gap-4">
      <Image 
      src={product.imageURL}
      className={"w-full rounded-md h-60"}
      alt={"iamge"} 
      />
       <h2 className="font-bold">{product.title} </h2>
       <p>{txtSlicer(product.description)}</p>

      <div  className="flex   space-x-1 items-center">
      <span className="w-5 h-5 bg-red-700 rounded-full  cursor-pointer"/>
        <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-blue-700 rounded-full cursor-pointer"/>
        <span className="w-5 h-5 bg-green-700 rounded-full cursor-pointer"/>
      </div>

    <div className="flex items-center  justify-between">
      <span>${product.price}</span>

      <Image 
       src={product.imageURL}
       className={"w-10 h-10  rounded-full object-cover"}
      alt={"iamge"} 
      />
    </div>

    <div className="flex items-center  space-x-3 mt-5">
      <Button className={"bg-indigo-700"} onClick={()=>{
        console.log('ddddddddddddd');
      }} 
      >Edit</Button>
      <Button className={"bg-red-700"}
    
      >Delete</Button>
    </div>

    </div>
  )
}

export default ProductCard