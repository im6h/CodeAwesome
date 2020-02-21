// require module
import mongoose from 'mongoose';

// init schema
const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: [
      {
        type: String,
      },
    ],
    like: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comment',
      },
    ],
  },
  { timestamps: true }
);
const Post = mongoose.model('post', PostSchema);

// export model
export default Post;
