import React, { useState } from 'react';

function Userexp() {
    const [educations, setEducations] = useState([]);
    const [newEducation, setNewEducation] = useState({ year: '', company: '', position: '' });
  
    const addEducation = () => {
      if (newEducation.year && newEducation.company && newEducation.position) {
        setEducations([...educations, newEducation]);
        setNewEducation({ year: '', company: '', position: '' });
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewEducation({ ...newEducation, [name]: value });
    };
  
    const deleteEducation = (index) => {
      setEducations(educations.filter((_, i) => i !== index));
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
              name="company"
              placeholder="Company"
              value={newEducation.company}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={newEducation.position}
              onChange={handleInputChange}
            />
            <button onClick={addEducation}>Add Education</button>
            {educations.map((education, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <span>{education.year}</span>
                <span>{education.company}</span>
                <span>{education.position}</span>
                <button onClick={() => deleteEducation(index)} style={{ marginLeft: '10px' }}>X</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Userexp;