[![CI](https://github.com/lindertat/qa-playwright-ts-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/lindertat/qa-playwright-ts-portfolio/actions/workflows/playwright.yml)
# QA Automation Portfolio — Playwright + TypeScript (UI + API)

Production-style QA automation portfolio built with **Playwright + TypeScript**.
Includes **UI tests**, **API tests**, **API → UI data-driven example**, and a compact **manual testing documentation pack**.

---

## ✅ Tech Stack
- Playwright Test (TypeScript)
- Page Object Model
- Auth via `storageState` (setup project)
- API testing via Playwright `request`
- GitHub Actions CI
- HTML report + artifacts (screenshots/videos/traces on failures)

---

## ✅ What’s Covered

### UI (SauceDemo)
- Authentication:
  - valid login
  - invalid password
  - locked user
- Inventory page basic checks
- Stable locators (`getByRole`, placeholders, minimal brittle selectors)

### API (JSONPlaceholder)
- GET list and single entity
- POST create entity (fake create)
- Negative: unknown endpoint (404)
- Resilient requests: retry/backoff for transient network issues

### API → UI Example
- Fetch API data (`/posts/1`)
- Attach it to test report as annotation
- Run a UI flow (login + inventory sanity)

---

## ✅ Project Structure
- pages/          # Page Objects
- tests/ui/       # UI test specs
- tests/api/      # API test specs
- tests/setup/    # auth setup (storageState)
- fixtures/       # shared fixtures/helpers
- test-data/      # typed test data (users)
- docs/           # manual QA docs (plan, checklists, test design)
- .github/        # CI workflow

---

### ✅ How to Run Locally
- Install dependencies:
- npm ci

### ✅ Run all tests
- npx playwright test

### ✅ Run UI tests:
- npx playwright test tests/ui

### ✅ Run API tests:
- npx playwright test tests/api

### ✅ Open HTML report:
- npx playwright show-report

## ✅ CI (GitHub Actions)
Tests are executed automatically on:
	- •	push to main
	- •	pull_request to main

Artifacts include:
	- •	HTML report
	- •	screenshots/videos/traces (on failures)

## ✅ Manual QA Docs
See **/docs** folder:
	- •	test-plan.md
	- •	manual-smoke-checklist-web.md
	- •	mobile-![Playwright Tests](https://github.com/lindertat/qa-playwright-ts-portfolio/actions/workflows/playwright.yml/badge.svg)regression-checklist.md
	- •	test-design.md

## ✅ Notes
  This repository uses public demo apps for practice/portfolio purposes.