const xml2js = require('xml2js');

describe('XML File Testing', () => {
  it('should load and validate the sample XML file', () => {
    // Load the XML fixture
    cy.fixture('sample.xml').then((xmlData) => {
      // Parse the XML using xml2js
      xml2js.parseString(xmlData, (err, result) => {
        expect(err).to.be.null;

        // Validate XML structure and content
        expect(result).to.have.property('bookstore');
        expect(result.bookstore.book[0].$.category).to.equal('fiction');
        expect(result.bookstore.book[0].title[0]._).to.equal('The Great Gatsby');
        expect(result.bookstore.book[0].author[0]).to.equal('F. Scott Fitzgerald');
        expect(result.bookstore.book[0].year[0]).to.equal('1925');
      });
    });
  });
});
