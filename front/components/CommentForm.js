import React, { useCallback } from "react";
import { Button, Form, Input } from "antd";
import useInput from "../hooks/useInput";

const CommentForm = ({ post }) => {
  const [commentText, onChangeCommentText] = useInput("");
  const onFinish = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <>
      <Form onFinish={onFinish} style={{ margin: 10 }}>
        <Form.Item>
          <Input.TextArea
            value={commentText}
            onChange={onChangeCommentText}
            rows={4}
          ></Input.TextArea>
          <Button htmlType="submit" style={{ float: "right" }}>
            작성
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CommentForm;
