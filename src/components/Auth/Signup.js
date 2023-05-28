import React from 'react'
import { Col, Row } from 'antd'
import { Button, Form, Input } from 'antd'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import {
  MailOutlined,
  EyeOutlined,
  ArrowRightOutlined
} from '@ant-design/icons'
import { useSignupMutation } from '../../services/nodeApi'

function SignUp () {
  const navigate = useNavigate()
  const [signup] = useSignupMutation();
  const signUp = async(values) => {
    const res= await signup(values);
    if(res.data.status === 'success'){
      navigate('/login')
    }
  }
  return (
    <>
      <Row style={{ overflowY: 'hidden' }}>
        <Col span={13}>
          <div style={{ height: '100vh' }}>
            <img
              className='login_img'
              src={require('../../images/signup.jpg')}
              alt='svg'
            />
          </div>
        </Col>
        <Col span={11}>
          <div className='login_form'>
            <div
              style={{
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  marginBottom: 45
                }}
              >
                Sign Up to Our News Website
              </p>
              <Form
                name='basic'
                initialValues={{
                  remember: true
                }}
                labelCol={{
                  span: 8
                }}
                wrapperCol={{
                  span: 24
                }}
                onFinish={signUp}
              >
                <Form.Item
                  name='email'
                  hasFeedback
                  rules={[
                    {
                      type: 'email',
                      required: true,
                      message: 'Please enter your email'
                    }
                  ]}
                >
                  <Input
                    placeholder='Email'
                    prefix={<MailOutlined />}
                    className='input_email_icon'
                    style={{
                      borderRadius: '30px',
                      padding: '8px 8px 8px 15px',
                      background: 'rgb(242, 242, 242)'
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name='password'
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your passowrd'
                    }
                  ]}
                >
                  <Input.Password
                    placeholder='Password'
                    className='input_password_icon'
                    prefix={<EyeOutlined />}
                    style={{
                      borderRadius: '30px',
                      padding: '8px 8px 8px 15px',
                      background: 'rgb(242, 242, 242)'
                    }}
                  />
                </Form.Item>

                <Form.Item style={{ textAlign: 'center' }}>
                  <Button
                    htmlType='submit'
                    style={{
                      width: '100%',
                      height: '2.6rem',
                      borderRadius: '30px',
                      background: '#e4b303',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                    //   loading={loading}
                  >
                    SignUp
                  </Button>
                </Form.Item>
              </Form>

              <div style={{ marginTop: '10px' }}>
                <span>
                  <Link to='/login'>
                    <Button
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '2.6rem',
                        borderRadius: '30px',
                        background: '#0277bd',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                      // loading={loading}
                    >
                      Go to Login
                      <ArrowRightOutlined />
                    </Button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default SignUp
