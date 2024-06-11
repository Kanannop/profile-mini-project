import React, { useState } from 'react';

function Userguild() {
  const [guilds, setGuilds] = useState([]);
  const [newGuild, setNewGuild] = useState('');

  const addGuild = () => {
    if (newGuild) {
      setGuilds([...guilds, newGuild]);
      setNewGuild('');
    }
  };

  const handleInputChange = (e) => {
    setNewGuild(e.target.value);
  };

  const deleteGuild = (index) => {
    setGuilds(guilds.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="component-card">
        <div className="head-information">User Guild</div>
        <div className="eighty">
          <div className='flex-row'>
          <input
            type="text"
            placeholder="Enter guild"
            value={newGuild}
            onChange={handleInputChange}
          />
          <button onClick={addGuild}>Add Guild</button>
          </div>
          {guilds.map((guild, index) => (
            <div key={index} className="guild-entry">
              <span>{guild}</span>
              <button onClick={() => deleteGuild(index)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Userguild;