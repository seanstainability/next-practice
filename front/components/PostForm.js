import React, { useCallback, useRef } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [content, onChangeContent, setContent] = useInput("");
  const { imagePaths } = useSelector((state) => state.post);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onFinish = useCallback((value) => {
    console.log(value);
    dispatch(addPost(value));
    setContent("");
  }, []);
  return (
    <>
      <Form
        onFinish={onFinish}
        encType="multipart/form-data"
        style={{ margin: 10 }}
      >
        <Form.Item style={{ marginBottom: 0 }} name="content">
          <Input.TextArea
            value={content}
            onChange={onChangeContent}
            maxLength={100}
            placeholder="어떤 일이 있었나요?"
          />
        </Form.Item>
        <Form.Item>
          <input type="file" multiple hidden ref={imageInput} />
          <Button onClick={onClickImageUpload}>이미지 업로드</Button>
          <Button htmlType="submit" style={{ float: "right" }}>
            작성하기
          </Button>
        </Form.Item>
      </Form>
      {imagePaths?.map((v) => (
        <div key={v}>
          <img src={v} alt={v} />
          <div>
            <Button>
              <a>제거</a>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostForm;
