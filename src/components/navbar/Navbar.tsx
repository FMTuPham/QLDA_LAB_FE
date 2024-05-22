import { Flex, Image, Space } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../navbar/Navbar.css'
import { useAppSelector } from '../../redux/hooks'

function Navbar() {
  const navigate = useNavigate()
  const isLoggedIn = useAppSelector(state => state.userReducer.loggedIn)
  return (
    <>
      <div className='navbar'>
        <Flex align='center' justify='space-between' style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Space>
            <Flex align='center' justify='space-between' gap={8}>
              <Image
                src={logo}
                alt='Logo'
                preview={false}
                width={'auto'}
                style={{ cursor: 'pointer' }}
                height={60}
                onClick={() => navigate('/')}
              />
              <Flex
                vertical
                align='center'
                justify='center'
                className='navbar_infor navbar_infor_hidden'
              >
                <span>Quản lý rạp chiếu phim</span>
              </Flex>
            </Flex>
          </Space>
          <Space></Space>
          <Space>
            {!isLoggedIn ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Link to='/login'>Đăng nhập</Link>
              </div>
            ) : null}
          </Space>
        </Flex>
      </div>
    </>
  )
}

export default Navbar
