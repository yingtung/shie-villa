import React, { useState } from 'react';
import { useYearCalendarEvents } from '../hooks/useCalendarEvents';
import { isDateBooked } from '../utils/googleCalendar';

interface ReservationCalendarProps {
  className?: string;
}

const WEEKDAYS = ['一', '二', '三', '四', '五', '六', '日'];
const MONTHS = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];

const ReservationCalendar: React.FC<ReservationCalendarProps> = ({
  className = '',
}) => {
  const today = new Date();
  const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);

  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  // 一次性獲取未來一年的所有事件
  const { events, loading, error } = useYearCalendarEvents();

  // 獲取當月的第一天和最後一天
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  // 獲取當月第一天是星期幾，星期天是7
  const firstDayWeekday =
    firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();

  // 獲取當月有多少天
  const daysInMonth = lastDayOfMonth.getDate();

  // 檢查是否可以往前一個月（不能早於當前月份）
  const canGoPrevious = () => {
    const currentViewDate = new Date(currentYear, currentMonth, 1);
    return currentViewDate > currentMonthStart;
  };

  // 檢查是否可以往後一個月（不能超過一年後）
  const canGoNext = () => {
    const currentViewDate = new Date(currentYear, currentMonth, 1);
    const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), 1);
    return currentViewDate < maxDate;
  };

  // 上個月
  const goToPreviousMonth = () => {
    if (!canGoPrevious()) return;

    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // 下個月
  const goToNextMonth = () => {
    if (!canGoNext()) return;

    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // 產生日曆格子
  const renderCalendarDays = () => {
    const days = [];

    // 填充前面的空格
    for (let i = 1; i < firstDayWeekday; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-auto"></div>);
    }

    // 填充日期
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isToday = date.toDateString() === today.toDateString();
      const isPast = !isToday && date < today;
      const booked = !isPast && isDateBooked(date, events);

      let dayClasses =
        'aspect-auto p-4 border border-gray-200 flex flex-col items-center justify-center';

      if (isPast) {
        dayClasses += ' bg-gray-200 text-white text-lg';
      } else if (booked) {
        dayClasses += ' bg-gray-400 text-white text-lg';
      } else {
        dayClasses += ' bg-(--text-color-primary)/80 text-white font-semibold ';
      }

      if (isToday) {
        dayClasses += ' ring-2 ring-blue-500';
      }

      days.push(
        <div key={day} className={dayClasses}>
          <div className="text-xl">{day}</div>
          <div className="text-[10px] mt-1">{booked ? '已預訂' : ''}</div>
        </div>,
      );
    }

    return days;
  };

  if (error) {
    return (
      <div
        className={`p-4 bg-red-50 border border-red-200 rounded-lg ${className}`}
      >
        <p className="text-red-600">載入日曆時發生錯誤</p>
        <p className="text-sm text-red-500 mt-2">{error.message}</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg p-4 ${className}`}>
      {/* 日曆標題 */}
      <div className="flex items-center justify-between mb-4">
        {canGoPrevious() ? (
          <button
            onClick={goToPreviousMonth}
            className={
              'px-3 py-1 rounded transition-colors bg-(--button-color) hover:bg-(--button-color-secondary) cursor-pointer'
            }
            aria-label="上個月"
          >
            ←
          </button>
        ) : (
          <div></div>
        )}
        <h2 className="text-xl font-semibold">
          {currentYear} 年 {MONTHS[currentMonth]}
        </h2>
        {canGoNext() ? (
          <button
            onClick={goToNextMonth}
            className={
              'px-3 py-1 rounded transition-colors bg-(--button-color) hover:bg-(--button-color-secondary) cursor-pointer'
            }
            aria-label="下個月"
          >
            →
          </button>
        ) : (
          <div></div>
        )}
      </div>

      {/* 星期標題 */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="flex items-center justify-center font-semibold text-gray-700 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* 日曆格子 */}
      {loading ? (
        <div className="flex items-center justify-center ">
          <div className="text-gray-500">載入中...</div>
        </div>
      ) : (
        <div className="grid grid-cols-7 gap-1 auto-rows-fr">
          {renderCalendarDays()}
        </div>
      )}

      {/* 圖例 */}
      <div className="mt-4 flex flex-wrap gap-4 text-lg">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-(--text-color-primary)/80 border border-gray-200"></div>
          <span>可預訂</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-400 border border-gray-200"></div>
          <span>已預訂</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 border border-gray-200"></div>
          <span>已過去</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationCalendar;
