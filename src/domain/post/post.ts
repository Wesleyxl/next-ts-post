export type AuthorType = {
  id: number;
  url: string;
  name: string;
  image: string;
};

export type CommentsType = {
  id: number;
  user_id: number;
  publication_id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: AuthorType;
};

export type PostType = {
  id: number;
  user_id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  user: AuthorType;
  comments: CommentsType[];
};
