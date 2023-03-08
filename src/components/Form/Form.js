import Button from "../Button/Button";
function Form({onAddActivity}) {
    return (  
        <form onSubmit={onAddActivity}>
            <h2>Add new Activity:</h2>
            <div className="entry-form_fields">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>   
             <div className="entry-form_checkbox">
                <label htmlFor="good-or-bad-weather">Good-weather activity</label>
                <input type="checkbox" name="good-or-bad-weather" id="good-or-bad-weather" />
            </div>
            <Button type="submit" />
        </form>
    );
}

export default Form;