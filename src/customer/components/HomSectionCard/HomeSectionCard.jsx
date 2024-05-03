import React from 'react'

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3 '>

            <div className='h-[13rem]'>
                <img className="object-cover object-top w-full h-full" src='https://th.bing.com/th/id/OIP.PT14Dtqc_fG0wXzNzTp92AHaHa?rs=1&pid=ImgDetMain' alt='' />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-800'>No filter</h3>
                <p className='mt-2 text-sm text-gray-500'>men solid pure style </p>
            </div>

        </div>
    )
}

export default HomeSectionCard
