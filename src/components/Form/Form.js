import  "./Form.css"
import Button from "../Button/Button";
function Form({ onAddActivity }) {
  return (
    <form onSubmit={onAddActivity}>
      
      <div className="entry-form_fields">
        <h2>Add new Activity:</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="entry-form_checkbox">
        <label htmlFor="good-or-bad-weather">Good-weather activity</label>
        <input
          type="checkbox"
          name="good-or-bad-weather"
          id="good-or-bad-weather"
        />
      </div>
      <Button type="submit" text={"Submit"} />
    </form>
  );
}

export default Form;
