describe('Test ICTWEB441 Website', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/Enquiry.html');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Submits the Enquiry form without reloading the page', () => {
        cy.get('#name').type('Michael');
        cy.get('#email').type('wall-e84@hotmail.com');
        cy.get('#subject').type('Course Enquiry');
        cy.get('#message').type('This is a test message.');

        cy.get('button[type="submit"]').click();

        // تحقق من وجود رسالة التأكيد بعد تقديم النموذج
        cy.get('#confirmationMessage').should('be.visible').and('contain', 'Thank you for your enquiry!');
    });

    it('Navigates to Home page', () => {
        cy.get('a[href="Home.html"]').click();
        cy.url().should('include', 'Home.html');
        cy.get('h1.title').should('contain', 'Welcome to TasCollege'); // تأكد من وجود العنوان الصحيح
    });

    it('Navigates to About page', () => {
        cy.get('a[href="About.html"]').click();
        cy.url().should('include', 'About.html');
        cy.get('h1.title').should('contain', 'About TasCollege'); // تأكد من وجود العنوان الصحيح
    });

    it('Navigates to Course Details page', () => {
        cy.get('a[href="CourseDetails.html"]').click();
        cy.url().should('include', 'CourseDetails.html');
        cy.get('h1.title').should('contain', 'Diploma of Information Technology ICT50220'); // تحقق من وجود العنوان الصحيح
    });

    it('Navigates to Contact Us page', () => {
        cy.get('a[href="Contactus.html"]').click();
        cy.url().should('include', 'Contactus.html');
        cy.get('h1').should('contain', 'Contact Us'); // تحقق من وجود العنوان الصحيح في Contactus.html
    });
});

// منع Cypress من إيقاف الاختبار عند ظهور استثناء غير متوقع
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
