import React from 'react'
import { IoShieldCheckmark } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaGreaterThan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { BiSolidUserPin } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { TiArrowMaximise } from "react-icons/ti";
import { BsPersonVcardFill } from "react-icons/bs";
import { MdSpeakerPhone } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { IoFootball } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { BiLayer } from "react-icons/bi";
import './App.css'

const App = () => {
  return (
    <>
      {/* Container - Fixed height limits removed so content flows perfectly on mobile */}
      <div className="container bg-black min-h-screen w-full px-4 py-5 flex flex-col gap-4 text-white">
        
        {/* 1st Section: Balance Card */}
        <div className="first-section bg-emerald-500 w-full rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-lg">
          <div className="firstGrid">
            <div className="top1 flex items-center gap-2">
              <IoShieldCheckmark className="text-gray-800" />
              <p className='text-[0.85rem] text-gray-800 font-medium'>Available Balance</p>
              <FaEye className='cursor-pointer text-gray-800' />
            </div>
            <div className="bottom1 mt-1 flex items-center gap-2">
              <div className="flex items-center text-gray-900">
                <TbCurrencyNaira className='text-[1.8rem]' />
                <p className='text-[1.8rem] font-bold'>1,900,506.67</p>
              </div>
              <FaGreaterThan className="text-[0.8rem] text-gray-900 mt-1" />
            </div>
          </div>
          
          <div className="secondGrid w-full sm:w-auto flex flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-end gap-2 border-t border-emerald-400 sm:border-none pt-3 sm:pt-0">
            <div className="top2 flex items-center gap-1 cursor-pointer">
              <p className='text-gray-800 text-[0.85rem] font-medium'>Transaction History</p>
              <FaGreaterThan className="text-[0.7rem] text-gray-800" />
            </div>
            <button className="bckgrnd bg-black text-emerald-400 px-4 py-2 rounded-full text-[0.85rem] font-semibold flex items-center gap-2 active:scale-95 transition-transform">
              <FaPlus /> Add Money
            </button>
          </div>
        </div>

        {/* 2nd Section: Quick Actions (To Opay, To Bank, Withdraw) */}
        <div className="second-section bg-zinc-800 w-full rounded-2xl p-4 grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="user bg-zinc-900 h-14 w-14 rounded-full flex items-center justify-center group-active:scale-95 transition-transform">
              <BiSolidUserPin className='text-emerald-400 text-[1.8rem]' />
            </div>
            <p className='text-gray-300 text-[0.85rem]'>To Opay</p>
          </div>
          
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="user bg-zinc-900 h-14 w-14 rounded-full flex items-center justify-center group-active:scale-95 transition-transform">
              <BsBank2 className='text-emerald-400 text-[1.6rem]' />
            </div>
            <p className='text-gray-300 text-[0.85rem]'>To Bank</p>
          </div>
          
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="user bg-zinc-900 h-14 w-14 rounded-full flex items-center justify-center group-active:scale-95 transition-transform">
              <TiArrowMaximise className='text-emerald-400 text-[1.8rem]' />
            </div>
            <p className='text-gray-300 text-[0.85rem]'>Withdraw</p>
          </div>
        </div>

        {/* 3rd Section: BVN / NIN Alert Notice */}
        <div className="third-section bg-zinc-800 w-full rounded-2xl p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="doc bg-amber-500/20 p-3 rounded-full flex items-center justify-center shrink-0">
              <BsPersonVcardFill className='text-amber-400 text-[1.5rem]' />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-200 text-[0.9rem] font-medium leading-tight">Your BVN and NIN info do not...</p>
              <p className="text-gray-400 text-[0.75rem] mt-0.5">Click to view more details</p>
            </div>
          </div>
          <button className="go bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-1.5 rounded-full font-bold text-[0.85rem] shrink-0 active:scale-95 transition-transform">
            Go
          </button>
        </div>

        {/* 4th Section: Utilities Grid Layout */}
        <div className="fourth-section bg-zinc-800 w-full rounded-2xl p-5 grid grid-cols-4 gap-y-6 gap-x-2 text-center">
          {/* Row 1, Col 1: Airtime */}
          <div className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="bg-zinc-900 h-12 w-12 rounded-full flex items-center justify-center">
              <IoPhonePortrait className='text-emerald-400 text-[1.4rem]' />
            </div>
            <p className='text-gray-300 text-[0.75rem] font-medium truncate w-full'>Airtime</p>
          </div>

          {/* Row 1, Col 2: Data */}
          <div className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="bg-zinc-900 h-12 w-12 rounded-full flex items-center justify-center">
              <MdSpeakerPhone className='text-emerald-400 text-[1.4rem]' />
            </div>
            <p className='text-gray-300 text-[0.75rem] font-medium truncate w-full'>Data</p>
          </div>

          {/* Row 1, Col 3: Betting */}
          <div className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="bg-zinc-900 h-12 w-12 rounded-full flex items-center justify-center">
              <IoFootball className='text-emerald-400 text-[1.4rem]' />
            </div>
            <p className='text-gray-300 text-[0.75rem] font-medium truncate w-full'>Betting</p>
          </div>

          {/* Row 1, Col 4: TV */}
          <div className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="bg-zinc-900 h-12 w-12 rounded-full flex items-center justify-center">
              <MdLiveTv className='text-emerald-400 text-[1.4rem]' />
            </div>
            <p className='text-gray-300 text-[0.75rem] font-medium truncate w-full'>TV</p>
          </div>

          {/* Row 2, Col 1: Safebox */}
          <div className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="bg-zinc-900 h-12 w-12 rounded-full flex items-center justify-center">
              <GiWallet className='text-emerald-400 text-[1.4rem]' />
            </div>
            <p className='text-gray-300 text-[0.75rem] font-medium truncate w-full'>Safebox</p>
          </div>

          {/* Row 2, Col 2: Loan */}
          <div className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="bg-zinc-900 h-12 w-12 rounded-full flex items-center justify-center">
              <FaHandsHoldingCircle className='text-emerald-400 text-[1.4rem]' />
            </div>
            <p className='text-gray-300 text-[0.75rem] font-medium truncate w-full'>Loan</p>
          </div>

          {/* Row 2, Col 3: BizPayment */}
          <div className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="bg-zinc-900 h-12 w-12 rounded-full flex items-center justify-center">
              <FaHouseChimneyMedical className='text-emerald-400 text-[1.4rem]' />
            </div>
            <p className='text-gray-300 text-[0.75rem] font-medium truncate w-full'>BizPayment</p>
          </div>

          {/* Row 2, Col 4: More */}
          <div className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="bg-zinc-900 h-12 w-12 rounded-full flex items-center justify-center">
              <BiLayer className='text-emerald-400 text-[1.4rem]' />
            </div>
            <p className='text-gray-300 text-[0.75rem] font-medium truncate w-full'>More</p>
          </div>
        </div>

        {/* 5th Section: Footer tabs */}
        <div className="fifth-section bg-zinc-800 w-full rounded-2xl p-4 grid grid-cols-3 text-center">
          <p className='text-emerald-400 font-semibold text-[0.9rem] cursor-pointer'>Home</p>
          <p className='text-gray-400 text-[0.9rem] cursor-pointer'>Rewards</p>
          <p className='text-gray-400 text-[0.9rem] cursor-pointer'>Me</p>
        </div>

      </div>
    </>
  )
}

export default App;
