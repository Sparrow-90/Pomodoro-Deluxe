import { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import { useContext } from "react";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="text-left">
        Settings
        <label className="block mb-3 mt-5">work: {settingsInfo.workMinutes}:00</label>
        <ReactSlider 
            className="h-10 border-2 border-red-500 rounded-3xl"
            thumbClassName="bg-red-500 w-10 h-10 cursor-pointer rounded-3xl "
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
    </div>
  )
}

export default Settings