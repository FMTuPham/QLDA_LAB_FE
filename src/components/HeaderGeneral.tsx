import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Flex, Layout } from 'antd'
import React from 'react'
import '../css/_layout.css'
const { Header } = Layout

interface HeaderGeneralProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}
function HeaderGeneral({ collapsed, setCollapsed }: Readonly<HeaderGeneralProps>) {
  return (
    <Header className='layout__header'>
      <Flex gap={8} align='center'>
        <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: '16px', width: 64, height: 64 }}
        />
        <h1 className={`header_title ${!collapsed ? 'header_title_hidden' : ''}`}>Header</h1>
      </Flex>
    </Header>
  )
}

export default HeaderGeneral
