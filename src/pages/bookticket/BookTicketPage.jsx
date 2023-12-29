import React, { useEffect, useState } from "react";
import ChooseQuantity from "./components/ChooseQuantity";
import { ADULT_PRICE, CHILDREN_PRICE } from "../../config/constants";
import dinhDocLapImg from "./../../assets/images/dinh-doc-lap.jpg";
import format from "date-fns/format";
import BookingService from "../../services/bookingService";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

function BookTicketPage() {
  const [date, setDate] = useState(new Date());
  const [childQuantity, setChildQuantity] = useState(1);
  const [adultQuantity, setAdultQuantity] = useState(1);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!Cookies.get("user")) {
      navigate("/dang-nhap");
    } else {
      setUser(JSON.parse(Cookies.get("user") || null));
    }
  }, []);

  const handleBooking = async () => {
    const bookingData = {
      touringDate: format(new Date(), "yyyy-MM-dd"),
      quantity: childQuantity + adultQuantity,
      totalPrice: childQuantity * CHILDREN_PRICE + adultQuantity * ADULT_PRICE,
      bookingDetails: [
        {
          ticketId: 1,
          quantity: adultQuantity,
          totalPrice: adultQuantity * ADULT_PRICE,
        },
        {
          ticketId: 2,
          quantity: childQuantity,
          totalPrice: childQuantity * CHILDREN_PRICE,
        },
      ],
    };

    try {
      const responseData = await BookingService.booking(user.id, bookingData);

      console.log(responseData);

      if (responseData) {
        Cookies.set("totalPrice", responseData.totalPrice);
        Cookies.set("bookingId", responseData.id);
        navigate("/huongdan-thanhtoan");
      } else {
        return alert(
          "Đăng vé không thành công! Vui lòng kiểm tra lại thông tin."
        );
      }
    } catch (error) {
      console.log(error);
      alert("Có lỗi xảy ra trong quá trình đặt vé!");
    }
  };

  const handleDateChange = (e) => {
    const chosenDate = e.target.value;

    if (new Date(chosenDate) <= new Date()) {
      alert("Vui lòng chọn ngày bắt đầu từ hôm nay!");
      setDate(new Date());
    } else {
      setDate(new Date(chosenDate));
    }
  };

  return (
    <div className="py-8 2xl:px-64 xl:px-32 bg-slate-100 h-screen">
      <h1 className="text-[48px]">Thông tin đặt vé</h1>
      <p className="text-[#7d7171] mt-4">
        Lưu ý: Vé Dinh Độc Lập không hoàn, không hủy vì vậy Quý khách vui lòng
        kiểm tra kỹ thông tin trước khi đặt vé, thanh toán.
      </p>
      <div className="flex gap-12 mt-8">
        <div className="w-1/5">
          <label htmlFor="date" className="block font-bold">
            Chọn ngày
          </label>
          <input
            type="date"
            name="date"
            required
            value={format(date, "yyyy-MM-dd")}
            onChange={handleDateChange}
            className="block bg-white border px-6 py-2 rounded-md mt-2"
          />
        </div>
        <div className="grow">
          <div className="flex gap-12">
            <div className="flex flex-col gap-6 w-1/4">
              <p className="font-bold">Số lượng</p>
              <ChooseQuantity
                quantity={adultQuantity}
                setQuantity={setAdultQuantity}
              />
              <ChooseQuantity
                quantity={childQuantity}
                setQuantity={setChildQuantity}
              />
            </div>
            <div className="flex flex-col gap-6 w-1/4">
              <p className="font-bold">Loại vé</p>
              <p className="text-red-500">Vé dành cho người lớn</p>
              <p className="text-red-500">Vé dành cho trẻ em</p>
            </div>
            <div className="flex flex-col gap-6 w-1/4">
              <p className="font-bold">Thành tiền</p>
              <p>{ADULT_PRICE * adultQuantity} vnd</p>
              <p>{CHILDREN_PRICE * childQuantity} vnd</p>
            </div>
            <div className="w-1/4">
              <img
                src={dinhDocLapImg}
                alt=""
                width={200}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-10 mt-10">
            <button className="px-8 py-3 bg-red-500 rounded-md text-white">
              Tổng cộng:{" "}
              {ADULT_PRICE * adultQuantity + CHILDREN_PRICE * childQuantity} vnd
            </button>
            <p className="text-[#7d7171]">
              Mua vé Online để chủ động thời gian của bạn, và tiết kiệm thời
              gian chờ mua vé khi đến nơi trong những thời điểm đông khách.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="bg-[#fff0c9] px-8 py-6">
          <p className="text-black text-opacity-50">
            Người lớn: {ADULT_PRICE} vnđ / vé
          </p>
          <p className="text-black text-opacity-50">
            Trẻ em (dưới 12 tuổi): {CHILDREN_PRICE} vnđ / vé
          </p>
        </div>
        <div>
          <button
            className="bg-[#F1C40F] py-3 w-[200px] rounded-lg font-bold"
            onClick={handleBooking}
          >
            Đặt vé
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookTicketPage;
