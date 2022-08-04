import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Left, Section, Sections, Theme, Wrapper } from "./style";
import { Search } from "../Search";
import { useState } from "react";
import { BsLightbulbFill } from "react-icons/bs";
import { MdOutlineNightlight } from "react-icons/md";
import { FcSearch } from "react-icons/fc";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  const { pathname } = useLocation();

  const [sections, setSections] = useState([
    { name: "All", id: 1, active: true, url: "/search" },
    { name: "Images", id: 2, active: false, url: "/image" },
    { name: "Videos", id: 3, active: false, url: "/video" },
    { name: "News", id: 4, active: false, url: "/news" },
  ]);

  const selectSection = (id) => {
    setSections((prev) => {
      return prev.map((item) => {
        if (item.id === id) return { ...item, active: true };
        else return { ...item, active: false };
      });
    });
  };

  useEffect(() => {
    if (pathname)
      setSections((prev) => {
        return prev.map((item) => {
          if (item.url === pathname) return { ...item, active: true };
          else return { ...item, active: false };
        });
      });
  }, [pathname]);

  return (
    <Container darkTheme={darkTheme}>
      <Wrapper darkTheme={darkTheme}>
        <Left darkTheme={darkTheme}>
          <Link
            to="/"
            style={{ display: "flex", gap: "15px", alignItems: "center" }}
          >
            Google clone <FcSearch />
          </Link>
          <Search />
        </Left>
        <Theme darkTheme={darkTheme} onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? (
            <>
              Light <BsLightbulbFill />
            </>
          ) : (
            <>
              Dark <MdOutlineNightlight />
            </>
          )}
        </Theme>
      </Wrapper>

      <Sections>
        {sections.map((item) => (
          <Section
            darkTheme={darkTheme}
            to={item.url}
            isActive={item.active}
            key={item.id}
            onClick={() => selectSection(item.id)}
          >
            {item.name}
          </Section>
        ))}
      </Sections>
    </Container>
  );
};
