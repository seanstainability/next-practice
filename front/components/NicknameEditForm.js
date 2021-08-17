import React, { useCallback } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const NicknameEditForm = () => {
  const onFinish = useCallback((v) => {
    console.log(v);
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
        <Form.Item label="닉네임" name="user_nickname">
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 18,
          }}
        >
          <Button type="primary" htmlType="submit">
            변경
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NicknameEditForm;
