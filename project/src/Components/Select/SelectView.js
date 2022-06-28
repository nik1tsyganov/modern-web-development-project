import React, { useEffect, useState } from "react";
import {
  createHistorical,
  getAllHistoricals
} from "/Users/NikitaMac/Desktop/Modern Web Development/Homework/modern-web-development-project/project/src/Common/Services/SelectService";
import SelectForm from "./SelectForm";


const SelectView = () => {
    // Variables in the state to hold data
    const [historicals, setHistoricals] = useState([]);
    const [name, setName] = useState();
  
    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
      getAllHistoricals().then((historicals) => {
        console.log(historicals);
        setHistoricals(historicals);
      });
    }, []);
  
    // Flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);
  
    // UseEffect that runs when changes
    // are made to the state variables/flags
    useEffect(() => {
      // Check for add flag and make sure name state variable is defined
      if (name && add) {
        createHistorical(name).then((newHistorical) => {
          setAdd(false);
          // Add the newly created lesson to the lessons array
          // to render the new list of lessons (thru spread/concatination)
          setHistoricals([...historicals, newHistorical]);
  
          //Note: CANNOT MANIPULATE STATE ARRAY DIRECTLY
          //lessons = lessons.push(lesson)
          //setLessons(lessons)
        });
      }
    }, [name, historicals, add]);
  
    // Handler to handle event passed from child submit button
    const onClickHandler = (e) => {
      e.preventDefault();
      // Trigger add flag to create lesson and
      // re-render list with new lesson
      setAdd(true);
    };
  
    // Handler to track changes to the child input text
    const onChangeHandler = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      // Continuously updating name to be added on submit
      setName(e.target.value);
    };
  
    return (
    <div>
        <h1 className="head">Pick the historical figure</h1>
        <div>
            <form className="select">
                {historicals.length > 0 && (
                  <div className="radioChoice">
                    {historicals.map((historical) => (
                      <input
                          type="radio"
                          key="{historical}"
                          name="historical_figure"
                          value={historical.get("name")}
                      />
                  ))}
                </div>)}
            </form>
        </div>
        <p>Write in your own:</p>
        <SelectForm onClick={onClickHandler} onChange={onChangeHandler} />
    </div>
    );
  };
  
  export default SelectView;

