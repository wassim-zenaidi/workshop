import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const sinon = require('sinon');
const server = require('../server');  // Assurez-vous que le chemin vers server.js est correct

const { expect } = await import('chai');
const chaiHttp = await import('chai-http');

expect.use(chaiHttp);

describe('Adproducts Routes', () => {
    let request;
    let pool;

    beforeEach(() => {
        pool = {
            request: sinon.stub().returnsThis(),
            input: sinon.stub().returnsThis(),
            query: sinon.stub()
        };
        request = expect.request(server);
    });

    it('should add a product successfully', async () => {
        const product = { price: 100, stock: 10, description: 'test product', name: 'Product', number: '001' };
        
        pool.request().query.resolves({});

        const res = await request.post('/adproducts').send(product);
        expect(res).to.have.status(201);
        expect(res.text).to.equal('Produit ajouté avec succès');
    });

    // Ajoutez d'autres tests pour GET, PUT, DELETE ici
});
