import { Grid, Typography,Button, Link } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Grid className="bg-black text-white text-center mt-10"
    container
    sx={{bgcolor:"black",color:"white",py:3}}
    >
      
      <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Company</Typography>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>About</Button>
            </div>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>Blog</Button>
                
            </div>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>press</Button>
                
            </div>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>jobs</Button>
                
            </div>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>partners</Button>
                
            </div>



      </Grid>
      <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Solution</Typography>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>marketing</Button>
            </div>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>analysize</Button>
                
            </div>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>commerece</Button>
                
            </div>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>insight</Button>
                
            </div>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>support</Button>
                
            </div>



      </Grid>
      <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Documentation</Typography>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>guild</Button>
            </div>


            <div>
            <Button className='pb-5' variant='h6' gutterButton>api status</Button>
                
            </div>



      </Grid>
      <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>legal</Typography>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>claim</Button>
            </div>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>privacy</Button>
                
            </div>

            <div>
            <Button className='pb-5' variant='h6' gutterButton>term</Button>
            </div>



      </Grid>

      
      <Grid className='pt-20' item xs={12} >

<Typography variant="body2" component="p" align="center"> &copy; 2023 My Company. All rights reserved.
</Typography>

<Typography variant="body2" component="p" align="center"> Made with love by Me.
</Typography>
<Typography variant="body2" component="p" align="center">icons made by (' ')


<Link href="freepik.com" color='inherit' underline='always'> freepik</Link>
<Link href="freepik.com" color='inherit' underline='always'> freepik</Link>

</Typography>
    </Grid>
    </Grid>
  )
}

export default Footer
