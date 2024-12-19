// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })





// Profile

Cypress.Commands.add('adminLogin', (email, password) => {
    cy.visit('https://bluepalm.xyz/admin/login');
    cy.get('#admin_user_email').click().type(email); 
    cy.get('#admin_user_password').click().type(password);
    cy.get('#admin_user_submit_action > input').click();
  });
  Cypress.Commands.add('UncaughtException', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  Cypress.Commands.add('createAdminUser', (email, password) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#admin_users > a').click();
    cy.get('.action_item > a').click();
    cy.get('#admin_user_email').click().type(email);
    cy.get('#admin_user_password').click().type(password);
    cy.get('#admin_user_password_confirmation').click().type(password);
    cy.get('#admin_user_submit_action > input').click();
  });
  Cypress.Commands.add('viewAdminUser', (userId) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#admin_users > a').click();
    cy.get(`#admin_user_${userId} > .col-actions > .table_actions > .view_link`).click();
  });
  Cypress.Commands.add('editAdminUser', (userId, editEmail, editPassword) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#admin_users > a').click();
    cy.get(`#admin_user_${userId} > .col-actions > .table_actions > .edit_link`).click();
    cy.get('#admin_user_email').click().clear().type(editEmail);
    cy.get('#admin_user_password').click().type(editPassword);
    cy.get('#admin_user_password_confirmation').click().type(editPassword);
    cy.get('#admin_user_submit_action > input').click();
  });
  Cypress.Commands.add('deleteAdminUser', (userId) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#admin_users > a').click();
    cy.get(`#admin_user_${userId} > .col-actions > .table_actions > .delete_link`).click();
  })

  //Contact

  Cypress.Commands.add('createContact', (userName, friendName, contactType, firstName, lastName, blockedFeels) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#contacts > a').click();
    cy.get('.action_item > a').click();
    cy.get('#contact_user_input > .select2 > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type(userName);
    cy.get('.select2-results__option').contains(userName).should('be.visible').click();
    cy.get('#contact_friend_input > .select2 > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type(friendName);
    cy.get('.select2-results__option').contains(friendName).should('be.visible').click();
    cy.get('#select2-contact_contact_type-container').click();
    cy.get('.select2-search__field').type(contactType);
    cy.get('.select2-results__option').contains(contactType).should('be.visible').click();
    cy.get('#contact_customized').click();
    cy.get('#contact_first_name').click().type(firstName);
    cy.get('#contact_last_name').click().type(lastName);
    cy.get('#contact_heart').click();
    cy.get('#contact_blocked_feels').click().clear().type(blockedFeels);
    cy.get('#contact_submit_action > input').click();
  });
  Cypress.Commands.add('viewContact', (contactId) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#contacts > a').click();
    cy.get(`#contact_${contactId} > .col-actions > .table_actions > .view_link`).click()
  })
  Cypress.Commands.add('editContact', (contactId, newuserName, newfriendName, newcontactType, newfirstName, newlastName, newblockedFeels) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#contacts > a').click();
    cy.get(`#contact_${contactId} > .col-actions > .table_actions > .edit_link`).click()
    cy.get('#contact_user_input > .select2 > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type(newuserName);
    cy.get('.select2-results__option').contains(newuserName).should('be.visible').click();
    cy.get('#contact_friend_input > .select2 > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type(newfriendName);
    cy.get('.select2-results__option').contains(newfriendName).should('be.visible').click();
    cy.get('#select2-contact_contact_type-container').click();
    cy.get('.select2-search__field').type(newcontactType);
    cy.get('.select2-results__option').contains(newcontactType).should('be.visible').click();
    cy.get('#contact_invited').click();
    cy.get('#contact_first_name').click().type(newfirstName);
    cy.get('#contact_last_name').click().type(newlastName);
    cy.get('#contact_removed').click();
    cy.get('#contact_blocked_feels').click().clear().type(newblockedFeels);
    cy.get('#contact_submit_action > input').click();
  })
  Cypress.Commands.add('deleteContact', (contactId) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#contacts > a').click();
    cy.get(`#contact_${contactId} > .col-actions > .table_actions > .delete_link`).click()
  })


  Cypress.Commands.add('createSuspension', (userName, reason, query, appeal) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#suspensions > a').click();
    cy.get('.action_item > a').click();
    cy.get('#suspension_user_input > .select2 > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type(userName);
    cy.get('.select2-results__option').contains(userName).should('be.visible').click();
    cy.get('#select2-suspension_reason-container').click();
    cy.get('.select2-search__field').type(reason);
    cy.get('.select2-results__option').contains(reason).should('be.visible').click();
    cy.get('#suspension_why_happened').click().type(query)
    cy.get('#suspension_appeal').click().type(appeal)
    cy.get('#suspension_submit_action > input').click()
  })
  Cypress.Commands.add('viewSuspension', (suspensionId) => {
  cy.get('#profiles > [href="#"]').click();
  cy.get('#suspensions > a').click();
  cy.get(`#suspension_${suspensionId} > .col-actions > .table_actions > .view_link`).click()
  })
  Cypress.Commands.add('editSuspension', (suspensionId, newuserName, newReason, newQuery, newAppeal) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#suspensions > a').click();
    cy.get(`#suspension_${suspensionId} > .col-actions > .table_actions > .edit_link`).click()
    cy.get('#suspension_user_input > .select2 > .selection > .select2-selection').click();
    cy.get('.select2-search__field').type(newuserName);
    cy.get('.select2-results__option').contains(newuserName).should('be.visible').click();
    cy.get('#select2-suspension_reason-container').click();
    cy.get('.select2-search__field').type(newReason);
    cy.get('.select2-results__option').contains(newReason).should('be.visible').click();
    cy.get('#suspension_why_happened').click().clear().type(newQuery)
    cy.get('#suspension_appeal').click().clear().type(newAppeal)
    cy.get('#suspension_submit_action > input').click()
  })
  Cypress.Commands.add('deleteSuspension', (suspensionId) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#suspensions > a').click();
    cy.get(`#suspension_${suspensionId} > .col-actions > .table_actions > .delete_link`).click()
  })

  Cypress.Commands.add('createTeams', (teamEmail, teamPassword) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#teams > a').click()
    cy.get('.action_item > a').click()
    cy.get('#team_email').click().type(teamEmail)
    cy.get('#team_password').click().type(teamPassword)
    cy.get('#team_password_confirmation').click().type(teamPassword)
    cy.get('#team_submit_action > input').click()
  })
  Cypress.Commands.add('viewTeams', (teamId) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#teams > a').click()
    cy.get(`#team_${teamId} > .col-actions > .table_actions > .view_link`).click()
})
    Cypress.Commands.add('editTeams', (teamId, newteamEmail, newteamPassword) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#teams > a').click()
    cy.get(`#team_${teamId} > .col-actions > .table_actions > .edit_link`).click()
    cy.get('#team_email').click().type(newteamEmail)
    cy.get('#team_password').click().type(newteamPassword)
    cy.get('#team_password_confirmation').click().type(newteamPassword)
    cy.get('#team_submit_action > input').click()
})
Cypress.Commands.add('deleteTeams', (teamId) => {
    cy.get('#profiles > [href="#"]').click();
    cy.get('#teams > a').click()
    cy.get(`#team_${teamId} > .col-actions > .table_actions > .delete_link`).click()
})




