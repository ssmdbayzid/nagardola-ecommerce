

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);

    const links = [
 
        {
            display: "Dashboard",
            link: "/disboard"
        },
        {
            display: "Edit Profile",
            link: "/edit_profile"
        },
        {
            display: "Edit Address",
            link: "/edit_address"
        },
        {
            display: "Order History",
            link: "/order_history"
        },
        {
            display: "Order Details",
            link: "/order_details"
        },
        {
            display: "Address",
            link: "/address"
        },
        {
            display: "Password",
            link: "/Log Out"
        }        
    ]
  return (
    <div className='container flex item-start'>
   
    
    {/* <ul className='flex flex.col'>
    {
        links.map(link=>
            <NavLink link={link.link}>{link.display}</NavLink>
        )
    }
    </ul> */}
    <Layout>
    
      <Sider style={{
        background: "#fff"        
      }}
      className="border"
      trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        {/* <div className="demo-logo-vertical" /> */}
        <h2 className='text-lg font-semibold text-center py-3 bg-accent/20'>Dashboard</h2>
        <Menu          
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: (
                <a href="/dashboard">Dashboard</a>
              ),
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,              
              label: (
                <a href="/edit-profile">Edit Profile</a>
              ),
            },
            {
              key: '3',
              icon: <UploadOutlined />,              
              label: (
                <a href="/edit-address">Edit Address</a>
              ),
            },
            {
              key: '4',
              icon: <UploadOutlined />,              
              label: (
                <a href="/order-history">Order History</a>
              ),
            },
            {
              key: '5',
              icon: <UploadOutlined />,              
              label: (
                <a href="/order-details">Order Details</a>
              ),
            },
            {
              key: '6',
              icon: <UploadOutlined />,
              label: (
                <a href="/address">Address</a>
              ),
              
            },
            {
              key: '7',
              icon: <UploadOutlined />,              
              label: (
                <a href="/password">Password</a>
              ),
            },
          ]}
        />
      </Sider>
      <Layout >
        <Header style={{ padding: 0, background: "rgb(var(--primary-color))", height: 'auto'}}>
    
        <h2 className='text-lg font-semibold text-center py-3 text-white'>Dashboard</h2>
        </Header>
        <Content
          style={{
            margin: '24px 16px',         
            minHeight: 280,                 
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>  
    </div>
  )
}
