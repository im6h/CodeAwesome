/***
 *
 *  class PostController relate post
 *  create post
 *  update post
 *  delete post
 *  get detail post
 *  get all post
 *
 * ***/

// require module and model
import { Request, Response } from 'express';
import Post from '../models/Post';
import logger from '../logs/Logger';

// create class
class PostController {
  constructor() {}

  // get all posts
  async getPosts(request: Request, response: Response): Promise<void> {
    try {
      const posts = await Post.find({});
      if (posts) {
        if (posts.length > 0) {
          response.status(200).json(logger.logSuccess(posts));
        } else {
          response.status(200).json(logger.logSuccess('No record'));
        }
      }
    } catch (error) {
      response.status(405).json(logger.logError(error));
    }
  }

  // get post by id
  async getPost(request: Request, response: Response): Promise<void> {
    try {
      const post = await Post.findOne({ _id: request.params.id });
      if (post) {
        response.status(200).json(logger.logSuccess(post));
      } else {
        response.status(404).json(logger.logError('Not found'));
      }
    } catch (error) {
      response.status(405).json(logger.logError(error));
    }
  }

  // create post
  async createPost(request: Request, response: Response): Promise<void> {
    try {
      let post = new Post(request.body);
      post
        .save()
        .then(res => {
          response.status(200).json(logger.logSuccess(res));
        })
        .catch(error => {
          response.status(400).json(logger.logError(error));
        });
    } catch (error) {
      response.status(405).json(logger.logError(error));
    }
  }

  // update post by id
  async updatePost(request: Request, response: Response): Promise<void> {
    try {
      let post = await Post.findOne({ _id: request.params['id'] });
      if (post) {
        let id: string = request.params['id'];
        let body = request.body;
        Post.findByIdAndUpdate(id, body)
          .then(res => {
            response.status(200).json(logger.logSuccess(res));
          })
          .catch(err => response.status(400).json(logger.logError(err)));
      } else {
        response.status(404).json(logger.logError('Not found post'));
      }
    } catch (e) {
      response.status(405).json(logger.logError(e));
    }
  }

  // delete post by id
  async deletePost(request: Request, response: Response): Promise<void> {
    try {
      const post = await Post.findOne({ _id: request.params.id });
      if (post) {
        post
          .remove()
          .then(() => {
            response.status(200).json(logger.logSuccess('Deleted post'));
          })
          .catch(error => {
            response.status(400).json(logger.logError(error));
          });
      } else {
        response.status(404).json(logger.logError('Not found record'));
      }
    } catch (error) {
      response.status(405).json(logger.logError(error));
    }
  }
}
// create new instance
const postController = new PostController();

// export instance
export default postController;
