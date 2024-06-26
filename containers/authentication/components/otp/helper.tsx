import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { BackIcon, OtpAvatarImg } from 'assets/icons'
import { onLogin } from 'containers/authentication/components/signIn/helper'
import { setUserNameAndPassword } from 'libs/redux/slices/auth'
import {
  ApiError,
  useSignInByOtpMutation,
  useVerfySignInByOtpMutation,
} from 'libs/redux/services/karnama'
import Modal from 'components/ui/Modal'
import Button from 'components/ui/Button'
import CodeInput from 'components/ui/CodeInput'
import Row from 'components/ui/Row'
import cn from 'classnames'

import type { AuthFields } from 'containers/authentication/interface'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import type { IConfirmOtpProps } from './interface'
import styles from './otp.module.scss'

export const ConfirmOtp = ({ changeMode, data, setStep }: IConfirmOtpProps) => {
  const dispatch = useDispatch()
  const [isSessionLimit, setIsSessionLimit] = useState(false)
  const [timer, setTimer] = useState<number>(60)
  const [code, setCode] = useState<string>('')

  const [verifyOtp, { isLoading, data: verifyOtpResult, error }] =
    useVerfySignInByOtpMutation()

  const apiError = (error as FetchBaseQueryError)?.data as ApiError

  const [signInByOTP] = useSignInByOtpMutation()

  const handleInputs = (inputsValue: string) => {
    verifyOtp({
      verfySignInByOtpCommand: { userName: data, code: inputsValue },
    })
      .unwrap()
      .then((res) => {
        onLogin(res)
      })
      .catch((err) => {
        if (err.status === 403) {
          setIsSessionLimit(true)
        }
      })
      .finally(() => {
        dispatch(
          setUserNameAndPassword({ userName: data, password: inputsValue })
        )
      })
  }

  useEffect(() => {
    let isMount = true
    const interval =
      timer && setTimeout(() => isMount && setTimer((prev) => prev - 1), 1000)

    return () => {
      isMount = false
      clearInterval(interval)
    }
  }, [timer])

  const resend = () => {
    signInByOTP({ signInByOtpCommand: { userName: data } })
      .unwrap()
      .then(() => {
        setTimer(60)
      })
  }

  const onSubmit = (authFields: AuthFields) => handleInputs(authFields.password)

  return (
    <Row className={styles['confirmOtp']} direction='column' align='middle'>
      {/* <Modal visible={isSessionLimit}>
        <Session
          isOtp
          onSubmit={onSubmit}
          setIsSessionLimit={setIsSessionLimit}
        />
      </Modal> */}

      <div className={styles['confirmOtp__img']}>
        <img src={OtpAvatarImg} alt='avatar' />
      </div>

      <Button onClick={() => setStep(1)} data-selector='back'>
        <BackIcon />
      </Button>

      <span className={styles['confirmOtp--title']}>{data}</span>

      {Number(data) ? (
        <span className={styles['confirmOtp--subTitle']}>
          لطفا کد تایید ارسال شده به شماره {data} را وارد نمایید.
        </span>
      ) : (
        <span className={styles['confirmOtp--subTitle']}>
          لطفا کد تایید ارسال شده به ایمیل {data} را وارد نمایید.
        </span>
      )}

      <Button
        onClick={() => setStep(1)}
        btnType='ghost'
        className={styles['confirmOtp--edit']}
        size='small'
      >
        {Number(data) ? 'اصلاح شماره موبایل' : 'اصلاح ایمیل'}
      </Button>

      <Row
        className={cn(
          styles['confirmOtp__inputs'],
          verifyOtpResult ? styles['confirmOtp--inputError'] : ''
        )}
        direction='row-reverse'
        justify='space-between'
      >
        <CodeInput
          length={4}
          getValue={handleInputs}
          onChange={(e) => setCode(e)}
        />
      </Row>
      {apiError && (
        <span className={styles['confirmOtp--error']}>{apiError?.message}</span>
      )}

      <Row
        className={styles['confirmOtp__reSend']}
        align='middle'
        justify='center'
      >
        <span>
          {timer || (
            <Button btnType='ghost' onClick={resend} size='small'>
              ارسال مجدد کد تایید
            </Button>
          )}
        </span>
      </Row>

      {/* <Row className={styles['confirmOtp__policy']} justify='center'>
        <span>ورود/ثبت نام، به معنای پذیرش</span>
        <Button target='_blank' href='/terms'>
          قوانین نماتک
        </Button>
        <span>می‌باشد.</span>
      </Row> */}

      <Button
        className={styles['confirmOtp--accept']}
        type='submit'
        btnType='primary'
        bgColor='white-blue-gradient'
        onClick={() => handleInputs(code)}
        disabled={code.length < 4}
        loading={isLoading}
        size='large'
      >
        ورود به نماتک
      </Button>

      {/* <Button
        className={styles['confirmOtp--enter']}
        onClick={() => changeMode('signIn')}
        btnType='ghost'
        color='primary'
        size='large'
      >
        ورود با رمز عبور
      </Button> */}
    </Row>
  )
}
