import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 60;

export default function Timer() {
  return (
    <div>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  )
}
