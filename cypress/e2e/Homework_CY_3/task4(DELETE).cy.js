describe ('Delete user', () => {

    it('Check the user was deleted', () => {
        
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1',
        }).then(response => {

            expect(response.status).to.equal(200);

        });
    });
});