export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const cvUrl =
  'https://drive.google.com/file/d/1Cf5NqaByG7r-lPeSRFexDo8oi0LXYzBT/view?usp=sharing';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;
