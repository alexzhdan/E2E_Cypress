context('Filters', () => {
    beforeEach(() => {
    cy.visit('/')
    cy.get('#name').clear()
    cy.get('#city').clear()
    })

    it('Set filter for strict value for names', () => {
        cy.get('#name')
            .type('emma').should('have.value', 'emma')
        cy.get('button[type=submit]').click()
        cy.contains('div','emma stewart')
            .should('be.visible')
        cy.get('.CrewMember-container').then(($lis) => {
            expect($lis).to.have.length(1)
        })
    })

    it ('Set filter for not strict value for names', () => {
        cy.get('#name')
        .type('ll').should('have.value', 'll')
        cy.get('button[type=submit]').click()
        cy.contains('div','lloyd gonzalez')
            .should('be.visible')
        cy.contains('div','danielle moore')
            .should('be.visible')
        cy.get('.CrewMember-container').then(($lis) => {
            expect($lis).to.have.length(2)
        })
    })

    it ('Set filter for strict value for city', () => {
        cy.get('#city')
            .type('sheffield').should('have.value', 'sheffield')
        cy.get('button[type=submit]').click()
        cy.contains('div','julia cunningham')
            .should('be.visible')
        cy.get('.CrewMember-container').then(($lis) => {
            expect($lis).to.have.length(1)
            })
        })

    it ('Check that button "Clear" reset all filters', () => {
        cy.get('#city')
            .type('sheffield').should('have.value', 'sheffield')
        cy.get('#name')
            .type('julia').should('have.value', 'julia')
        cy.get('button[type=submit]').click()
        cy.get('.CrewMember-container').then(($lis) => {
            expect($lis).to.have.length(1)})
        cy.get('#filters>button[type=button]').click()
        cy.get('#city').should('have.value', 'sheffield')
        cy.get('#name').should('have.value', 'julia')
        cy.get('.CrewMemeber-name>div:nth-of-type(1)').then(($lis) => {
            expect($lis).to.have.length(5)
            expect($lis.eq(0)).to.contain('lloyd gonzalez')
            expect($lis.eq(1)).to.contain('emma stewart')
            expect($lis.eq(2)).to.contain('danielle moore')
            expect($lis.eq(3)).to.contain('linda ruiz')
            expect($lis.eq(4)).to.contain('julia cunningham')
        })
    })
})