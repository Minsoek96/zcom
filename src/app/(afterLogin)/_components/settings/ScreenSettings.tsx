import FontSizeSetting from './font/FontSizeSetting';
import Guide from './Guide';
import ThemeSetting from './theme/ThemeSetting';

export default function ScreenSetting() {
  return (
    <div>
      <Guide />
      <FontSizeSetting />
      <ThemeSetting />
    </div>
  );
}
