// adproducts.test.js

import { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { app } from '../server.js'; // Assurez-vous que le chemin vers server.js est correct

chai.use(chaiHttp);

describe('Adproducts Routes', () => {
    let request;
    let pool;

    beforeEach(() => {
        pool = {
            request: sinon.stub().returnsThis(),
            input: sinon.stub().returnsThis(),
            query: sinon.stub()
        };
        // Utilisation de chai.request sur l'application express pour les tests HTTP
        request = chai.request(app);
    });

    it('should add a product successfully', async () => {
        const product = { price: 100, stock: 10, description: 'test product', name: 'Product', number: '001' };
        
        // Simulation de la résolution de la requête SQL avec un stub
        pool.request().query.resolves({});

        // Envoi de la requête POST vers '/adproducts' avec le produit
        const res = await request.post('/adproducts').send(product);

        // Assertions sur la réponse HTTP
        expect(res).to.have.status(201);
        expect(res.text).to.equal('Produit ajouté avec succès');
    });

    // Ajoutez d'autres tests pour GET, PUT, DELETE ici
});
