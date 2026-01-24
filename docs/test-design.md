# Test Design Techniques — Examples

## 1) Equivalence Partitioning (EP)
Goal: reduce test count by grouping inputs that behave the same.

Example: Login password rules (hypothetical)
- Valid partition: 8–64 chars, contains letters+numbers
- Invalid partitions:
  - < 8 chars
  - > 64 chars
  - only letters
  - only numbers
  - contains unsupported symbols

## 2) Boundary Value Analysis (BVA)
Goal: test edges where bugs often happen.

Example: password length boundaries (hypothetical)
- Min = 8, Max = 64
Test values:
- 7 (min-1), 8 (min), 9 (min+1)
- 63 (max-1), 64 (max), 65 (max+1)

## 3) Decision Table Testing
Goal: cover combinations of conditions.

Example: authentication outcome
Conditions:
- Username valid? (Y/N)
- Password valid? (Y/N)
- User locked? (Y/N)

Actions:
- Login success
- Show “invalid credentials”
- Show “locked out”

Minimal table:
- Y / Y / N → success
- Y / N / N → invalid credentials
- N / Y / N → invalid credentials
- N / N / N → invalid credentials
- Y / Y / Y → locked out
- Y / N / Y → locked out (still locked)
