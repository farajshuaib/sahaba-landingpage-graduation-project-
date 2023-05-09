import React, { startTransition, useEffect, useState } from "react";

interface RenderedDate {
  months: number;
  days: number;
  hours: number;
  mins: number;
  seconds: number;
}

const currentTime = new Date().getTime();

// time after which the countdown should stop
// endTime is in milliseconds
const CountDownComp: React.FC<{ endDate: Date }> = ({ endDate }) => {
  const [time, setTime] = useState<Date | null>();
  const [renderedDate, setRenderedDate] = useState<RenderedDate | null>(null);


  useEffect(() => {
    setTime(new Date(endDate.getTime() - currentTime));
  }, []);

  useEffect(() => {
    if (time) {
      const interval = setInterval(() => {
        setTime(new Date(time.getTime() - 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  // dif between two dates

  useEffect(() => {
    if (time) {
      setRenderedDate({
        months: time.getMonth(),
        days: time.getDate(),
        hours: time.getHours(),
        mins: time.getMinutes(),
        seconds: time.getSeconds(),
      });
    }
  }, [time]);

  if (!renderedDate || new Date().getTime() > endDate.getTime()) {
    return <span></span>;
  }

  return (
    <div className="flex-grow order-last w-full my-32 mt-4 text-center select-none xl:order-none xl:mt-0 xl:w-auto">
      <p className="mb-4 text-2xl leading-relaxed tracking-wider text-center">
        Launch In
      </p>
      <div className="flex items-center justify-center w-full text-4xl text-center">
        <div className="w-24 p-2 mx-1 rounded-lg bg-gray-50 dark:bg-slate-800">
          <div className="font-mono leading-none">{renderedDate?.months}</div>
          <div className="font-mono text-sm leading-none uppercase">Months</div>
        </div>
        <div className="w-24 p-2 mx-1 rounded-lg bg-gray-50 dark:bg-slate-800">
          <div className="font-mono leading-none">{renderedDate?.days}</div>
          <div className="font-mono text-sm leading-none uppercase">Days</div>
        </div>
        <div className="w-24 p-2 mx-1 rounded-lg bg-gray-50 dark:bg-slate-800">
          <div className="font-mono leading-none">{renderedDate.hours}</div>
          <div className="font-mono text-sm leading-none uppercase">Hours</div>
        </div>
        <div className="w-24 p-2 mx-1 rounded-lg bg-gray-50 dark:bg-slate-800">
          <div className="font-mono leading-none">{renderedDate.mins}</div>
          <div className="font-mono text-sm leading-none uppercase">
            Minutes
          </div>
        </div>
        <div className="w-24 p-2 mx-1 rounded-lg bg-gray-50 dark:bg-slate-800">
          <div className="font-mono leading-none">{renderedDate.seconds}</div>
          <div className="font-mono text-sm leading-none uppercase">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownComp;
