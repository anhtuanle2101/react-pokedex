import "./Pokecard.css";

function Pokecard({ id, name, type, base_experience }){
    return (
        <div className="pokeCard">
            <h4 className = "pokeName"> {name}</h4>
            <img className = "pokeImage" src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt = "pokemon"></img>
            
            <span className = "pokeType"> Type: {type}</span>
            <span className = "pokeEXP"> EXP: {base_experience}</span>
        </div>
        
    )
}

export default Pokecard;