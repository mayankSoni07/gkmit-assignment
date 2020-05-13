import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { commonGateway, commonGatewayRequestDone } from '../../redux/actions';
import { GET_ALL_BIKE_DATA } from '../../utilities/commonUrl';
import { ERROR_TEXT } from '../../utilities/commonConstants';
import './index.css';

const reducerKeyGetBikeData = "All_bike_data";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            allData: []
        };
    }

    componentDidMount(){
        /** API call GET_ALL_BIKE_DATA */
        this.props.commonGateway({
            url: GET_ALL_BIKE_DATA, method: 'GET',
            reducerKey: reducerKeyGetBikeData
        });
    }

    componentDidUpdate(){
        /** Success Handler GET call */
        if (this.props[reducerKeyGetBikeData]) {
            console.log("CommonGateway is working fine, GET call response is here : ", this.props[reducerKeyGetBikeData]);
            this.setState({ allData: this.props[reducerKeyGetBikeData]["incidents"] });
            this.props.commonGatewayRequestDone({ reducerKey: reducerKeyGetBikeData });
        }

        /** Error Handler, when any api results failure */
        if (this.props[ERROR_TEXT]) {
            console.log("CommonGateway is working fine, API results Error : ", this.props[ERROR_TEXT]);
            this.props.commonGatewayRequestDone({ reducerKey: ERROR_TEXT });
        }
    }

    render() {
        console.log('state, props : ', this.state, this.props)
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let mapState = {};
    mapState[reducerKeyGetBikeData] = state.commonReducer[reducerKeyGetBikeData]
    return mapState;
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    commonGateway, commonGatewayRequestDone
 }, dispatch);

Home = connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home;