'use client';

import { useEffect, useState } from 'react';

// Back으로 활용할시
// export default function MSWComponent() {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//         // eslint-disable-next-line global-require
//         require('@/mocks/browser');
//       }
//     }
//   }, []);

//   return null;
// }

export default function MSWComponent() {
  const [isWorkerStarted, setIsWorkerStarted] = useState(false);

  useEffect(() => {
    // if (process.env.NODE_ENV === 'development') {
    if (typeof window !== 'undefined' && !isWorkerStarted) {
      (async () => {
        const { worker } = await import('@/mocks/browser');
        worker.start();
        setIsWorkerStarted(true);
      })();
      // }
    }
  }, [isWorkerStarted]);

  return null;
}
