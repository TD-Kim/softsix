import { useMemo } from 'react';
import useSWR, { mutate } from 'swr';

const initialState = {
  openedItem: 'dashboard',
  openedComponent: 'buttons',
  openedHorizontalItem: null,
  isDashboardDrawerOpened: false,
  isComponentDrawerOpened: true,
};

export const endpoints = {
  key: 'api/menu',
  master: 'master',
  dashboard: '/dashboard', // server URL
};

export function useGetMenuMaster() {
  // 데이터 fetch
  const { data, isLoading } = useSWR(
    endpoints.key + endpoints.master,
    () => initialState,
    {
      revalidateIfStale: false, // 데이터 오래된 경우 자동 요청 X
      revalidateOnFocus: false, // 창이 다시 포커스될 때 자동으로 데이터 갱신 X
      revalidateOnReconnect: false, // 네트워크 재연결시 자동으로 데이터 갱신 X
    }
  );

  // data, isLoading 반환
  const memoizedValue = useMemo(
    () => ({
      menuMaster: data, // 메뉴 데이터
      menuMasterLoading: isLoading, // 로딩상태
    }),
    [data, isLoading] // 데이터와 로딩상태 변경시 다시 실행
  );

  return memoizedValue;
}

export function handlerDrawerOpen(isDashboardDrawerOpened) {
  // to update local state based on key

  mutate(
    endpoints.key + endpoints.master,
    (currentMenuMaster) => {
      return { ...currentMenuMaster, isDashboardDrawerOpened };
    },
    false
  );
}

export function handlerActiveItem(openedItem) {
  // to update local state based on key

  mutate(
    endpoints.key + endpoints.master,
    (currentMenuMaster) => {
      return { ...currentMenuMaster, openedItem };
    },
    false
  );
}
