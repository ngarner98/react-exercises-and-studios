export default function BookList() {
    const hobbyLinks = ["https://en.wikipedia.org/wiki/PC_game", "https://en.wikipedia.org/wiki/Skeet_shooting"]

    return (
        <div>
            <a href = {hobbyLinks[0]}>PC Games</a><br></br>
            <a href = {hobbyLinks[1]}>Skeet Shooting</a>
        </div>
       
       ) 
}