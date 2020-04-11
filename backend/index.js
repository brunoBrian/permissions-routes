const express = require('express');
const app = express();
const faker = require('faker/locale/pt_BR');
const cors = require('cors');

app.use(cors());
app.use(express.json());

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

app.get('/login', (req, res) => {
    const {user, password} = req.query;
    const userData = data.filter(e => e.userName === user && e.password === password);

    res.send(
        userData.length ?
            userData :
            { error: 'Usuário não encontrado'}
        )
})

app.listen(3000, () => {
  console.log('Server Started on port 3000');
});