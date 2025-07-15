import { useState, useEffect } from "react";

function useMediaQuery() {
  const query = "(max-width: 768px)";
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia(query).matches;
    }
    return false; // 서버사이드 렌더링 대비
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQueryList = window.matchMedia(query);

    const listener = (event) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener
      ? mediaQueryList.addEventListener("change", listener)
      : mediaQueryList.addListener(listener); // 레거시 지원

    // 초기값 세팅
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener
        ? mediaQueryList.removeEventListener("change", listener)
        : mediaQueryList.removeListener(listener);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
