
                                                      // Edit Profile BirthDay
   describe('User Profile', () => {
      const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODU4NywiZXhwIjoxNzMyMzk2MjI0fQ.R1KqrGfHyhrn7pcD1C2uLmMSZV5ly3i3ADow--oJiy0'
      const edenURL = 'https://bluepalm.xyz/api/v1';
      const phoneNumber = '+19876543210'
                                                    
          it('Updates the user birth date', () => {
              cy.request({
              method: 'PUT',
              url: `${edenURL}/profiles/`,  
               headers: {
                    "AUTH-TOKEN": authToken,
                     'Content-Type': 'application/json'
 },
                body: {
                  "user": {
                  "birth_date": "2019-10-14 10:27:00"
 }
 }
 }).then((response) => {
   expect(response.status).to.eq(201); 
   expect(response.body.data.attributes.phone).to.eq(phoneNumber);
 });
 })
                                                    
                                                    
                                            //Edit userName
it('Updates the user Name', () => {
  cy.request({
    method: 'PUT',
    url: `${edenURL}/profiles/`,  
  headers: {
    "AUTH-TOKEN": authToken,
    'Content-Type': 'application/json'
},
   body: {
    "user": {
    "user_name": "New testing"
}
  }
}).then((response) => {
   expect(response.status).to.eq(201); 
   expect(response.body.data.attributes.phone).to.eq(phoneNumber);
   expect(response.body.data.attributes.user_type).to.eq("external");
});
})

                                                    // Edit InviteCode
                                         
it('Updates the user invitecode', () => {
cy.request({
   method: 'PUT',
   url: `${edenURL}/profiles/`,  
   headers: {
       "AUTH-TOKEN": authToken,  // Replace with actual token if needed
       'Content-Type': 'application/json'
},
   body: {
       "user": {
       "registration_code": "J689VN$"
}
}
}).then((response) => {
  expect(response.status).to.eq(201); 
});
})
           
                                                     //UnRead Item                                                 
it('GET unread item', () => {
cy.request({
   method: 'GET',
   url: `${edenURL}/profiles/unread_items`,  
   headers: {
       "AUTH-TOKEN": authToken,  
},
}).then((response) => {
  expect(response.status).to.eq(200); 
});
})

                                                                                                     
                                                      //Signed URL                                                       
                                                                                                       
it('GET signed url', () => {
  cy.request({
     method: 'GET',
     url: `${edenURL}/profiles/edit?file_type=mov`,  
     headers: {
         "AUTH-TOKEN": authToken,  
},
 }).then((response) => {
    expect(response.status).to.eq(201); 
});
})
                                                    
                                                    
                                                     //Menue Video                                                 
      it('GET menue video', () => {
             cy.request({
             method: 'GET',
              url: `${edenURL}/profiles/menu_videos`,  
               headers: {
                    "AUTH-TOKEN": authToken,  
   },
   }).then((response) => {
       expect(response.status).to.eq(200); 
           });
            })
                                                    
                                                    
                                                        //Total Happy Reaction                                                
 it('GET Happy Reaction', () => {
        cy.request({
        method: 'GET',
        url: `${edenURL}/profiles/happy_reactions`,  
        headers: {
            "AUTH-TOKEN": authToken,  
},
 }).then((response) => {
            expect(response.status).to.eq(200); 
 });
  })
                                                    
                                                    
                                                         //GET User Profile                                                  
   it('GET userprofile', () => {
         cy.request({
         method: 'GET',
         url: `${edenURL}/profiles/28587`,  
           headers: {
                  "AUTH-TOKEN": authToken,  
  },
   }).then((response) => {
         expect(response.status).to.eq(200);
         expect(response.body.data.id).to.eq("28587");   
         expect(response.body.data.attributes.handle).to.eq("New testing");           
});
})
 })                                                    