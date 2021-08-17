import React, { useCallback, useState } from "react";
import { Card, Avatar, Popover, Button, List, Comment } from "antd";
import gravatar from "gravatar";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import PostImages from "./PostImages";
import PostCardContent from "./PostCardContent";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const { me } = useSelector((state) => state.user);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  return (
    <>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        style={{ margin: 10 }}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              key="heart"
              twoToneColor="#eb2f96"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {me?.id === post.User.id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : null}
              </Button.Group>
            }
          >
            <EllipsisOutlined key="ellipsis" />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={
            <Avatar
              src={gravatar.url(post.User.email, {
                s: "100",
                d: "retro",
              })}
            />
          }
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            style={{ margin: "0 10px" }}
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  content={item.content}
                  avatar={
                    <Avatar
                      src={gravatar.url(item.User.email, {
                        s: "100",
                        d: "retro",
                      })}
                    />
                  }
                />
              </li>
            )}
          />
        </>
      )}
    </>
  );
};

export default PostCard;
