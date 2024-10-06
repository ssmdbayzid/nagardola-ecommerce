import React from 'react'
import {ClockCircleOutlined, MailOutlined, LockOutlined, GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import { Button, Divider, Input, Space, Typography } from 'antd';


export default function Signup() {
  return (
    <div className='container'>
      <div className="flex">
        <div className="w-1/2">
        <img src="https://img.freepik.com/premium-vector/register-access-login-password-internet-online-website-concept-flat-illustration_385073-108.jpg?semt=ais_hybrid" alt="" />
        </div>
    <div className="w-1/2 p-5 order-2">
      <h2 className='title text-center mb-8'>Sign Up</h2>
      <form action="">
      <div className="">
      <Typography.Title level={5}>Email</Typography.Title>
      <Input  className='border-primary btn-primary' type='email' prefix={<MailOutlined className="border-r-2 pr-3 border-primary/70 text-primary" />} placeholder="Enter Email Address" />
      </div>
      <div className="">
      <Typography.Title level={5}>Password</Typography.Title>
      <Input className='border-primary' type='password'  prefix={<LockOutlined className="border-r-2 pr-3 border-primary/70 text-primary" />} placeholder="Enter Email Address" />
      </div>
      <Button size='large' className='w-full mt-5 border-none btn-primary bg-primary/80 text-white text-xl'>Sign Up</Button>
      </form>
      <p className='mt-2'>Already have an account?<a href="/login" className='text-primary font-semibold '> Log In</a></p>

      <Divider 
      variant='dotted'
       style={{
        borderColor: '#7cb305',
      }}>Or</Divider>

      <div className="flex gap-5" >
      <Button size='large' className='w-1/2 mt-5 border-secondary  text-secondary text-xl' icon={<GoogleOutlined />}>Google</Button>
      <Button size='large' className='w-1/2 mt-5 border-secondary  text-secondary  text-xl' icon={<FacebookOutlined />}>Facebook</Button>
      </div>
    </div>
    </div>
    </div>
  )
}
