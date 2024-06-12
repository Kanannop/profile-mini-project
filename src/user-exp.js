import React, { useState, useEffect } from 'react';

function Userexp({ defaultValues, setValue }) {
  const [experiences, setExperiences] = useState(defaultValues.experience || []);
  const [newExperience, setNewExperience] = useState({ year: '', company: '', position: '' });

  useEffect(() => {
    setValue("experience", experiences);
  }, [experiences, setValue]);

  const addExperience = () => {
    if (newExperience.year && newExperience.company && newExperience.position) {
      setExperiences([...experiences, newExperience]);
      setNewExperience({ year: '', company: '', position: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const deleteExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  return (
    <div>
      <div className="component-card">
        <div className="head-information">User Experience</div>
        <div className="eighty">
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={newExperience.year}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={newExperience.company}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={newExperience.position}
            onChange={handleInputChange}
          />
          <button onClick={addExperience}>Add Experience</button>
          {experiences.map((experience, index) => (
            <div className='bottom-pad' key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <span>{experience.year}</span>
              <span>{experience.company}</span>
              <span>{experience.position}</span>
              <button onClick={() => deleteExperience(index)} style={{ marginLeft: '10px' }}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Userexp;
