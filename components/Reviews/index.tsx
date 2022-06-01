import Image from "next/image";
import styles from "../../styles/Reviews.module.css";
const Reviews = () => {
  return (
    <div
      className={"reviews-1 flex-col-hstart-vstart clip-contents"
        .split(" ")
        .map((e) => styles[e])
        .reduce((a, c) => a + " " + c, "")}
    >
      <div
        className={"group-588 flex-col-hcenter"
          .split(" ")
          .map((e) => styles[e])
          .reduce((a, c) => a + " " + c, "")}
      >
          <div 
          className={styles['overallrating']}
          > <div>
              Overall rating
              </div>
              </div>
        <div
          className={"group-736 flex-col"
            .split(" ")
            .map((e) => styles[e])
            .reduce((a, c) => a + " " + c, "")}
        >
             
          <div
        //   style={{flexDirection:'column'}}
            className={"rating flex-row-vcenter-hstart"
              .split(" ")
              .map((e) => styles[e])
              .reduce((a, c) => a + " " + c, "")}
          >
              {/* <div className={styles['txt-480'] + ''}>
                Overall rating <br></br>
              </div> */}
            <p
              className={"txt-139"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")}
            >
              4.2
            </p>
            <div
              className={"comment-elements-rating-with-text4-stars flex-row-vstart-hstart"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")}
            >
              <Image
                src="/4stars.png"
                alt="Not Found"
                width="66.18px"
                height="15px"
                className={"comment-elements-rating-4-stars"
                  .split(" ")
                  .map((e) => styles[e])
                  .reduce((a, c) => a + " " + c, "")}
              />
              <p
                className={"txt-115"
                  .split(" ")
                  .map((e) => styles[e])
                  .reduce((a, c) => a + " " + c, "")}
              >
                3 votes
              </p>
            </div>
          </div>
          <div
            className={"dropdown-contained-default flex-row-vcenter-hstart"
              .split(" ")
              .map((e) => styles[e])
              .reduce((a, c) => a + " " + c, "")}
          >
            <p
              className={"txt-557"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")}
            >
              Sort by:{" "}
              <span
                className={"txt-5572"
                  .split(" ")
                  .map((e) => styles[e])
                  .reduce((a, c) => a + " " + c, "")}
              >
                Newest first
              </span>
            </p>
            <Image
              src="/chevrondown.png"
              alt="Not Found"
              width={"14.31px"}
              height={"14.31px"}
              className={"icon-outlined-directions-chevron-down"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")}
            />
          </div>
          <div
            className={"reviews flex-col-hstart-vstart"
              .split(" ")
              .map((e) => styles[e])
              .reduce((a, c) => a + " " + c, "")}
          >
            <div
              className={"comment-example-comment-with-avatar flex-row-vstart-hstart"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")}
            >
              <Image
                src="/avatarcirclewoman.png"
                alt="Not Found"
                className="avatar-circled-woman-01"
                width="32.19px"
                height="32.19px"
              />
              <div
                className={"comment-example-comment-default flex-col-hstart-vstart"
                  .split(" ")
                  .map((e) => styles[e])
                  .reduce((a, c) => a + " " + c, "")}
              >
                <div
                  className={"comment-elements-content-user-name-date-body flex-col-hstart-vstart"
                    .split(" ")
                    .map((e) => styles[e])
                    .reduce((a, c) => a + " " + c, "")}
                >
                  <div
                    className={"username-and-date flex-col-hstart-vstart"
                      .split(" ")
                      .map((e) => styles[e])
                      .reduce((a, c) => a + " " + c, "")}
                  >
                    <p
                      className={"txt-999"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    >
                      Savannah Miles
                    </p>
                    <div
                      className={"comment-elements-rating-with-text4-stars flex-row-vstart-hstart"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    >
                      <Image
                        src="/5starsinner.png"
                        alt="Not Found"
                        width="66.18px"
                        height="15px"
                        className={"comment-elements-rating-5-stars"
                          .split(" ")
                          .map((e) => styles[e])
                          .reduce((a, c) => a + " " + c, "")}
                      />
                      <p
                        className={"txt-115"
                          .split(" ")
                          .map((e) => styles[e])
                          .reduce((a, c) => a + " " + c, "")}
                      >
                        10 days ago
                      </p>
                    </div>
                  </div>
                  <p
                    className={"txt-191"
                      .split(" ")
                      .map((e) => styles[e])
                      .reduce((a, c) => a + " " + c, "")}
                  >
                    Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad,
                    ei doming aperiam delicata est.
                  </p>
                </div>
                <div
                  className={"comment-elements-content-actions flex-row-vcenter-hstart"
                    .split(" ")
                    .map((e) => styles[e])
                    .reduce((a, c) => a + " " + c, "")}
                >
                  <div
                    className={"comment-elements-like-dislike-like-pressed flex-row-vcenter-hstart"
                      .split(" ")
                      .map((e) => styles[e])
                      .reduce((a, c) => a + " " + c, "")}
                  >
                    <Image
                      src="/thumbupfilled.png"
                      alt="Not Found"
                      width={"14.31px"}
                      height={"14.31px"}
                      className={"icon-outlined-action-thumb-thumb-up-filled"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    />
                    <p
                      className={"txt-2101"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    >
                      14
                    </p>
                  </div>
                  <div
                    className={"flex-row-vcenter-hstart"
                      .split(" ")
                      .map((e) => styles[e])
                      .reduce((a, c) => a + " " + c, "")}
                  >
                    <Image
                      src="/thumbdown.png"
                      alt="Not Found"
                      width={"14.31px"}
                      height={"14.31px"}
                      className={"icon-outlined-action-thumb-thumb-up-filled"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    />
                    <p
                      className={"txt-480"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    >
                      4
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"comment-example-comment-with-avatar-1 flex-row-vstart-hstart"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")}
            >
              <Image
                src="/manavatar.png"
                alt="Not Found"
                width="32.19px"
                height="32.19px"
                className={"avatar-circled-woman-01"
                  .split(" ")
                  .map((e) => styles[e])
                  .reduce((a, c) => a + " " + c, "")}
              />
              <div
                className={"comment-example-comment-default flex-col-hstart-vstart"
                  .split(" ")
                  .map((e) => styles[e])
                  .reduce((a, c) => a + " " + c, "")}
              >
                <div
                  className={"comment-elements-content-user-name-date-body flex-col-hstart-vstart"
                    .split(" ")
                    .map((e) => styles[e])
                    .reduce((a, c) => a + " " + c, "")}
                >
                  <div
                    className={"username-and-date flex-col-hstart-vstart"
                      .split(" ")
                      .map((e) => styles[e])
                      .reduce((a, c) => a + " " + c, "")}
                  >
                    <p
                      className={"txt-999"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    >
                      Jacob Jones
                    </p>
                    <div
                      className={"comment-elements-rating-with-text4-stars flex-row-vstart-hstart"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    >
                      <Image
                        src="/4stars.png"
                        alt="Not Found"
                        width="66.18px"
                        height="15px"
                        className={"comment-elements-rating-5-stars"
                          .split(" ")
                          .map((e) => styles[e])
                          .reduce((a, c) => a + " " + c, "")}
                      />
                      <p
                        className={"txt-115"
                          .split(" ")
                          .map((e) => styles[e])
                          .reduce((a, c) => a + " " + c, "")}
                      >
                        1 days ago
                      </p>
                    </div>
                  </div>
                  <p
                    className={"txt-191"
                      .split(" ")
                      .map((e) => styles[e])
                      .reduce((a, c) => a + " " + c, "")}
                  >
                    Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad,
                    ei doming aperiam delicata est.
                  </p>
                </div>
                <div
                  className={"comment-elements-content-actions flex-row-vcenter-hstart"
                    .split(" ")
                    .map((e) => styles[e])
                    .reduce((a, c) => a + " " + c, "")}
                >
                  <div
                    className={"comment-elements-like-dislike-like-pressed flex-row-vcenter-hstart"
                      .split(" ")
                      .map((e) => styles[e])
                      .reduce((a, c) => a + " " + c, "")}
                  >
                    <Image
                      src="/thumbup.png"
                      alt="Not Found"
                      width={"14.31px"}
                      height={"14.31px"}
                      className={"icon-outlined-action-thumb-thumb-up-filled"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    />
                    <p
                      className={"txt-480"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    >
                      8
                    </p>
                  </div>
                  <div
                    className={"flex-row-vcenter-hstart"
                      .split(" ")
                      .map((e) => styles[e])
                      .reduce((a, c) => a + " " + c, "")}
                  >
                    <Image
                      src="/thumbdown.png"
                      alt="Not Found"
                      width={"14.31px"}
                      height={"14.31px"}
                      className={"icon-outlined-action-thumb-thumb-up-filled"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    />
                    <p
                      className={"txt-480"
                        .split(" ")
                        .map((e) => styles[e])
                        .reduce((a, c) => a + " " + c, "")}
                    >
                      3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <div
        style={{display:'none'}}
          className={"dropdown-contained-default flex-row-vcenter-hstart"
            .split(" ")
            .map((e) => styles[e])
            .reduce((a, c) => a + " " + c, "")}
        >
          <p
            className={"txt-557"
              .split(" ")
              .map((e) => styles[e])
              .reduce((a, c) => a + " " + c, "")}
          >
            Sort by:{" "}
            <span
              className={"txt-5572"
                .split(" ")
                .map((e) => styles[e])
                .reduce((a, c) => a + " " + c, "")}
            >
              Newest first
            </span>
          </p>
          <Image
            src="/chevrondown.png"
            alt="Not Found"
            width={"14.31px"}
            height={"14.31px"}
            className={"icon-outlined-directions-chevron-down"
              .split(" ")
              .map((e) => styles[e])
              .reduce((a, c) => a + " " + c, "")}
          />
        </div>
      </div>
      <div
        className={"button-outlined-accent-default flex-row-vcenter-hstart"
          .split(" ")
          .map((e) => styles[e])
          .reduce((a, c) => a + " " + c, "")}
      >
        <p
          className={"txt-854 flex-hcenter"
            .split(" ")
            .map((e) => styles[e])
            .reduce((a, c) => a + " " + c, "")}
        >
          Leave review
        </p>
      </div>
    </div>
  );
};
export default Reviews;
