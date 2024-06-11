import React, { useState } from 'react';

function Userskill() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ skill: '', rating: '1' });

  const addSkill = () => {
    if (newSkill.skill) {
      setSkills([...skills, newSkill]);
      setNewSkill({ skill: '', rating: '1' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSkill({ ...newSkill, [name]: value });
  };

  const deleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="component-card">
        <div className="head-information">User Skill</div>
        <div className="eighty">
          <input
            type="text"
            name="skill"
            placeholder="Skill"
            value={newSkill.skill}
            onChange={handleInputChange}
          />
          <select
            name="rating"
            value={newSkill.rating}
            onChange={handleInputChange}
          >
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          <button onClick={addSkill}>Add Skill</button>
          {skills.map((skill, index) => (
            <div key={index} className="skill-entry">
              <span>{skill.skill}</span>
              <span>{skill.rating}</span>
              <div className="power-bar-container">
                <div
                  className="power-bar"
                  style={{ width: `${skill.rating * 10}%` }}
                ></div>
              </div>
              <button onClick={() => deleteSkill(index)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Userskill;