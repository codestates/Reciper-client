export interface loginRequestType {
	authorizationCode: string | null;
	email: string | null;
	endpoint: string | null;
}

export interface loginResponseDataType {
	accessToken: string;
	email: string;
	loginType: string;
}
