import React from "react";
import { Container } from "reactstrap"
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Container>
            <div className="content-center brand">
              <h4>
                DNU Genesis NFT "The Zero" has been launched on January 15, 2022 on Ethereum network. "The Zero" demonstrates a brand new thought of DNU DAO, which is to practice and promote the concept of Web 3.0 through the logic of "decentralized before aggregation", and to explore the unknown territory with the spirit of mildness and inclusiveness.
              </h4>
              <h4>
                DNU is self-organized DAO of Web3 enthusiasts and promoters around the whole world. All donations we receive will be utilized to foster Web3 tools, creator editors, community operations, etc., by voting from everyone of the DAO. DNU will never promise to issue tokens as rewards or incentives. The funding proposals must be the consensus decision of all members before action based on the votes from our global community.
              </h4>
              <h4>
                Thanks a lot for your support. If you are an advocate of Web3 and would love to get involved, please feel free to join us. let’s BUIDL and bring TRUE values to the web3.
              </h4>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Index;
