// require module and controller
import postController from '../controllers/PostController';

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
  }
}
const router = new Router();
// export Router instance
export default router;
