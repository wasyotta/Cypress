var faker = require('faker')
var cpf = require('gerador-validador-cpf')



export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
     
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            phone: '11940398649',
            address: {
                postalcode: '06411150',
                street: 'Rua Campos Sales',
                number: '1618',
                details: 'casa',
                district: 'Vila Boa Vista',
                city_state: 'Barueri/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}