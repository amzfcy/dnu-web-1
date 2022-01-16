/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/dnulogo.png").default + ")",
              opacity: 0.8
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            {/* <img
              alt="..."
              className="n-logo"
              src={require("assets/img/dnulogo-06.png").default}
            ></img> */}
            <h1 className="h1-seo">DNU DAO</h1>
            <h4>
              DNU is an acronym for the three concepts of DAO, NFT, and UBI. <br />It has long been paying attention to the development trends in these fields and high grade projects related to investment. <br />The DNU community started to explore and promote the concept of Web 3.0 early on, proposing the application development logic of decentralization before aggregation, and keeping the psyche of embracing the future world on probing new and uncharted waters. <br />The DNU community built DNU DAO after years of accumulation, hoping to provide financial support and technical research/consultancy services for exploration in more fields, and to furnish a broad spectrum of service delivery for creators, developers, and founders in the coming Web3 era. 
            </h4>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
