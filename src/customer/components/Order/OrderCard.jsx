import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top'  src="https://th.bing.com/th/id/OIP.q_rjMwTEEh8ov-IKHOhHVAHaHa?rs=1&pid=ImgDetMain"/>
                    <div className='ml-5 text-left'>
                            <p className=''>Mem Slim Mid Rise Black Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>size : L</p>
                            <p className='opacity-50 text-xs font-semibold'>Color : Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                       
                        <p>$1099</p> 
            </Grid>


            <Grid item xs={4}>
                      {true && 
                      <div>
                       <p>
                        <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text=sm'/>
                            <span>
                                Delivered on march 03
                            </span>
                        </p> 
                        <p className='text-sm'>
                            your item has been delivered
                        </p>
                      </div>}
                        
                      {false &&  <p>
                            <span>
                                Expected Delivcery on march 03
                            </span>
                        </p> }
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard
