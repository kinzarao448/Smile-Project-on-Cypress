

describe('Share', () => {
   
    const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODc1OSwiZXhwIjoxNzMyNzQwNjk0fQ.5pRX5UgBsgzqE3soLDGonktr7AztqqLHlZMGajPMrVQ'
   const edenURL = 'https://bluepalm.xyz/api/v1';
     it('GET Share index', () => {
       cy.request({
         method: 'GET',
         url: `${edenURL}/shares`,
         headers: {
           "AUTH-TOKEN": authToken,
       },
   qs: { 
          comedian_share: true,
           visibility: "both",
           per_page: 5,
           comedian_share: true,
           page: 120
      } 
     }).then((response) => {
       expect(response.status).to.eq(200);
     })
    })
                                                 //show specific  share
    // it('GET Share show', () => {
    //     cy.request({
    //       method: 'GET',
    //       url: `${edenURL}/shares/2129`,
    //       headers: {
    //         "AUTH-TOKEN": authToken,
    //     },
    //   }).then((response) => {
    //     expect(response.status).to.eq(200);
    //     expect(response.body.data.attributes.id).to.eq(2129)
    //     expect(response.body.data.attributes.sender_id).to.eq(25365)
    //     expect(response.body.data.attributes.sender_full_name).to.eq("Sarah")
    //   })   
    // })

                                               //Reaction on  Shares
    // it('Post  React Share ', () => {
    //     cy.request({
    //       method: 'POST',
    //       url: `${edenURL}/shares/2129/react`,
    //       headers: {
    //         "AUTH-TOKEN": authToken,
    //         'Content-Type': 'application/json'
    //     },

    //     body: { 
    //        "react": true,
	//        //"url": "https://eden-app.s3.amazonaws.com/users/11109/messages/b3f12b01-dc9a-4d0f-9f1d-a49ca1bea3b7.jpg",
	//        "reaction_type": "happy" 
    //     }  
    //   }).then((response) => {
    //     expect(response.status).to.eq(200);
    //   })   
    // }) 
    //                                               //POST Read share
    // it('Post  Read Share ', () => {
    //     cy.request({
    //       method: 'POST',
    //       url: `${edenURL}/shares/2129/read`,
    //       headers: {
    //         "AUTH-TOKEN": authToken,
    //         'Content-Type': 'application/json'
    //     },

    //     body: { 
    //        "read": true,
	//        "percentage": 20,
	//        "skipped": false
    //     }  
    //   }).then((response) => {
    //     expect(response.status).to.eq(200);
    //   })   
    // }) 

                                                   //signed URL
    // it('GET SIigned url', () => {
    //     cy.request({
    //       method: 'GET',
    //       url: `${edenURL}/shares/new`,
    //       headers: {
    //         "AUTH-TOKEN": authToken,
    //     },
    //     qs:{
    //         video_file_type: "mov"
    //     }
    //   }).then((response) => {
    //     expect(response.status).to.eq(201);
       
    //   })   
    // })

    //                                              //GET smile user
    // it('GET Smile user', () => {
    //     cy.request({
    //       method: 'GET',
    //       url: `${edenURL}/shares/user_smiles`,
    //       headers: {
    //         "AUTH-TOKEN": authToken,
    //     },
    //   }).then((response) => {
    //     expect(response.status).to.eq(200);  
    //   })   
    // })
 
    //                                          //GET tags
    // it('GET Tags', () => {
    //     cy.request({
    //       method: 'GET',
    //       url: `${edenURL}/shares/get_tags`,
    //       headers: {
    //         "AUTH-TOKEN": authToken,
    //     },
    //     qs:{
    //         feel: "laugh"
    //     }
    //   }).then((response) => {
    //     expect(response.status).to.eq(200);  
    //   })   
    // })  

    //                                                //Get Intro video
     
    // it('GET intro video', () => {
    //   cy.request({
    //    method: 'GET',
    //     url: `${edenURL}/shares/intro_videos`,
    //    headers: {
    //          "AUTH-TOKEN": authToken,
    //    },
         
    //  }).then((response) => {
    //         expect(response.status).to.eq(200);  
    // })   
    //  })  
     
                                        //PUT Update
    //  it('put share update ', () => {
    //         cy.request({
    //           method: 'PUT',
    //           url: `${edenURL}/shares/2132`,
    //           headers: {
    //             "AUTH-TOKEN": authToken,
    //             'Content-Type': 'application/json'
    //         },
    
    //         body: { 
    //            "share": {
	// 	"video_url": "https://eden-app.s3.amazonaws.com/users/11109/messages/b3f12b01-dc9a-4d0f-9f1d-a49ca1bea3b7.jpg",
	// 	"image_url": "https://eden-app.s3.amazonaws.com/users/11109/messages/b3f12b01-dc9a-4d0f-9f1d-a49ca1bea3b7.jpg",
	// 	"public": true,
	// 	"feel": "cry",
	// 	"reaction_time": 5,
	// 	 "feel_category_id": 1,
	// 	"see_category_id": 5,
	// 	"visibility": "both",
	// 	"reactions_allowed": true,
	// 	"video_orientation": "landscape",
    //     "title": "Test title2"
	// }
    //         }  
    //       }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         expect(response.body.share.visibility).to.eq("both");
    //         expect(response.body.share.feel).to.eq("cry");
    //         expect(response.body.share.title).to.eq("Test title2");
    //         expect(response.body.share.id).to.eq(2132);

    //       })   
    //     }) 

                                          //view poster interaction
    it('GET viewer poster interaction', () => {
      cy.request({
       method: 'GET',
        url: `${edenURL}/shares/interaction/1933`,
       headers: {
             "AUTH-TOKEN": authToken,
       },
         
     }).then((response) => {
            expect(response.status).to.eq(200);  
    })   
     })  
})