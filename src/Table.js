import React, {Component} from 'react';

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Date</th>
                <th>Task</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    if(props.characterData){
        var rows = props.characterData.map((row,index) => {
            return(
                <tr key={index}>
                    <td>{row.Date}</td>
                    <td>{row.Task}</td>
                    <td>
                        <button onClick={() => props.removeCharacter(index)}>Remove</button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <tbody>{rows}</tbody>
    )
}

const Table = props => {
    const { characterData, removeCharacter } = props

        return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
}

export default Table