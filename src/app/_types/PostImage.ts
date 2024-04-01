// eslint-disable-next-line import/no-cycle
import { Post } from './Post';

export type PostImage = {
  link: string,
  imageId: number,
  Post?: Post
}
