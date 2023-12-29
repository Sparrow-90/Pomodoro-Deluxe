import backArrow from "/assets/arrow.svg"

function BackButton(props) {
  return (
    <button {...props} className="w-auto bg-gradient-to-tr from-cyan-800 to-cyan-900 py-2 px-4 rounded-lg text-xl leading-8 flex gap-2 items-center">
       <img className="w-9" src={backArrow} alt="" /> 
       Back
    </button>
  )
}

export default BackButton