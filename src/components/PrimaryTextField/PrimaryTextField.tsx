import './PrimaryTextField.css'

const PrimaryTextField = () => {
    return (
      <div className="primary-text-field-parent">
        <input className="primary-text-field" 
               placeholder="Enter new word"
               type="text" />
      </div>
    );
  };

export default PrimaryTextField;