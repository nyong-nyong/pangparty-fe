/* eslint-disable */
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoils/user/Atoms";
import useAuth from "../../hooks/useAuth";
import { stickerState } from "./Atom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Button from "../common/Button";
import styled from "styled-components";

// sticker POST 요청 보내기
export default function StickerPost({ eventUid, rpUid }) {
  const [sticker, setSticker] = useRecoilState(stickerState);

  const auth = useAuth();
  const [user, setUser] = useState("");

  const [postStickerInfo, setpostStickerInfo] = useState({});

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  const postHandler = (e) => {
    e.preventDefault();

    const stickerValue = document.querySelector(".moveable");
    console.log(stickerValue.style.cssText);
    console.log(stickerValue);

    // const topLoc = stickerValue.style.top  px제거 -> INt변환

    const saveInfo = {
      memberId: user, // "example",
      stickerUid: sticker.uid, // 1,
      leftLoc: stickerValue.left, // 0,
      topLoc: stickerValue.top, // 0,
      zIndex: "100", // "1000",
      angle: 0.0, // 0.0,
      scale: 0.0 // 0.00  
    }


    async function sticker() {
      await axios
        .post(requests.events.rollingPaper.postSticker(eventUid, rpUid))
        .then((res) => {
          // POST 완료하면 sticker 상태 다시 reset하기
          setSticker(undaefined);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sticker();
  };

  return (
    <>
      <StickerCompleteBtn>
        <Button type="submit" onClick={postHandler}>
          완료 ✔️
        </Button>
      </StickerCompleteBtn>
    </>
  );
}

const StickerCompleteBtn = styled.div`
  position: fixed;
  bottom: 0;
  height: 35%;
`;
