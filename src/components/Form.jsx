function Form(props) {
    const [formData, setFormData] = useState({searchterm: ''});
    
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