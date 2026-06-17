# QA Engineer Screening Test Submission

This repository contains my submission for the QA Engineer Screening Test. It includes Web UI Automation, API Automation, and Manual Testing deliverables.

## 📂 Project Structure & Deliverables

### 1. Task 1: Web UI Automation (SauceDemo)
- **Tool:** Cypress with Page Object Model (POM) pattern.
- **Config:** User credentials and URLs are stored in `cypress/fixtures/config.json`.
- **Test Scripts:** Located in `cypress/e2e/saucedemo.cy.js` (Includes both positive and negative test cases).

### 2. Task 2: API Automation (GoRest)
- **Platform:** [GoRest API](https://gorest.co.in/)
- **Tool Used:** Postman
- **Deliverables:** The complete automated API testing suite has been exported and included in the root directory:
  - `Go Rest.postman_collection.json` — Includes comprehensive CRUD operations (POST, GET, PUT, DELETE) alongside dynamic unique email generation, JSON schema validation, and negative testing.
  - `GoRest_Env.json` — Contains environment variables and tokens required to execute the collection smoothly.

### 3. Task 3: Manual Test Deliverables
All manual testing reports are attached as PDF files inside the `document/` folder:
- `Test Case e-commerce.pdf` (Test Strategy and Test Cases for Checkout & Payment).
- `Exploratory Testing & Bug Reporting.pdf` (Bug reports with steps to reproduce and screenshots).

---

## 🛠️ How to Run Web UI Tests (Cypress)

1. **Clone the repository:**
```bash
   git clone [https://github.com/Ploycho/saucedemo-cypress-test.git](https://github.com/Ploycho/saucedemo-cypress-test.git)
   cd saucedemo-cypress-test

2. **Install dependencies:**
```bash
   npm install

3. **Run tests:**

- To open Cypress UI:**
```bash
   npx cypress open

- To run in headless mode (Terminal):
```bash
   npx cypress open

---

## 📬 How to Run API Tests (Postman)

1. Open Postman.
2. Click **Import** and upload both JSON files from the root folder:
   - `Go Rest.postman_collection.json`
   - `GoRest_Env.json`
3. Select **`GoRest_Test`** from the environment dropdown menu (top-right corner).
4. *(Optional)* If the token expires, go to the **Environments** tab, select `GoRest_Test`, and update the `TOKEN` variable with a new one from GoRest. Click **Save**.
5. Click on the `GoRest` collection, click **Run**, and then click the blue **Run GoRest** button to execute all tests.