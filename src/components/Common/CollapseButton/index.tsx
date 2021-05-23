import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowIcon, CollapseIconWrapper, CollapseItem, Container } from './styles';

/* TODO:

title: 화살표 버튼 옆 제목
list: 밑에 보여주는 목록들
workspaceName: 캘린더 or 칸반보드 or 채팅
id: 해당 params의 id
<CollapseButton title={'test'} list={['1', '2']} params={'chat'}/>
*/

interface Props {
	title: string;
	list: string[];
	workspaceName: string;
	id?: string;
}

const CollapseButton = (props: Props): JSX.Element => {
	const [showList, setShowList] = useState<boolean>(false);

	const onShowItemList = useCallback((): void => {
		setShowList(prev => !prev);
	}, []);

	return (
		<Container>
			<CollapseIconWrapper>
				<button onClick={onShowItemList}>
					<ArrowIcon collapsetest={showList} />
				</button>
				<span>{props.title}</span>
			</CollapseIconWrapper>
			{showList &&
				props.list.map((item: string, index: number) => (
					<CollapseItem key={index}>
						<NavLink key={props.workspaceName} activeClassName="selected" to={`/workspace/${props.workspaceName}`}>
							{item}
						</NavLink>
					</CollapseItem>
				))}
		</Container>
	);
};

export default CollapseButton;
