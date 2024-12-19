describe('Authentications Types', () => {
    const authToken = ''
    it('Bearer Authentication', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
            },
 
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})