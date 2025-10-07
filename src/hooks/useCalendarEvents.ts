import { useState, useEffect } from 'react';
import { getEventsByDateRange, CalendarEvent } from '../utils/googleCalendar';

interface UseCalendarEventsResult {
  events: CalendarEvent[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Hook 用於獲取和管理未來一年的日曆事件（從當前月份開始）
 * @returns UseCalendarEventsResult
 */
export function useYearCalendarEvents(): UseCalendarEventsResult {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);

      // 從當月第一天開始
      const today = new Date();
      const startDate = new Date(today.getFullYear(), today.getMonth(), 1);

      // 到一年後的月份最後一天
      const endDate = new Date(
        today.getFullYear() + 1,
        today.getMonth(),
        0,
        23,
        59,
        59,
      );

      const data = await getEventsByDateRange(startDate, endDate);
      setEvents(data);
    } catch (err) {
      setError(err as Error);
      console.error('獲取日曆事件失敗:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events,
    loading,
    error,
    refetch: fetchEvents,
  };
}
