// require module and controller
import postController from '../controllers/PostController';
import commentController from '../controllers/CommentController';

// create class
class Router {
  constructor() {}

  // router for post
  public postRouter(app: any): void {
    app.route('/v1/api/posts').get(postController.getPosts);
    app.route('/v1/api/post').post(postController.createPost);
    app
      .route('/v1/api/post/:id')
      .get(postController.getPost)
      .put(postController.updatePost)
      .delete(postController.deletePost);
    app
      .route('/v1/api/post/:id/comments')
      .get(commentController.getCommentsPost);
    app
      .route('/v1/api/post/:id/comment')
      .post(commentController.createCommentPost);
  }

  // router for comment
  public commentRouter(app: any): void {
    app
      .route('/v1/api/comment/:id')
      .delete(commentController.deleteCommentPost);
  }
}

// create new instance
const router = new Router();

// export instance
export default router;
