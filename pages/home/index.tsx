import { Row, Col } from "antd";
import HomeOffer from "../../components/homeOffer";

const HomePage = () => {
  return (
    <Layout>
         <HomeOffer></HomeOffer>
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
