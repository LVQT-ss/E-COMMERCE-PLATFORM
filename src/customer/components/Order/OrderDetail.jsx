import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTraker from './OrderTraker'
import { Grid } from '@mui/material'

const OrderDetail = () => {
  return (
    <div className='px:5 lg:px-20 text-left'>
        <div>

            <h1 className='font-bold text-xl py-7'>Delivery address</h1>
            
            <AdressCard/>
       
        </div>
            <div className='pt-20'>
                <OrderTraker activeStep={3}/>
            </div>

            <Grid className='space-x-5' container>
                    <Grid className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}} item container>
                            <Grid item xs={6}>
                                        <div>
                                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://th.bing.com/th/id/OIP.q_rjMwTEEh8ov-IKHOhHVAHaHa?rs=1&pid=ImgDetMain" alt="" />
                                            <div className='space-y-2 ml-5'>
                                                <p>Mem superslim nigga</p>
                                                <p className='space-x-5'><span>color:pink</span>Size:M</p>
                                                <p>Seller:linaria</p>
                                                <p>$1099</p>
                                            </div>
                                        </div>
                            </Grid>
                    </Grid>
            </Grid>

    </div>
  )
}

export default OrderDetail
