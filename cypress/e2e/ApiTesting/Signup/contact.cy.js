

describe('Contact', () => {
   
    const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODc4NCwiZXhwIjoxNzMzOTUxMDk1fQ.3FUf8vnqDtL81BTSB3zwYcrVHU2pV195dNZVb5_llr4'
   const edenURL = 'https://bluepalm.xyz/api/v1';



                                                     //POST invite
   it('Post invite contact ', () => {
    cy.request({
      method: 'POST',
      url: `${edenURL}/contacts/4222404/invite`,
      headers: {
        "AUTH-TOKEN": authToken,
        'Content-Type': 'application/json'
    },
    }).then((response) => {
        expect(response.status).to.eq(200);
    
      });
    });
                                   
                                                        //GET Index
    it('GET index contact ', () => {
      cy.request({
        method: 'GET',
        url: `${edenURL}/contacts`,
        headers: {
          "AUTH-TOKEN": authToken,
      },
    }).then((response) => {
       expect(response.status).to.eq(200);
     });
   })

                                                        //GET Recent
   it('GET recent contact ', () => {
    cy.request({
      method: 'GET',
      url: `${edenURL}/contacts/recent`,
      headers: {
        "AUTH-TOKEN": authToken,
    },
  }).then((response) => {
     expect(response.status).to.eq(200);
   });
 })                                                    

                                                        //GET Invitable
 it('GET invitable ', () => {
  cy.request({
    method: 'GET',
    url: `${edenURL}/contacts`,
    headers: {
      "AUTH-TOKEN": authToken,
  },
  body: {  
    "search": {
		"invited_eq": false,
		"friend_active_eq": false
	},
	"order": "friend_full_name asc"
  }
}).then((response) => {
   expect(response.status).to.eq(200);
 });
}) 

                                                       //PUT Update Contact
it('put update contact ', () => {
  cy.request({
    method: 'PUT',
    url: `${edenURL}/contacts/4222404`,
    headers: {
      "AUTH-TOKEN": authToken,
  },
  body: {  
    "contact": {
		"contact_type": "love",
		"heart": true
	}
  }
}).then((response) => {
   expect(response.status).to.eq(200);
 });
})    
})
