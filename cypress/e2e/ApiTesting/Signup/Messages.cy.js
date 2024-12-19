
describe('Messages', () => {
    const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODU0OCwiZXhwIjoxNzMwMzk1OTUxfQ.-7mmzATlDz7ET3ON4s4D4g9GW9dHAi98mbcbX212esg'

    //   it('create message', () => {
    //     cy.request({
    //       method: 'POST',
    //       url: 'https://d283-2400-adc5-112-4b00-1be8-735-96b8-4844.ngrok-free.app/api/v1/messages',  
    //     headers: {
    //       "AUTH-TOKEN": authToken,
    //       'Content-Type': 'application/json'
    //   },
    //   body: {
    //     "message": {
    //       "body": "Testing Message",
    //       "receiver_id": 28522,
    //       "status": "sent",
    //       "anonymous": "false",
    //       "request_reaction": "true",
    //       "message_type": "from_contact"
    //     },
    //     "transcode": "true"
    //   }
    //  }).then((response) => {
    //      expect(response.status).to.eq(200); 
    //      expect(response.body.data.attributes.body).to.eq("Testing Message");
    //      expect(response.body.data.attributes.sender.data.id).to.eq("28548");
    //      expect(response.body.data.attributes.sender.data.attributes.phone).to.eq("+19876543210");
    //  });
    //  })
                                            //attachement signed url
     it('GET signed url', () => {
              cy.request({
                 method: 'GET',
                 url: 'https://d283-2400-adc5-112-4b00-1be8-735-96b8-4844.ngrok-free.app/api/v1/messages/new?file_type=jpg',  
                 headers: {
                     "AUTH-TOKEN": authToken,  
            },
             }).then((response) => {
                expect(response.status).to.eq(200); 
        });
        })

                                            //Video Reaction 
    it('video reaction', () => {
            cy.request({
            method: 'POST',
            url: 'https://d283-2400-adc5-112-4b00-1be8-735-96b8-4844.ngrok-free.app/api/v1/messages/5799/video_reactions',  
               headers: {
                  "AUTH-TOKEN": authToken,
                  'Content-Type': 'application/json'
              },
             body: {
        "video_reaction": {
            "url": "https://eden-app.s3.amazonaws.com/users/11109/messages/b3f12b01-dc9a-4d0f-9f1d-a49ca1bea3b7.jpg",
            "sent": "true"
          },
          "transcode": true
        }
             }).then((response) => {
                 expect(response.status).to.eq(200); 
                //  expect(response.body.data.attributes.body).to.eq("Testing Message");
                //  expect(response.body.data.attributes.sender.data.id).to.eq("28548");
                //  expect(response.body.data.attributes.sender.data.attributes.phone).to.eq("+19876543210");
             });
             })
                                                    //attachement signed url


    })
