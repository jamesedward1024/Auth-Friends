import React from "react";
import { axiosWithAuth } from "../utils/axiosAuth";

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
            .get("/api/data")
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }
    render() {
        return (
            <div></div>

        )
    }
}

export default FriendsList;