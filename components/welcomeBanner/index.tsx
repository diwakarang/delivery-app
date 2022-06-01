import FoodCard from "../foodCard";
import Reviews from "../Reviews";
import { Row, Col } from "antd";
import MenuCardHorizontal from "../menuCardHorizontal";

const WelcomeBanner = () => {
  return (
    <div style={{ background: "#697BFF", height: "100vh",paddingTop: '2rem' }}>
      <Row>
        <Col span={12}>
          <div className="ml-20">
            <div style={{zIndex:'4800 !important'}}>
            <Reviews />
            </div>
              <div style={{marginTop:'-60px',zIndex:'9000 !important',marginLeft:'-40px',position:'absolute'}}>
            <MenuCardHorizontal></MenuCardHorizontal>

              </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="ml-8">
            <FoodCard />
          </div>
        </Col>
      </Row>
      <Row>

      <Col span={20}>
          <div className="mt-24 text-center"><span>
          
              
              </span></div>
      </Col>

      </Row>
    </div>
  );
};
export default WelcomeBanner;
