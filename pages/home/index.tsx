import { Row, Col } from "antd";

const HomePage = () => {
  return (
    <Layout>
          Home  Page
      </Layout>
  );
};
const Layout = (props:any) => {
  return (
    <Row>
      <Col span={12}>{props.children}</Col>
      <Col span={12}>col-12</Col>
    </Row>
  );
};
export default HomePage;
