import { NavLink } from 'react-router-dom'
import { productArray2 } from '../../latestProductsStaticArray'

function Products() {
  return (
    <div>
        <div className=" grid grid-cols-2 gap-5 px-2 py-5">
            {productArray2.map(function(eachProduct){
            return (
                  <NavLink  key={eachProduct.id} to={`/products/${eachProduct.id}`}>
                  <div className='bg-gray-100 shadow-md py-3 gap-3 border-[1px] items-center border-black rounded-md  flex flex-col '>
                      <img src={eachProduct.images} alt={`${eachProduct.name}`} className=' rounded-md h-32 w-32'  />
                      <div className=' py-1 flex flex-col items-center'>
                          <p className=' font-mono  text-sm'>{eachProduct.name}</p>
                          <p className=' text-[12px] font-bold'>₦{eachProduct.price.toLocaleString()}</p>
                      </div>
                  </div>
                  </NavLink>
            )
            })}
        </div>
    </div>
  )
}

export default Products