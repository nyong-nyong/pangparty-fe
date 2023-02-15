import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { detailFeedState } from "../../recoils/Feed/Atoms";
import useAuth from "../../hooks/useAuth";
import EventLink from "./EventLink";
import Button from "../common/Button";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function ModifyPost() {
  const [detailFeed, setDetailFeed] = useRecoilState(detailFeedState);
  const [eventUid, setEventUid] = useState("");

  const navigate = useNavigate();
  const auth = useAuth();
  const [user, setUser] = useState("");

  const newDetailFeed = { ...detailFeed };

  useEffect(() => {
    setUser(auth.user);
    const newEventUid = detailFeed.eventUid;
    setEventUid(newEventUid);
  }, [user]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    newDetailFeed.title = newTitle;
    setDetailFeed(newDetailFeed);
  };
  const handleContentChange = (e) => {
    const newContent = e.target.value;
    newDetailFeed.content = newContent;
    setDetailFeed(newDetailFeed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submit = async () => {
      await axios
        .put(requests.posts.putPost(detailFeed.uid), detailFeed, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          navigate(-1);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    submit();
  };

  return (
    <div className="postContainer">
      {/* 상단 component에서 handleSubmit 가능하게 */}
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <h4>제목</h4>
        <input
          type="text"
          value={detailFeed.title}
          placeholder="제목을 입력해주세요"
          className="postTitle"
          onChange={handleTitleChange}
          maxLength="20"
        />
        <h4>내용</h4>
        <textarea
          type="text"
          value={detailFeed.content}
          placeholder="내용을 입력해주세요"
          className="postContent"
          onChange={handleContentChange}
        />
        <h4>이벤트 링크하기</h4>
        <EventLink eventUid={eventUid} setEventUid={setEventUid} />
        <Button color="orange-1" type="submit">
          글작성 완료
        </Button>
      </form>
    </div>
  );
}
