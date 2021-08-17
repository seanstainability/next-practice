import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { logIn } from "../reducers/user";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    md: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    md: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    md: {
      span: 16,
      offset: 8,
    },
  },
};

const LoginForm = (/*{ setIsLoggedIn }*/) => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const onFinish = useCallback((values) => {
    console.log(values);
    // setIsLoggedIn(true);
    dispatch(logIn(values));
  }, []);

  return (
    <>
      <Form onFinish={onFinish} {...formItemLayout} style={{ padding: 10 }}>
        <Form.Item label="이메일" name="user_email">
          <Input value={email} onChange={onChangeEmail} />
        </Form.Item>
        <Form.Item label="비밀번호" name="user_password">
          <Input.Password value={password} onChange={onChangePassword} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button htmlType="submit" style={{ marginRight: 5, marginTop: 5 }}>
            로그인
          </Button>
          <Button style={{ marginTop: 5 }}>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
