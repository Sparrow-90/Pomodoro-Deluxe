import cog from "/assets/cog.svg"

function SettingButton(props) {
  return (
    <button {...props} className="w-auto bg-gradient-to-r from-gray-200 to-slate-300 py-2 px-4 rounded-lg text-xl leading-8 flex gap-2 items-center drop-shadow-md">
        <img className="w-9" src={cog} alt="" />
       <p className="text-slate-500 font-bold">
       settings
        </p> 
    </button>
  )
}

export default SettingButton