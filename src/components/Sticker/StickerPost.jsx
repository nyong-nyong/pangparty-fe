/* eslint-disable */
import { useRecoilState } from "recoil";
import { stickerState } from "./Atom";
import axios from "../../api/axios";
import requests from "../../api/requests";

// sticker POST 요청 보내기
function StickerPost({ eventUid, rollingPaperUid }) {
  const [sticker, setSticker] = useRecoilState(stickerState);

  const postHandler = (e) => {
    e.preventDefault();

    async function sticker() {
      await axios
        .post(
          requests.events.rollingPapger.postSticker(eventUid, rollingPaperUid)
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
    <div>
      <button type="submit" onClick={postHandler}>
        완료 ✔️
      </button>
    </div>
  );
}

export default StickerPost;
