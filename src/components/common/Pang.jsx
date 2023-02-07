import { useEffect } from "react";

function Pang() {
  // 이벤트 소개페이지 정보 GET
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        request.introEvent.eventIntroAll
      )
    }
  })

  return
  <div>
    <button></button>
  </div>;
}

export default Pang;
