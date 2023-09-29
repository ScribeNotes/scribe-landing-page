const submitGoogleForm = (name, email, purpose) => {
  fetch(
    `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRayeKtkVJYQFYtC7zbasYIAe7MrQO2gk1Qm4TuIkcQ0b0DQ/formResponse?entry.1848330634=${name}&entry.951254046=${email}&entry.820848947=${purpose}`,
    {
      method: "POST",
    }
  );
};

export { submitGoogleForm };
