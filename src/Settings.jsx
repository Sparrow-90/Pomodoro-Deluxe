import { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import BackButton from "./BackButton";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="text-left">
        Settings
        <label className="block mb-3 mt-5">work: {settingsInfo.workMinutes}:00</label>
        <ReactSlider 
            className="h-10 border-2 border-[#e65445] rounded-3xl"
            thumbClassName="bg-[#e65445] w-10 h-10 cursor-pointer rounded-3xl "
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />
        <label className="block mb-3 mt-5">break: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider 
            className="h-10 border-2 border-green-500 rounded-3xl"
            thumbClassName="bg-green-500 w-10 h-10 cursor-pointer rounded-3xl "
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={120}
            />
            <div className="text-center mt-5">
        <BackButton onClick={()=> settingsInfo.setShowSettings(false)}/>    
            </div>
    </div>
  )
}

export default Settings