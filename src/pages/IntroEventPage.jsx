/* eslint-disable */

import { Link } from "react-router-dom";
// import axios from "../api/axios";
// import requests from "../api/requests";
import Button from "../components/common/Button";
import PhotoAlbum from "../components/PhotoAlbum/PhotoAlbum";
import Pang from "../components/CreateEvent/Pang";
import RpCreateButton from "../components/CreateEvent/RpCreateButton";

export default function IntroEventPage() {
  const eventUid = 777777;

  // const participateHandler = () => {};

  return (
    <div>
      <h1>여기는 이벤트 소개 페이지입니다.</h1>
      <Pang eventUid={eventUid} />

      <Button
      // onClick={participateHandler}
      >
        참여하기
      </Button>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: "50px", height: "50px" }}>
          <Link to="/piece">
            <RpCreateButton />
          </Link>
        </div>
      </div>

      <PhotoAlbum />
    </div>
  );
}
