// require module
import mongoose from 'mongoose';

// init schema
const Schema = mongoose.Schema;
const CommentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: 'post',
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model('comment', CommentSchema);

// export model
export default Comment;
