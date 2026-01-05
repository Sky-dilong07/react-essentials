export const UserDetails = ({name, isOnline}) =>{
    return (
    <div>UserDetails
        <p>{name}</p>
        <p>Active: {isOnline}</p>
    </div>
    )
}