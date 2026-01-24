# Test Plan — QA Playwright TS Portfolio

## 1. Objective
Create a compact yet production-style QA portfolio demonstrating:
- UI automation with Playwright + TypeScript
- API testing and API→UI data-driven approach
- CI execution via GitHub Actions
- Strong manual testing foundation (mobile + test design techniques)

## 2. System Under Test (SUT)
- UI: SauceDemo (Swag Labs) web application
- API: JSONPlaceholder (public REST API) used to demonstrate API testing patterns and data-driven tests

## 3. In Scope
### UI (SauceDemo)
- Authentication (valid/invalid/locked user)
- Inventory page basic checks
- Stability practices: reliable locators, waits, traces on retry, screenshots on failure

### API (JSONPlaceholder)
- GET list and single entity
- POST create entity (fake create)
- Negative scenarios (404)
- Resilience: retries/backoff for transient network errors

### Cross-cutting
- CI: GitHub Actions pipeline
- Reporting: HTML report + artifacts (screenshots/videos/traces)

## 4. Out of Scope
- Real payment flows / real transactions (demo apps only)
- Performance/load testing
- Security testing (beyond basic auth negative checks)

## 5. Test Types
- Smoke: critical availability checks (page opens, key UI visible)
- Functional: main flows (login, inventory)
- Negative: invalid credentials, locked user, unknown endpoint
- Regression: stable subset covering critical functionality

## 6. Environments
- Local: macOS, Node.js, Playwright
- CI: GitHub Actions (Ubuntu runner)

## 7. Entry / Exit Criteria
### Entry
- Dependencies installed
- Browser binaries installed
- Test data/users available

### Exit
- All tests green in CI
- Report generated and stored as artifact
- Flaky tests addressed (retries only as safety net)

## 8. Risks & Mitigation
- Public demo services can be unstable → retries/backoff, narrow assertions, avoid brittle UI selectors
- UI changes in demo apps → use role-based locators, avoid CSS chains
- Network instability → timeouts, retry wrapper for API

## 9. How to Run
- Local run: `npx playwright test`
- Report: `npx playwright show-report`
- CI: triggered on push/pull request via GitHub Actions