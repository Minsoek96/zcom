'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';

import { CloseIcon } from '@/app/(afterLogin)/_constants/MenuIcons';
import style from './login.module.css';

function LoginModal() {
  const router = useRouter();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    try {
      await signIn('credentials', {
        username: id,
        password,
        redirect: false,
      });
    } catch (error) {
      setMessage('아이디와 비밀번호가 일치하지 않습니다.');
    }
    router.replace('/home');
  };
  const onClickClose = () => {
    router.back();
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setId(target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setPassword(target.value);
  };

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button
            type="button"
            className={style.closeButton}
            onClick={onClickClose}
          >
            <CloseIcon />
            {}
          </button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                className={style.input}
                value={id}
                onChange={onChangeId}
                type="text"
                placeholder=""
                autoComplete="username"
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className={style.input}
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
                autoComplete="current-password"
              />
            </div>
          </div>
          <div className={style.message}>{message}</div>
          <div className={style.modalFooter}>
            <button
              type="submit"
              className={style.actionButton}
              disabled={!id || !password}
            >
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
