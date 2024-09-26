import CircleWithArrow from "@/components/Circle/Circle";
import Demo1 from "@/components/Demo1";
import Demo3 from "@/components/Demo3";
import RollingText from "@/components/RollingText";
import CircleBorderAnimation from "./GSAP/CircleGSAP";
import ScrollTextAnimation from "./GSAP/TextGSAP";

export default function Home() {
  return (
    <>
      {/* <Demo1 /> */}
      {/* <Demo3/> */}
      {/* <CircleWithArrow/> */}
      {/* <CircleBorderAnimation/> */}
      <ScrollTextAnimation/>
      {/* <div style={{ padding: '20px', fontSize: '24px', color: '#333' }}>
      <RollingText text="Hello, World!" />
    </div> */}
    </>
  );
}
