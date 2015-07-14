let { PORT, MONGODB, ASSETS, JWT_KEY, STRIPE_SK } = process.env

import jwt from 'koa-jwt'
import monk from 'monk'
import wrap from 'co-monk'
import createPswd from 'pswd'
import joi from 'joi'

let db = monk(process.env.MONGODB)
let usersDb = wrap(db.get('users'))
let pswd = createPswd()

function* sign(next) {
  yield next;
  this.body.token = jwt.sign(this.body, JWT_KEY, { expiresInMinutes: 60 * 5 })
}

let login = {
  method: 'post',
  path: '/login',
  validate: {
    body: {
      email: joi.string().lowercase().email(),
      password: joi.string().max(100)
    },
    type: 'json'
  },
  handler: [sign, function* () {
    let { email, password } = this.request.body

    let user = yield usersDb.findOne({ email })
    this.assert(user, 401, 'Incorrect Email or Password')

    let valid = yield pswd.compare(password, user.password)
    this.assert(valid, 401, 'Incorrect Email or Password')
    delete user.password

    this.body = {
      user
    }
  }]
}

let register = {
  method: 'post',
  path: '/register',
  validate: {
    body: {
      email: joi.string().lowercase().email(),
      password: joi.string().max(100)
    },
    type: 'json'
  },
  handler: [sign, function* () {
    let { email, password } = this.request.body

    let duplicate = yield usersDb.findOne({ email })
    this.assert(!duplicate, 400, 'Klouds ID already exists')

    let hash = yield pswd.hash(password)
    this.assert(hash, 500, 'Failed to hash password')

    let user = yield usersDb.insert({
      email,
      password: hash
    })
    this.assert(user, 500, 'Failed to insert new user')
    delete user.password

    this.body = {
      user
    }
  }]
}

export default { login, register }