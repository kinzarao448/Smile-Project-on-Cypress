

describe('chats', () => {
   
    const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODc4NCwiZXhwIjoxNzMzOTUxMDk1fQ.3FUf8vnqDtL81BTSB3zwYcrVHU2pV195dNZVb5_llr4'
   const edenURL = 'https://bluepalm.xyz/api/v1';


                                             //chat create
   it('Post create chat ', () => {
    cy.request({
      method: 'POST',
      url: `${edenURL}/chat_messages`,
      headers: {
        "AUTH-TOKEN": authToken,
        'Content-Type': 'application/json'
    },
    body: {  
        "message": {
          "body": "TESTING?",
          "receiver_id": 27790
        }
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.property('type', 'chat_message');
      const attributes = response.body.data.attributes;
      expect(attributes).to.have.property('body', 'TESTING?');
      expect(attributes).to.have.property('read', false);
      const senderAttributes = response.body.data.attributes.sender.data.attributes;
      expect(senderAttributes).to.have.property('phone', '+19876543210');
      expect(senderAttributes).to.have.property('id', 28784);
      const receiverAttributes = response.body.data.attributes.receiver.data.attributes;
      expect(receiverAttributes).to.have.property('id', 27790);

    });
  });
                                       
                                                   //show chat
     it('GET show chats', () => {
       cy.request({
         method: 'GET',
         url: `${edenURL}/chat_messages`,
         headers: {
           "AUTH-TOKEN": authToken,
       },
       qs: { 
       'message[receiver_id]': 27790,
        per_page: 2,
        page: 1
    } 
     }).then((response) => {
             expect(response.status).to.eq(200);
             expect(response.body).to.have.property('data');
             expect(response.body.data).to.be.an('array')
             expect(response.body.data[0]).to.have.property('type', 'chat_message');
             const attributes = response.body.data[0].attributes;
             expect(attributes).to.have.property('body', 'TESTING?');
             expect(attributes).to.have.property('read', false);
             const senderAttributes = response.body.data[0].attributes.sender.data.attributes;
             expect(senderAttributes).to.have.property('phone', '+19876543210');
             expect(senderAttributes).to.have.property('id', 28784);
             const receiverAttributes = response.body.data[0].attributes.receiver.data.attributes;
             expect(receiverAttributes).to.have.property('id', 27790);
     })
    })

       
                                               // index chat
    it('GET index chat ', () => {
               cy.request({
                 method: 'GET',
                 url: `${edenURL}/chats`,
                 headers: {
                   "AUTH-TOKEN": authToken,
               },
             }).then((response) => {
                expect(response.status).to.eq(200);
              });
            })
                     
                                                       //  delete chat
it('DELETE chats', () => {
    cy.request({
      method: 'DELETE',
      url: `${edenURL}//chats/1422`,
      headers: {
                 "AUTH-TOKEN": authToken,
                 'Content-Type': 'application/json'
             },
     
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('removed', true)
  })
  })


                                                        //chat conversation
      it('GET chat conversation ', () => {
               cy.request({
                 method: 'GET',
                 url: `${edenURL}/chats/users_with_conversations`,
                 headers: {
                   "AUTH-TOKEN": authToken,
               },
               qs: { 
                   friend: true,
                   fans: true,
                } 
             }).then((response) => {
                expect(response.status).to.eq(200);

                
              });
            })
 })

        
