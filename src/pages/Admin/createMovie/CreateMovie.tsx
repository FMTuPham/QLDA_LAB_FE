import { Button, DatePicker, Form, FormInstance, Input, Select, Space, message } from "antd";
import React from "react";
import Movie from "../../../types/movie.type";
import { createMovie } from "../../../Api/service/movie.service";


function CreateMovie() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage()
  const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false)
    const values = Form.useWatch([], form)
    React.useEffect(() => {
      form.validateFields({ validateOnly: true }).then(
        () => {
          setSubmittable(true)
        },
        () => {
          setSubmittable(false)
        }
      )
    }, [values, form])
    return (
      <Button type='primary' htmlType='submit' disabled={!submittable}>
        Đăng ký
      </Button>
    )
  }
  const onfinish = async (value: Movie) => {
    console.log(value)
    const createMovieRes = await createMovie(value)
    if (createMovieRes.status) {
      form.resetFields()
      messageApi.open(
        {
          type: 'success',
          content:'Tạo phim mới thành công'
        }
      )
    } else {
      messageApi.open(
        {
          type: 'error',
          content:'Tạo phim mới thất bại'
        }
      )
    }
  }
  return (
    <>
      {contextHolder}
      <Form
        form={form}
        name='createMovie'
        layout='vertical'
        autoComplete='off'
        onFinish={onfinish}
      >
        <Form.Item
          label='Tên'
          name='title'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên phim'
            }
          ]}
        >
          <Input
            placeholder="Nhập tên phim"
          />
        </Form.Item>
        <Form.Item
          label='Thể loại'
          name='genre'
          rules={[
            {
              required: true,
              message: 'Vui lòng chọn thể loại phim'
            }
          ]}
        >
          <Select
            style={{ width: '200px' }}
            showSearch
            placeholder="Chọn thể loại phim"
            options={[
              { label: 'Lãng mạn', value: 'Lãng mạn' },
              { label: 'Hài hước', value: 'Hài hước' },
              { label: 'Kinh dị', value: 'Kinh dị' },
              { label: 'Tài liệu', value: 'Tài liệu' },
              { label: 'Trinh thám', value: 'Trinh thám' },
              { label: 'Viễn tưởng', value: 'Viễn tưởng' },
            ]}
          />
        </Form.Item>
        <Form.Item
          label='Đạo diễn'
          name='director'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên đạo diễn'
            }
          ]}
        >
          <Input
            placeholder="Nhập tên đạo diễn"
          />
        </Form.Item>
        <Form.Item
          label='Năm phát hành'
          name='releaseYear'
          rules={[
            {
              required: true,
              message: 'Vui lòng chọn năm phát hành'
            }
          ]}
        >
          <DatePicker
            format='YYYY'
            picker="year"
            placeholder="Chọn năm phát hành"
          />
        </Form.Item>
        <Form.Item
          label='Mô tả'
          name='description'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mô tả phim'
            }
          ]}
        >
          <Input
            placeholder="Nhập mô tả phim"
          />
        </Form.Item>
        <Form.Item>
          <Space>
            <SubmitButton form={form} />
            <Button htmlType='reset'>Hủy</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateMovie