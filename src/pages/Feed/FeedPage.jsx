import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";
import FeedList from "../../components/Feed/FeedList";
import LetsPost from "../../components/Feed/LetsPost";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function FeedPage() {
  const [feedList, setFeedList] = useState([]);

  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  // localhost
  const page = 0;
  const size = 30;
  useEffect(() => {
    async function getFeed() {
      await axios
        .get(requests.feed.getFeed(page, size))
        .then((response) => {
          setFeedList(response.data.feed);
          // console.log(response.data.feed);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getFeed();
  }, []);

  return (
    <div>
      {feedList.length !== 0 ? (
        <>
          <FeedList feedList={feedList} />
          <FeedPageCreateButton>
            <Link to="/feed/create">
              <Button color="blue-1">글쓰기</Button>
            </Link>
          </FeedPageCreateButton>
        </>
      ) : (
        <LetsPost />
      )}
    </div>
  );
}

const FeedPageCreateButton = styled.div`
  position: absolute;
  bottom: 11%;
`;
