import React, { useState } from 'react';

function Useredu({defaultValues, setValue}) {
    const [educations, setEducations] = useState([]);
    const [newEducation, setNewEducation] = useState({ year: '', university: '' });
  
    const addEducation = () => {
      if (newEducation.year && newEducation.university) {
        setEducations([...educations, newEducation]);
        setNewEducation({ year: '', university: '' });
        setValue("education",[...educations, newEducation]);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewEducation({ ...newEducation, [name]: value });
    };

    const deleteEducation = (index) => {
        const updatedEducations = educations.filter((_, i) => i !== index);
        setEducations(updatedEducations);
        setValue("education", updatedEducations);
      };
  
    return (
      <div>
        <div className="component-card">
          <div className="head-information">User Education</div>
          <div className="eighty">
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={newEducation.year}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="university"
              placeholder="University"
              value={newEducation.university}
              onChange={handleInputChange}
            />
            <button onClick={addEducation}>Add Education</button>
            {educations.map((education, index) => (
              <div key={index} className='flex-row bottom-pad'>
                <span>{education.year}</span>
                <div className='timeline'></div>
                <span>{education.university}</span>
                <button onClick={() => deleteEducation(index)} style={{ marginLeft: '10px' }}>X</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Useredu;