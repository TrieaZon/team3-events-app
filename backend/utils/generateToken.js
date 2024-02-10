import jwt from 'jsonwebtoken'
//https://www.npmjs.com/package/jsonwebtoken


const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, 
  {expiresIn: '15d'})
}
//env key

export default generateToken
