/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "../../api/axios";
// import requests from "../../api/requests";

export default function SearchEventResult({ event }) {
  const onClickEvent = () => {
    const navigate = useNavigate();
    navigate("/");
    // 해당 이벤트 페이지로 이동
  };

  // const [isPang, setIsPang] = useState();

  // useEffect(() => {
  //   setIsPang(event.isPang);
  //   // console.log(event.isPang)
  // }, [event]);

  // const onClickFollow = (e) => {
  //   e.preventDefault();

  //   async function unPang() {
  //     await axios.delete(requests.events.pang.postPang(event.uid))
  //       .then((res) => {
  //         setIsPang(!isPang)
  //         console.log(res)
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  //   async function pang() {
  //     await axios
  //       .post(requests.events.pang.delPang(event.uid))
  //       .then((res) => {
  //         setIsPang(!isPang)
  //         console.log(res)
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  //   if(isPang) return unPang();
  //   return pang();
  // }

  return (
    <li>
      <div onClick={onClickEvent}>
        <img src={event.imgUrl} width="100px" height="100px" />
      </div>
      <div onClick={onClickEvent}>
        <span>{event.eventName}</span>
        <br />
        <span>{event.introduction}</span>
        <br />
        <span>@{event.targets.id}</span>
        <br />
      </div>
      {/* <div>
        { isPang ?
          <button onClick={(e) => onClickFollow(e)}>팔로우 취소</button>:
          <button onClick={(e) => onClickFollow(e)}>팔로우</button>
        }
      </div> */}
    </li>
  );
}
