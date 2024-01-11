import { billionaire } from "../../common/db-core/beans/billionaire";
import { APIManager } from "../manager/APIManager"


export class ApiHandler {

    async getMethodHandler() {
        try {
            const manager = new APIManager();
            return await manager.get()
        } catch (error) {
            throw error
        }
    }

    async postMethodHandler(body: billionaire){
        try {
            const manager = new APIManager();
            return await manager.post(body)
        } catch (error) {
            throw error
        }
    }
}