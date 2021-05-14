////////////////////////////////////////////////////////
///////////            Login             //////////////
///////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////
///////////            Recruit           //////////////
///////////////////////////////////////////////////////
export interface recruitMembersDataType {
	position: string;
	career: string;
	personnel: string;
	deadline: string;
}

export interface recruitCreateTopDataType {
	simple_desc: string;
	recruit_members: recruitMembersDataType[];
	require_stack: string[];
	service_step: string;
	period: string;
}

export interface recruitCreateBottomDataType {
	detail_title: string;
	detail_desc: string;
}

export interface recruitCreateDataType {
	name: string;
	simple_desc: string;
	recruit_members: recruitMembersDataType[];
	require_stack: string[];
	service_step: string;
	period: string;
	detail_title: string;
	detail_desc: string;
}

////////////////////////////////////////////////////////
///////////            Recruit           //////////////
///////////////////////////////////////////////////////
export interface stackData {
	id: number;
	name: string;
}
