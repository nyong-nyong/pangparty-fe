import React from "react";
import { ReactComponent as Pang } from "../../assets/stickers/pang.svg";
import { ReactComponent as Heart } from "../../assets/stickers/heart.svg";
import { ReactComponent as Arrow } from "../../assets/stickers/arrow.svg";
import { ReactComponent as Cloud } from "../../assets/stickers/cloud.svg";
import { ReactComponent as Flare } from "../../assets/stickers/flare.svg";
import { ReactComponent as FlowerFlare } from "../../assets/stickers/flowerflare.svg";
import { ReactComponent as Sparkle } from "../../assets/stickers/sparkle.svg";
import { ReactComponent as Worm } from "../../assets/stickers/worm.svg";
import teddy from "../../assets/stickers/teddybear.png";

// 1. stickerlist 객체형태 배열로 바꿔서 데이터 저장할 것
// 1-1. 객체형태 배열로 스티커에 id 부여
// 1-2. 이벤트 프롭 발생 -> dnd까지 구현할 것
// 2. 이미지 파일 public에 저장한 후 경로 변경 할 것

export default function StickerList() {

  return (
    <div>
      <Pang width="50px" />
      <Heart width="50px" />
      <Arrow width="50px" />
      <Cloud width="50px" />
      <Flare width="50px" />
      <FlowerFlare width="50px" />
      <Sparkle width="30px" />
      <Worm width="50px" />
      <img src={teddy} style={{width: "50px"}} />
    </div>
  );
}
