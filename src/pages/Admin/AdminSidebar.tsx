import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import '../../css/_layout.css'
import { Link, useNavigate } from "react-router-dom"
import { logoutAPI } from "../../Api/service/auth.service"
import { useAppDispatch } from "../../redux/hooks"
import { resetUser } from "../../redux/features/userSlice"

interface AdminSidebarProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}



function AdminSidebar({ collapsed, setCollapsed }: Readonly<AdminSidebarProps>): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutAPI()
    dispatch(resetUser())
    navigate('/homepage')
  }
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
                to='/createMovie'
              >
                Thêm phim mới
              </Link>
            ),
          },
          {
            key: '2',
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
            key: '3',
            icon: <UserOutlined />,
            label: (
              <Link
                to='/homepage'
                onClick={handleLogout}
              >
                Đăng xuất
              </Link>
            ),
          }
        ]}
      />
    </Sider>
  )
}

export default AdminSidebar