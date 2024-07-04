import { useState} from "react";

function Form(props) {
    // State to hold form data from user input
    const [formData, setFormData] = useState({ searchterm: '', });

    // Function to update form
    function handleChange(event) {
        // Update form values using event object to obtain user values
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Function to initiate movie search when submission received
    function handleSubmit(event) {
        // Prevent page refresh
        event.preventDefault();

        // Pass search term to props' moviesearch to init funtion from App()
        props.moviesearch(formData.searchterm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default Form