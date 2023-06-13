import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className='flex items-center justify-center gap-x-1 pl-2'>
      <RiSunFill
        className={`text-2xl transition duration-150 ease-in-out hover:scale-125 ${
          theme === 'light' && `text-secondary-600`
        }`}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <input
        type='checkbox'
        id='theme-switch'
        className='checked: +label:after:bg-black hidden h-0 w-0'
        checked={theme === 'light' ? false : true}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <label htmlFor='theme-switch' className='theme-switch'></label>
      <RiMoonFill
        className={`text-2xl transition duration-150 ease-in-out hover:scale-125 ${
          theme === 'dark' && `text-secondary-500`
        }`}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
    </div>
  );
};
export default ThemeSwitch;
