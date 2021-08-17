import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import gravatar from "gravatar";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const avatar = gravatar.url("seanstainability@gmail.com", {
    s: "100",
    d: "retro",
  });

  return (
    <>
      <Card
        actions={[
          <div>
            포스트
            <br />0
          </div>,
          <div>
            팔로잉
            <br />0
          </div>,
          <div>
            팔로워
            <br />0
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar src={avatar} />} title="Sean" />
        <Button>
          <a onClick={onLogOut}>로그아웃</a>
        </Button>
      </Card>
    </>
  );
};

export default UserProfile;
