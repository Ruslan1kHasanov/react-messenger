import { connect } from 'react-redux';
import Main_content from './Main_content';
import { testedAC } from '../../redux/reducers/messages-reducer'

let mapStateToProps = (state) =>{
    console.log(state.messages_reducer.messages)
    return state
};

let mapDispatchToProps = (dispatch) => {
    return{
        tested_messages : () => {
            dispatch(testedAC());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Main_content);