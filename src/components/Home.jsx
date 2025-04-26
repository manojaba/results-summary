import React from 'react'
import data from '../data.json'
function Home() {
    return (
        <div className='flex items-center justify-center md:h-screen bg-[#ECF2FF]  '>
            <div className='md:flex md:max-w-[736px] bg-white md:rounded-3xl '>
                <div className='bg-linear-180 from-[#7755FF] from-0% to-[#2F2CE9] to-100% rounded-b-3xl md:rounded-3xl flex flex-col justify-center items-center flex-1 min-w-0 px-[30px]'>
                    <p className='text-[#CAC9FF] font-bold my-[24px] md:mt-[38px] md:mb-[35px]'>Your Result</p>
                    <p className='font-extrabold text-white text-[56px] md:text-[72px] leading-[72px]  border-0 border-[#979797] bg-gradient-to-b from-[#4D21C9] from-0% to-[#2521C9]/10 to-100%  px-[38px] md:px-[60px] md:pt-[55px] pt-[25px] pb-[22px] rounded-full text-center md:pb-[46px] '>76<span className='block font-bold leading-none text-[16px] md:text-[18px] text-[#CAC9FF]'>of 100</span></p>
                    <p className='text-white font-bold text-[24px] md:text-[32px] pt-[24px] md:pt-[28px] md:pb-[14px] pb-[8px]'>Great</p>
                    <p className='text-[#CAC9FF] font-medium text-[16px] md:text-[18px] text-center px-[24px] pb-[40px] md:pb-[55px] '>You scored higher than 65% of the people who have taken these tests.</p>
                </div>
                <div className='flex-1 px-[30px] pt-[24px] pb-[30px] flex flex-col min-w-0 '>
                    <p className='font-bold text-[18px] text-[#303B59] '>Summary</p>
                    <div className='mt-[24px] space-y-[16px]'>
                        {
                            data.map((each) => (
                                <div className={`flex justify-between  py-[18px] px-[16px] rounded-[12px] hover:cursor-pointer ${each.color} `}>

                                    <div className='flex gap-[12px] '>

                                        <img src={each.icon}></img>
                                        <p className={`font-medium text-[16px] ${each.textColor}`}>{each.category}</p>
                                    </div>

                                    <p className='text-[#303B59] font-bold text-[16px]'> {data[0].score} <span className='opacity-50'>/ 100</span></p>

                                </div>
                            ))
                        }


                    </div>
                    <button className='text-white font-bold hover:cursor-pointer text-[18px] bg-[#303B59] mt-[28px] py-[16px] rounded-[128px] hover:bg-linear-180 hover:from-[#7755FF] hover:from-0% hover:to-[#2F2CE9] hover:to-100% '>Continue</button>

                </div>
            </div>
        </div>
    )
}

export default Home