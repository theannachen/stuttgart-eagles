import "./FrontPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";

import { useAuth } from "../AuthContext";
/**
 * Allows user to register.
 * @return {Object} - Register page.
 * */
const Register = () => {
  const [form] = Form.useForm();
  const [userType, setUserType] = useState("Player/Family");

  const onUserTypeChange = ({ userTypeValue }) => {
    setUserType(userTypeValue);
  };
  return (
    <div>
      <Header />
      <div className="registerContainer">
        <h1>Register</h1>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ userTypeValue: userType }}
          onValuesChange={onUserTypeChange}
        >
          <Form.Item label="I am a..." name="userTypeValue">
            <Radio.Group>
              <Radio.Button value="player">Player/Parent</Radio.Button>
              <Radio.Button value="coach">Coach</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name" required tooltip="This is a required field">
            <Input placeholder="John Smith" />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
