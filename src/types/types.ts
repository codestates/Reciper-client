export interface loginRequestType {
	authorizationCode: string | null;
	email: string | null;
}

export interface loginResponseDataType {
	accessToken: string;
	email: string;
	loginType: string;
}

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
	profileImage: string;
	createdAt: string;
	UpdatedAt: string;
}

export interface careerType {
	office: string;
	job: string;
	period: string;
}

export interface profileEditType {
	aboutMe: string;
	career: careerType;
	gitId: string;
	isOpen: boolean;
	mobile: string;
	name: string;
	profileImage: string;
	stacks: string[];
}
