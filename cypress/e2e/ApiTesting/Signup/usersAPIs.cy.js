
describe('users', () => {
   
    const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODc3OCwiZXhwIjoxNzMzMzUzMzQyfQ.eb4ZBA9RE_rPtl01q96yR5IWNdLjkOBs48PnnjplaCw'
   const edenURL = 'https://bluepalm.xyz/api/v1';
   
     it('GET show user', () => {
       cy.request({
         method: 'GET',
         url: `${edenURL}/users/10214`,
         headers: {
           "AUTH-TOKEN": authToken,
       },
     }).then((response) => {
       expect(response.status).to.eq(200);
     })
    })

 it('Post  Read user ', () => {
        cy.request({
          method: 'POST',
          url: `${edenURL}/users/10214/read`,
          headers: {
            "AUTH-TOKEN": authToken,
            'Content-Type': 'application/json'
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      })   
    }) 

    it('GET User Share ', () => {
               cy.request({
                 method: 'GET',
                 url: `${edenURL}/users/10214/user_shares`,
                 headers: {
                   "AUTH-TOKEN": authToken,
               },
           qs: { 
                  per_page: 5,
                  page: 1
              } 
             }).then((response) => {
                expect(response.status).to.eq(200);

                
              });
            })
        })
