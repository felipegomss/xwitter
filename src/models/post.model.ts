export interface Post {
  id: number;
  name: string;
  username: string;
  avatar: string;
  content: string;
  image?: string;
  created_at: Date;
  likes: number;
  shares: number;
  comments: number;
}
