/* eslint-disable */
import { useRecoilState } from "recoil";
import { stickerState } from "./Atom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Button from "../common/Button";
import styled from "styled-components";

// sticker POST 요청 보내기
export default function StickerPost({ eventUid, rollingPaperUid }) {
  const [sticker, setSticker] = useRecoilState(stickerState);

  const postHandler = (e) => {
    e.preventDefault();

    async function sticker() {
      await axios
        .post(
          requests.events.rollingPaper.postSticker(eventUid, rollingPaperUid)
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
