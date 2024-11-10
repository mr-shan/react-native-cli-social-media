export type ColorType = {
  text100: string;
  text300: string;
  text500: string;
  text700: string;
  textInactive: string;

  bg300: string;
  bg500: string;
  bg700: string;
  bg900: string;

  primary300: string;
  primary500: string;
  primary700: string;

  secondary300: string;
  secondary500: string;
  secondary700: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  profileColor: string;
  avatar: string;
}

export type Story = {
  id: string;
  userId: string;
  picture: string;
  dateCreated: Date;
}

export type Post = {
  id: string;
  userId: string;
  picture: string;
  likes: number;
  comments: string[];
  saves: number;
  location: string;
  dateCreated: Date;
}
