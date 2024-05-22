import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { Route, Routes } from 'react-router-dom';
import MovieList from '../../components/MovieList';
import CreateMovie from './createMovie/CreateMovie';
import HeaderGeneral from '../../components/HeaderGeneral';

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
        <HeaderGeneral collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          className='layout__content'
        >
          <Routes>
            <Route path='/movieList' element={<MovieList />}/>
            <Route path='/createMovie' element={<CreateMovie />}/>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}
export default AdminScreen