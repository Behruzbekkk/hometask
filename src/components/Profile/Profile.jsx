import { Href } from "../Href/Href";
import {useParams} from "react-router-dom"
export function Profile({userData}) {
    let {userId} = useParams();
    let foundUser = userData.find(user => user.id == userId)
  return (
    <>
    {foundUser &&<section>
      <Href url={"/"}>Back To Home</Href>
      <div style={{ width: 800, margin: "50px auto" }}>
        <img src={foundUser.avatar} style={{borderRadius: "50%"}} alt="" width={50} height={50} />
        <h1>Name:{foundUser.first_name}</h1>
        <h2>Last Name:{foundUser.last_name}</h2>
        <Href url={`mailto: ${foundUser.email}`}>{foundUser.email}</Href>
      </div>
    </section>
    }
    </>
  );
}
