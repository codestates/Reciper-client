import React from 'react';
import WorkSpaceChat from '../components/Chat/ChatContainer';
import WorkSpaceFrame from '../components/Common/WorkSpaceFrame';

const Chat = (): JSX.Element => {
	return (
		<WorkSpaceFrame>
			<WorkSpaceChat />
		</WorkSpaceFrame>
	);
};

export default Chat;
