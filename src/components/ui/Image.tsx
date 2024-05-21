import { FC } from "react"

interface IProps{
 src:string
 className:string
 alt:string
}
const Image:FC<IProps>= ({src,className,alt}) => {
  return (
    <div>
         <img
       src={src} 
       className={className} 
       
       alt={alt}
       />
    </div>
  )
}

export default Image