describe('Authentications Types', () => {
    it('APIKey Authentication', () => {
           cy.request({
               method: 'GET',
               url: 'https://api.openweathermap.org/data/2.5/weather?q=Lahore',
               qs: {
                   appid: '1c6777583c6a91966e241a66b898a0a7',
               }
           }).then((response) => {
               expect(response.status).to.eq(200);
           });
       })
    
    
    })
    