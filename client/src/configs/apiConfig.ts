import axios from 'axios';
const url: String = 'https://server-rss.herokuapp.com';
class ApiConfig {
  constructor() {}
  public async getHotNews() {
    return axios.get(`${url}/hot-new`);
  }
  public async getSportNew() {
    return axios.get(`${url}/sport-new`);
  }
}
const apiConfig = new ApiConfig();
export default apiConfig;
