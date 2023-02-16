/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventLink from "./EventLink";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./CreateFeed.scss";
import Button from "../common/Button";
import useAuth from "../../hooks/useAuth";

export default function CreateFeed() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [clickedEvent, setClickedEvent] = useState({});
  const navigate = useNavigate();

  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    const contentObj = {
      title,
      content,
      eventUid: clickedEvent.eventUid,
    };
    const postData = async (body) => {
      await axios
        .post(requests.posts.postPost(), body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.err(err);
        });
    };
    postData(contentObj);
    return navigate("/feed");
    // 나중에 수정할 수 있으면 수정할 것(규연)
    // : <Feed /> 에서 useEffect를 하기 때문에 피드 위의 상위 컴포넌트인 <FeedList />는 새로고침 적용이 안 됨
    //   그렇기 때문에 나중에 <FeedList />에서 useEffect로 해당 내용들을 Feed로 내려줘야될 듯
    //   그래야 navigate("/feed") 상황에서 최신 피드리스트가 불러와짐
  };

  return (
    <div className="postContainer">
      {/* 상단 component에서 handleSubmit 가능하게 */}
      <form className="postFormContainer" onSubmit={handleSubmit}>
        <h4>제목</h4>
        <input
          type="text"
          value={title}
          placeholder="제목을 입력해주세요"
          className="postTitle"
          onChange={handleTitleChange}
          maxLength="20"
        />
        <h4>내용</h4>
        <textarea
          type="text"
          value={content}
          placeholder="내용을 입력해주세요"
          className="postContent"
          onChange={handleContentChange}
        />
        <h4>이벤트 링크하기</h4>
        <EventLink
          clickedEvent={clickedEvent}
          setClickedEvent={setClickedEvent}
        />
        <Button
          color="orange-1"
          type="submit"
          style={{ width: "303px", margin: "10px 15px" }}
        >
          글작성 완료
        </Button>
      </form>
    </div>
  );
}
