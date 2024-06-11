import React, { useState } from 'react';

function Userint() {
  const [interests, setInterests] = useState([]);
  const [newInterest, setNewInterest] = useState('');

  const addInterest = () => {
    if (newInterest) {
      setInterests([...interests, newInterest]);
      setNewInterest('');
    }
  };

  const handleInputChange = (e) => {
    setNewInterest(e.target.value);
  };

  const deleteInterest = (index) => {
    setInterests(interests.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="component-card">
        <div className="head-information">User Interest</div>
        <div>
          <input
            type="text"
            placeholder="Enter interest"
            value={newInterest}
            onChange={handleInputChange}
          />
          <button onClick={addInterest}>Add Interest</button>
          {interests.map((interest, index) => (
            <div key={index} className="interest-entry">
              <span>{interest}</span>
              <button onClick={() => deleteInterest(index)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Userint;