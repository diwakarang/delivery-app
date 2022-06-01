import Image from "next/image";
import styles from "../../styles/MenuCardHorizontal.module.css";
const MenuCardHorizontal = () => {
  return (
    <div
      className={"card-example-menu-horizontal flex-col-hstart-vstart"
        .split(" ")
        .map((e) => styles[e])
        .reduce((a, c) => a + " " + c, "")}
    >
      <div
        className={"group-867 flex-row-vend"
          .split(" ")
          .map((e) => styles[e])
          .reduce((a, c) => a + " " + c, "")}
      >
          <div style={{marginRight:'17px',paddingTop:'4px'}}>

        <Image
          src="/nigiriset.png"
          alt="Not Found"
          width="152.38px"
          height="100%"
          style={{marginRight:'17px',borderRadius:'8px'}}
          className={"img-mask"
          .split(" ")
          .map((e) => styles[e])
          .reduce((a, c) => a + " " + c, "")}
          />
          </div>
        <div
          className={"group-329 flex-col"
            .split(" ")
            .map((e) => styles[e])
            .reduce((a, c) => a + " " + c, "")}
        >
          <p
            className={"txt-157"
              .split(" ")
              .map((e) => styles[e])
              .reduce((a, c) => a + " " + c, "")}
          >
            Nigiri set
          </p>
          <p
            className={"txt-787"
              .split(" ")
              .map((e) => styles[e])
              .reduce((a, c) => a + " " + c, "")}
          >
            Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum
            ignota euismod corpora, et saepe.
          </p>
          <p
            className={"txt-337"
              .split(" ")
              .map((e) => styles[e])
              .reduce((a, c) => a + " " + c, "")}
          >
            $ 16.80
          </p>
        </div>
        <div
          className={"add-to-cart flex-col-hcenter"
            .split(" ")
            .map((e) => styles[e])
            .reduce((a, c) => a + " " + c, "")}
        >
          <div
            className={"counter flex-row-vstart-hstart clip-contents"
              .split(" ")
              .map((e) => styles[e])
              .reduce((a, c) => a + " " + c, "")}
          >
            <Image
              src="/decrement.png"
              alt="Not Found"
              width="16.93px"
              height="16.93px"
              className={"circular-button-filled-light-small-gray-disabled"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")}
            />
            <p className="txt-891 flex-hcenter">1</p>
            <Image
              src="/increment.png"
              alt="Not Found"
              width={"16.93px"}
              height="16.93px"
              className={"circular-button-filled-light-small-gray-default"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")+ ' mx-2'}
            />
          </div>
          <div
            className={"button-contained-light-accent-left-icon-default flex-row-vcenter-hstart"
              .split(" ")
              .map((e) => styles[e])
              .reduce((a, c) => a + " " + c, "")}
          >
            <Image
              src="/plusIcon2.png"
              alt="Not Found"
              width="13.55px"
              height="13.55px"
              className={"icon-outlined-suggested-symbol"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")}
            />
            <p
              className={"txt-108 flex-hcenter"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")}
            >
              Add to cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuCardHorizontal;
