export const validateForm = (formData) => {
  const errors = {};

  // Validate title
  if (!formData.title.trim()) {
    errors.title = "Bet title is required.";
  }

  // Validate description
  if (!formData.description.trim()) {
    errors.description = "Bet description is required.";
  }

  // Validate expiration date
  if (!formData.expirationDate) {
    errors.expirationDate = "Expiration date is required.";
  }

  // Validate oracles (must have exactly 3 oracles)
  if (!formData.oracles || (Array.isArray(formData.oracles) ? formData.oracles.length !== 3 : formData.oracles.split(",").length !== 3)) {
    errors.oracles = "Please provide exactly 3 oracles.";
  }

  return errors;
};
