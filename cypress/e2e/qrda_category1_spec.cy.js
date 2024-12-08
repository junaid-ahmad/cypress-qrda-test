const xml2js = require('xml2js');

describe('QRDA Category I XML File Test', () => {
  it('should parse and validate the QRDA Category I XML file', () => {
    // Load the QRDA XML fixture
    cy.fixture('qrda_category1.xml').then((xmlData) => {
      // Parse the XML using xml2js
      xml2js.parseString(xmlData, { explicitArray: false }, (err, result) => {
        expect(err).to.be.null;

        // Validate the root element
        expect(result).to.have.property('ClinicalDocument');

        const doc = result.ClinicalDocument;

        // Validate the ID element
        expect(doc.id.$.root).to.equal('2.16.840.1.113883.3.5607');
        expect(doc.id.$.extension).to.equal('12345');

        // Validate the code element
        expect(doc.code.$.code).to.equal('55182-0');
        expect(doc.code.$.displayName).to.equal('QRDA Category I Report');

        // Validate the patient name
        const patient = doc.recordTarget.patientRole.patient;
        expect(patient.name.given).to.equal('John');
        expect(patient.name.family).to.equal('Doe');

        // Validate the patient's birth time
        expect(patient.birthTime.$.value).to.equal('19800101');

        // Validate the author details
        const author = doc.author.assignedAuthor;
        expect(author.id.$.root).to.equal('2.16.840.1.113883.4.6');
        expect(author.id.$.extension).to.equal('67890');
        expect(author.assignedPerson.name.given).to.equal('Jane');
        expect(author.assignedPerson.name.family).to.equal('Smith');
      });
    });
  });
});
