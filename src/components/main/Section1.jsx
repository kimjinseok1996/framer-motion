import "../../scss/main/section1.scss";
import videos from "../../assets/video/car.mp4";
import Container from "../Container";
import FramerMotion from "../utills/FramerMotion";

const h1Style = {
  initial: { opacity: 0, y: -12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true, amount: 1 },
};

const h5Style = {
  initial: { opacity: 0, y: -12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: 0.2, duration: 0.4 },
  viewport: { once: true, amount: 1 },
};

const Section1 = () => {
  return (
    <section id="section-1">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={videos} type="video/mp4" />
          Your browser is not supported !
        </video>
      </div>

      <Container>
        <div className="text">
          <FramerMotion as="h1" {...h1Style}>
            창조적인 이동의 여정을 선사하는 기업
          </FramerMotion>
          <FramerMotion as="h5" {...h5Style}>
            끊임없이 도전하여
            <br />
            기업정보화 서비스의 리더로 앞서가겠습니다.
          </FramerMotion>
        </div>
      </Container>
    </section>
  );
};

export default Section1;
