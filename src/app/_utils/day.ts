import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type DayType = {
    createdAt: Date;
}
const formatTimeFromNow = ({ createdAt }:DayType) => `${dayjs(createdAt).fromNow(true)}`;

export default formatTimeFromNow;
