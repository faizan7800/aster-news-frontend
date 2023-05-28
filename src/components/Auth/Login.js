import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase";
import { Col, Row } from "antd";
import { Button, Form, Input } from "antd";
import { message } from "antd";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import {
  MailOutlined,
  EyeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import {
  useLoginMutation,
  useSaveGeoNewsByCategoryMutation,
  useSaveNewsByCategoryMutation,
  useSaveSammaNewsByCategoryMutation,
} from "../../services/nodeApi";

export default function Login() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [saveIntNewsByCat] = useSaveNewsByCategoryMutation();
  const [saveGeoNewsByCategory] = useSaveGeoNewsByCategoryMutation();
  const [saveSammaNewsByCategory] = useSaveSammaNewsByCategoryMutation();
  const categories = [
    "entertainment",
    "sports",
    "health",
    "general",
    "science",
    "technology",
  ];
  const saveNews = async () => {
    for (const cat of categories) {
      await saveIntNewsByCat(cat);
      await saveGeoNewsByCategory(cat);
      await saveSammaNewsByCategory(cat);
    }
  };

  // const onFinish = values => {}
  const signIn = async () => {
    // e.preventDefault();
    const res = await login({
      email,
      password,
    });
    if (res.data && res.data.status === "success") {
      saveNews();
      Cookie.set("jwt", res.data.token);
      navigate("/dashboard/topstories");
    } else {
      alert("user credentails are invlaid");
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Login failed");
  };

  return (
    <>
      <Row style={{ overflowY: "hidden" }}>
        <Col span={13}>
          <div style={{ height: "100vh" }}>
            <img
              className="login_img"
              src={require("../../images/login.jpg")}
              alt="svg"
            />
          </div>
        </Col>
        <Col span={11}>
          <div className="login_form">
            <div
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  marginBottom: 45,
                }}
              >
                Login to Your News Website Account
              </p>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 24,
                }}
                onFinish={signIn}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="email"
                  hasFeedback
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Please enter your email",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    prefix={<MailOutlined />}
                    className="input_email_icon"
                    style={{
                      borderRadius: "30px",
                      padding: "8px 8px 8px 15px",
                      background: "rgb(242, 242, 242)",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please enter your passowrd",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input_password_icon"
                    prefix={<EyeOutlined />}
                    style={{
                      borderRadius: "30px",
                      padding: "8px 8px 8px 15px",
                      background: "rgb(242, 242, 242)",
                    }}
                  />
                </Form.Item>

                <Form.Item style={{ textAlign: "center" }}>
                  <Button
                    // href='/topstories'
                    htmlType="submit"
                    style={{
                      width: "100%",
                      height: "2.6rem",
                      borderRadius: "30px",
                      background: "#e4b303",
                      fontWeight: "bold",
                    }}
                    loading={loading}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
              <div style={{ fontWeight: "bold", textAlign: "center" }}>
                <span style={{ opacity: 0.7 }}>Forgot </span>
                <span style={{ opacity: 0.8 }}> Email / Password</span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>
                  <Link to="/signup">
                    <Button
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "2.6rem",
                        borderRadius: "30px",
                        background: "#0277bd",
                        color: "white",
                        fontWeight: "bold",
                      }}
                      loading={loading}
                    >
                      Create Account
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
  );
}
