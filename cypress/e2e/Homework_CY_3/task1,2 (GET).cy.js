describe ('GET requests test',() => {
    it('GET post by ID',()=>{

        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
          }).as('getResponse');
          
          cy.get('@getResponse').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body.id).to.eq(1);
            expect(response.body.userId).to.eq(1);
           
          });
    });

    it('GET posts array', () => {

        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
          expect(response.status).to.eq(200);
        //   expect(response.body).to.have.lengthOf.above(0);

        response.body.forEach((body) => {
            expect(body).to.have.property('userId');
            expect(body).to.have.property('id');
            expect(body).to.have.property('title');
            expect(body).to.have.property('body');
          });
        });
      });


});