import React, { useState, useEffect } from "react";
import { Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import Navlocker from "./Navlocker";

export default function Navhead() {
  const [isOpen, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const changeBg = () => {
    window.scrollY >=40 ? setShowNav(true) : setShowNav(false);
  };
  useEffect(() => {
    changeBg();
    window.addEventListener("scroll", changeBg);
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  const defaultStyle = "position-fixed top-0 w-100"
  const defaultStyle2 = "position-fixed top-0 w-100 bg-white"

  return (
    <div
      className = {showNav ? defaultStyle2 : defaultStyle}
      style={{ zIndex: "10" }}
    >
      <Container
        className=" px-2 py-3 d-flex align-items-center justify-content-between"
        style={{ zIndex: "10" }}
      >
        <NavLink
          className="fw-bold fs-3"
          style={{ color: " #2dd4bf", zIndex: "10" }}
          to="/"
        >
          TVMAZE
        </NavLink>
        <div className="d-block d-md-none" style={{ zIndex: "10" }}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={30}
            color={"#a1a1aa"}
            duration={0.8}
          />
        </div>
        <div className="mx-4 fw-bold flex-grow-1 mx-4  d-none d-md-flex">
          <NavLink to="/" style={{ color: "#a1a1aa" }}>
            TV Shows
          </NavLink>
        </div>

        <div className="gap-4 d-none d-md-flex">
          <NavLink
            className="fw-bold"
            to="/search"
            style={{ color: "#a1a1aa" }}
          >
            Search
          </NavLink>
          <a
            href="https://wwww.tvmaze.com"
            className="fw-bold text-uppercase"
            style={{ color: "#a1a1aa" }}
            target="_blank"
          >
            Find out more
          </a>
        </div>
      </Container>
      {isOpen && <Navlocker isOpen={isOpen} setOpen={setOpen} />}
    </div>
  );
}
