import React from 'react';
// import Test from '../../../images/card_test.png';
// import Modal from '../../Common/Modal';

// import { ProfileRecipeCard, RecipeCardImg, RecipeCardContent, RecipeCardtitle, RecipeCardDescription } from './styles';

interface Props {
	isOpen: boolean;
}

const DoneRecipe = ({ isOpen }: Props): JSX.Element => {
	// const [showRecipeCard, setShowRecipeCard] = useState<boolean>(false);

	return (
		<>
			{isOpen ? (
				// <ProfileRecipeCard onClick={() => setShowRecipeCard(!false)}>
				// 	<RecipeCardImg style={{ backgroundImage: `url(${Test})` }} />
				// 	<RecipeCardContent>
				// 		<RecipeCardtitle>
				// 			Reciper
				// 			<div>4명</div>
				// 			<div>0423 ~ 0607</div>
				// 		</RecipeCardtitle>
				// 		<RecipeCardDescription>
				// 			하나의 웹 서비스 안에서 개발 동료도 찾고, 작업 공간도 같이 있는 웹 서비스를 개발했습니다. 만남과
				// 			워크스페이스가 한 공간에 이루어지는 레시피에서 서비스를 즐겨보세요!
				// 		</RecipeCardDescription>
				// 	</RecipeCardContent>
				// 	{showRecipeCard && <Modal setShowModal={setShowRecipeCard}>테스트</Modal>}
				// </ProfileRecipeCard>
				<div>서비스 준비 중 입니다</div>
			) : (
				<div>비공개 입니다</div>
			)}
		</>
	);
};

export default DoneRecipe;
