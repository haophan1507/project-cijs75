import React from 'react'
import styled from 'styled-components'
import { Row, Col, Image, Typography, Form, Input, Button } from 'antd'

const Container = styled.div`
  height: 100vh;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
`

const LoginWapper = styled(Col)`
  margin-top: 100px;
  height: 600px;
  border: 2px solid black;
`

const FormLogin = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Login() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <Row align='middle'>
        <LoginWapper span={10} offset={7}>
          <Row>
            <Col span={12}>
              <Image
                width='100%'
                height='600px'
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
              />
            </Col>
            <FormLogin span={12}>
              <Typography.Title level={2} style={{ color: '#14437a' }}>Login Account</Typography.Title>

              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                    { min: 6, message: 'Nhap them di ong oi' },
                    { pattern: new RegExp(/^\S+@\S+\.\S+$/), message: 'khong phai email' },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </FormLogin>
          </Row>
        </LoginWapper>
      </Row>
    </Container>
  )
}

export default Login