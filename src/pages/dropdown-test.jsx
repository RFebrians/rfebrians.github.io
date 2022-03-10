import React from "react";
//import AddModeratorIcon from '@mui/icons-material/AddModerator';

const App = () => {
  const [home, setHome] = React.useState("home");
  const [drink, setDrink] = React.useState("water");

  const handleHomeChange = (event) => {
    setHome(event.target.value);
  };

  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  };

  return (
    <div>
      <h1>Test Dropdown </h1>
      <Dropdown
        label="What do we eat?"
        options={[
          { label: "Home", value: "home" },
          { label: "Research Paper", value: "research" },
          { label: "Research Activity", value: "research-activity" },
          { label: "Research Playground", value: "research-p" }
        ]}
        value={home}
        onChange={handleHomeChange}
      />

      <Dropdown
        label="What do we drink?"
        options={[
          { label: "Water", value: "water" },
          { label: "Beer", value: "beer" },
          { label: "Wine", value: "wine" }
        ]}
        value={drink}
        onChange={handleDrinkChange}
      />
      <p ><AddModeratorIcon onClick={()=>{alert('clicked')}} href="./"></AddModeratorIcon>We eat {home}!</p>
      <p>We drink {drink}!</p>
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default App;
