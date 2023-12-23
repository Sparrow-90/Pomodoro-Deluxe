import cog from "/assets/cog.svg"

function SettingButton(props) {
  return (
    <button {...props} className="w-auto bg-slate-700 py-2 px-4 rounded-lg text-xl leading-8 flex gap-2 items-center">
        <img className="w-9" src={cog} alt="" />
        Settings
    </button>
  )
}

export default SettingButton