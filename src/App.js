import './App.css';
import Userinfo from './user-info';
import Usercont from './user-cont';
import Useredu from './user-educ';
import Userexp from './user-exp';
import Userskill from './user-skill';
import Userint from './user-interest';
import Userguild from './user-guild';

function App() {
  return (
    <div className="App">
      <div className='text-black'>Welcome to my React App!</div>
      <Userinfo />
      <Usercont />
      <Useredu />
      <Userexp />
      <Userskill />
      <Userint />
      <Userguild />
    </div>
  );
}

export default App;
