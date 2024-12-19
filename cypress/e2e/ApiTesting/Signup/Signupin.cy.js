

                                                             //SIGNUP
describe('Profile API', () => {
  let userPin;
  let auth_Token;
  const edenURL = 'https://bluepalm.xyz/api/v1';
    it('POST user SignUp', () => {
      cy.request({
        method: 'POST',
        url: `${edenURL}/profiles`,
        body: { 
        user: {
          phone: '+19876543210',
          notify_for_messages: true,
          notify_for_reactions: true,
          notify_for_revelas: true,
          auth_password: 'password' 
        },
        android: false
      }

    }).then((response) => {
      expect(response.status).to.eq(201);
      userPin = response.body.data.attributes.pin;
      cy.log(`User PIN: ${userPin}`)
    });
    })

                                                               //SIGNIN

    it('POST user SIGNIN using the stored pin', () => {
      cy.request({
        method: 'POST',
        url: `${edenURL}/sessions`, 
        body: {
          phone: "+19876543210",
          //pin: userPin 
          pin: "0000"
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        auth_Token = response.body.data.attributes.auth_token; 
      cy.log(`Auth Token: ${auth_Token}`)
      });
    });
  });
  


  
   








