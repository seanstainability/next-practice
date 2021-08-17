import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { changeNickname } from "../reducers/user";

const NicknameEditForm = () => {
  const dispatch = useDispatch();
  const onFinish = useCallback((v) => {
    console.log(v);
    dispatch(changeNickname(v));
  }, []);
  return (
    <>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        style={{ margin: 10 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="닉네임"
          name="user_nickname"
          style={{ marginBottom: 5 }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 18,
          }}
        >
          <Button htmlType="submit">변경</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NicknameEditForm;
