import { FC, useState } from "react"
import ProductCard from "./components/ProductCard"
import { ProductDetails } from "./components/data"
import Model from "./components/ui/Modal"
import Button from "./components/ui/Button"

interface IProps {
}
const App: FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const renderProductList = ProductDetails.map(product => <ProductCard key={product.id} product={product} />)
  return (
    <main className="container mx-auto">

          <Button className={"bg-indigo-500 hover:bg-indigo-700"} onClick={() => {
            openModal()
          }}
          >Add</Button>
      <Model isOpen={isOpen} closeModal={closeModal} title={"Title Product"}>

        <div className="flex  space-x-2">

          <Button className={" bg-indigo-500 hover:bg-indigo-700"} onClick={() => {
            
          }}
          >Submit</Button>

          <Button className={"bg-gray-500 hover:bg-gray-700"} onClick={() => {
            
          }}
          >Cencel</Button>

        </div>
      </Model>

      <div className="bg-slate-100 border-red-500 m-5 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-2 p-3 rounded-md">
        {renderProductList}


      </div>
    </main>
  )
}

export default App