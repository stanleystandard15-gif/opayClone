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
import { FaGgCircle } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { IoCardSharp } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import './App.css'

const App = () => {
  return (
    <>
      {/* container */}
      <div className="container bg-black h-[90vh] w-[100vw] pl-5 pt-5 flex flex-col ">
        {/* 1st Section */}
        <div className="first-section bg-red-400 h-[15vh] w-[95vw] rounded-2xl grid grid-cols-2  ">
          <div className="firstGrid ml-3">
            <div className="top1 pl-5 mt-3 flex items-center gap-2">
              < IoShieldCheckmark />
              <p className='text-[.9rem] text-gray-600'>Available Balance</p>
              <FaEye className='cursor-pointer' />
            </div>
            <div className="bottom1 mt-2 pl-5 flex items-center gap-2">
              <div className="flex items-center">
                <TbCurrencyNaira className='text-[1.4rem]' />
                <p className='text-[1.6rem] font-bold mb-2'>1,900,506.67</p></div>
              <FaGreaterThan />
            </div>
          </div>
          <div className="secondGrid ml-10 ">
            <div className="top2 flex items-center gap-2 pl-5 mt-2">
              <p className='text-gray-600 text-[.9rem]'>Transacton History</p>
              < FaGreaterThan />
            </div>
            <div className="bottom2 mt-2 pl-5 flex items-center">
              <div className="bckgrnd bg-black h-[5vh] w-[20vw] rounded-2xl mt-2 text-green-300 flex text-[.8rem] ml-4 cursor-pointer">
                <p className="money ml-2 flex mb-1 gap-2 items-center"> <FaPlus /> Add Money </p>
              </div>
            </div>
          </div>
        </div>


        {/* 2nd Section */}
        <div className="second-section bg-gray-600 h-[15vh] w-[95vw] rounded-2xl grid grid-cols-3 mt-2">
          <div className="user bg-black h-[7vh] w-[9vw] mt-4 ml-11 rounded-lg flex items-center justify-center">
            <BiSolidUserPin className='bg-green-500 text-[1.5rem] rounded-lg ' />
          </div>
          <div className="user bg-black h-[7vh] w-[9vw] mt-4 ml-11 rounded-lg flex items-center justify-center">
            <BsBank2 className='bg-green-500 text-[1.5rem] rounded-lg ' />
          </div>
          <div className="user bg-black h-[7vh] w-[9vw] mt-4 ml-11 rounded-lg flex items-center justify-center">
            <TiArrowMaximise className='bg-green-500 text-[1.5rem] rounded-lg ' />
          </div>

          <div>
            <p className='text-gray-300 ml-10 text-[.8rem] font-serif '>To Opay</p>
          </div>
          <div>
            <p className='text-gray-300 ml-10 text-[.8rem] font-serif '>To Bank</p>
          </div>
          <div>
            <p className='text-gray-300 ml-10 text-[.8rem] font-serif '>Withdraw</p>
          </div>
        </div>

        {/* 3rd Section */}

        <div className="third-section bg-gray-600 h-[14vh] w-[95vw] rounded-2xl mt-2">
          <div className="whole flex items-center">
            <div className="doc bg-amber-700 h-[6vh] w-[6vw] rounded-full mt-6 ml-6 flex items-center justify-center ">
              <BsPersonVcardFill className='text-yellow-400 h-[6vh] w-[4vw] ' />
            </div>
            <div className="text-gray-400 ml-5 mt-5 text-[1.2rem] font-mono ">
              Your BVN and NIN info do not...
              <div className="text-gray-300  text-[.9rem] font-sans ">
                Click to view more details
              </div>
            </div>
            <div className="go doc bg-green-600 h-[5vh] w-[8vw] rounded-2xl flex items-center justify-center mt-6 ml-3 font-serif font-light ">
              Go
            </div>
          </div>
        </div>

        {/* 4th Section */}

        <div className="fourth-section bg-gray-600 h-[30vh] w-[95vw] rounded-2xl grid grid-cols-4 mt-2 gap-12">
          <div className="grid1">
            <div className="airtime flex items-center justify-center bg-black h-[7vh] w-[8vw] rounded-full ml-3 mb-10 mt-6 ">
              <IoPhonePortrait className='bg-white text-[1.3rem] rounded-lg h-[5vh] flex items-center justify-center ' />
            </div>
            <div className="safebox flex items-center justify-center bg-black h-[7vh] w-[8vw] rounded-full ml-3">
              <GiWallet className='text-white text-[1.5rem] rounded-lg h-[5vh] flex items-center justify-center ' />
            </div>
            <div className="tt1 mt-[-5rem] text-gray-300 text-[.8rem]  ">
              <p className='ml-2 mb-16'>Airtime</p>
              <p className='ml-2'>Safebox</p>
            </div>
          </div>

          <div className="grid2">
            <div className="data flex items-center justify-center bg-black h-[7vh] w-[8vw] rounded-full mb-10 mt-6 ">
              <MdSpeakerPhone className='bg-white text-[1.3rem] rounded-lg h-[5vh] flex items-center justify-center ' />
            </div>
            <div className="loan flex items-center justify-center bg-black h-[7vh] w-[8vw] rounded-full">
              <FaHandsHoldingCircle className='text-white text-[1.5rem] rounded-lg h-[5vh] flex items-center justify-center ' />
            </div>

            <div className="tt2 mt-[-5rem] text-gray-300 text-[.8rem]  ">
              <p className=' ml-2 mb-16'>Data</p>
              <p className='ml-2'>Loan</p>
            </div>
          </div>

          <div className="grid3">
            <div className="betting flex items-center justify-center bg-black h-[7vh] w-[8vw] rounded-full mb-10 mt-6 ">
              <IoFootball className='text-white text-[1.5rem] rounded-lg h-[5vh] flex items-center justify-center ' />
            </div>
            <div className="biz flex items-center justify-center bg-black h-[7vh] w-[8vw] rounded-full">
              <FaHouseChimneyMedical className='text-white text-[1.5rem] rounded-lg h-[5vh] flex items-center justify-center ' />
            </div>

            <div className="tt3 mt-[-5rem] text-gray-300 text-[.8rem]  ">
              <p className=' ml-1 mb-16'>Betting</p>
              <p className='ml-[-0.5rem]'>BizPayment</p>
            </div>
          </div>

          <div className="grid4">
            <div className="tv flex items-center justify-center bg-black h-[7vh] w-[8vw] rounded-full mb-10 mt-6 ">
              <MdLiveTv className='text-white  text-[1.5rem] rounded-lg h-[5vh] flex items-center justify-center ' />
            </div>
            <div className="more flex items-center justify-center bg-black h-[7vh] w-[8vw] rounded-full">
              <BiLayer className='text-white text-[1.5rem] rounded-lg h-[5vh] flex items-center justify-center ' />
            </div>

            <div className="tt4 mt-[-5rem] text-gray-300 text-[.8rem]  ">
              <p className=' ml-3 mb-16'>TV</p>
              <p className='ml-1'>More</p>
            </div>
          </div>
        </div>

        {/* 5th Section */}
        <div className="fifth-section bg-blue-300 h-[8vh] w-[95vw] rounded-2xl grid grid-cols-3 mt-2 mb-2">
          <div className="opayy grid grid-cols-3">
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
          </div>

          <div className="opayy grid grid-cols-3">
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
          </div>

          <div className="opayy grid grid-cols-3">
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
            <p className='text-gray-300 ml-1'>Opay</p>
          </div>
        </div>


      </div>
      <div className="footer bg-gray-900 h-[10vh] w-[100vw]  grid grid-cols-5 mt-0">
        <div className="user text-green h-[7vh] w-[9vw] mt-1 ml-6 rounded-lg flex items-center justify-center">
          <FaGgCircle className='text-green-800 text-[1.5rem] rounded-lg cursor-pointer hover:text-green-800 ' />
        </div>

        <div className="user text-green h-[7vh] w-[9vw] mt-1 ml-6 rounded-lg flex items-center justify-center">
          <FaGem className='text-gray-400 text-[1.5rem] rounded-lg cursor-pointer hover:text-green-800 ' />
        </div>

        <div className="user text-green h-[7vh] w-[9vw] mt-1 ml-6 rounded-lg flex items-center justify-center">
          < HiOutlineChartSquareBar className='text-gray-400 text-[1.5rem] rounded-lg cursor-pointer hover:text-green-800 ' />
        </div>

        <div className="user text-green h-[7vh] w-[9vw] mt-1 ml-6 rounded-lg flex items-center justify-center">
          <IoCardSharp className='text-gray-400 text-[1.5rem] rounded-lg cursor-pointer hover:text-green-800 ' />
        </div>

        <div className="user text-green h-[7vh] w-[9vw] mt-1 ml-6 rounded-lg flex items-center justify-center">
          <FaSmile className='text-gray-400 text-[1.5rem] rounded-lg cursor-pointer hover:text-green-800 ' />
        </div>

        <div>
          <p className='text-gray-500 mt-[-1rem] ml-8 text-[.7rem] font-sans font-bold '>Home</p>
        </div>

        <div>
          <p className='text-gray-500 mt-[-1rem] ml-7 text-[.7rem] font-sans font-bold '>Rewards</p>
        </div>

        <div>
          <p className='text-gray-500 mt-[-1rem] ml-7 text-[.7rem] font-sans font-bold '>Finance</p>
        </div>

        <div>
          <p className='text-gray-500 mt-[-1rem] ml-8 text-[.7rem] font-sans font-bold '>Cards</p>
        </div>

        <div>
          <p className='text-gray-500 mt-[-1rem] ml-9.5 text-[.7rem] font-sans font-bold '>Me</p>
        </div>
      </div>

    </>
  )
}

export default App