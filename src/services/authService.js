import instance, { notAuthInstance } from "../config/axiosConfig";

export default class AuthService {
    static async register(data) {
        const response = await notAuthInstance.post("/users", data);

        return response.data;
    }

    static async signin(data) {
        const response = await notAuthInstance.post("/users/signin", data);

        return response.data;
    }

    static async signinAdmin(data) {
        const response = await notAuthInstance.post("/users/signin?role=2", data);

        return response.data;
    }
}
