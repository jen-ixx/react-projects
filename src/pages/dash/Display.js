import React from 'react'

const Display = () => {

  return (
    <div className='grid grid-cols-2 items-center'>

      <div className="dis-img">
        <dotlottie-player src="https://lottie.host/fdcd7df3-0c72-43f0-8346-12bebd56c714/JwyRbDNvNA.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>

      <div className="dis-info space-y-3">
        <h1 className='text-xl'>Hi I'm Jenish</h1>
        <div>
          <em className='text-pink-600'>Some Dev, Freelancer, Rounder</em>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolores laudantium. Animi, repellendus? Minus beatae facilis debitis, neque harum accusamus quod corporis assumenda asperiores sapiente rerum necessitatibus nulla reiciendis officia! Magnam sint deserunt perspiciatis libero nisi suscipit illo quae temporibus, minus autem architecto culpa quo ad quas dolore velit esse!</p>
      </div>

    </div>
  )
}

export default Display
