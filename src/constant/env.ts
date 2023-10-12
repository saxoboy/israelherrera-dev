export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const cvUrl =
  'https://drive.google.com/file/d/1_Uk18jCtBUingGMyTWwKsruDvXbskrU2/view';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;
