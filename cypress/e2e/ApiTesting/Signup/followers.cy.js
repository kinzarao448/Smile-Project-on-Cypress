

describe('Follow Users', () => {
   
    const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODc4MSwiZXhwIjoxNzMzNjgwNTEwfQ.jJnmyNR9poJIjx1R8E9k0ULKd3_qYT3PgbWRXmABeR8'
   const edenURL = 'https://bluepalm.xyz/api/v1';


   it('Post Follow user ', () => {
    cy.request({
      method: 'POST',
      url: `${edenURL}/users/28578/follow`,
      headers: {
        "AUTH-TOKEN": authToken,
        'Content-Type': 'application/json'
    },
  }).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('message', 'Successfully followed the user')
  })   
}) 

 
     it('GET index', () => {
       cy.request({
         method: 'GET',
         url: `${edenURL}/follows`,
         headers: {
                    "AUTH-TOKEN": authToken,
                    'Content-Type': 'application/json'
                },
         qs: { 
                    followers: 'true',
                    followings: 'false',
                    only_ids: 'true',
                    per_page: 10,
                    page: 1

    } 
     }).then((response) => {
       expect(response.status).to.eq(200);
       
       
     })
    })

    it('DELETE Unfollow', () => {
        cy.request({
          method: 'DELETE',
          url: `${edenURL}/users/28578/unfollow`,
          headers: {
                     "AUTH-TOKEN": authToken,
                     'Content-Type': 'application/json'
                 },
         
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Successfully unfollowed the user')

      })
     })

})