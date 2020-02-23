/***
 *
 * class CommentController relate comment
 * create comment
 * update comment
 * get all comment on post
 * get comment on post
 *
 * ***/

// require module and model
import Comment from '../models/Comment';
import { Request, Response } from 'express';
import logger from '../logs/Logger';
import Post from '../models/Post';

// init class
class CommentController {
  constructor() {}

  // get comments of post by id post
  public async getCommentsPost(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const comments = await Comment.find({ post: request.params.id });
      if (comments) {
        if (comments.length > 0) {
          response.status(200).json(logger.logSuccess(comments));
        } else {
          response.status(200).json(logger.logSuccess('No comments'));
        }
      }
    } catch (error) {
      response.status(405).json(logger.logError(error));
    }
  }

  // create comment on post by id post
  public async createCommentPost(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const post = await Post.findOne({ _id: request.params['id'] });
      if (post) {
        const comment = new Comment(request.body);
        comment
          .save()
          .then(async res => {
            let id = request.params['id'];
            await Post.findByIdAndUpdate(id, { $push: { comments: comment } });
            response.status(200).json(logger.logSuccess(res));
          })
          .catch(e => response.status(400).json(logger.logError(e)));
      } else {
        response.status(404).json(logger.logError('Not found post'));
      }
    } catch (e) {
      response.status(405).json(logger.logError(e));
    }
  }

  // delete comment on post by id comment
  public async deleteCommentPost(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const comment = Comment.findOne({ _id: request.params.id });
      if (comment) {
        comment
          .remove()
          .then(() => response.status(200).json(logger.logSuccess('Deleted')))
          .catch(error => response.status(400).json(logger.logError(error)));
      } else {
        response.status(404).json(logger.logError('Not found'));
      }
    } catch (error) {
      response.status(405).json(logger.logError(error));
    }
  }
}

// create new instance
const commentController = new CommentController();

// export instance
export default commentController;
