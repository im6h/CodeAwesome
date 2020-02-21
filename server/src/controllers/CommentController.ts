// require module and model
import Comment from '../models/Comment';
import { Request, Response } from 'express';
import logger from '../Logs/Logger';
import Post from '../models/Post';

// init class
class CommentController {
  constructor() {}

  // get comments of post by id post
  public async getCommentsPost(
    request: Request,
    response: Response
  ): Promise<void> {
    const comments = await Comment.find({ post: request.params.id });
    if (comments) {
      if (comments.length > 0) {
        response.status(200).json(logger.logSuccess(comments));
      } else {
        response.status(200).json(logger.logSuccess('No comments'));
      }
    } else {
      response.status(405).json(logger.logError('Have an error'));
    }
  }

  // create comment on post by id post
  public async createCommentPost(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const comment = new Comment(request.body);
      comment
        .save()
        .then(async res => {
          let id = request.params['id'];
          await Post.findByIdAndUpdate(id, { $push: { comments: comment } });
          response.status(200).json(logger.logSuccess(res));
        })
        .catch(e => response.status(201).json(logger.logError(e)));
    } catch (e) {
      response.status(201).json(logger.logError(e));
    }
  }

  // delete comment on post by id comment
  public async deleteCommentPost(
    request: Request,
    response: Response
  ): Promise<void> {
    const comment = Comment.findOne({ _id: request.params.id });
    if (comment) {
      comment
        .remove()
        .then(() => response.status(200).json(logger.logSuccess('Deleted')))
        .catch(error =>
          response.status(405).json(logger.logError('Have an error'))
        );
    } else {
      response.status(405).json(logger.logError('Have an error'));
    }
  }
}

// create new instance
const commentController = new CommentController();

// export instance
export default commentController;
