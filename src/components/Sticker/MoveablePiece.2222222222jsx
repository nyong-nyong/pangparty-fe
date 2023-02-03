/* eslint-disable */
// 원하는 기능만 남겨놓고 삭제할 것 (O)
// 클래스형 컴포넌트 -> 함수형 컴포넌트로 변경할 것

import { ref } from "framework-utils";
import { Frame } from "scenejs";
import { stickerState } from "./Atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import Moveable from "react-moveable";
import "./MoveablePiece.css";

const setTransform = (target) => {
  target.style.cssText = frame.toCSS();
};

const setLabel = (clientX, clientY, text) => {
  label.style.cssText = `display: block;
      transform: translate(${clientX}px, ${clientY - 10}px)
      translate(-100%, -100%)
      translateZ(-100px);`;
  label.innerHTML = text;
};

const onDrag = ({ target, top, left }) => {
  frame.set("left", `${left}px`);
  frame.set("top", `${top}px`);
  setTransform(target);
};

const onScale = ({ target, delta }) => {
  const scaleX = this.frame.get("transform", "scaleX") * delta[0];
  const scaleY = this.frame.get("transform", "scaleY") * delta[0];
  frame.set("transform", "scaleX", scaleX);
  frame.set("transform", "scaleY", scaleY);
  setTransform(target);
};

const onRotate = ({ target, beforeDelta }) => {
  const deg = parseFloat(this.frame.get("transform", "rotate")) + beforeDelta;
  frame.set("transform", "rotate", `${deg}deg`);
  setTransform(target);
};

const onEnd = () => {
  label.style.display = "none";
};


export default function MoveablePiece() {
  const [target, setTarget] = useState();
  const [scalable, setScalable] = useState(true);

  // sticker 삭제버튼 -> recoil state를 reset 시키기
  const customAble = {
    // 한별 수정
    name: "tooltool",
    render(moveable) {
      const { renderPoses } = moveable.state;

      return (
        <button
          className="stickerClose"
          onClick={() => {
            const resetSticker = useRecoilState(stickerState);
          }}
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${renderPoses[1][0]}px, ${renderPoses[1][1]}px) translateZ(-50px)`,
            zIndex: 100,
          }}
        >
          <img
            alt="exit"
            src={`${process.env.PUBLIC_URL}/image/exit.png`}
            style={{ width: "10px" }}
          />
        </button>
      );
    },
  };

  // 마운트 발생
  useEffect(() => {
    setTarget = document.querySelector(".moveable");
  }, []);

  // 스티커를 담고 있는 frame
  const frame = new Frame({
    position: "absolute",
    width: "100px",
    height: "100px",
    left: "0px",
    top: "0px",
    transform: {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    },
  });
  
  const sticker = this.props.sticker ? this.props.sticker : {};
  // console.log(sticker);

  return (
    <div>
      <Moveable
        ref={ref(this, "moveable")}
        target={target}
        pinchThreshold={20}
        container={document.body}
        draggable={true}
        scalable={scalable}
        rotatable={true}
        origin={false}
        throttleDrag={1}
        throttleRotate={0.2}
        throttleScale={0.01}
        onDrag={this.onDrag}
        onScale={this.onScale}
        onRotate={this.onRotate}
        onDragEnd={this.onEnd}
        onScaleEnd={this.onEnd}
        onRotateEnd={this.onEnd}
        // 한별 수정
        ables={[customAble]}
        tooltool={true}
      />

      {/* 스티커 이미지 = moveable한 container */}
      <div className="container">
        <div className="moveable">
          <span>
            {sticker && (
              <img
                src={sticker.url}
                position="relative"
                width="100px"
                height="100px;"
              />
            )}
          </span>
        </div>
      </div>

      {/* 선택 영역 = label */}
      <div className="label" ref={ref(this, "label")} />
    </div>
  );
}
