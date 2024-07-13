import React from 'react'

const GeneralFooter = () => {
    return (
        <footer className='relative mt-auto flex flex-col items-center text-gray-300 mb-6 gap-2 md:flex-row md:justify-evenly'>
            
            <div className='flex gap-x-4 md:order-last'>
                <a className='text-4xl hover:text-primary-color hover:animate-bounce' target='_blank' href="https://github.com/notKhlv">
                    <i className='bx bxl-github' ></i>
                </a>

                <a className='text-4xl hover:text-primary-color hover:animate-bounce' target='_blank' href="https://www.linkedin.com/in/abdusamad-xalilov-26b79a219/">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>

                <a className='text-4xl hover:text-primary-color hover:animate-bounce' target='_blank' href="https://notkhlv.github.io/Morent/">
                    <i className='bx bx-question-mark' ></i>
                </a>
            </div>

            <p className='md:order-2'>• Copyright ©2023 | All rights reserved • </p>
            <p>@not_khlv</p>
        </footer>
    )
}

export default GeneralFooter
