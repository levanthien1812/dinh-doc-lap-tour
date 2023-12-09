import React from 'react'
import Logo from '../../assets/images/logo.svg'
import IconFacebook from '../../assets/images/ic-facebook.svg'
import IconTwitter from '../../assets/images/ic-twitter.svg'
import IconInstagram from '../../assets/images/ic-instagram.svg'

const Footer = () => {
  return (
    <footer className="bg-[#123858] text-white dark:bg-gray-900">
      <div className="position-static bottom-0 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src={Logo} className="mr-3 h-12 sm:h-20" alt="DinhDocLap Logo" />
              </a>
            </div>
            <div className="gap-8 sm:gap-6 flex">
              <h2 className="mb-6 text-md font-semibold text-[#FFFFFF] uppercase dark:text-white">THEO DÕI CHÚNG TÔI</h2>
              <ul className="text-[#FFFFFF] font-medium flex">
                <li className='px-3'>
                  <img src={IconFacebook} alt="IconFacebook" />
                </li>
                <li className='px-3'>
                  <img src={IconTwitter} alt="IconTwitter" />
                </li>
                <li className='px-3'>
                  <img src={IconInstagram} alt="IconInstagram" />
                </li>
              </ul>
            </div>
        </div>
        <div className='flex justify-between'>
          <h3 className='text-justify pt-5 text-[#FFFFFF]'>
            135 Nam Kỳ Khởi Nghĩa, quận 1, TP.HCM
            <br />
            Khu phố 6, phường Linh Trung, Thủ Đức
            <br />
            Điện thoại: 0123456789
          </h3>
          <div style={{width:'60%'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447541537996!2d106.69272181098657!3d10.776994189327453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f385570472f%3A0x1787491df0ed8d6a!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2s!4v1702112247214!5m2!1svi!2s" 
              width="100%" 
              height="250" 
              style={{ border: "0" }}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 copy right.
          </span>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
