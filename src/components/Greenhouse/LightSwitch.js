import './LightSwitch.css';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

function LightSwitch() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <div className={`light-switch ${themeName}`}>
      <div onClick={() => setThemeName("day")} className="on">DAY</div>
      <div onClick={() => setThemeName("night")} className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
