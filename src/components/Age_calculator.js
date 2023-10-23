import { useState } from 'react';

const Age_calculator=()=> {
    const [input, setInput] = useState('');
    const [age, setAge] = useState(0);

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const ageCalculate = (event) => {
        event.preventDefault(); 

        var date = new Date();
        var iyear = new Date(input);
        var yeardiff = date.getFullYear() - iyear.getFullYear();

        var imonth = new Date(input);
        var monthdiff = date.getMonth() - imonth.getMonth();

        var idate = new Date(input);

        if (monthdiff < 0 || (monthdiff === 0 && date.getDate() < idate.getDate())) {
            yeardiff--;
        }
        setAge(yeardiff);
    }

    return (
        <div style={{ textAlign: "center", margin: "100px" }}>
            <h1>Age Calculator</h1>
            <form>
                <b><label>Enter your date of birth</label></b><br></br>
                <input type="date" style={{ width: "280px",height:"30px", marginTop: "5px",border:"1px solid rgb(228, 225, 225)",borderRadius:"5px"}} onChange={handleInput}></input><br></br>
                <button className="btn btn-primary my-2" onClick={(e) => ageCalculate(e)} style={{ backgroundColor: "rgb(63, 63, 209)", color: "white", marginTop:"10px",padding:"10px", border: "none", borderRadius: "5px" }}>Calculate Age</button>
            </form>
            <h2>You are {age} years old</h2>
        </div>
    )
};

export default Age_calculator;