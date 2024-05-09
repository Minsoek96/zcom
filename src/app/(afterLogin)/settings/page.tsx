import Header from '@/app/_components/ui/Header';
import ScreenSetting from '../_components/settings/ScreenSettings';

export default function SettingPage() {
  return (
    <div>
      <Header mainText="화면" />
      <ScreenSetting />
    </div>
  );
}
