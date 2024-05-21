import { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
    className?:string
    width?:"w-fit"| "w-full"


}
const Button:FC<IProps>= ({children,className,width='w-full',...rest}) => {
  return (
        <button 
        className={`${className}  ${width}  text-white p-2 rounded-md` }
        {...rest}
        >

        {children}
        </button>
 
  )
}

export default Button