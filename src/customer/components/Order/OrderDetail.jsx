import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

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

            <Grid className='space-y-5' container>
{[1,1,1,1].map((item) =>

                    <Grid className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}} item container>
                            <Grid item xs={6}>
                                        <div className='flex items-center space-x-4'>
                                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://th.bing.com/th/id/OIP.q_rjMwTEEh8ov-IKHOhHVAHaHa?rs=1&pid=ImgDetMain" alt="" />
                                            <div className='space-y-2 ml-5'>
                                                <p className='font-semibold'>Mem superslim nigga</p>
                                                <p className='space-x-5 opacity-50 text-xs font-semibold'><span>color:pink</span>    Size:M</p>
                                                <p>Seller:linaria</p>
                                                <p>$1099</p>
                                            </div>
                                        </div>
                            </Grid>

                            <Grid item>
                                <Box sx={{color:deepPurple[500]}}>
                                    <StarBorderIcon sx={{fontSize:"2rem" }} className="px-2"/>
                                    <span>rate & review product</span>
                                </Box>
                            </Grid>

                    </Grid>

)}



            </Grid>

    </div>
  )
}

export default OrderDetail
