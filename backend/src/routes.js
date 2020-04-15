const express = require('express');
const jwt = require('jsonwebtoken');
const faker = require('faker/locale/pt_BR');

const authMiddleware = require('./auth');

const router = express.Router();

const data = [
  {
      id: faker.random.number(999999),
      profile: 'admin',
      status: 'active',
      name: faker.name.findName(),
      jobDescription: faker.name.jobDescriptor(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      userName: 'brunoBrian',
      password: '123456'
  },
  {
      id: faker.random.number(999999),
      profile: 'manager',
      status: 'active',
      name: faker.name.findName(),
      jobDescription: faker.name.jobDescriptor(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      userName: 'franSales',
      password: '123456'
  },
  {
      id: faker.random.number(999999),
      profile: 'salesman',
      status: 'active',
      name: faker.name.findName(),
      jobDescription: faker.name.jobDescriptor(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      userName: 'adrianaSousa',
      password: '123456'
  },
  {
      id: faker.random.number(999999),
      profile: 'owner',
      status: 'active',
      name: faker.name.findName(),
      jobDescription: faker.name.jobDescriptor(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      userName: 'gjSousa',
      password: '123456'
  }
];

router.get('/authenticate', (req, res) => {
  const {user, password} = req.query;
  const userData = data.filter(e => e.userName === user && e.password === password);

  return res.json(
    userData.length ? {
      userData,
      token: jwt.sign(user, 'PRIVATEKEY')}
    :
    { error: 'Usuário e/ou senha inválidos'}
  );
});

/**
 * Private route
 */
router.use(authMiddleware);

router.get('/users', async (req, res) => {
  return res.json(data);
});

module.exports = router;
