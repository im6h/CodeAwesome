// require modules axios
import axios from 'axios';

const url: String = 'https://server-rss.herokuapp.com';

// create class
class ApiConfig {
  constructor() {}

  /*
   *  get news in hot-new
   * */
  public async getHotNews() {
    return axios.get(`${url}/hot-new`);
  }

  /*
   *  get news in sport-new
   * */
  public async getSportNew() {
    return axios.get(`${url}/sport-new`);
  }
}

// creat instance
const apiConfig = new ApiConfig();

// export instance
export default apiConfig;
