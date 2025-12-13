import { useEffect, useState } from "react"

function TopScrollbar() {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-[150] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-300 to-purple-400 relative transition-all duration-75"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
}

export default TopScrollbar;
