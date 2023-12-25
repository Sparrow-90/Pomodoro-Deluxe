import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingButton from './SettingButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';

const percentage = 60;

export default function Timer() {
  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState('work')
  const [secondLeft, setSecondLeft] = useState(0);
  const secondsLeftRef = useRef(secondLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode)

  function switchMode(){
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes)
    setMode(nextMode);
    modeRef.current = nextMode
    setSecondLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds
  };

  function tick(){
    secondsLeftRef.current--;
    setSecondLeft(secondsLeftRef.current)
  };
  function initTimer(){
    setSecondLeft(settingsInfo.workMinutes * 60);
  };
  useEffect(()=>{
    initTimer();
    const interval = setInterval(()=>{
      if(isPausedRef.current){
        return;
      }
      if(secondsLeftRef.current === 0){
        return switchMode()
      }
      tick()
    }, 1000);
    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondLeft / totalSeconds * 100);
  const minutes = Math.floor(secondLeft / 60);
  let seconds = secondLeft % 60;
  if(seconds < 10) seconds = '0' + seconds;

  return (
    <div className='mt-8'>
      <CircularProgressbar value={percentage} text={minutes + ':' + seconds} styles={buildStyles({
        textColor: '#fff',
        pathColor: mode === 'work' ? '#ef4444' : 'green',
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
