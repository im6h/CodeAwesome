// require module and model
import { Request, Response } from 'express';
import Post from '../models/Post';
import logger from '../Logs/Logger';

// create class
class PostController {
  constructor() {}

  // get all posts
  async getPosts(request: Request, response: Response): Promise<void> {
    const posts = await Post.find({});
    if (posts) {
      if (posts.length > 0) {
        response.status(200).json(logger.logSuccess(posts));
      } else {
        response.status(200).json(logger.logSuccess('No record'));
      }
    } else {
      response.status(405).json(logger.logError('Have an error'));
    }
  }

  // get post by id
  async getPost(request: Request, response: Response): Promise<void> {
    const post = await Post.findOne({ _id: request.params.id });
    if (post) {
      response.status(200).json(logger.logSuccess(post));
    } else {
      response.status(404).json(logger.logError('Not found'));
    }
  }

  // create post
  async createPost(request: Request, response: Response): Promise<void> {
    const post = new Post(request.body);
    post
      .save()
      .then(post => {
        response.status(200).json(logger.logSuccess(post));
      })
      .catch(error => {
        response.status(405).json(logger.logError(error));
      });
  }

  // update post by id
  async updatePost(request: Request, response: Response): Promise<void> {
    try {
      let id: string = request.params['id'];
      let body = request.body;
      Post.findByIdAndUpdate(id, body)
        .then(res => {
          response.status(200).json(logger.logSuccess(res));
        })
        .catch(err => response.status(201).json(logger.logError(err)));
    } catch (e) {
      response.status(405).json(logger.logError(e));
    }
  }

  // delete post by id
  async deletePost(request: Request, response: Response): Promise<void> {
    const post = Post.findOne({ _id: request.params.id });
    if (post) {
      post
        .remove()
        .then(() => {
          response.status(200).json(logger.logSuccess('Deleted post'));
        })
        .catch(error => {
          response.status(405).json(logger.logError(error));
        });
    }
  }
}
// create new instance
const postController = new PostController();

// export instance
export default postController;
