import { Col, Row } from "antd";
import Link from "next/link";
import { Form, Input, Button, Checkbox } from "antd";
import Image from "next/image";
const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className="flex justify-content-start flex-col py-4 pl-28"
      style={{ height: "100%" }}
    >
      {/* Logo Row */}
      <Row>
        <Col>
          <Link href={"/"}>
            <Image
              className="cursor-pointer"
              width="80px"
              height="40x"
              src="/logo.png"
              alt="Logo"
            />
          </Link>
        </Col>
      </Row>
      {/* Page title */}
      <Row className="mt-16">
        <Col>
          <div className="font-bold text-4xl"> Login</div>
        </Col>
      </Row>
      {/* Login subtext */}
      <div className="subtext-login text-sm font-light mt-4">
        Sign in with your data that you entered during your registration.
      </div>
      {/* Form */}
      <div className="mt-8 flex flex-col justify-content-start">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 0, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
            <Link href="/forgot">Forgot password</Link>
          </Form.Item>
        </Form>
        {/* <div className="mt-0">
          <div className="ml-24"> </div>
        </div> */}
      </div>
      {/* page footer */}
      <div style={{ marginTop: "auto" }}>
        <div className="ml-16 pt-2">
          {" "}
          <span className="font-normal text-sm mr-2">
            Don’t have an account?
          </span>
          <Link href="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
