const chai = require('chai');
const spies = require('chai-spies');
const { expect } = chai;
const { vehicleValidateCreate } = require('../../../src/presentation/validators/vehicleVaidator');

chai.use(spies);

describe('vehicleValidateCreate', () => {
  let req, res, nextSpy;

  beforeEach(() => {
    req = {
      body: {
        licensePlate: 'ABC1234',
        chassis: '1234567890',
        renavam: '9876543210',
        model: 'Model X',
        brand: 'Brand Y',
        year: 2021
      }
    };
    res = {};
    nextSpy = chai.spy();
  });

  it('should call next when the validation passes', () => {
    vehicleValidateCreate(req, res, nextSpy);

    expect(nextSpy).to.have.been.called();
    expect(req.vehicleValidate).to.deep.equal(req.body);
  });

  it('should throw an error when the validation fails', () => {
    req.body = {
      licensePlate: 'ABC1234',
      chassis: '1234567890',
      model: 'Model X',
      brand: 'Brand Y',
      year: 2021
    };

     try {
      vehicleValidateCreate(req, res, nextSpy);

     } catch (error) {
      expect(error.status).to.be.eq(400);
      expect(error.message).to.be.eq('"renavam" is required');
     }

     expect(nextSpy).to.not.have.been.called();
  });
});
