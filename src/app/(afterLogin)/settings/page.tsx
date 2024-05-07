import Header from '@/app/_components/ui/Header';
import ThemeSettings from '../_components/settings/ThemeSettings';

export default function SettingPage() {
  return (
    <div>
      <Header mainText="화면" />
      <ThemeSettings />
    </div>
  );
}
