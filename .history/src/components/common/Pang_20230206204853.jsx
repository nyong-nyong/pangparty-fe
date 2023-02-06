// 클릭하면 팡숫자 증가
// user 정보 받아와서 user가 true면 active image 보여주기

// 화면 랜더링시 팡파레 값 GET 해서 가져오기
// 팡파레 울리기 하면 POST 요청 보내서 팡파레값 업데이트
// 한 번 더 클릭하면 팡파레 취소

import { useState } from "react";
import Icon from "./Icon";

// 나중에 user 정보 추가되면 user로 바꿔서 사용할 것
function Pang() {
  // const [pangCnt, setPangCnt] = useState(0);
  // const [isPang, setIsPang] = useState(0);

  return (
    <div>
      <Icon img="hear" /> 
    </div>
  );
}

export default Pang;
