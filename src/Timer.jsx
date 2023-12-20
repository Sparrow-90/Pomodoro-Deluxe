import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';


const percentage = 60;

export default function Timer() {
  return (
    <div>
      <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
        textColor: '#fff',
        pathColor: '#ef4444',
        tailColor: '#10b981'
      })}/>
      <section className='mt-[20px]'>
        <PlayButton/>
        <PauseButton/>
      </section>
    </div>
  )
}
