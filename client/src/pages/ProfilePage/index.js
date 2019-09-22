import React, { Component } from 'react'
import "./style.scss"
import profileImg from "../../assets/images/farhan.jpg";

export class ProfilePage extends Component {
    render() {
        return (
            <div className="flex flex-col items-center">
                <img className="profile-img mt-24" src={profileImg} />
                <h1 className="mt-6">Farhan Ahmed</h1>
                <h2 className="mt-6">team76@gmail.com</h2>
            </div>
        )
    }
}

export default ProfilePage
