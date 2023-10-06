import React from 'react'

const Practice2 = () => {



  return (

    <div>

      <nav className='bg-purple-800 text-white flex justify-between h-20'>
        <span className='text-xl flex items-center mx-4 font-bold'>Conor Mcgregor</span>
        <ul className='font-serif px-28 py-2 pt-6 flex space-x-11 justify-end'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Catalogue</li>
          <li className='cursor-pointer'>Contact Us</li>
        </ul>
      </nav>

      <main className='bg-fuchsia-200 flex justify-around'>
        <div className='main  py-40 pl-9'>
          <div className="text-6xl">
            The best phones in town
          </div>
          <p className='py-3 w-1/3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus numquam laudantium aspernatur delectus voluptatibus nostrum unde odio consequatur.</p>
          <div className="buttons my-2">
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-purple-900 hover:bg-white hover:border-2 hover:border-purple-900 mx-2">Buy Now</button>
            <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-purple-900 hover:bg-white hover:border-2 hover:border-purple-900 mx-2">Contact Us</button>
          </div>
        </div>

        <div className='flex items-center'>
          <img src="images/phone.jpg" className='h-80' alt="" />
        </div>
      </main>

    </div>
  )
}

export default Practice2
