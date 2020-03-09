// require modules axios
import axios from 'axios';

const url: string = 'http://localhost:3000/v1/api';

// create class
class ApiConfig {
  constructor() {}

  /*
   *  get news in hot-new
   * */
  public async getHotNews() {
    return axios.get(`${url}/hot-new`);
  }
  /**
   * create new post
   *
   */
  public async createPost(post: any) {
    return axios.post(`${url}/post`, post);
  }
  /**
   * get all post in database
   *
   */
  public async getAllPost() {
    return axios.get(`${url}/posts`);
  }
  /**
   * get detail post with id of post
   * @param id
   *
   */
  public async getDetailPost(id: number) {
    return axios.get(`${url}/post/${id}`);
  }
  /**
   * update post with id of post
   * @param id
   */
  public async updatePost(id: number) {
    return axios.put(`${url}/post/${id}`);
  }
  /**
   * delete post with id of post
   * @param id
   */
  public async deletePost(id: number) {
    return axios.delete(`${url}/post/${id}`);
  }
}

// creat instance
const apiConfig = new ApiConfig();

// export instance
export default apiConfig;
