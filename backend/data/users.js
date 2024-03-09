import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'test@gmail.com',
    password: bcrypt.hashSync('65432', 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users