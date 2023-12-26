import instance, { notAuthInstance } from "../config/axiosConfig";

export default class BookingService {
    static async booking(data) {
        const response = await notAuthInstance.post("/bookings/book", data);

        return response.data;
    }
}
