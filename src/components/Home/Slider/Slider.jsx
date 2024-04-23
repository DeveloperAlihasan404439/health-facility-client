/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import slider1 from "../../../assets/slider/photo-1581594549595-35f6edc7b762.avif";
import slider2 from "../../../assets/slider/slider 2.png";
import slider3 from "../../../assets/slider/Slider 3.png";
import slider4 from "../../../assets/slider/Slider 4.png";
import Image from "next/image";
import "./Slider.css";
import { useEffect, useState } from "react";
export default function Slider() {
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  let runTimeOut;
  let autoRunTime;

  useEffect(() => {
    const itemSliders = document.querySelectorAll(".carousel .lists .items");
    const listItemDom = document.querySelector(".carousel .lists");
    const carousel = document.querySelector(".carousel");
    const thumbnailItems = document.querySelectorAll(
      ".carousel .thumbnail .items"
    );
    const thumbnailDome = document.querySelector(".carousel .thumbnail");

    // prev slider and thumbnail runn the code
    if (prev === "prev") {
      let positionItems = itemSliders.length - 1;
      listItemDom.prepend(itemSliders[positionItems]);
      carousel.classList.add("prev");
      if (prev === "prev") {
        thumbnailDome.prepend(thumbnailItems[positionItems]);
      }
    }
    // next slider and thumbnail runn the code
    if (next === "next") {
      listItemDom.appendChild(itemSliders[0]);
      carousel.classList.add("next");
      if (next === "next") {
        thumbnailDome.appendChild(thumbnailItems[0]);
      }
    }

    // click the next and prev button and class remove functionn
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carousel.classList.remove("next");
      carousel.classList.remove("prev");
    }, 3000);

    // auto next button click and auto next slider function 
    clearTimeout(autoRunTime);
    autoRunTime = setTimeout(() => {
      setNext("next");
    }, 6000);
    return () => {
      setNext(null);
      setPrev(null);
    };
  }, [prev, next, runTimeOut,autoRunTime]);
  return (
    <div className="carousel">
      {/* body slider images and content start  */}
      <div className="lists">
        <div className="items">
          <Image
            width={1000}
            height={1000}
            src={slider1}
            alt="slider bannge 1"
          />
          <div className="content">
            <div className="author">Lunder</div>
            <div className="title">Design silider</div>
            <div className="topic">Animal</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tenetur vitae, ut nemo commodi ratione accusantium
              eaque explicabo sapiente eius beatae neque quidem suscipit
              consequatur obcaecati temporibus. Libero, ducimus aspernatur.
            </div>
            <div className="buttons">
              <button className="button">See More</button>
              <button className="button">Subcribe</button>
            </div>
          </div>
        </div>
        <div className="items">
          <Image
            width="auto"
            height={700}
            src={slider2}
            alt="slider bannge 1"
            className="image"
          />
          <div className="content">
            <div className="author">Lunder</div>
            <div className="title">Design silider</div>
            <div className="topic">Animal</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tenetur vitae, ut nemo commodi ratione accusantium
              eaque explicabo sapiente eius beatae neque quidem suscipit
              consequatur obcaecati temporibus. Libero, ducimus aspernatur.
            </div>
            <div className="buttons">
              <button className="button">See More</button>
              <button className="button">Subcribe</button>
            </div>
          </div>
        </div>
        <div className="items">
          <Image
            width="auto"
            height={700}
            src={slider3}
            alt="slider bannge 1"
            className="image"
          />
          <div className="content">
            <div className="author">Lunder</div>
            <div className="title">Design silider</div>
            <div className="topic">Animal</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tenetur vitae, ut nemo commodi ratione accusantium
              eaque explicabo sapiente eius beatae neque quidem suscipit
              consequatur obcaecati temporibus. Libero, ducimus aspernatur.
            </div>
            <div className="buttons">
              <button className="button">See More</button>
              <button className="button">Subcribe</button>
            </div>
          </div>
        </div>
        <div className="items">
          <Image
            width="auto"
            height={700}
            src={slider4}
            alt="slider bannge 1"
            className="image"
          />
          <div className="content">
            <div className="author">Lunder</div>
            <div className="title">Design silider</div>
            <div className="topic">Animal</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tenetur vitae,
            </div>
            <div className="buttons">
              <button className="button">See More</button>
              <button className="button">Subcribe</button>
            </div>
          </div>
        </div>
      </div>
      {/* body slider images and content end  */}

      {/* thumbnail  slider images and content start*/}
      <div className="thumbnail">
        <div className="items">
          <Image width="auto" height="auto" src={slider1} alt="slider" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">ut nemo</div>
          </div>
        </div>
        <div className="items">
          <Image width="auto" height="auto" src={slider2} alt="slider" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">ut nemo</div>
          </div>
        </div>
        <div className="items">
          <Image width="auto" height="auto" src={slider3} alt="slider" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">ut nemo</div>
          </div>
        </div>
        <div className="items">
          <Image width="auto" height="auto" src={slider4} alt="slider" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="des">ut nemo</div>
          </div>
        </div>
      </div>
      {/* thumbnail  slider images and content end*/}

      {/* arrows button clicing prev and next */}
      <div className="arrows">
        <button
          onClick={() => setPrev("prev")}
          id="prev"
          className="arrow-button"
        >
          {"<"}
        </button>
        <button
          onClick={() => setNext("next")}
          id="next"
          className="arrow-button"
        >
          &gt;
        </button>
      </div>
      {/* time function css  */}
      <div className="time"></div>
    </div>
  );
}
