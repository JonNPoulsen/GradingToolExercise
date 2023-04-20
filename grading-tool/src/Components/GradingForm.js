import React, {useRef, useState} from 'react'

export default function GradingForm()
{
    const studentNoRef = useRef();
    const nameRef = useRef();
    const gradeRef = useRef();

    const [formContent, setFormContent] = useState(
        {
            studentNo : "",
            name: "",
            grade: ""
        }
    );

    function handleKeyPressOnForm(e){
        if(e.key === "Enter")
        {
            setFormContent(formContent => 
            (
                {
                    studentNo : studentNoRef.current.value,
                    name : nameRef.current.value,
                    grade : gradeRef.current.value
                }
            ));
            studentNoRef.current.value = "";
            nameRef.current.value = "";
            gradeRef.current.value = "";
            console.log(formContent);
        };
    }

    return(
        <div>
            <form onKeyDown={handleKeyPressOnForm}>
                <label htmlFor= "student-no">Student number</label>
                <input id = "student-no" type = "text" 
                ref={studentNoRef} />
                <br/>

                <label htmlFor= "student-name">Name</label>
                <input id = "student-name"  type = "text" 
                ref={nameRef} /><br/>

                <label htmlFor= "student-grade">Grade</label>
                <input id = "student-grade" type = "text"
                ref={gradeRef}/><br/>
            </form>
        </div>
    )
}

