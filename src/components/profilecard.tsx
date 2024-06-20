import {Profile} from "../types/alltypes";

const Profilecard =(data: Profile)=> {
    return (
        <div className="profile">
            <p className="uniquely">{data.id}</p>
            <img src={data.profilepicture} alt={data.name} className="image-wrapper" />
            <h1 className="fullname">{data.name}</h1>
            <p className="info">Infromation</p>
            <p className="age">age: {data.age}</p>
            <p className="bio">bio: {data.bio}</p>
        </div>
    );

};

export default Profilecard