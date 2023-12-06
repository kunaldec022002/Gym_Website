import React,{useState,useEffect} from "react";
import showToast from 'crunchy-toast';
import './Dropdown.css';



const Dropdown = () => {
    // Manage the selected value using state
    const [selectedValue, setSelectedValue] = useState("");
  
    // Set and get the selected value from local storage using state and useEffect
    useEffect(() => {
      const storedValue = localStorage.getItem("selectedValue");
      if (storedValue) {
        setSelectedValue(storedValue);
      }
    }, []);
  
    const handleSelection = e => {
      const { value } = e.target;
      setSelectedValue(value);
      localStorage.setItem("selectedValue", value);
    };

    //reset

      
    const handleSendButtonClick = () => {
        // You can perform any action here with the selected value
        showToast(`Send Value:-${selectedValue}`, 'success', 3000);
      };

    return (
        <div>
          <div>
            <select value={selectedValue} className="drop-container" onChange={handleSelection}>
                <option value="" className="option">Select an option</option>
                <option value="Free 1-Day Pass" className="option">Free 1-Day Pass</option>
                <option value="Complimentary Personal Training Session" className="option">Complimentary Personal Training Session</option>
                <option value="Complimentary Zumba Class" className="option">Complimentary Zumba Class</option>
                <option value="Complimentary Indoor Cycling Class" className="option">Complimentary Indoor Cycling Class</option>
                <option value="Complimentary Power Yoga  Class" className="option">Complimentary Power Yoga  Class</option>
                <option value="Complimentary KickBoxing Class" className="option">Complimentary KickBoxing Class</option>
                <option value="Complimentary Power Lifting Class" className="option">Complimentary Power Lifting Class</option>
            </select>
            
                <button type="button"
                  onClick={handleSendButtonClick}
                  className="Send-btn">
                    Send
                </button>
          </div>
          
        </div>
            
        
    );
  }
  
  export default Dropdown;
  
  