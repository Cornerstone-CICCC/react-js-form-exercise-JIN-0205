import React, { useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  age: number;
  favoriteFoods: string[];
}

const App = () => {
  /* Your states here */
  const initialStates = {
    firstname: "",
    lastname: "",
    age: 0,
    favoriteFoods: [],
  };
  const [formData, setFormData] = useState<FormData>(initialStates);
  const [output, setOutput] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const checked = (e.target as HTMLInputElement).checked;
        const updatedFood = checked
          ? [...prev.favoriteFoods, value]
          : prev.favoriteFoods.filter((food) => food !== value);
        return { ...prev, favoriteFoods: updatedFood };
      });
      // return;
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setOutput(true);
  };
  const handleReset = () => {
    setFormData(initialStates);
  };
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              checked={formData.favoriteFoods.includes("Chicken")}
              onChange={handleChange}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              checked={formData.favoriteFoods.includes("Beef")}
              onChange={handleChange}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              value="Vegetables"
              checked={formData.favoriteFoods.includes("Vegetables")}
              onChange={handleChange}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              value="Dessert"
              checked={formData.favoriteFoods.includes("Dessert")}
              onChange={handleChange}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              value="Pork"
              checked={formData.favoriteFoods.includes("Pork")}
              onChange={handleChange}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
        <button type="submit">Display User</button>
        <button type="reset" onClick={handleReset}>
          Clear
        </button>
      </form>

      <div className="output">
        {/* Display the greeting here */}
        {output && (
          <div>
            Hello {formData.firstname} {formData.lastname}. You are{" "}
            {formData.age} year{formData.age > 1 && "s"} old and your favorite
            foods {formData.favoriteFoods.length === 1 ? "is" : "are"}:
            {formData.favoriteFoods.map((food) => (
              <span key={food}> {food}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
