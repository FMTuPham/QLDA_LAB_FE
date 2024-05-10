import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { Route, Routes } from 'react-router-dom';
import MovieList from '../../components/MovieList';

function AdminScreen() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider className='layout__main'>
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout
        className='layout__right'
      >
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className='layout__content' 
        >
          <Routes>
            <Route path='/movieList' element={<MovieList />}/>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}
export default AdminScreen