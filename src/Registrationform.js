import React from 'react'

const Registrationform = () => {
  return (
    <div className='h-screen bg-slate-300 pt-16 pl-[650px]'>
      <div className='h-[800px] w-[650px] bg-white'>
        <header className='bg-[green] h-28 text-white'>
          <h1 className='font-serif font-bold text-3xl flex justify-center pt-10'>Registration form</h1>
        </header>

        <form className='font-sans text-xl pt-14 pl-14'>
          <div>
            <label>Username</label> <br />
            <input type='text' placeholder='Enter your fullname' name='name' className='bg-slate-300 h-[40px] w-[32rem] rounded-md'></input>
          </div>

          <div className='pt-9'>
            <label>Email</label> <br />
            <input type='email' placeholder='Enter your Email' name='email' className='bg-slate-300 h-[40px] w-[32rem] rounded-md'></input>
          </div>

          <div className='pt-9'>
            <label>Phone Number</label> <br />
            <input type='number' placeholder='Enter your Phone Number' name='phone nmber' className='bg-slate-300 h-[40px] w-[32rem] rounded-md'></input>
          </div>

          <div className='pt-9'>
            <label>Password</label> <br />
            <input type='password' placeholder='Enter your Password' name='password' className='bg-slate-300 h-[40px] w-[32rem] rounded-md'></input>
          </div>

          <div className='pt-9 pb-6'>
            <label>Confirm Password</label><br />
            <input type='password' placeholder='Enter again your Password' name='password' className='bg-slate-300 h-[40px] w-[32rem] rounded-md'></input>
          </div> <br />
          <button className='bg-[green] h-[50px] w-[32rem] rounded-md text-white font-bold'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Registrationform
