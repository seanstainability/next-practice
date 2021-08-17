import React, { useCallback } from "react";
import { List, Avatar, Button } from "antd";
import gravatar from "gravatar";

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
      <List
        header={<div>{header}</div>}
        style={{ width: "50%", boxSizing: "border-box", padding: 10 }}
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
