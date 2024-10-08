import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Lottie({ setIsLottieShowing, setAreButtonDisabled }) {
  const [dotLottie, setDotLottie] = useState(null);

  useEffect(() => {
    function onPlay() {
      setAreButtonDisabled(true);
    }

    function onComplete() {
      setIsLottieShowing(false);
      setAreButtonDisabled(false);
    }
    if (dotLottie) {
      dotLottie.addEventListener("play", onPlay);
      dotLottie.addEventListener("complete", onComplete);
    }

    return () => {
      if (dotLottie) {
        dotLottie.removeEventListener("play", onPlay);
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
        top: 0,
        width: "200%",
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
