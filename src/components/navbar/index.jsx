import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Left, Section, Sections, Theme, Wrapper } from "./style";
import { Search } from "../Search";
import { useState } from "react";
import { BsLightbulbFill } from "react-icons/bs";
import { MdOutlineNightlight, MdSlowMotionVideo } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import { FiImage } from "react-icons/fi";
import { BiNews } from "react-icons/bi";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  const { pathname } = useLocation();

  const [sections, setSections] = useState([
    {
      name: "All",
      id: 1,
      active: true,
      url: "/search",
      icon: <AiOutlineSearch />,
    },
    { name: "Images", id: 2, active: false, url: "/image", icon: <FiImage /> },
    {
      name: "Videos",
      id: 3,
      active: false,
      url: "/video",
      icon: <MdSlowMotionVideo />,
    },
    { name: "News", id: 4, active: false, url: "/news", icon: <BiNews /> },
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
            {item.icon} {item.name}
          </Section>
        ))}
      </Sections>
    </Container>
  );
};
