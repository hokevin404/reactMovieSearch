function Form(props) {
    // State to hold form data from user input
    const [formData, setFormData] = useState({ searchterm: '' });

    // Function to update form
    const handleChange = (event) => {
        // Update form values using event object to obtain user values
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <form>
                <input type="text" />
                <input type="submit" value={submit} />
            </form>
        </div>
    )
}

export default Form