import { format, formatDistanceToNow } from 'date-fns';
import { enUS, ko } from 'date-fns/locale';

// 사용자 로케일 설정하는 함수
function getLocaleByUserLanguage() {
  const userLanguage = navigator.language || navigator.userLanguage;

  if (userLanguage.includes('ko')) {
    return ko;
  } else if (userLanguage.includes('en')) {
    return enUS;
  }

  return ko;
}

function getHourMinutes(dateStr) {
  const date = new Date(dateStr);
  const locale = getLocaleByUserLanguage();
  return dateStr ? format(date, 'a h:mm', { locale }) : '';
}

// formatted 시간 형식 함수 파일
function timeAgo(date) {
  const locale = getLocaleByUserLanguage(); // 나중에 context나 redux 로 변경
  return date
    ? formatDistanceToNow(new Date(date), { addSuffix: true, locale })
    : '';
}

export { getHourMinutes, timeAgo };
