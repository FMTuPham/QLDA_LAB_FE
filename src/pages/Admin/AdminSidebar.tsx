import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import '../../css/_layout.css'
import { Link } from "react-router-dom"

interface AdminSidebarProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}
function AdminSidebar({ collapsed, setCollapsed }: Readonly<AdminSidebarProps>): JSX.Element {

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint='lg'
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: (
              <Link
                to='/movieList'
              >
                Danh sách phim
              </Link>
            ),
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
  )
}

export default AdminSidebar