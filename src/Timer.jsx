import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingButton from './SettingButton';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContext';

// const percentage = 60;

export default function Timer() {
  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work')
  const [secondsLeft, setSecondsLeft] = useState(0);
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick(){
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current)
  };


  useEffect(()=>{

    function switchMode(){
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) *60
      setMode(nextMode);
      modeRef.current = nextMode
      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    };
  
    function initTimer(){
      secondsLeftRef.current = settingsInfo.workMinutes * 60
      setSecondsLeft(secondsLeftRef.current);
    };
    
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

  const totalSeconds = mode === 'work' 
      ? settingsInfo.workMinutes * 60 
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  if(seconds < 10) seconds = '0' + seconds;

  return (
    <div className='mt-8'>
      <CircularProgressbar 
          value={percentage} 
          text={minutes + ':' + seconds} 
          styles={buildStyles({
        textColor: '#fff',
        pathColor: mode === 'work' ? '#2cb2cd' : '#f25774',
        tailColor: '#10b981'
      })}/>
      <section className='mt-[20px]'>
        {isPaused 
          ? <PlayButton onClick={()=>{setIsPaused(false); isPausedRef.current = false}}/> 
          : <PauseButton onClick={()=>{setIsPaused(true); isPausedRef.current = true}}/>}
      </section>
      <section className='mt-[20px] flex justify-center'>
        <SettingButton onClick={()=> settingsInfo.setShowSettings(true)} />
      </section>
    </div>
  )
}
