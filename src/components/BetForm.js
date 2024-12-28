import React from "react";

const BetForm = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <div className="space-y-4">
        <div className="input-group">
          <label htmlFor="title" className="text-gray-700 font-medium">
            Bet Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="E.g., Will Bitcoin reach $100,000 by Dec 2025?"
            className="w-full p-3 border border-[#E0E0E0] rounded-md focus:border-[#F7931A] focus:ring-1 focus:ring-[#F7931A]"
            aria-label="Bet Title"
          />
          {errors.title && (
            <div className="text-red-600 text-sm">{errors.title}</div>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="description" className="text-gray-700 font-medium">
            Bet Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide the detailed terms of the bet..."
            className="w-full p-3 border border-[#E0E0E0] rounded-md focus:border-[#F7931A] focus:ring-1 focus:ring-[#F7931A]"
            rows="5"
            aria-label="Bet Description"
          />
          {errors.description && (
            <div className="text-red-600 text-sm">{errors.description}</div>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="expirationDate" className="text-gray-700 font-medium">
            Expiration Date
          </label>
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            className="w-1/2 p-3 border border-[#E0E0E0] rounded-md focus:border-[#F7931A] focus:ring-1 focus:ring-[#F7931A]"
            aria-label="Expiration Date"
          />
          {errors.expirationDate && (
            <div className="text-red-600 text-sm">{errors.expirationDate}</div>
          )}
        </div>

        <div className="input-group">
          <label
            htmlFor="oracles"
            className="text-gray-700 font-medium"
            aria-describedby="oracle-description"
          >
            Oracles (Choose 3)
          </label>
          <input
            type="text"
            id="oracles"
            name="oracles"
            value={formData.oracles}
            onChange={handleChange}
            placeholder="Enter username or wallet address."
            className="w-full p-3 border border-[#E0E0E0] rounded-md focus:border-[#F7931A] focus:ring-1 focus:ring-[#F7931A]"
            aria-label="Add Oracles"
            aria-describedby="oracle-description"
          />
          <small id="oracle-description" className="text-gray-500 text-sm">
            Provide 3 usernames or wallet addresses of oracles.
          </small>
          {errors.oracles && (
            <div className="text-red-600 text-sm">{errors.oracles}</div>
          )}
        </div>
      </div>

      <div className="mt-4 p-3 border border-[#E0E0E0] rounded-md bg-[#F8F8F8]">
        <h4 className="text-lg font-medium text-gray-700">Creation Fee</h4>
        <div className="flex justify-between">
          <span className="text-xl font-bold text-[#F7931A]">20,000 sats (~$20)</span>
        </div>
      </div>
    </div>
  );
};

export default BetForm;
