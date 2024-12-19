describe('Profile panel', () => {
    beforeEach(() => {
        cy.UncaughtException();
        cy.adminLogin('engg.haseeb@gmail.com', 'H@$eeb');     
    })

                                                     // Admin User

    // it('AdminUser', () => {
    //     const userId = '48'
    //     const editEmail = 'edittesting@gmail.com'
    //     const editPassword =  '123456'
    //     cy.createAdminUser('testing@gmail.com', '1234567890');
    //     cy.viewAdminUser(userId);
    //     cy.editAdminUser(userId, editEmail, editPassword);
    //     cy.deleteAdminUser(userId);
    // }) 

                                                           //Contact

//     it('Contact', () => {  
//         const contactId= '4222399'
//         const newuserName = 'Bella'
//         const newfriendName = 'Abby'
//         const newcontactType = 'Trust'
//         const newfirstName = 'Test'
//         const newlastName = 'User'
//         const newblockedFeels = '6'
//         cy.createContact('Sarah', 'Ever', 'Love', 'H', 'Test', '2')
//         cy.viewContact(contactId)
//         cy.editContact(contactId, newuserName, newfriendName, newcontactType, newfirstName, newlastName, newblockedFeels)
//         cy.deleteContact(contactId)
//  })

                                                              // Suspension

//     it('Suspension', () => {  
//         const suspensionId= '49'
//         const newuserName = 'Bella'
//         const newReason = 'Blocked'
//         const newQuery = 'New Testing'
//         const newAppeal = 'Suspension Updated'
//         cy.createSuspension('Sarah', 'Low percentage', 'what is testing', 'find bug free software')
//         cy.viewSuspension(suspensionId)
//         cy.editSuspension(suspensionId, newuserName, newReason, newQuery, newAppeal)
//         cy.deleteSuspension(suspensionId)
//   })

                                                         //Teams
     it('Teams', () => {  
         const teamId= '7'
         const newteamEmail = 'testabc@gmail.com'
         const newteamPassword = '1234567890' 
         cy.createTeams('testinguser1@gmail.com', 'hello123')
         cy.viewTeams(teamId)
         cy.editTeams(teamId, newteamEmail, newteamPassword)
         cy.deleteTeams(teamId)
   })


})