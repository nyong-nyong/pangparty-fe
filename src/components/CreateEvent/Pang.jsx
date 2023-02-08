/* eslint-disable */

import { useEffect, useState } from "react";
import Icon from "../common/Icon";
import axios from "../../api/axios";
import requests from "../../api/requests";

function Pang() {
  const [isPang, setIsPang] = useState(false);
  const [pangCnt, setPangCnt] = useState(0);

  const eventUid = 777777;

  // 이벤트 소개페이지 정보 GET
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        requests.events.introEvent.eventItroAll(eventUid)
      );
      setIsPang(req.data.isLiked);
      setPangCnt(req.data.likeCnt);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Icon img="pang" isActive={isPang}>
        {pangCnt}
      </Icon>
    </div>
  );
}

export default Pang;
