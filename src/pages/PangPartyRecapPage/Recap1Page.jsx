// import "./Recap.css";
import { useRecoilValue } from "recoil";
import RecapCarousel from "../../components/Recap/RecapCarousel";
import { userState } from "../../recoils/user/Atoms";
import "../../styles/Recap.scss";

export default function Recap1Page() {
  const userID = useRecoilValue(userState);

  return (
    <div>
      <div className="recapTop">
        <p className="recapTitleDday">23/02/14</p>
        <p className="recapTitleMent">
          {userID}님 <br /> 축하드립니다
        </p>
      </div>
      <RecapCarousel />
    </div>
  );
}
