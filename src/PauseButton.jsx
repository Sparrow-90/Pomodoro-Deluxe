import pause from "/assets/pause.svg"

function PauseButton(props) {
  return (
    <button {...props} className="w-20 bg-transparent inline-block">
        <img src={pause} alt="" />
    </button>
  )
}

export default PauseButton