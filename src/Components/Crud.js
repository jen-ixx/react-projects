import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";



const Crud = () => {
  return (
    <Card color="transparent" shadow={false} className='mx-auto  max-w-lg mt-10'>
      <form className=" mb-2  mt-10 ">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>

        <Button className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}

export default Crud
