import React, { useState } from "react";

interface IProps {
  onSearch: (city: string) => void;
}

const Form: React.FC<IProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">City</label>
      <input id="city" onChange={handleCityChange}></input>
      <input type="submit" value="Search"></input>
    </form>
  );
};

export default Form;
