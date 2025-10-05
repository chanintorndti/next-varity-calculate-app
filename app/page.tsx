"use client" //คือการกำหนดให้ component นี้เป็น client component

import Image from "next/image";
import calculator from "./../assets/images/calculator.png";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function HomePage() {

  //สร้างตัวแปร state สำหรับค่ารหัสที่ผู้ใช้ป้อน
  const [ucode, setUcode] = useState("");

  const handleAccessWebClick = () => {
    //validate รหัส
    if(ucode == ""){
      alert('กรุณาป้อนโค้ดก่อนเข้าใช้งาน')
      return;
    }

    if(ucode.toLowerCase() == "sau"){
      //เปิดไป component page /menu
      window.location.href = "/menu";
    }else{
      alert('โค้ดไม่ถูกต้อง')
    }    
  }

  return (
    <>
      <div className="w-6/12 border border-gray-500 mx-auto mt-20 mb-10 p-20
                      flex flex-col items-center rounded-2xl shadow-xl" >
        <Image src={calculator} alt="calcultor" width={200} />

        <h1 className="text-3xl text-blue-600 font-bold mt-5">
          Varity Calculator V.1.0
        </h1>

        <h1 className="text-3xl text-blue-600 mt-2 mb-5">โปรแกรมคำนวณ</h1>

        <div className="flex flex-col w-full">
          <label className="mb-2">
            ป้อนรหัสเข้าใช้งาน <span className="text-green-500">(ชื่อย่อ ม.เอเชีย)</span> 
          </label>
          <input value={ucode} onChange={(e) => { setUcode(e.target.value) }} className="border border-gray-500 rounded p-2" type="text" />
        </div>

        <button type="button" onClick={ handleAccessWebClick }
          className="bg-blue-500 hover:bg-blue-700 text-white 
                      font-bold py-2 rounded mt-5 w-full">
          เข้าใช้งาน
        </button>
      </div>

      <Footer/>
    </>
  );
}
