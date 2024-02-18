import _ from 'underscore'
 
exports.customer = {

    name: 'Nikki Sixx',
    email: 'sixx@motleycrue.com',
    password: '123456',
    is_provider: false

}

exports.provider = {

    name: 'Ramon Valdez',
    email: 'ramon@madruga.com',
    password: '123456',
    is_provider: true
}

exports.appointment = {

    hour: _.sample(['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'])
}
