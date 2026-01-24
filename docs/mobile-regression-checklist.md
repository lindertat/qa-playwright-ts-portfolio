# Mobile Regression Checklist (Manual)

## Install / Update / Launch
- Fresh install works
- Update from previous version works (data preserved)
- App launches without crash
- First launch permissions are handled gracefully

## Login / Session
- Login with valid credentials
- Invalid login shows clear error
- Session persists after app restart (if expected)
- Logout clears session
- Token/session expiration handled (re-login prompt)

## Permissions
- Camera permission flow (allow/deny) behaves correctly
- Location permission flow (allow/deny) behaves correctly
- Notifications permission flow (allow/deny) behaves correctly
- Permission change in OS settings is reflected in app

## App Lifecycle
- Background → foreground restores correct screen/state
- App killed → relaunch behaves correctly
- Interrupted by phone call / notification / low memory

## Network & Offline
- Airplane mode: proper offline message + retry
- Switching Wi-Fi ↔ cellular doesn’t break flow
- Slow network (3G): loading indicators, no infinite spinners
- Requests are not duplicated on retry

## UI / UX
- Layout correct on small/large screens
- Text truncation/overlap does not occur
- Dark mode (if supported)
- Accessibility: readable contrast, scalable fonts (basic check)

## Input / Forms
- Keyboard doesn’t hide input fields
- Validation messages for required fields
- Special characters handled (email, names)
- Paste/copy works where expected

## Notifications / Deep Links
- Push notifications open correct screen
- Deep link opens correct screen/state
- App handles deep link when already open vs closed

## Security / Privacy (Fintech mindset)
- Sensitive info not visible on app switcher screenshot (if expected)
- Auto-logout/lock on inactivity (if expected)
- No sensitive data shown in error messages
- PII not logged in plain text (spot check)

## Stability
- No freezes during navigation
- No obvious memory leaks during basic usage (spot check)
- Crash logs can be retrieved (where applicable)
