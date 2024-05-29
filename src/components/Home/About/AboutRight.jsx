import Image from "next/image";

import appointment from "../../../assets/About/doctor-appointment.jpg";
import talking from "../../../assets/About/talking-doctors.jpg";
import pushpo from "../../../assets/About/1565782843665.jpeg";
import "./AboutRight.css";
function AboutRight() {
  return (
    <div className="relative">
      <div className="customers">
        <Image
          width={700}
          height={700}
          src={talking}
          alt="talking"
          className="w-[20rem] h-[20rem] rounded-[10px]"
        />
        <div className="customer">
          <i class="ri-lungs-fill"></i>
          <h2>30K+</h2>
          <p>Hoppy Customers</p>
        </div>
      </div>
      <Image
        width={700}
        height={700}
        src={appointment}
        alt="appointment"
        className="w-[20rem] h-[20rem] absolute left-[40%] top-[60%] border-[10px] border-white rounded-[10px]"
      />
      <div className="support">
        <i class="ri-customer-service-fill"></i>
        <div>
          <h2>20K+</h2>
          <p>Customers Support</p>
        </div>
      </div>
    </div>
  );
}

export default AboutRight;
