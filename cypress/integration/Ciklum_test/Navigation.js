context('Navigation', () => {
    beforeEach(() => {
    cy.visit('/')
    })

    it('Navigation between columns',() => {
        cy.get('#name')
            .type('emma').should('have.value', 'emma')
        cy.get('button[type=submit]').click()
        cy.get('.CrewMember-up').click()
        cy.get('.App-column:nth-of-type(2)').contains('div','emma stewart')
        cy.get('.CrewMember-toolbar>button').then(($lis) => {
            expect($lis).to.have.length(2)})
        cy.get('.CrewMember-up').click()
        cy.get('.App-column:nth-of-type(3)').contains('div','emma stewart')
        cy.get('.CrewMember-toolbar>button').then(($lis) => {
            expect($lis).to.have.length(1)})
        cy.get('.CrewMember-toolbar>button[type=button]').click()
        cy.get('.CrewMember-toolbar>button[type=button]:nth-of-type(1)').click()
        cy.get('.App-column:nth-of-type(1)').contains('div','emma stewart').should('be.visible')

    })
})

