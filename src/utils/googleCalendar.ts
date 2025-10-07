/**
 * Google Calendar API 整合工具
 * 用於獲取歇民宿可預訂房間的日曆事件
 */

const CALENDAR_ID = process.env.GATSBY_GOOGLE_CALENDAR_ID || '';
const API_KEY = process.env.GATSBY_GOOGLE_CALENDAR_API_KEY || '';

export interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    date?: string;
    dateTime?: string;
  };
  end: {
    date?: string;
    dateTime?: string;
  };
  status: string;
}

export interface CalendarEventsResponse {
  kind: string;
  etag: string;
  summary: string;
  items: CalendarEvent[];
}

/**
 * 獲取指定時間範圍內的日曆事件
 * @param timeMin - 開始日期時間 (ISO 8601 格式)
 * @param timeMax - 結束日期時間 (ISO 8601 格式)
 * @returns Promise<CalendarEvent[]>
 */
export async function getCalendarEvents(
  timeMin: string,
  timeMax: string,
): Promise<CalendarEvent[]> {
  if (!API_KEY) {
    console.error('Google Calendar API Key 未設定');
    throw new Error('Google Calendar API Key is required');
  }

  const params = new URLSearchParams({
    key: API_KEY,
    timeMin,
    timeMax,
    singleEvents: 'true',
    orderBy: 'startTime',
    maxResults: '2500',
  });

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?${params}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Google Calendar API 錯誤: ${response.status} ${response.statusText}`,
      );
    }

    const data: CalendarEventsResponse = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('獲取日曆事件失敗:', error);
    throw error;
  }
}

/**
 * 檢查特定日期是否已被預訂
 * @param date - 要檢查的日期 (YYYY-MM-DD 格式)
 * @param events - 日曆事件陣列
 * @returns boolean
 */
export function isDateBooked(
  checkDate: Date,
  events: CalendarEvent[],
): boolean {
  return events.some((event) => {
    const eventStart = new Date(event.start.date || event.start.dateTime || '');
    const eventEnd = new Date(event.end.date || event.end.dateTime || '');
    return eventStart <= checkDate && eventEnd > checkDate;
  });
}

/**
 * 獲取月份的日曆事件（從當月1號到下個月最後一天）
 * @param year - 年份
 * @param month - 月份 (0-11)
 * @returns Promise<CalendarEvent[]>
 */
export async function getMonthEvents(
  year: number,
  month: number,
): Promise<CalendarEvent[]> {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0, 23, 59, 59);

  const timeMin = startDate.toISOString();
  const timeMax = endDate.toISOString();

  return getCalendarEvents(timeMin, timeMax);
}

/**
 * 獲取指定日期範圍的事件
 * @param startDate - 開始日期
 * @param endDate - 結束日期
 * @returns Promise<CalendarEvent[]>
 */
export async function getEventsByDateRange(
  startDate: Date,
  endDate: Date,
): Promise<CalendarEvent[]> {
  const timeMin = startDate.toISOString();
  const timeMax = endDate.toISOString();

  return getCalendarEvents(timeMin, timeMax);
}
