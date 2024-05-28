'use client';

import MediaContent from '@/app/(afterLogin)/_components/media/MediaContent';

import { ModalContainer, Overlay } from './_style';

function MediaPage() {
  return (
    <Overlay>
      <ModalContainer>
        <MediaContent />
      </ModalContainer>
    </Overlay>
  );
}

export default MediaPage;
