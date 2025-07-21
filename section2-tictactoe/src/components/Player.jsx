import {useState} from 'react';


export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    /* 내가 짠 부분
    function handleEditClick() {
        if (isEditing) {
            return (
                <>
                <input />
                <span className="player-symbol">{symbol}</span>
                </>
            )
        }
        else {
            return (
                <span className="player">
                    <span className='player-name'>{name}</span>
                    <span className="player-symbol">{symbol}</span>
                </span>
            )
        }
    }
        

    return (
        <li>
          {handleEditClick({name}, {symbol})}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </li>
    );
    */
   function handleEditClick() {
    setIsEditing(editing => !editing);

    if(isEditing) {
        onChangeName(symbol, playerName);
    }
   }

   function handleChange(event) {
    setPlayerName(event.target.value);
   }

   let editablePlayerName = <span className="player-name">{playerName}</span>;

   if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
   }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}