import React, { useState } from "react";
import TitleSection from "./components/TitleSection";
import BetForm from "./components/BetForm";
import { validateForm } from "./utils/validateForm";

const App = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    expirationDate: "",
    oracles: [],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setErrors({});
      // Here, you'd normally handle the form submission (API call, etc.)
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <TitleSection />
      <form onSubmit={handleSubmit} className="space-y-6">
        <BetForm
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <div className="text-center">
          <button
            type="submit"
            className="w-3/5 bg-[#F7931A] text-white text-xl font-bold py-3 rounded-md hover:bg-[#D67514] focus:outline-none"
          >
            Create Bet
          </button>
        </div>
      </form>
      {isSubmitted && (
        <div className="mt-4 text-center text-green-600">
          Bet created successfully!
        </div>
      )}
    </div>
  );
};

export default App;
