'use strict';
var chakram = require('chakram'),
    expect = chakram.expect;


describe('Zipcode Test', function() {

    it('Give a Zipcode must return the name of city', function() {
        var zipcode = '37170000'

        return chakram.get('https://viacep.com.br/ws/' + zipcode + '/json/')
            .then(function(response) {


                expect(response).to.have.status(200);
                expect(response.body.localidade).to.equal('Boa Esperança');
        });
    });
});
