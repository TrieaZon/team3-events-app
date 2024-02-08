import bcrypt from 'bycryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@events.com',
    password: bcrypt.hashSync("0123"),
    isAdmin: true,
    isOrganizer: false,
  },
  {
    name: 'Ted L',
    email: 'tedl@gmail.com',
    password: bcrypt.hashSync("1123"),
    isAdmin: false,
    isOrganizer: false,
  },
  {
    name: 'Roy R',
    email: 'royr@gmail.com',
    password: bcrypt.hashSync("2123"),
    isAdmin: false,
    isOrganizer: true,
  },

]