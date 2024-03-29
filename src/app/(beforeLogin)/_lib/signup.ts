'use server';

import { redirect } from 'next/navigation';

const submit = async (
  state: { message: string | null },
  formData: FormData,
): Promise<{ message: string | null}> => {
  'use server';

  if (!formData.get('name')) {
    return { message: 'no_name' };
  }
  if (!formData.get('id')) {
    return { message: 'no_id' };
  }
  if (!formData.get('password')) {
    return { message: 'no_password' };
  }
  if (!formData.get('image')) {
    return { message: 'no_image' };
  }

  let shouldRedirect = false;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: 'post',
        body: formData,
        credentials: 'include',
      },
    );

    if (response.status === 403) {
      return { message: 'user_exists' };
    }

    console.log(await response.json());
    shouldRedirect = true;
  } catch (error) {
    console.error(error);
  }

  if (shouldRedirect) {
    console.log('redirect');
    redirect('/home');
  }
  return { message: '' };
};

export default submit;
