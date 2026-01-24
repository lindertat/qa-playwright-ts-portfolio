# Manual Smoke Checklist (Web) — SauceDemo

**Purpose:** Quick 3–5 minute manual verification for critical flow.  
**When to run:** Before releases, after major changes, or when automation/CI is unavailable.

---

## 1) App availability
- [ ] Open https://www.saucedemo.com/
- [ ] Page loads successfully, "Swag Labs" is visible

## 2) Login (happy path)
- [ ] Login with valid credentials (standard_user / secret_sauce)
- [ ] User lands on Inventory page (`/inventory.html`)
- [ ] "Products" header is visible

## 3) Login negative check
- [ ] Logout (if needed), return to login page
- [ ] Try invalid credentials
- [ ] Error message appears and is readable

## 4) Inventory page sanity
- [ ] Product list is displayed
- [ ] At least one product title is visible (e.g., "Sauce Labs Backpack")

## 5) Cart flow
- [ ] Add 1 item to cart
- [ ] Cart badge updates (e.g., shows "1")
- [ ] Open cart page and verify item is present

## 6) Checkout flow (sanity)
- [ ] Start checkout
- [ ] First/Last Name + Zip form appears
- [ ] Fill any valid values and continue (if available)

## 7) Basic UI stability
- [ ] No broken layout / major overlaps
- [ ] No infinite loading spinners during navigation

---

## Notes
- This checklist complements the automated regression suite.
- Detailed manual test cases are maintained only where automation is less effective (e.g., mobile lifecycle, permissions, network conditions, exploratory testing).
