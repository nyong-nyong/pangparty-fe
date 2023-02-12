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
    const stickerCssAllList = stickerValue.style.cssText.split(";");
    // console.log(stickerCssAllList)

    const lefLoc = stickerCssAllList[3].slice(7, -2);
    const topLoc = stickerCssAllList[3].slice(6, -2);
    const angleAndScaleInfo = stickerCssAllList[5].split(" ");
    const angle = angleAndScaleInfo[2].slice(7, -4);
    const scale = angleAndScaleInfo[3].slice(7, -1);

    //position: absolute; width: 100px; height: 100px; left: 89px; top: -2px; transform: rotate(0deg) scaleX(1) scaleY(1) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    const saveInfo = {
      memberId: user, // "example",
      stickerUid: sticker.uid, // 1,
      leftLoc: lefLoc, // 0,
      topLoc: topLoc, // 0,
      zIndex: "100", // "1000",
      angle: angle, // 0.0,
      scale: scale // 0.00
    };

    async function sticker() {
      await axios
        .post(
          requests.events.rollingPaper.postSticker(eventUid, rpUid),
          saveInfo
        )
        .then((res) => {
          // POST 완료하면 sticker 상태 다시 reset하기
          setSticker(undefined);
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