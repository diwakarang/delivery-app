import { Col, Row } from "antd";
import Login from "../../components/login";
import WelcomeBanner from "../../components/welcomeBanner";
const LoginPage = () => {
  return (
    <>
    <div className="hidden sm:block md:block lg:block xl:block">
      <Row>
        <Col span={10}>
          <Login></Login>
        </Col>
        <Col span={14}>
          <WelcomeBanner />
        </Col>
      </Row>
    </div>
    <div className="sm:hidden">
    <Login></Login>
    </div>
    </>
  );
};

export default LoginPage;
