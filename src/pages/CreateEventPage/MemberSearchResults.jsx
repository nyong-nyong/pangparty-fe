/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import "./Feed.scss";
// import "../Search/SearchEvent.scss";
// import classNames from "classnames";
import { useSetRecoilState } from "recoil";
import { targetsTagState } from "../../recoils/createEvent/Atoms";

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
              <div key={member.id} onClick={(e) => handleClick(e, member)}>
                {member.id}
              </div>
            );
          })
        : ""}
    </div>
  );
}
