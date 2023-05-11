import { Item } from "../Item/Item";
import { Href } from "../Href/Href";
export function List({userData}) {
  return (
    <ul>
        {userData && userData.map((user, index) =>(
        <Item key={index}>
            <p>{user.id}</p>
              <Href url={`/user/${user.id}`}>{user.first_name}</Href>
          </Item>
        ))}
    </ul>
  );
}