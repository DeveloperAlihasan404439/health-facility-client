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
  const [nextDom, setNextDom] = useState(null);
  const [prevDom, setPrevDom] = useState(null);

  useEffect(()=>{
    let carouselDom = document.querySelector('.carousel')
    let listsDom = document.querySelector('.carousel .lists')
    let thumbnailDom = document.querySelector('.carousel .thumbnail')
   


    let runTimeOut;
    let runAutoTime;

    function showSlider(nextDom, prevDom){
      let itemSlider = document.querySelectorAll('.carousel .lists .items')
      let thumbnailSlider = document.querySelectorAll('.carousel .thumbnail .items')
      if(nextDom === "next"){
        listsDom.appendChild(itemSlider[0])
        thumbnailDom?.appendChild(thumbnailSlider[0])
        carouselDom.classList.add('next')
      }
      if(prevDom === "prev"){
        let positionItem = itemSlider.length - 1;
        listsDom.prepend(itemSlider[positionItem])
        thumbnailDom?.prepend(thumbnailSlider[positionItem])
        carouselDom.classList.add('prev')

      }

      clearTimeout(runTimeOut)
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')
      }, 3000);

     /*  clearTimeout(runAutoTime)
      runAutoTime = setTimeout(() => {
        setNextDom('next')
      }, 5000); */
    }
    showSlider(nextDom, prevDom)
    setNextDom(null)
    setPrevDom(null)
  },[nextDom, prevDom])
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
          </div>
        </div>
        <div className="items">
          <Image width="auto" height="auto" src={slider2} alt="slider" />
          <div className="content">
            <div className="title">Name Slider</div>
          </div>
        </div>
        <div className="items">
          <Image width="auto" height="auto" src={slider3} alt="slider" />
          <div className="content">
            <div className="title">Name Slider</div>
          </div>
        </div>
        <div className="items">
          <Image width="auto" height="auto" src={slider4} alt="slider" />
          <div className="content">
            <div className="title">Name Slider</div>
          </div>
        </div>
      </div>
      {/* thumbnail  slider images and content end*/}

      {/* arrows button clicing prev and next */}
      <div className="arrows">
        <button
          onClick={()=>setPrevDom('prev')}
          className="arrow-button"
        >
          {"<"}
        </button>
        <button
          onClick={()=>setNextDom('next')}
          className="arrow-button"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
