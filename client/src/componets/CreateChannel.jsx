import React from 'react';
import { useChatContext } from 'stream-chat-react';

import {UserList} from './';
import { CloseCreateChannel } from '../assets';

const ChannelNameInput = ({channelName = '', setChannelName}) => {
    
    return (
        <div className="channel-name-input__wrapper">
            <p>Name</p>
            <input value={} onChange={} placeholder="channel-name" />
            <p>Add Members</p>
        </div>
    )
}

const CreateChannel = () => {
    return (
        <div>
            CreateChannel
        </div>
    )
}

export default CreateChannel
