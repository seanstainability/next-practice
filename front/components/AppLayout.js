import React, { useCallback, useState } from "react";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { me } = useSelector((state) => state.user);
  const onSearch = useCallback((search_word) => {
    console.log(search_word);
  }, []);
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>홈</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item style={{ marginLeft: "auto" }}>
          <Input.Search
            onSearch={onSearch}
            style={{ width: 200, verticalAlign: "middle" }}
          />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? (
            <UserProfile /*setIsLoggedIn={setIsLoggedIn}*/ />
          ) : (
            <LoginForm /*setIsLoggedIn={setIsLoggedIn}*/ />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://seanstainability.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            @seanstainability
          </a>
        </Col>
      </Row>
    </>
  );
};

export default AppLayout;
