import ReactSlider from "react-slider";

function Settings() {
  return (
    <div className="text-left">
        Settings
        <label className="block mb-3 mt-5">work minutes</label>
        <ReactSlider 
            className="h-10 border-2 border-red-500 rounded-3xl"
            thumbClassName="bg-red-500 w-10 h-10 cursor-pointer rounded-3xl "
            trackClassName={'track'}
            value={45}
            min={1}
            max={120}
            />
        <label className="block mb-3 mt-5">break minutes</label>
        <ReactSlider 
            className="h-10 border-2 border-green-500 rounded-3xl"
            thumbClassName="bg-green-500 w-10 h-10 cursor-pointer rounded-3xl "
            trackClassName={'track'}
            value={45}
            min={1}
            max={120}
            />
    </div>
  )
}

export default Settings