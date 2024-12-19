

describe('My Share', () => {
   
     const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODU4NywiZXhwIjoxNzMyMzk2MjI0fQ.R1KqrGfHyhrn7pcD1C2uLmMSZV5ly3i3ADow--oJiy0'
    const edenURL = 'https://bluepalm.xyz/api/v1';
      it('POST create MyShare', () => {
        cy.request({
          method: 'POST',
          url: `${edenURL}/profiles/shares`,
          headers: {
            "AUTH-TOKEN": authToken,
            'Content-Type': 'application/json'
        },
          body: { 
          share: {
		// "anonymous": false,
		 "video_url": "https://eden-app.s3.amazonaws.com/users/14271/shares/24a89062-a5ec-4e22-90cb-b1bd2afbe4cb.mov",
		 "image_url": "https://dummyimage.com/350x250/33cc99/fff",
		 "public": true,
		 "feel": "cry",
		 "reaction_time": 5,
		"feel_category_id": 1,
		"see_category_id": 1,
		"visibility": "both",
		"reactions_allowed": true,
		"video_orientation": "landscape",
        "story_starter_id": 7,
        "share_type": "comedian_share"
	}
        }
  
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.attributes.feel).to.eq("cry");
        
        
      });
    })

                                        //  Attachment signed url
    // it('GET signed url', () => {
    //     cy.request({
    //        method: 'GET',
    //        url: `${edenURL}/profiles/shares/new`,  
    //        headers: {
    //            "AUTH-TOKEN": authToken,  
    //     },
    //     qs: { 
    //         video_file_type: 'mov',
    //         image_file_type: 'jpg'
    //           } 
    //     }).then((response) => {
    //       expect(response.status).to.eq(201); 
    //     });
    //     })
 
                                               //Index My Share
    // it('GET index share', () => {
    //     cy.request({
    //        method: 'GET',
    //        url: `${edenURL}/profiles/shares`,  
    //        headers: {
    //            "AUTH-TOKEN": authToken,  
    //     },
//for share // this

        // qs: { 
        //     comedian_share: true,
        //       } 
        // }).then((response) => {
        //   expect(response.status).to.eq(200);

//for shares

          //expect(response.body.data[0].attributes.share_type).to.eq("share");
         //expect(response.body.data[0].attributes.story_starter_id).eq(7)
//for comedian shares

        //   expect(response.body.data[0].attributes.share_type).to.eq("comedian_share");
        //   expect(response.body.data[0].attributes.story_starter_id).eq(7)

        // });
        // })

                                              // Post Thumbs to Share
    it('POST Thumbs', () => {
        cy.request({
           method: 'POST',
           url: `${edenURL}/shares/2129/toggle_thumbs`,  
           headers: {
               "AUTH-TOKEN": authToken,  
        },
        body: {
            "thumb_type": "thumbs_up"
        }
        }).then((response) => {
          expect(response.status).to.eq(200); 
        });
        }) 


                                                 //Post Share Like
    // it('POST Like', () => {
    //     cy.request({
    //        method: 'POST',
    //        url: `${edenURL}/shares/2101/toggle_like`,  
    //        headers: {
    //            "AUTH-TOKEN": authToken,  
    //     },
    //     body: {
    //         "thumb_type": "thumbs_up"
    //     }
    //     }).then((response) => {
    //       expect(response.status).to.eq(200); 
    //     });
    //     })            
                  
                                                      //update share
it('PUT Share', () => {
        cy.request({
           method: 'PUT',
           url: `${edenURL}/profiles/shares/2130`,  
           headers: {
               "AUTH-TOKEN": authToken,  
        },
        body: {
           "share": {
		"engagement": 10,
        "story_starter_id": 50,
        "feel": "laugh",

	}
}
        }).then((response) => {
          expect(response.status).to.eq(200); 
          expect(response.body.data.attributes.engagement).to.eq(10);
          expect(response.body.data.attributes.feel).to.eq("laugh");
        });
        })  


                                                    //delete share
    it('DELETE Share', () => {
        cy.request({
            method: 'DELETE',
            url: `${edenURL}/profiles/shares/2131`,  
               headers: {
                   "AUTH-TOKEN": authToken,  
            },
    
            }).then((response) => {
              expect(response.status).to.eq(200); 
            });
            })   
    })
          
      