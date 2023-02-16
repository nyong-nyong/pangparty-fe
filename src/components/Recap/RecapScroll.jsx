import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import RecapPang from "./RecapPang";
import RecapRp from "./RecapRp";
import RecapPhoto from "./RecapPhoto";
import RecapGoDetail from "./RecapGoDetail";
import goDown from "../../assets/goDown.svg";

export default function RecapScroll(props) {
  const { eventInfo, eventUid } = props;

  const recapRef = useRef();
  const { scrollYProgress } = useScroll({ target: recapRef });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const goDownToRpHandler = () => {
    document
      .querySelector(".carouselDivRp")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const goDownToPhotoHandler = () => {
    document
      .querySelector(".carouselDivPhoto")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const goDownToGoDetailHandler = () => {
    document
      .querySelector(".carouselDivGoDetail")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="scrollContainer">
      <section onWheel={goDownToRpHandler}>
        <RecapPang
          ref={recapRef}
          pangNum={eventInfo.eventExports[0].eventLikeCnt}
        />
        <button
          className="recapFirstdownIcon"
          type="button"
          onClick={goDownToRpHandler}
          style={{ backgroundColor: "inherit", border: "none" }}
        >
          <img className="downIcon" src={goDown} alt="" />
        </button>
      </section>
      <section>
        <div className="inSectionBlankBoxRp" />
        <RecapRp
          ref={recapRef}
          writerNum={eventInfo.eventExports[0].rollingPaperParticipantCnt}
          rpNum={eventInfo.eventExports[0].rollingPaperCnt}
        />
        <button
          className="recapFirstdownIcon"
          type="button"
          onClick={goDownToPhotoHandler}
          style={{ backgroundColor: "inherit", border: "none" }}
        >
          <img className="downIcon" src={goDown} alt="" />
        </button>
      </section>
      <section>
        <div className="inSectionBlankBoxPhoto" />
        <RecapPhoto albumNum={eventInfo.eventExports[0].albumMediaCnt} />
        <button
          className="recapFirstdownIcon"
          type="button"
          onClick={goDownToGoDetailHandler}
          style={{ backgroundColor: "inherit", border: "none" }}
        >
          <img className="downIcon" src={goDown} alt="" />
        </button>
      </section>
      <section>
        <RecapGoDetail eventUid={eventUid} />
      </section>
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}

// 참고

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
//   }

//   function Image({ id }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <section>
//       <div ref={ref}>
//         <img src={`/${id}.jpg`}/>
//       </div>
//       <motion.h2 style={{ y }}>{#00${id}}</motion.h2>
//     </section>
//   );
//   }

// export default function RecapScroll(props) {
//   const { eventInfo } = props;
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//   stiffness: 100,
//   damping: 30,
//   restDelta: 0.001
//   });

// return (
//   <>
//     {[1, 2, 3, 4, 5].map((image) => (
//       <Image id={image} />
//     ))}
//     <motion.div className="progress" style={{ scaleX }} />
//   </>
// );
// }
