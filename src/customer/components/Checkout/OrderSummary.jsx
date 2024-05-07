import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
          <div className='p-5 shadow-lg rounded-s-md border'>
            <AdressCard/>
          </div>

          <div>
          <div className='lg:grid grid-cols-3 relative text-left'>
            <div className='col-span-2'>
               {[1,1,1,1].map((item)=> <CartItem/>)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
              <div className='border'>
                <p className='uppercase font-bold opacity-60 pb-4 '>PRICE DETAIL </p>
                <hr/>
                <div className='space-x-3 font-semibold mb-10'>

                  <div className='flex justify-between pt-3 '>
                    <span>Price </span>
                    <span>4621$</span>
                  </div>

                  <div className='flex justify-between pt-3'>
                    <span>Discount </span>
                    <span className=' text-green-600' >-41$</span>
                  </div>

                  <div className='flex justify-between pt-3'>
                    <span>Delivery </span>
                    <span className=' text-green-600'>Free</span>
                  </div>

                  <div className='flex justify-between pt-3 font-bold'>
                    <span>Total amount </span>
                    <span className=' text-green-600'>4621$</span>
                  </div>



                </div>
                <Button variant='contained' className='w-full mt-5' sx={{px:"2.5rem" , py:".7rem",bgcolor:"#9155fd"}}>
                  CHECK OUT
                </Button>
              </div>
            </div>
          </div>
 
    
    </div>

    </div>
  )
}

export default OrderSummary
