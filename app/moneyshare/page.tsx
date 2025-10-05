"use client"

import Image from "next/image";
import calculator from "./../../assets/images/calculator.png";
import money from "./../../assets/images/money.png";
import { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {

  //สร้างตัวแปร state ทำงานกับ เงิน คน และเงินที่จะแชร์กัน
  const [moneyInput, setMoneyInput] = useState("");
  const [person, setPerson] = useState("");
  const [moneyShare, setMoneyShare] = useState("0.00");

  const handleCalClick = ()=>{
    //validate รหัส
    if(moneyInput == "" || person == "" || person == "0"){
      alert('กรุณาป้อนจํานวนเงินและจํานวนคนก่อนคํานวณ และคนต้องไม่เป็น 0')
      return;
    }

    if(isNaN( Number( moneyInput ) ) || isNaN( Number( person ) ) ){
      alert('กรุณาป้อนจํานวนเงินและจํานวนคนเป็นตัวเลขเท่านั้น')
      return;
    }

    //คำนวณ
    const result = parseFloat(moneyInput) / parseFloat(person);
    setMoneyShare(result.toFixed(2));
  }

  const handleCancelClick = ()=>{
    setMoneyInput("");
    setPerson("");
    setMoneyShare("0.00");
  }

  return (
    <>
        <div className="w-1/2 border border-gray-500 mx-auto mt-20 mb-10 p-20
                      flex flex-col items-center rounded-2xl shadow-xl">
            <Image src={calculator} alt="calcultor" width={100} />

            <h1 className="text-lg text-blue-600 font-bold mt-3">
              Varity Calculator V.1.0
            </h1>   

            <h1 className="text-lg text-blue-600 mt-1 mb-5">โปรแกรมคำนวณ</h1>

            <div className="w-full border border-gray-300 flex flex-col items-center p-5 rounded-xl">
                <Image src={money} alt="calcultor" width={50} />
                <h1 className="text-lg text-blue-600 mt-1 mb-5">แชร์เงินกันเถอะ</h1>
                
                <div className="w-full flex flex-col">
                   <label>ป้อนเงิน (บาท)</label>
                   <input type="text" value={moneyInput} onChange={(e) => setMoneyInput(e.target.value)}
                          className="border border-gray-300 p-2 rounded" />
                </div>

                <div className="w-full flex flex-col mt-3">
                   <label>ป้อนคน</label>
                   <input type="text" value={person} onChange={(e) => setPerson(e.target.value)}
                          className="border border-gray-300 p-2 rounded" />
                </div>

                <button onClick={handleCalClick} className="w-full text-lg text-white bg-blue-600 hover:bg-blue-700
                                   px-5 py-2 rounded text-center mt-5 cursor-pointer">
                  คำนวณ
                </button>
                
                <button onClick={handleCancelClick} className="w-full text-lg text-white bg-orange-600 hover:orange-blue-700
                                   px-5 py-2 rounded text-center mt-3 cursor-pointer">
                  ยกเลิก
                </button>

                <div className="w-full flex justify-center items-center mt-5 text-center">
                    <span>หารกันคนละ</span>
                    <span className="font-bold text-5xl text-red-600 mx-10">{moneyShare}</span>
                    <span>บาท</span>
                </div>
            </div>

            <Link href="/menu" className="text-blue-600 mt-5">กลับไปหน้าเมนู</Link>
        </div>


        <Footer />
    </>
  );
}