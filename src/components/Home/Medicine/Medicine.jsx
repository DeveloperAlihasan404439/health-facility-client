import Image from "next/image";

import medicine from '../../../assets/Medicine Services/medicin.jpeg'
export default function Medicine() {
  return (
    <div className="w-11/12 mx-auto py-5 md:py-10 bg-[#fff] mt-20 md:mt-10 lg:mt-0">
      <h2 className="text-[#04b3fa] text-xl font-semibold tracking-widest">
        <i class="ri-capsule-fill"></i> Medicine
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
        <h2 className="text-5xl font-bold text-inherit mb-5">Comprehensive  <span className="text-[#04b3fa]">Medicine</span> Services</h2>
            <Image width={700} height={700} src={medicine} alt="Medicine left"/>
        </div>
        <div className="mt-5">
          <h2 className="text-lg font-normal text-[#000e]">
          Our Comprehensive Medicine Services program is designed to provide patients with a wide range of medical care, from preventive services to treatment for complex conditions. Our team of expert physicians, specialists, and healthcare professionals is committed to delivering high-quality, patient-centered care that addresses the unique health needs of each individual.
          </h2>
          <h2 className="text-[#04b3fa] text-xl font-bold mt-4 tracking-widest flex items-center gap-2"><i className="ri-team-fill text-[#04b3fa] text-3xl"></i>Specialty Services</h2>
          <div className="flex gap-2 items-center">
              <i className="ri-shield-check-fill text-[#04b3fa] text-2xl"></i>
              <p>Advanced care for heart conditions, including diagnostic tests, treatment plans.</p>
          </div>
          <div className="flex gap-2 items-center">
              <i className="ri-shield-check-fill text-[#04b3fa] text-2xl"></i>
              <p>Diagnosis and treatment of digestive system disorders, including endoscopic procedures.</p>
          </div>
          <div className="flex gap-2 items-center">
              <i className="ri-shield-check-fill text-[#04b3fa] text-2xl"></i>
              <p>Treatment of musculoskeletal issues including joint pain, fractures, and sports injuries.</p>
          </div>
          <h2 className="text-[#04b3fa] text-xl font-bold mt-4 tracking-widest flex items-center gap-2"><i className="ri-group-3-fill text-[#04b3fa] text-3xl"></i>Preventive Care</h2>
          <div className="flex gap-2 items-center">
              <i className="ri-verified-badge-fill text-[#04b3fa] text-2xl"></i>
              <p> Regular health evaluations to monitor and maintain overall wellness.</p>
          </div>
          <div className="flex gap-2 items-center">
              <i className="ri-verified-badge-fill text-[#04b3fa] text-2xl"></i>
              <p>Up-to-date vaccines to protect against common diseases and infections.</p>
          </div>
          <div className="flex gap-2 items-center">
              <i className="ri-verified-badge-fill text-[#04b3fa] text-2xl"></i>
              <p>Personalized evaluations to identify risk factors and develop preventive strategies.</p>
          </div>
          <div className="flex gap-2 items-center">
              <i className="ri-verified-badge-fill text-[#04b3fa] text-2xl"></i>
              <p>Early detection of conditions such as hypertension, diabetes, and cancers through routine screenings.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
