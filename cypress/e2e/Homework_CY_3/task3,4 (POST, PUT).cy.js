describe('Create and Update users', () => {
    it('Create user and check status code', () => {

      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {

        expect(response.status).to.equal(201); 
        expect(response.body).to.have.property('title', 'foo');
        expect(response.body).to.have.property('body', 'bar');
        expect(response.body).to.have.property('userId', 1);
  
        
      });
    });

    it('Update user and check status code', ()=>{
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
              id: 1,
              title: 'foo',
              body: 'bar',
              userId: 1,
            },
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then((response) => {
            
            expect(response.status).to.equal(200);
                       
            expect(response.body).to.deep.equal({
              id: 1,
              title: 'foo',
              body: 'bar',
              userId: 1,
            });
          });
    })

    

  });
  
