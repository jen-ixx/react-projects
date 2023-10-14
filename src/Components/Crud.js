import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Radio,
  Select,
  Option,
  Textarea
} from "@material-tailwind/react";
import { useFormik, yupToFormErrors } from 'formik';
import * as yup from 'yup';

const radioData = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Other', value: 'Other' },
];

const checkData = [
  { label: 'Dance', value: 'Dance' },
  { label: 'Sing', value: 'Sing' },
  { label: 'Read', value: 'Read' },
];




const Crud = () => {

  const CrudSchema = yup.object().shape({
    username: yup.string().min(4).max(25).required(),
    email: yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email').required(),
    gender: yup.string().required(),
    habits: yup.array().min(1).required(),
    country: yup.string().required(),
    msg: yup.string().min(100).max(500).required(),
    imagefile: yup.mixed().test('fileType', 'Invalid file type',
      (value) => {
        return value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
      })
      .test('fileSize', 'File too large',
        (value) =>
          value && value.size <= 10 * 1024 * 1024
      )
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      gender: '',
      habits: [],
      country: '',
      msg: '',
      imagefile: null,
      imageReview: ''
    },
    onSubmit: (val) => {
      console.log(val);
    },
    validationSchema: CrudSchema
  });

  return (
    <Card color="transparent" shadow={false} className='mx-auto  max-w-lg'>
      <form onSubmit={formik.handleSubmit} className=" mb-2  mt-10 ">
        <div className="mb-4 flex flex-col gap-6">

          <div>
            <Input name='username' value={formik.values.username} onChange={formik.handleChange} size="lg" label="Name" />
            {formik.errors.username && formik.touched.username && <h1 className='text-pink-800'>{formik.errors.username}</h1>}
          </div>

          <div>
            <Input name='email' value={formik.values.email} onChange={formik.handleChange} size="lg" label="Email" />
            {formik.errors.email && formik.touched.email && <h1 className='text-pink-800'>{formik.errors.email}</h1>}
          </div>

          <div>
            <p>Select Your Gender</p>
            <div className="flex gap-6">
              {radioData.map((radio, i) => {
                return <Radio onChange={formik.handleChange} key={i} name="gender" label={radio.label} value={radio.value} />;
              })}
              {formik.errors.gender && formik.touched.gender && <h1 className='text-pink-800'>{formik.errors.gender}</h1>}
            </div>
          </div>

          <div className='space-y-2'>
            <p>Select Your Habits</p>
            <div className="flex gap-6">

              {checkData.map((check, i) => {
                return <Checkbox onChange={formik.handleChange} key={i} name="habits" label={check.label} value={check.value} />;
              })}
              {formik.errors.habits && formik.touched.habits && <h1 className='text-pink-800'>{formik.errors.habits}</h1>}
            </div>
          </div>

          <div className='space-y-3'>
            <p>Select Your Country</p>
            <Select onChange={(e) => {
              formik.setFieldValue('country', e);
            }} label="Select Version">
              <Option value='Nepal'>Nepal</Option>
              <Option value='India'>India</Option>
              <Option value='China'>China</Option>
            </Select>
            {formik.errors.country && formik.touched.country && <h1 className='text-pink-800'>{formik.errors.country}</h1>}
          </div>

          <div>
            <Textarea
              value={formik.values.msg}
              onChange={formik.handleChange} label="Message" />
            {formik.errors.msg && formik.touched.msg && <h1 className='text-pink-800'>{formik.errors.msg}</h1>}
          </div>

          <div className='space-y-3'>
            <p>Select Your Image</p>
            <Input
              name='imageFile'
              onChange={(e) => {
                const file = e.target.files[0];
                formik.setFieldValue('imageFile', file);
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {
                  formik.setFieldValue('imageReview', e.target.result);
                })



              }}
              label="Image Select" type='file' accept="image/*" />
            {formik.errors.imagefile && formik.touched.imagefile && <h1 className='text-pink-800'>{formik.errors.imagefile}</h1>}
            {formik.values.imageReview && <img src={formik.values.imageReview} alt="" />}
          </div>

        </div>

        <Button type='submit' className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}

export default Crud
