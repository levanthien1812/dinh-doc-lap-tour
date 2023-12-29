import React, { useState, useEffect } from "react";
import dinhDocLapImg from "./../../assets/images/dinh-doc-lap.jpg";
import style from "./BookTicketDetailStyle.module.css";
import axios from "axios"; // Thêm thư viện axios
import cookie from "js-cookie";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

function BookTicketDetailPage() {
  const [formData, setFormData] = useState({
    id: 0,
    mave: "",
    bookingDate: new Date(),
    venguoilon: 0,
    vetreem: 0,
    status: 0,
    treemPrice: 0,
    nguoilonPrice: 0,
  });

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  console.log(user)

  useEffect(() => {
    if (!Cookies.get("user")) {
      navigate("/dang-nhap");
    } else {
      setUser(JSON.parse(Cookies.get("user")));
    }
  }, []);

  const bookingId = JSON.parse(Cookies.get("bookingId"));

  const fetchData = () => {
    axios
      .get(`http://localhost:9090/api/bookings/${bookingId}`)
      .then((response) => {
        let vetrememQuantity = 0;
        let venguoilonQuantity = 0;
        let treemPrice = 0;
        let nguoilonPrice = 0;

        response.data.bookingDetails.forEach((detail) => {
          const { type } = detail.ticket;
          const quantity = detail.quantity;
          const price = detail.ticket.price;

          if (type === "Trẻ em") {
            vetrememQuantity += quantity;
            treemPrice += price * quantity;
          } else if (type === "Người lớn") {
            venguoilonQuantity += quantity;
            nguoilonPrice += price * quantity;
          }
        });
        cookie.set("totalPrice", (treemPrice + nguoilonPrice).toString());
        setFormData({
          ...response.data,
          vetreem: vetrememQuantity, // Initialize vetreem
          venguoilon: venguoilonQuantity,
          treemPrice: treemPrice,
          nguoilonPrice: nguoilonPrice,
          bookingDate: new Date(response.data.bookingDate), // Convert to Date object
        });
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu từ API:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // Passing an empty dependency array

  return (
    <div className={`${style.flex} ${style.container} ${style.w_100}`}>
      <div className={`${style.grid} ${style.col_5} py-8 px-8 ${style.mt_10}`}>
        <h1 className={`${style.dark} ${style.semi_b} ${style.fs_35}`}>
          DI TÍCH LỊCH SỬ
        </h1>
        <h2 className={`${style.yellow} ${style.semi_b} ${style.fs_60}`}>
          DINH ĐỘC LẬP
        </h2>
        <h1 className={`${style.dark} ${style.semi_b} ${style.fs_35}`}>
          THE INDEPENDENCE PALACE
        </h1>
        <div className={`${style.flex} ${style.justify_center}`}>
          <img src={dinhDocLapImg} alt="" width={500} />
        </div>
      </div>
      <div
        className={`${style.grid} ${style.col_7} py-8 px-8 ${style.info_card}`}
      >
        <ul className={`${style.bg_blue} py-8 px-8`}>
          <li>Mã đặt vé: {formData.id}</li>
          <li>
            Ngày đặt:{" "}
            <span>{formData.bookingDate?.toLocaleDateString("vi-VN")}</span>
          </li>
          <li>Thông tin khách hàng:</li>
          <div className={`${style.client_info}`}>
            <div className={`${style.flex} justify-between`}>
              <div className={`${style.unset_p} ${style.dark_blue}`}>
                Họ và tên: <span>{user?.name}</span>
              </div>
              <div className={`w-1\/4 ${style.unset_p} ${style.dark_blue}`}>
                ID: <span>{user?.id}</span>
              </div>
            </div>
            <div className={`${style.dark_blue}`}>
              SĐT: <span>{user?.phone}</span>
            </div>
            <div className={`${style.dark_blue}`}>
              Email: <span>{user?.email}</span>
            </div>
          </div>
          <li>
            Số lượng mỗi loại vé:{" "}
            <span>
              Người lớn - {formData.venguoilon}, Trẻ em - {formData.vetreem}
            </span>
          </li>
          <li>
            Tổng tiền từng loại vé:{" "}
            <span>
              Người lớn - {formData.nguoilonPrice}đ, Trẻ em -{" "}
              {formData.treemPrice}đ
            </span>
          </li>
          <li>
            Tổng số lượng vé:{" "}
            <span>{formData.venguoilon + formData.vetreem}</span>
          </li>
          <li>
            Tổng tiền:{" "}
            <span>
              {(
                formData.nguoilonPrice * formData.venguoilon +
                formData.treemPrice * formData.vetreem
              ).toLocaleString()}
              đ
            </span>
          </li>
          <li>
            Trạng thái đặt vé:{" "}
            <span className={`${style.green}`}>
              {formData.status === 0 ? "Đã duyệt" : "Chờ duyệt"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BookTicketDetailPage;
