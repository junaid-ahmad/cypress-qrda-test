# 🧪 **Cypress QRDA Category I XML Testing Project**

This project is designed to test QRDA Category I XML files using Cypress. It includes fixtures, tests, and instructions for validating the structure and content of QRDA XML files.

---

## 🚀 **Getting Started**

Follow these instructions to clone the project and run the tests on your local machine.

### **Prerequisites**

Ensure you have the following installed:

1. **Node.js** (version 14 or higher)  
   Download: [https://nodejs.org/](https://nodejs.org/)

2. **Git**  
   Download: [https://git-scm.com/](https://git-scm.com/)

3. **Cypress**  
   Cypress will be installed via `npm` during setup.

---

## 📥 **Clone the Repository**

Use the following command to clone the repository:

```
git clone https://github.com/junaid-ahmad/cypress-qrda-test.git
```

Navigate to the project directory:

```
cd cypress-qrda-test
```

---

## 📦 **Install Dependencies**

Install the required `npm` packages:

```
npm install
```

---

## ▶️ **Running the Tests**

### **Open Cypress Test Runner**

To open the Cypress UI and run tests interactively, use:

```
npx cypress open
```

### **Run Tests in Headless Mode**

To run the tests in the terminal (headless mode), use:

```
npx cypress run
```

---

## 📝 **Test File Structure**

- **Fixtures**:  
  `cypress/fixtures/qrda_category1.xml` — Sample QRDA Category I XML file.

- **Test File**:  
  `cypress/e2e/qrda_category1_spec.cy.js` — Cypress test to validate the QRDA XML.

---

## 🛠️ **Customizing the XML File**

To test with a different QRDA Category I XML file:

1. Place your XML file in the `cypress/fixtures` folder.
2. Update the test file `cypress/e2e/qrda_category1_spec.cy.js` to reference your new fixture.

Example:

```javascript
cy.fixture('your_new_file.xml').then((xmlData) => {
  // Your test code here
});
```

---

## 🐞 **Troubleshooting**

1. **Cypress Not Found**:  
   Ensure all dependencies are installed with `npm install`.

2. **Port Conflicts**:  
   Cypress might use a default port; close any applications using port `3000` or configure Cypress to use a different port.

3. **Permission Issues**:  
   Run commands with appropriate permissions (use `sudo` if necessary).

---

## 🤝 **Contributing**

If you'd like to contribute to this project, feel free to submit issues or pull requests.

---

## 📄 **License**

This project is licensed under the MIT License.

---

### 📧 **Contact**

For any questions or issues, reach out to:

- **Email**: junaid.zhcet@gmail.com  
- **GitHub**: [Your GitHub Profile](https://github.com/junaid-ahmad)

---

Happy Testing! 🧪🚀