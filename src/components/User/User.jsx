import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams(); 
  return (
    <div>User: {userid}</div>
  )
}

export default User

//This component is not displayed anywhere initially but it is used to make some dynamic requests from the params 