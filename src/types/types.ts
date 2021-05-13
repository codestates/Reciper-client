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
	UpdatedAt: string;
	about_me: string;
	career: careerType;
	createdAt: string;
	email: string;
	git_id: string;
	id: number | null;
	isOpen: boolean;
	mobile: string;
	name: string;
	profile_color: string;
	profile_image: string;
}

export interface careerType {
	office: string;
	job: string;
	period: string;
}
