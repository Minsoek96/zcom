'use client';

import { useRouter } from 'next/navigation';

import { CloseIcon } from '@/app/(afterLogin)/_constants/MenuIcons';

import style from './signup.module.css';

export default function BackButton() {
  const router = useRouter();

  const onClickClose = () => {
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  };

  return (
    <button
      type="button"
      className={style.closeButton}
      onClick={onClickClose}
    >
      {}
      <CloseIcon />
    </button>
  );
}
