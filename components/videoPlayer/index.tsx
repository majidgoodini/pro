import { useLogMutation } from 'libs/redux/services/karnama'
import { RootState } from 'libs/redux/store'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaLoadedMetadataEvent, SeekButton, MediaPlayer, MediaPlayerInstance, MediaPlayingEvent, MediaProvider, useMediaState, DefaultLayoutTranslations, Controls } from '@vidstack/react';

// See "Icons" component page for setup before importing the following:
import { SeekForward10Icon } from '@vidstack/react/icons';


import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export const VideoJS = (props: any) => {
  const player = useRef<MediaPlayerInstance>(null);
  const paused = useMediaState('paused', player);

  const { accessToken } = useSelector((state: RootState) => state.auth)
  const { src, id, timeOfVideo, setShowNewUGQ, onTimeChange, changeCurrentTime, setChangeCurrentTime } = props

  const [secondCounter, setSecondCounter] = useState(0)

  const [sendLog] = useLogMutation()
  useEffect(() => {
    console.log(changeCurrentTime)
    if (changeCurrentTime>=0 && player.current)
      player.current.currentTime = changeCurrentTime
    setChangeCurrentTime(-1)
  }, [changeCurrentTime])

  // useEffect(() => { 
  //   const handleOrientationChange = () => {
  //     console.log(screen.orientation.angle)
  //     if (screen.orientation.angle === 90 || screen.orientation.angle === -90) {
  //       // Device is in landscape mode
  //       player.current?.enterFullscreen()
  //     } else {
  //       // Device is in portrait mode
  //       player.current?.exitFullscreen()

  //     }
  //   };

  //   window.addEventListener('orientationchange', handleOrientationChange);

  //   // Cleanup listener on component unmount
  //   return () => {
  //     window.removeEventListener('orientationchange', handleOrientationChange);
  //   };
  // }, []);


  const localSendLog = (action: string) => {
    if (accessToken && player.current) {
      sendLog({
        playLogDto: {
          action,
          time: +player.current.currentTime.toFixed(0),
          lessonId: id,
          speed: player.current.playbackRate as number,
        },
      })
    }
  }

  const checkAndCount = () => {
    if (!paused) {
      setSecondCounter((t) => {
        if (t >= 60) {
          localSendLog('Playing')
          return 0
        }
        localStorage.setItem(`currentTimeVideo-${id}`, (player.current?.currentTime as number).toFixed(0))
        return t + (player.current?.playbackRate as number ?? 0)
      })

    }
    onTimeChange && onTimeChange(player.current?.currentTime)
  }
  useEffect(() => {
    setShowNewUGQ && setShowNewUGQ(paused)
    console.log("paused", paused)
    localSendLog(paused === true ? 'Pause' : 'Play')
    const interval = setInterval(checkAndCount, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [paused])

  function onLoadedMetadata(nativeEvent: MediaLoadedMetadataEvent) {
    // if (player.current)
      // player.current.currentTime = timeOfVideo || 0
    console.log(nativeEvent)
  }





  // useEffect(() => {
  //   const player = playerRef.current

  //   return () => {
  //     if (player && !player.isDisposed()) {
  //       player.dispose()
  //       playerRef.current = null
  //     }
  //   }
  // }, [playerRef])

  return (
    <div style={{ direction: "ltr" }}>
      <MediaPlayer autoPlay onLoadedMetadata={onLoadedMetadata} src={src} ref={player} storage="videoOptions"
        poster='https://newcdn.namatek.com/playerposter.jpg'
        playsInline

      >
        <DefaultVideoLayout icons={defaultLayoutIcons} />
        <MediaProvider />

      </MediaPlayer >
    </div>
  )
}

export default VideoJS
