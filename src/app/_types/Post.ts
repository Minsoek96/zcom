import { User } from './User';

// eslint-disable-next-line import/no-cycle
import { PostImage } from './PostImage';

export type Post = {
  postId: number;
  User: User;
  content: string;
  createdAt: Date;
  Images: PostImage[]
}
