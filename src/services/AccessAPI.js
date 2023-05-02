import axios from "axios";
export class AccessAPI {
    static serverURL = `http://644fc336b61a9f0c4d2ab36a.mockapi.io/api/v1/users/`;
    static getAll(Id){
        let dataURL= `${this.serverURL}`;
        return axios.get(dataURL);
    }
    // static getDashboard(Id){
    //     let dataURL= `${this.serverURL}GetDashboardLandingData`;
    //     return axios.get(dataURL);
    // }
}