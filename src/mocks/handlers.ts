import { HttpResponse, http } from 'msw';

const User = [
  { id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg' },
  { id: 'zerohch0', nickname: '제로초', image: '/5Udwvqim.jpg' },
];

const handlers = [
  http.get('/api/trends', () => HttpResponse.json([
    { tagId: 1, title: '제로초', count: 1264 },
    { tagId: 2, title: '원초', count: 1264 },
    { tagId: 3, title: '투초', count: 1264 },
    { tagId: 4, title: '쓰리초', count: 1264 },
    { tagId: 5, title: '포초', count: 1264 },
    { tagId: 6, title: '파이브초', count: 1264 },
    { tagId: 7, title: '식스초', count: 1264 },
    { tagId: 8, title: '세븐초', count: 1264 },
    { tagId: 9, title: '나인초', count: 1264 },
  ])),

  http.post('/api/login', () => HttpResponse.json(User[1], {
    headers: {
      'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
    },
  })),

  http.post(
    '/api/users',
    async () => HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0',
      },
    }),
    // console.log('회원가입');
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // });
  ),
];

export default handlers;
