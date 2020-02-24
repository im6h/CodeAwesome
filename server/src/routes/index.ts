// require module and controller
import postController from '../controllers/PostController';
import commentController from '../controllers/CommentController';
import fileController from '../controllers/FileController';
import multer from 'multer';

// config multer
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './src/uploads/');
  },
  filename: function(req, file, callback) {
    callback(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

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

  // router for handle file
  public fileRouter(app: any): void {
    app
      .route('/v1/file')
      .post(upload.single('image'), fileController.uploadFile);
  }
}

// create new instance
const router = new Router();

// export instance
export default router;
