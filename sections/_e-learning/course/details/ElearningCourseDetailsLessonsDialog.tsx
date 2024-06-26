import { useRef, useState } from 'react'
// @mui
import { Dialog, Typography, ListItemButton, IconButton } from '@mui/material'
import Iconify from 'components/iconify'
import type { Lesson } from 'libs/redux/services/karnama'
import VideoJS from 'components/videoPlayer'
import 'videojs-hotkeys'
import videojs from 'video.js'
import Button from 'components/ui/Button'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'

// ----------------------------------------------------------------------

type Props = {
  open: boolean
  selected: boolean
  onClose: VoidFunction
  onVideoEnded: VoidFunction
  lessons: Lesson[]
  selectLesson: Lesson | null
  onSelectVideo: (lesson: Lesson) => void
}

export default function ElearningCourseDetailsLessonsDialog({
  open,
  selected,
  lessons,
  onClose,
  selectLesson,
  onVideoEnded,
  onSelectVideo,
}: Props) {
  const playerRef = useRef(null)
  const [showNewUGQ, setShowNewUGQ] = useState(true)
  const { accessToken } = useSelector((state: RootState) => state.auth)

  const handleNewUGQ = () => {
    const url = `/dashboard/UGQ/${selectLesson?.id}?tov=${localStorage.getItem(`currentTimeVideo-${selectLesson?.id}`)}`
    window.open(url, "_blank", "noreferrer");
  }
  return (
    <Dialog
      fullWidth
      maxWidth='lg'
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { overflow: 'hidden' } }}
    >
      <div style={{"direction":"ltr"}}>
        <VideoJS
          id={selectLesson?.id}
          timeOfVideo={selectLesson?.userLessonCompleteds?.[0]?.timeOfVideo}
          src={selectLesson?.videoUrl}
          setShowNewUGQ={setShowNewUGQ}
        />
      </div>
      {/* <Player
            controls
            url={selectLesson?.videoUrl as string}
            playing={selected}
            onEnded={onVideoEnded}
          /> */}
      {accessToken && showNewUGQ &&
        <div style={{ position: 'fixed', top: "10%", right: "0%", transform: "translateX(-50%)" }}>
          <Button btnType='primary' onClick={handleNewUGQ} >طراحی سوال برای آزمون</Button>
        </div>}
    </Dialog>
  )
}

// ----------------------------------------------------------------------

type LessonItemProps = {
  selected: boolean
  lesson: Lesson
  onSelectVideo: VoidFunction
}

function LessonItem({ lesson, selected, onSelectVideo }: LessonItemProps) {
  const { title, description } = lesson

  const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play'

  return (
    <ListItemButton
      selected={selected}
      disabled={!lesson.isFree && !lesson.isOpen}
      onClick={onSelectVideo}
      sx={{ borderRadius: 1 }}
    >
      <Iconify
        width={24}
        icon={!lesson.isFree && !lesson.isOpen ? 'carbon:locked' : playIcon}
        sx={{
          mr: 2,
          ...(selected && {
            color: 'primary.main',
          }),
          ...(!lesson.isFree &&
            !lesson.isOpen && {
            color: 'text.disabled',
          }),
        }}
      />

      <div>
        <Typography
          noWrap
          variant='subtitle1'
          sx={{
            ...(selected && {
              color: 'primary.main',
            }),
          }}
        >
          {title}
        </Typography>

        <Typography noWrap variant='body2' sx={{ maxWidth: 0.98 }}>
          {description}
        </Typography>
      </div>
    </ListItemButton>
  )
}
