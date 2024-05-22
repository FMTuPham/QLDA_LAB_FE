import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Flex, Input, Form, Button, message } from "antd"
import { LoginProps } from "../../../types/auth"
import { NoticeType } from "antd/es/message/interface";
import '../loginPage/LoginPage.css'
import logo from '../../../assets/logo.png'
import { loginAPI } from '../../../Api/service/auth.service'
import { setAccessToken, setLoggedIn } from "../../../redux/features/userSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";


function LoginScreen() {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const msg = (type: NoticeType, content: string) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  const onFinish = (values: LoginProps) => {
    
    const requiredField: LoginProps = {
      email: values.email as string,
      password: values.password as string,
    }

    loginAPI(requiredField).then(res => {
      console.log(res)
      const data = res.data.data
      if (res.data.status) {
        const token = data.token

        dispatch(setLoggedIn(true))
        dispatch(setAccessToken(token))
        navigate('/movieList')

      } else {
        //const messageError = res.data.message
      }
    })
  }
  return (
    <>
      {contextHolder}
      <div className='login__screen'>
        <div className='login__screen__container'>
          <Flex align='center' justify='space-evenly' gap={24} className='loginscreen__infor'>
            <img src={logo} alt=''/>
            <div className='loginscreen__form'>
              <h1>Đăng nhập</h1>
              <Form name='information_login' size='large' onFinish={onFinish}>
                <Form.Item
                  name='email'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập tên tài khoản!'
                    }
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder='Tên tài khoản' />
                </Form.Item>
                <Form.Item
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập mật khẩu!'
                    }
                  ]}
                >
                  <Input prefix={<LockOutlined />} type='password' placeholder='Mật khẩu' />
                </Form.Item>
                <Flex vertical justify='center' align='center'>
                  <Button type='primary' htmlType='submit' style={{ width: '200px' }}>
                    Đăng nhập
                  </Button>
                </Flex>
              </Form>
            </div>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default LoginScreen