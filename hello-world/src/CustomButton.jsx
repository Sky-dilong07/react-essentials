export const CustomButton=() =>{
    const handleClick = () =>{
        alert("Thanks for Liking");
    }
    return <button onClick={handleClick}>Like</button>
}