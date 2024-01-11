import { billionaire } from "../beans/billionaire";

export class DatabaseDao{
    async postMethod(body: billionaire){
        try {
            //@TODO post to db
            return body
        } catch (error) {
            throw "dao" + error
        }
    }
}