import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    md: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    md: { span: 18 },
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
      offset: 6,
    },
  },
};

const ErrorMessage = styled.div`
  margin-top: 5px;
  color: red;
`;

const SignUp = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [confirm, setConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangeConfirm = useCallback(
    (e) => {
      setConfirm(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );
  const onFinish = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <>
      <Head>
        <title>회원가입 | 트위터</title>
      </Head>
      <AppLayout>
        <Form {...formItemLayout} onFinish={onFinish} style={{ margin: 10 }}>
          <Form.Item name="user_email" label="이메일">
            <Input value={email} onChange={onChangeEmail} />
          </Form.Item>

          <Form.Item name="user_password" label="비밀번호">
            <Input.Password value={password} onChange={onChangePassword} />
          </Form.Item>

          <Form.Item name="user_confirm" label="비밀번호 확인">
            <Input.Password value={confirm} onChange={onChangeConfirm} />
            {passwordError && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </Form.Item>

          <Form.Item name="user_nickname" label="닉네임">
            <Input value={nickname} onChange={onChangeNickname} />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </AppLayout>
    </>
  );
};

export default SignUp;
