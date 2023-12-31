import { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import BackButton from "./BackButton";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="text-left">
        <p className="text-xl font-bold">
        settings
        </p> 
        <label className="block mb-3 mt-5 font-bold text-sm">work: {settingsInfo.workMinutes}:00</label>
        <ReactSlider 
            className="h-10 border-4 border-[#2cb2cd] rounded-3xl"
            thumbClassName="bg-[#2cb2cd] w-9 h-9 cursor-pointer rounded-3xl "
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />
        <label className="block mb-3 mt-5 font-bold text-sm">break: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider 
            className="h-10 border-4 border-green-500 rounded-3xl"
            thumbClassName="bg-green-500 w-9 h-9 cursor-pointer rounded-3xl "
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={120}
            />
            <div className="text-center mt-8 mb-4">
        <BackButton onClick={()=> settingsInfo.setShowSettings(false)}/>    
            </div>
    </div>
  )
}

export default Settings