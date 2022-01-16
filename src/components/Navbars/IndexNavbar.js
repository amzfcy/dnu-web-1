import React from "react";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              // href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
              // target="_blank"
              id="navbar-brand"
            >
              <img
                alt=''
                className="dnu-logo"
                src={require("assets/img/dnulogo-06.png").default}
              ></img>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="https://twitter.com/dnu_dao"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <img
                    alt=''
                    className="dnu-icon"
                    src={require("assets/img/icon/twitter.png").default}
                  ></img>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://t.me/DNUCommunity"
                  target="_blank"
                  id="telegram-tooltip"
                >
                  <img
                    alt=''
                    className="dnu-icon"
                    src={require("assets/img/icon/telegram.png").default}
                  ></img>
                  <p className="d-lg-none d-xl-none">Telegram</p>
                </NavLink>
                <UncontrolledTooltip target="#telegram-tooltip">
                  Telegram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://discord.gg/parJzjMmbx"
                  target="_blank"
                  id="discord-tooltip"
                >
                  <img
                    alt=''
                    className="dnu-icon"
                    src={require("assets/img/icon/discord.png").default}
                  ></img>
                  <p className="d-lg-none d-xl-none">Discord</p>
                </NavLink>
                <UncontrolledTooltip target="#discord-tooltip">
                  Discord
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.clubhouse.com/club/%E5%85%83%E5%AE%87%E5%AE%99"
                  target="_blank"
                  id="clubhouse-tooltip"
                >
                  <img
                    alt=''
                    className="dnu-icon"
                    src={require("assets/img/icon/clubhouse.png").default}
                  ></img>
                  <p className="d-lg-none d-xl-none">Clubhouse</p>
                </NavLink>
                <UncontrolledTooltip target="#clubhouse-tooltip">
                Clubhouse
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
