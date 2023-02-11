/* eslint-disable */
// import { useRef } from "react";
import { Popover } from "react-tiny-popover";

import "./ShareButton.scss";
import { useState } from "react";

function ShareButton() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div>
      <Popover
        // style={{ position: "relative" }}
        isOpen={isPopoverOpen}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={() => (
          <div
            className="sharePopOver"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <p>피드에 공유하기</p>
            <hr />
            <p>링크 복사하기</p>
          </div>
        )}
      >
        <button
          className="shareBtnImg"
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        />
      </Popover>
    </div>
  );
}

export default ShareButton;
