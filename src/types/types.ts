////////////////////////////////////////////////////////
///////////            Login             //////////////
///////////////////////////////////////////////////////
export interface loginRequestType {
	authorizationCode: string | null;
	email: string | null;
}

export interface loginResponseDataType {
	accessToken: string;
	email: string;
	loginType: string;
}

////////////////////////////////////////////////////////
///////////            Recruit           //////////////
///////////////////////////////////////////////////////
export interface RecruitWriterDataType {
	aboutMe: string;
	career: string;
	createdAt: string;
	email: string;
	gitId: string;
	id: number;
	isOpen: boolean;
	mobile: string;
	name: string;
	profileColor: string;
	updatedAt: string;
	uploadImage: string;
}

export interface RecruitListDataType {
	commentCount: number;
	createdAt: string;
	detailDesc: string;
	detailTitle: string;
	id: number;
	name: string;
	period: string;
	uploadImage: string;
	recruitMembers: string;
	requireStack: string[];
	serviceStep: string;
	simpleDesc: string;
	updatedAt: string;
	view: number;
	writer: RecruitWriterDataType;
}

export interface stackDataType {
	id: number;
	name: string;
}

////////////////////////////////////////////////////////
///////////          RecruitDetail       //////////////
///////////////////////////////////////////////////////

export interface RecruitDetailTopDataType {
	name: string;
	view: number;
	commentCount: number;
	simpleDesc: string;
}

export interface RecruitMemberType {
	position: string;
	career: string;
	personnel: string;
	deadline: string;
}

export interface RecruitDetailConentDataType {
	detailTitle: string;
	uploadImage: string;
	detailDesc: string;
	recruitMembers: RecruitMemberType[];
	requireStack: string[];
	serviceStep: string;
	period: string;
}

export interface RecruitDetailCommentDataType {
	id: number;
	body: string;
	createdAt: string;
	updatedAt: string;
	writer: RecruitWriterDataType;
}

////////////////////////////////////////////////////////
///////////          RecruitCreate        //////////////
///////////////////////////////////////////////////////
export interface recruitMembersDataType {
	position: string;
	career: string;
	personnel: string;
	deadline: string;
}

export interface recruitCreateTopDataType {
	simpleDesc: string;
	recruitMembers: recruitMembersDataType[];
	requireStack: string[];
	serviceStep: string;
	period: string;
}

export interface recruitCreateBottomDataType {
	detailTitle: string;
	detailDesc: string;
	uploadImage: string;
}

export interface recruitCreateDataType {
	name: string;
	simpleDesc: string;
	recruitMembers: recruitMembersDataType[];
	requireStack: string[];
	serviceStep: string;
	period: string;
	detailTitle: string;
	detailDesc: string;
}

////////////////////////////////////////////////////////
///////////            Profile           //////////////
///////////////////////////////////////////////////////
export interface profileInfoDataType {
	id: number | null;
	name: string;
	email: string;
	mobile: string;
	gitId: string;
	aboutMe: string;
	isOpen: boolean;
	career: careerType;
	stacks: string[];
	profileColor: string;
	uploadImage: string;
	createdAt: string;
	UpdatedAt: string;
}

export interface careerType {
	office: string;
	job: string;
	period: string;
}

////////////////////////////////////////////////////////
///////////          ProfileEdit         //////////////
///////////////////////////////////////////////////////
export interface profileEditType {
	aboutMe: string;
	career: careerType;
	gitId: string;
	isOpen: boolean;
	mobile: string;
	name: string;
	uploadImage: string;
	stacks: string[];
}
