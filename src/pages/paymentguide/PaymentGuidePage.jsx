import React from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "./../../assets/images/angle-left-solid.svg";
import momo from "./../../assets/images/momo.png";
import style from "./../bookticketdetail/BookTicketDetailStyle.module.css";

function PaymentGuidePage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Go back to the previous page
    navigate(-1);
  };

  const handleContinueClick = () => {
    // Redirect to "/thanhtoan" when the button is clicked
    navigate("/thanhtoan");
  };

  return (
    <div className={`${style.container} ${style.w_100} ${style.bg_gray}`}>
      <button
        className={`${style.flex} px-8 py-8 ${style.align_center} ${style.fs_15} ${style.l}`}
        onClick={handleBackClick}
      >
        <img src={backIcon} alt="" className={"px-2"} />
        Back
      </button>
      <div className={`px-16`}>
        <div className={`${style.flex} px-16 py-8 align-center fs-22 b`}>
          <img src={momo} alt="" className={`${style.pr_8}`} />
          Thanh toán bằng ứng dụng Momo
        </div>
        <div className={`${style.grid} px-16 py-8`}>
          <div className={`${style.bg_white} px-16 py-8 fs-18`}>
            <div className={`${style.b} py-16 mt-8`}>Hướng dẫn thanh toán</div>
            <div>
              <ol>
                <li>
                  1. Quý khách sẽ được chuyển sang cổng thanh toán Momo và nhận
                  mã QR Code tương ứng với vé đặt của bạn.
                </li>
                <li>
                  2. Mở ứng dụng Momo và chọn “QUÉT MÃ” để tiến hành thanh toán.
                </li>
                <li>
                  3. Hoàn thành thanh toán theo hướng dẫn trong vòng 10 phút kể
                  từ lúc đặt vé. Sau thời gian này, vé chưa thanh toán sẽ tự
                  động huỷ.
                </li>
                <li>
                  4. Sau khi thanh toán thành công, bạn sẽ nhận được mã vé điện
                  tử qua tin nhắn và email.
                </li>
              </ol>
            </div>
            <div className="">
              <i>
                Chúng tôi sẽ kiểm tra và tiến hành xác nhận trạng thái của bạn
                trong vòng 24h. Hãy theo dõi ở trang{" "}
                <a href="/chitiet-datve">chi tiết đặt vé</a>
              </i>
            </div>
            <button
              className={`${style.btn_next} mt-8`}
              onClick={handleContinueClick}
            >
              Tiếp tục
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGuidePage;
