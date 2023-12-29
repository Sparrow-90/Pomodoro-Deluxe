import play from "/assets/play.svg"

export default function PlayButton(props) {
  return (
    <button {...props} className="w-20 bg-transparent inline-block">
        <img className="text-white drop-shadow-md " src={play} alt="" />
    </button>
  )
}
