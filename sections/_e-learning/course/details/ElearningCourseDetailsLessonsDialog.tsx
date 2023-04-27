// @mui
import {
  Box,
  Stack,
  Dialog,
  Typography,
  ListItemButton,
  IconButton,
} from '@mui/material'
import Player from 'components/player'
import Iconify from 'components/iconify'
import Scrollbar from 'components/scrollbar'
import type { Lesson } from 'libs/redux/services/karnama'

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
  return (
    <Dialog
      fullWidth
      maxWidth='lg'
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { overflow: 'hidden' } }}
    >
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box
          sx={{
            position: 'relative',
            width: { xs: 1, md: 0.5 },
            height: { xs: 320, md: 640 },
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{ top: 16, left: 16, zIndex: 9, position: 'absolute' }}
          >
            <Iconify icon='carbon:close' />
          </IconButton>

          <Player
            controls
            url={selectLesson?.videoUrl as string}
            playing={selected}
            onEnded={onVideoEnded}
          />
        </Box>
      </Stack>
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
      disabled={!lesson.isFree}
      onClick={onSelectVideo}
      sx={{ borderRadius: 1 }}
    >
      <Iconify
        width={24}
        icon={!lesson.isFree ? 'carbon:locked' : playIcon}
        sx={{
          mr: 2,
          ...(selected && {
            color: 'primary.main',
          }),
          ...(!lesson.isFree && {
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
