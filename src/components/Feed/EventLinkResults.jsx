/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export default function EventLinkResults({ setClickedEvent, searchResults }) {
  const handleClick = (e, event) => {
    e.preventDefault();
    console.log(event);
    return setClickedEvent(event);
  };

  return (
    <div>
      {searchResults
        ? searchResults.map((event) => {
            return (
              <div onClick={(e) => handleClick(e, event)}>
                {event.eventName}
              </div>
            );
          })
        : ""}
    </div>
  );
}
