import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Lottie({ setIsLottieShowing }) {
  const [dotLottie, setDotLottie] = useState(null);

  useEffect(() => {
    function onComplete() {
      setIsLottieShowing(false);
    }
    if (dotLottie) {
      dotLottie.addEventListener("complete", onComplete);
    }

    return () => {
      if (dotLottie) {
        dotLottie.removeEventListener("complete", onComplete);
      }
    };
  }, [dotLottie]);

  function dotLottieRefCallback(dotLottie) {
    setDotLottie(dotLottie);
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "150%",
        height: "auto",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <DotLottieReact
        dotLottieRefCallback={dotLottieRefCallback}
        src="src/assets/confetti-toTop.json"
        loop={false}
        autoplay={true}
      />
    </div>
  );
}

export default Lottie;
