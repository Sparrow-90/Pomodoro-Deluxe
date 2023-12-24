import ReactSlider from "react-slider";

function Settings() {
  return (
    <div className="text-left">
        Settings
        <label className="block">work minutes</label>
        <ReactSlider 
            className="h-10 border-2 border-red-500 rounded-3xl"
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={45}
            min={1}
            max={120}
            />
        <label className="block">break minutes</label>
    </div>
  )
}

export default Settings