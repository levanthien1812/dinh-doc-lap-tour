import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import Homepgae from '../../assets/images/homepage.svg'
import Homepage360 from '../../assets/images/homepage360.svg'
import DinhdoclapOld from '../../assets/images/dinhdoclapold.svg'
import Trungbay from '../../assets/images/trungbay.svg'

function HomePage() {
  return (
    <div className='pb-0'>
      <div style={{paddingBottom: '20px'}} className='max-w-screen-xl mx-auto mt-2 mb-2 flex items-center justify-center'>
        <img src={Homepgae} alt="homepage" />        
      </div>
      <div className='bg-[#EBEBEB] pb-0'> 
        <section className='max-w-[1000px] mx-auto' style={{paddingTop: '60px'}}>
          <div className="flex">
            <div className="w-1/2 p-4 max-w-[50%] flex items-center justify-center flex-col">
              <h1 className="text-2xl font-bold">DINH ĐỘC LẬP</h1>
              <p className='pt-10 max-w-[327px] text-center font-normal text-[16px]'>Dinh Độc Lập được công nhận là Di tích lịch sử văn hóa quốc gia bằng Quyết định số 77A/VHQĐ ngày 25/6/1976 của Bộ trưởng Bộ Văn hóa. Ngày 12 tháng 8 năm 2009, Thủ tướng Chính phủ nước Cộng hòa Xã hội Chủ nghĩa Việt Nam đã ký...</p>
              <Link to='/gioi-thieu'>
                <button style={{ height: '50px', width: '112px', marginTop:'40px' }} className='bg-[#C1A559] p-[10px] text-white text-[16px]' >ĐỌC THÊM</button>
              </Link>
              <img style={{ marginTop:'40px' }}src={Homepage360} alt="Homepage360" />
              <Link to='/mo-hinh'>
                <button style={{ height: '50px', width: '112px', marginTop:'40px' }} className='bg-[#C1A559] p-[10px] text-white text-[16px]' >VR360</button>
              </Link>
            </div>
            <div className="flex items-center flex-col w-1/2 p-4 max-w-[50%]">
              <img src={DinhdoclapOld} alt="Dinh doc lap thoi xua" />
              <h1 style={{paddingTop: '152px'}} className="text-2xl font-bold">DINH ĐỘC LẬP NGÀY NAY</h1>
            </div>
          </div>
        </section>
        <div style={{paddingTop: '90px', paddingBottom: '10px'}}>
          <div className='flex position: relative items-center justify-center pb-0'>
            <img src={Trungbay} alt="trung bay" />
            <div className='position: absolute justify-center items-center text-center max-w-[40%] text-white flex flex-col'>
              <span className='text-[40px] text-white' >
                TRƯNG BÀY 
                <br />
                TỪ DINH NORODOM ĐẾN DINH ĐỘC LẬP 1868 - 1966
              </span>
              <button style={{ height: '50px', width: '112px' }} className='bg-[#C1A559] text-[16px] text-white' >XEM THÊM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
