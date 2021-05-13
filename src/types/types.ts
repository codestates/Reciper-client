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
	git_id: string;
	about_me: string;
	isOpen: boolean;
	career: careerType;
	stacks: string[];
	profile_color: string;
	profile_image: string;
	createdAt: string;
	UpdatedAt: string;
}

export interface careerType {
	office: string;
	job: string;
	period: string;
}

export interface profileEditType {
	name: string;
	mobile: string;
	git_id: string;
	career: careerType;
	stacks: string[];
	isOpen: boolean;
	about_me: string;
	profile_image: string;
}
