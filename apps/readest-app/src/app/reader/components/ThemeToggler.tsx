import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

import { useThemeStore } from '@/store/themeStore';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsiveSize } from '@/hooks/useResponsiveSize';
import { nextThemeMode } from '@/utils/ambientLight';
import Button from '@/components/Button';

const ThemeToggler = () => {
  const _ = useTranslation();
  const { themeMode, isDarkMode, setThemeMode } = useThemeStore();
  const iconSize20 = useResponsiveSize(20);

  return (
    <Button
      icon={
        isDarkMode ? (
          <MdOutlineLightMode className='text-base-content' size={iconSize20} />
        ) : (
          <MdOutlineDarkMode className='text-base-content' size={iconSize20} />
        )
      }
      aria-label={_('Toggle Theme Mode')}
      onClick={() => setThemeMode(nextThemeMode(themeMode, isDarkMode))}
      label={isDarkMode ? _('Light Mode') : _('Dark Mode')}
    ></Button>
  );
};

export default ThemeToggler;
