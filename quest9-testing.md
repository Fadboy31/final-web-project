# QUEST 9: Form Validation & Error Handling

## 🎯 Objective
Ensure all user inputs are validated before processing and that errors are handled clearly and safely.

---

## ✅ 1. Input Validation

We validate all inputs before adding tasks to prevent invalid or harmful data.

### Validation Function

```javascript
function validateInput(input) {
  if (!input || input.trim() === '') {
    showError('Please enter a value');
    return false;
  }

  if (input.trim().length < 3) {
    showError('Input must be at least 3 characters long');
    return false;
  }

  return true;
}