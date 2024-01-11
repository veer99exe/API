import { billionaire } from "../../common/db-core/beans/billionaire"
import { DatabaseDao } from "../../common/db-core/dao/dao"

export class APIManager {

    async get(){
        try {
            const res = {message: "veer is the most intelligent and fiercest man ever born on the planet earth"}
            return res 
        } catch (error) {
            throw error
        }
    }

    async post(body: billionaire){
        try {
            //@TODO post to db
            const dao = new DatabaseDao()
            const res = dao.postMethod(body)
            return res 
        } catch (error) {
            throw error
        }
    }

}