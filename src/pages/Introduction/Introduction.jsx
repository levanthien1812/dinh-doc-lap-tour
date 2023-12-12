import React from 'react'
import { useState } from 'react'
import Iconarrow from '../../assets/images/ic-arrow-right.svg'

const Introduction = () => {
  return (
    <div className='bg-[#E6E6E6]'>
      <h1 className='text-center pt-5 font-bold text-[30px]'>DINH DỘC LẬP</h1>
      <div className="flex max-w-screen-xl mx-auto">
        <div className="w-1/2 p-4 max-w-[40%]">
          <h2 className='font-bold' >Tìm kiếm</h2>
          <div class="mb-3">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Tìm kiếm"
                aria-label="Search"
                aria-describedby="button-addon1" />
            </div>
            <h2 className='font-bold' >Bài viết mới nhất</h2>
            <ul>
              <li className='pt-4 flex '>
                <img className='self-start' style={{marginTop:'5px', paddingRight: '7px'}} src={Iconarrow} alt="icon-arrow" />
                <span>
                BAN THƯỜNG VỤ THÀNH ỦY TPHCM VÀ BAN THƯỜNG VỤ THÀNH ỦY HÀ NỘI TỔ CHỨC HỘI NGHỊ TRAO ĐỔI KINH NGHIỆM VÀ HỢP TÁC GIỮA HAI THÀNH PHỐ TẠI HỘI TRƯỜNG THỐNG NHẤT
                </span>
              </li>

              <li className='pt-4 flex '>
                <img className='self-start' style={{marginTop:'5px', paddingRight: '7px'}} src={Iconarrow} alt="icon-arrow" />
                <span>
                  THÚ VỊ GIỜ HỌC NGOẠI KHOÁ CỦA HỌC SINH TRƯỜNG THCS MINH ĐỨC TẠI DI TÍCH LỊCH SỬ DINH ĐỘC LẬP
                </span>
              </li>

              <li className='pt-4 flex '>
                <img className='self-start' style={{marginTop:'5px', paddingRight: '7px'}} src={Iconarrow} alt="icon-arrow" />
                <span>
                  SÔI NỔI KHỞI ĐỘNG CHƯƠNG TRÌNH GIÁO DỤC KHÁM PHÁ DI SẢN TẠI DI TÍCH LỊCH SỬ DINH ĐỘC LẬP
                </span>
              </li>

              <li className='pt-4 flex '>
                <img className='self-start' style={{marginTop:'5px', paddingRight: '7px'}} src={Iconarrow} alt="icon-arrow" />
                <span>
                  SỰ KIỆN THƯỜNG NIÊN NGHỆ THUẬT TASTE OF SAIGON BY ARTLIVE ĐƯỢC TỔ CHỨC TẠI DI TÍCH LỊCH SỬ DINH ĐỘC LẬP
                </span>
              </li>

              <li className='pt-4 flex '>
                <img className='self-start' style={{marginTop:'5px', paddingRight: '7px'}} src={Iconarrow} alt="icon-arrow" />
                <span>
                  CHUYẾN XE TỰ HÀO VIETPRIDE 2023 TẠI DI TÍCH LỊCH SỬ DINH ĐỘC LẬP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 p-4 max-w-[70%] bg-white">
          <div className='p-4'>
            Dinh Độc Lập được công nhận là Di tích lịch sử văn hóa quốc gia bằng Quyết định số 77A/VHQĐ ngày 25/6/1976 của Bộ trưởng Bộ Văn hóa. Ngày 12 tháng 8 năm 2009, Thủ tướng Chính phủ nước Cộng hòa Xã hội Chủ nghĩa Việt Nam đã ký Quyết định số 1272/QĐ-TTg xếp hạng Di tích lịch sử Dinh Độc Lập là một trong 10 di tích quốc gia đặc biệt đầu tiên của cả nước.
            <br />
            Cơ quan quản lý Di tích lịch sử Dinh Độc Lập là Hội trường Thống Nhất. Căn cứ Quyết định số 709/QĐ-VPCP ngày 14 tháng 6 năm 2013 của Bộ trưởng, Chủ nhiệm Văn phòng Chính phủ qui định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Hội trường Thống Nhất, thì Hội trường Thống Nhất là đơn vị sự nghiệp công lập thuộc Văn phòng Chính phủ có chức năng quản lý, bảo tồn, tôn tạo Di tích lịch sử Dinh Độc Lập; phục vụ đại biểu, khách tham dự các cuộc họp, hội nghị của Chính phủ, Thủ tướng Chính phủ và Văn phòng Chính phủ; các hội nghị và hoạt động khác của Đảng, Nhà nước, Quốc hội khi có yêu cầu; được tận dụng cơ sở vật chất, lao động để kinh doanh dịch vụ theo qui định của pháp luật.
            <br />
            <div>
              <h2>Danh sách các phòng:</h2>
              <ul>
                <li>Phòng Nghiệp vụ Thuyết minh</li>
                <li>Phòng Kế hoạch Tài vụ</li>
                <li>Phòng Bảo vệ</li>
                <li>Phòng Hành chính Tổ chức</li>
                <li>Phòng Quản trị</li>
              </ul>
              <h2>Địa chỉ Nhà khách:</h2>
              <ul>
                <li>Nhà khách 108 Nguyễn Du, quận 1, thành phố Hồ Chí Minh</li>
                <li>Nhà khách 17 Thùy Vân, thành phố Vũng Tàu, tỉnh Bà Rịa – Vũng Tàu</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-center font-bold text-[30px] text-red-700'>ĐANG UPDATE</h1>
    </div>
  )
}

export default Introduction
