import instance, { notAuthInstance } from "../config/axiosConfig";

export default class BookingService {
    static async booking(userId, data) {
        const response = await notAuthInstance.post("/bookings/" + userId + "/create", data);

        return response.data;
    }
}
