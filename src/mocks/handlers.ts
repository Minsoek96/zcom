import { HttpResponse, delay, http } from 'msw';

import { faker } from '@faker-js/faker';

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

const User = [
  { id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg' },
  { id: 'zerohch0', nickname: '제로초', image: '/5Udwvqim.jpg' },
  { id: 'coco', nickname: '코코', image: faker.image.avatar() },
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

  http.post('/api/logout', () => {
    console.log('로그아웃');
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),

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

  http.get('/api/postRecommends', async () => {
    await delay(3000);
    return HttpResponse.json(
      [
        {
          postId: 1,
          User: User[0],
          content: `${1} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
          createdAt: generateDate(),
        },
        {
          postId: 2,
          User: User[0],
          content: `${2} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: 3,
          User: User[0],
          content: `${3} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [],
          createdAt: generateDate(),
        },
        {
          postId: 4,
          User: User[0],
          content: `${4} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
            { imageId: 4, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
        {
          postId: 5,
          User: User[0],
          content: `${5} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
          ],
          createdAt: generateDate(),
        },
      ],
    );
  }),

  http.get('/api/followingPosts', async () => HttpResponse.json(
    [
      {
        postId: 1,
        User: User[0],
        content: `${1} X.com is so marvelous. I'm gonna buy that.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} X.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} X.com is so marvelous. I'm gonna buy that.`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} X.com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} X .com is so marvelous. I'm gonna buy that.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ],
  )),
];

export default handlers;
