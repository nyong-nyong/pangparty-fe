/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// import "./Feed.scss";
// import "../Search/SearchEvent.scss";
// import classNames from "classnames";

export default function EventLinkResults({
  setClickedMember,
  searchResults,
  setModalOpen,
}) {
  const handleClick = (e, member) => {
    e.preventDefault();
    console.log(member);
    setModalOpen(false);
    return setClickedMember(member);
  };

  return (
    <div>
      {searchResults
        ? searchResults.map((member) => {
            return (
              <div key={member.id} onClick={handleClick}>
                {member.id}
              </div>
            );
          })
        : ""}
    </div>
  );
}
