import "remixicon/fonts/remixicon.css";

import "./social.css";

export default function Social() {
  return (
    <div className="icons">
      <a href="#">
        <div className="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><i className="ri-facebook-circle-fill"></i></span>
        </div>
        <div className="text">Facebook</div>
      </a>
      <a href="#">
        <div className="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><i className="ri-github-fill"></i></span>
        </div>
        <div className="text">Github</div>
      </a>
      <a href="#">
        <div className="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><i className="ri-google-fill"></i></span>
        </div>
        <div className="text">Google</div>
      </a>
    </div>
  );
}
