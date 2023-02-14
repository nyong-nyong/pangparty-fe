/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import "./Feed.scss";
// import "../Search/SearchEvent.scss";
// import classNames from "classnames";
import { useSetRecoilState } from "recoil";
import { targetsTagState } from "../../recoils/createEvent/Atoms";
import "./MemberSearch.scss";
import Icon from "../common/Icon";
// import check from "../../assets/okSign.svg";

export default function EventLinkResults({
  setClickedMember,
  searchResults,
  setModalOpen,
  setIsInput,
}) {
  const setTargetsInfo = useSetRecoilState(targetsTagState);
  const handleClick = (e, member) => {
    e.preventDefault();
    setModalOpen(false);
    setTargetsInfo(member.id);
    setIsInput(true);
    return setClickedMember(member);
  };

  return (
    <div>
      {searchResults
        ? searchResults.map((member) => {
            return (
              <div
                key={member.id}
                className="outline"
                onClick={(e) => handleClick(e, member)}
              >
                <div className="followContainer">
                  <div className="followimgBox">
                    <img
                      className="profileImg"
                      src={member.imgUrl}
                      alt="profile"
                    />
                  </div>
                  <div className="followInfoBox">
                    <p className="followId">{member.id}</p>
                    <p className="followName">{member.name}</p>
                  </div>
                </div>
                <Icon img="okSign" />
              </div>
            );
          })
        : ""}
    </div>
  );
}
