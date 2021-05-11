const color = {
	pointColor: '#478bff',
	lineColor: '#d6d6d8',
	warningColor: '#F35656',
};

const align = {
	flexHorizontal: {
		display: 'flex',
		justifyContent: 'center',
	},
	flexVertical: {
		display: 'flex',
		alignItems: 'center',
	},
	flexCenter: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	positionCenter: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	},
};

const hover = {
	pointColorHover: '#2569ee',
};

const Theme = {
	color,
	align,
	hover,
};

export default Theme;
