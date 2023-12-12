import React, { useState, useEffect } from "react";
import dinhDocLapImg from "./../../assets/images/dinh-doc-lap.jpg";
import "./BookTicketDetailStyle.css";

function BookTicketDetailPage() {
  const [formData, setFormData] = useState({
        mave: "YYSDKSADLASHD",
        date: "04/10/2023",
        name: "Trần Quốc Anh",
        phone: "0169287165",
        id: "041002",
        email: "dqt096@gmail.com",
        venguoilon: 2,
        vetreem: 3,
        status: "Đã Duyệt",
      });

  useEffect(() => {
    try {
      // const response = await fetch("/api/users/new", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      // });

      // if (!response.ok) {
      //   const { message } = await response.json();
      //   toast.error(message);
      //   return;
      // }
    } catch (error) {
      console.log(error);
      // Handle the error here, e.g., show an error message
    }
  });

  return (
    <div className="flex w-full container">
      <div className="grid col-5 py-8 px-8 mt-10">
        <h1 className="dark semi-b fs-35">DI TÍCH LỊCH SỬ</h1>
        <h2 className="yellow semi-b fs-60">DINH ĐỘC LẬP</h2>
        <h1 className="dark semi-b fs-35">THE INDEPENDENCE PALACE</h1>
        <div className="flex justify-center">
          <img src={dinhDocLapImg} alt="" width={500} />
        </div>
      </div>
      <div className="grid col-7 py-8 px-8 info-card">
        <ul className="bg-blue py-8 px-8">
          <li>Mã đặt vé: {formData.mave}</li>
          <li>
            Ngày đặt: <span>{formData.date}</span>
          </li>
          <li>Thông tin khách hàng:</li>
          <div className="client-info">
          <div className="flex justify-between">
            <div className="unset-p dark-blue">
              Họ và tên: <span>{formData.name}</span>
            </div>
            <div className="w-1/5 unset-p dark-blue">
              ID: <span>{formData.id}</span>
            </div>
          </div>
          <div className="dark-blue">
            SĐT: <span>{formData.phone}</span>
          </div>
          <div className="dark-blue">
            Email: <span>{formData.email}</span>
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
            <span>Người lớn - {(formData.venguoilon * 65000).toLocaleString()}đ, Trẻ em - {(formData.vetreem * 15000).toLocaleString()}đ</span>
          </li>
          <li>
            Tổng số lượng vé:{" "}
            <span>{formData.venguoilon + formData.vetreem}</span>
          </li>
          <li>
            Tổng tiền: <span>{((formData.venguoilon * 65000) + (formData.vetreem * 15000)).toLocaleString()}đ</span>
          </li>
          <li>
            Trạng thái đặt vé: <span className="green">{formData.status}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BookTicketDetailPage;
