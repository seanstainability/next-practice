import React, { useCallback } from "react";
import { List, Avatar, Button } from "antd";
import gravatar from "gravatar";
import styled from "styled-components";

const ListWrapper = styled(List)`
  width: 50%;
  box-sizing: border-box;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const FollowList = ({ header, list }) => {
  const onLoadMore = useCallback(() => {}, []);
  const loadMore = (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={onLoadMore}>더보기</Button>
    </div>
  );
  return (
    <>
      <ListWrapper
        header={<div>{header}</div>}
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item actions={[<a key="unfollow">언팔로우</a>]}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={gravatar.url(item.email, {
                    s: "100",
                    d: "retro",
                  })}
                />
              }
              title={<a href="https://ant.design">{item.nickname}</a>}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default FollowList;
