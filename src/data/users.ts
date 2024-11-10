import {User} from '@app/utils/types';

export const USERS: User[] = [
  {
    id: '1',
    firstName: 'Alice',
    lastName: 'Johnson',
    dob: new Date('1992-04-15'),
    profileColor: '#FF5733',
    avatar: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a0',
  },
  {
    id: '2',
    firstName: 'Bob',
    lastName: 'Smith',
    dob: new Date('1985-09-22'),
    profileColor: '#33FF57',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
  {
    id: '3',
    firstName: 'Charlie',
    lastName: 'Davis',
    dob: new Date('1990-12-03'),
    profileColor: '#5733FF',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  },
  {
    id: '4',
    firstName: 'Diana',
    lastName: 'Lee',
    dob: new Date('1997-07-19'),
    profileColor: '#FF33AA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
  },
  {
    id: '5',
    firstName: 'Edward',
    lastName: 'Brown',
    dob: new Date('1988-11-05'),
    profileColor: '#33AAFF',
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
  },
  {
    id: '6',
    firstName: 'Fiona',
    lastName: 'Wilson',
    dob: new Date('1994-06-30'),
    profileColor: '#AAFF33',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
  {
    id: '7',
    firstName: 'George',
    lastName: 'Miller',
    dob: new Date('1983-03-10'),
    profileColor: '#33AABB',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    id: '8',
    firstName: 'Hannah',
    lastName: 'Garcia',
    dob: new Date('1996-08-25'),
    profileColor: '#FFAA33',
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
  },
  {
    id: '9',
    firstName: 'Ian',
    lastName: 'Thompson',
    dob: new Date('1991-01-17'),
    profileColor: '#AABB33',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
  },
  {
    id: '10',
    firstName: 'Jane',
    lastName: 'Martinez',
    dob: new Date('1989-05-28'),
    profileColor: '#33FFAA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: '11',
    firstName: 'Kevin',
    lastName: 'Scott',
    dob: new Date('1987-08-14'),
    profileColor: '#FFD700',
    avatar: 'https://images.unsplash.com/photo-1603415526960-f8f86d16d8c7',
  },
  {
    id: '12',
    firstName: 'Linda',
    lastName: 'Clark',
    dob: new Date('1993-02-28'),
    profileColor: '#8A2BE2',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
  },
  {
    id: '13',
    firstName: 'Michael',
    lastName: 'Walker',
    dob: new Date('1980-10-12'),
    profileColor: '#DC143C',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce',
  },
  {
    id: '14',
    firstName: 'Natalie',
    lastName: 'Lopez',
    dob: new Date('1995-11-11'),
    profileColor: '#FF6347',
    avatar: 'https://images.unsplash.com/photo-1600185365221-0f3f34e4b3c8',
  },
  {
    id: '15',
    firstName: 'Oscar',
    lastName: 'Martinez',
    dob: new Date('1984-06-20'),
    profileColor: '#4682B4',
    avatar: 'https://images.unsplash.com/photo-1603415526537-53baef6e5f8c',
  },
  {
    id: '16',
    firstName: 'Paula',
    lastName: 'Harris',
    dob: new Date('1998-09-05'),
    profileColor: '#32CD32',
    avatar: 'https://images.unsplash.com/photo-1530577197743-7adf14294584',
  },
  {
    id: '17',
    firstName: 'Quincy',
    lastName: 'Wright',
    dob: new Date('1986-01-22'),
    profileColor: '#FF4500',
    avatar: 'https://images.unsplash.com/photo-1563122874-3930a0bdf56b',
  },
  {
    id: '18',
    firstName: 'Rachel',
    lastName: 'Green',
    dob: new Date('1992-12-15'),
    profileColor: '#008080',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  },
  {
    id: '19',
    firstName: 'Samuel',
    lastName: 'Young',
    dob: new Date('1981-05-03'),
    profileColor: '#FF8C00',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: '20',
    firstName: 'Tina',
    lastName: 'Brown',
    dob: new Date('1990-07-17'),
    profileColor: '#20B2AA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
];

export const USERS_MAP = new Map<string, number>();
USERS.forEach((user: User, index: number) => USERS_MAP.set(user.id, index));

export const getUserById = (id: string) => {
  const userIndex = USERS_MAP.get(id);
  if (userIndex === undefined || userIndex > USERS.length) {
    return null;
  }
  return USERS[userIndex];
};
