import "../scss/header.scss";
import logo_black from "../assets/img/CMNP.png";
import logo_white from "../assets/img/CMNP_white.png";
import FramerMotion from "./utills/FramerMotion";
import Container from "./Container";
import { useState, useEffect, useRef } from "react";
import useMediaQuery from "../custom-hooks/useMediaQuery";

const menus = [
  { name: "Company", link: "/company" },
  { name: "Product&Solution", link: "/service" },
  { name: "Support", link: "/support" },
  { name: "Notice", link: "/notice" },
];

const menuStyle = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: {
    duration: 0.25,
    ease: "easeOut",
    type: "tween",
  },
};

const backdropStyle = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

const Header = () => {
  const isMobile = useMediaQuery();
  const [activated, setActivated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 0;
          setActivated((prev) => (prev !== scrolled ? scrolled : prev));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHoverStart = () => setActivated(true);
  const handleHoverEnd = () => !window.scrollY && setActivated(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const openMobileMenu = () => setMobileMenuOpen(true);

  const headerMotion = {
    onHoverStart: handleHoverStart,
    onHoverEnd: handleHoverEnd,
  };

  if (isMobile)
    return (
      <>
        <header id="mobile-header">
          <Container>
            <img src={logo_black} className="logo" alt="logo" />
            <button className="ham-menu" onClick={openMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Container>
        </header>
        {mobileMenuOpen && (
          <>
            <FramerMotion
              as="article"
              id="mobile-header-menu"
              {...menuStyle}
              style={{ willChange: "transform" }}
            >
              <div id="mobile-header-menu-close">
                <button onClick={closeMobileMenu}>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <nav>
                <ul>
                  {menus.map((menu, index) => (
                    <li key={index}>
                      <a href={menu.link}>{menu.name}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </FramerMotion>
            <FramerMotion
              as="div"
              id="mobile-header-menu-cover"
              onClick={closeMobileMenu}
              {...backdropStyle}
            />
          </>
        )}
      </>
    );

  return (
    <FramerMotion {...headerMotion}>
      <header id="header" className={activated ? "activated" : ""}>
        <Container>
          <a href="/">
            <img
              src={activated ? logo_black : logo_white}
              className="logo"
              alt="logo"
            />
          </a>
          <nav>
            <ul>
              {menus.map((menu, index) => (
                <li key={index}>
                  <a href={menu.link}>{menu.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>
    </FramerMotion>
  );
};

export default Header;
