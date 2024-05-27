'use client'
import { useEffect } from "react";
import "./CursorAnimation.css";
function CursorAnimation() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block"

    });
    
    document.addEventListener("mouseout", ()=>{
      cursor.style.display = "none"
    })
  }, []);
  return (
    <div className="flex justify-center items-center max-h-full ">
      <div className="cursor"></div>
    </div>
  );
}

export default CursorAnimation;
