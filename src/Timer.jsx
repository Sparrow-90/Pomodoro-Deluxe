import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingButton from './SettingButton';
import { useContext, useState } from 'react';
import SettingsContext from './SettingsContext';

const percentage = 60;

export default function Timer() {
  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className='mt-8'>
      <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
        textColor: '#fff',
        pathColor: '#ef4444',
        tailColor: '#10b981'
      })}/>
      <section className='mt-[20px]'>
        {isPaused ? <PlayButton/> : <PauseButton/>}
      </section>
      <section className='mt-[20px] flex justify-center'>
        <SettingButton onClick={()=> settingsInfo.setShowSettings(true)} />
      </section>
    </div>
  )
}
