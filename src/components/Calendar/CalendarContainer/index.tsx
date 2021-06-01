import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useEffect, useState } from 'react';
dayjs.extend(weekOfYear);

const CalendarContainer = (): JSX.Element => {
	const [addNumber, setAddNumber] = useState<number>(0);
	let dayJs = dayjs().startOf('month').add(addNumber, 'month').startOf('week');

	const startWeek = dayJs.startOf('month').week();
	const endWeek = dayJs.endOf('month').week() === 1 ? 53 : dayJs.endOf('month').week();
	const blankWeek = endWeek - startWeek === 4 ? endWeek + 1 : endWeek;
	const arr: Dayjs[][] = [];

	useEffect(() => {
		for (let week = startWeek; week <= blankWeek; week++) {
			arr.push(
				Array(7)
					.fill(0)
					.map((_, index) => {
						if (startWeek - week === 0 && index === 0) {
							return dayJs;
						}

						dayJs = dayJs.add(1, 'day');
						return dayJs;
					}),
			);
		}

		console.log(arr);
	}, [addNumber]);

	return (
		<div>
			<div onClick={() => setAddNumber(addNumber - 1)}>-</div>
			<div onClick={() => setAddNumber(addNumber + 1)}>+</div>
		</div>
	);
};

export default CalendarContainer;

// class Calendar {
//   public targetDate: Moment;
//   private _startWeek: number;
//   private _endWeek: number;
//   private _blankWeek: number;
//   public calendarArr: Moment[][];

//   constructor(monthChange: number) {
//     this.targetDate = moment();
//     this.targetDate.add(monthChange, "month");
//     this._startWeek = this.targetDate.clone().startOf("month").week();
//     this._endWeek = this.targetDate.clone().endOf("month").week() === 1 ? 53 : this.targetDate.clone().endOf("month").week();
//     this._blankWeek = this._endWeek - this._startWeek === 4 ? this._endWeek + 1 : this._endWeek;
//     this.calendarArr = [];

//     this.calenarLoop();
//   }

//   calenarLoop() {
//     for (let week = this._startWeek; week <= this._blankWeek; week++) {
//       this.calendarArr.push(
//         Array(7)
//           .fill(0)
//           .map((n, i) => {
//             return this.targetDate
//               .clone()
//               .week(week)
//               .startOf("week")
//               .add(n + i, "day");
//           })
//       );
//     }
//   }
// }

// export default Calendar;
