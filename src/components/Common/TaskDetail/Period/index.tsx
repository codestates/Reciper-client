import React, { Dispatch, forwardRef, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import { FlexSection, SectionTitle } from '../styles';
import { PeriodWrap, DateCustomBtn } from './styles';

interface Props {
	startDate: Date | undefined;
	endDate: Date | undefined;
	setStartDate: Dispatch<SetStateAction<Date | undefined>>;
	setEndDate: Dispatch<SetStateAction<Date | undefined>>;
}

const Period = ({ startDate, endDate, setStartDate, setEndDate }: Props): JSX.Element => {
	const DatePickerCustomBtn = forwardRef(({ value, onClick, type }: any, ref: any) => {
		return (
			<DateCustomBtn
				className="example-custom-input"
				style={{ color: value ? '#222' : '#a8a8a8', fontFamily: value ? 'NanumSquareR' : 'NanumSquareB' }}
				onClick={onClick}
				ref={ref}
			>
				{value ? value : type === 'start' ? 'Strat Date' : 'End Date'}
			</DateCustomBtn>
		);
	});
	DatePickerCustomBtn.displayName = 'custom btn';

	return (
		<FlexSection>
			<SectionTitle style={{ width: '80px', margin: '0' }}>기간</SectionTitle>
			<PeriodWrap>
				<DatePicker
					dateFormat="M월 dd일"
					selected={startDate}
					onChange={date => setStartDate(date as Date)}
					customInput={<DatePickerCustomBtn type={'start'} />}
					selectsStart
					startDate={startDate}
					endDate={endDate}
					monthsShown={2}
				/>
				<DatePicker
					dateFormat="M월 dd일"
					selected={endDate}
					onChange={date => setEndDate(date as Date)}
					customInput={<DatePickerCustomBtn type={'end'} />}
					selectsEnd
					startDate={startDate}
					endDate={endDate}
					minDate={startDate}
					monthsShown={2}
				/>
			</PeriodWrap>
		</FlexSection>
	);
};

export default Period;
