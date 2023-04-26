import React from 'react';
import Header from './Header/Header';
import './Main_content.scss';
import Side_bar from './Side_bar/Side_bar';
import Input_gropup from './Input_group/Input_group';
import Message from './Message/Message';
import shortid from 'shortid';

function Main_content(props) {

    let messages_data = props;
    console.log(messages_data);
    //заменить shortid.generate() на уникальный id контакта
    // let messages = messages_data.map(message => <Message state={message} key={shortid.generate()}/>);

    return(
        <div className='main_content'>
            <Header/>
            <div className='main_content_wrapper'>
                <Side_bar />
                <div className="dialog_container">
                    <div className="messages_container">
                        {/* {messages} */}
                    </div>
                    <Input_gropup/>
                </div>
            </div>
        </div>
    );
}

export default Main_content;
