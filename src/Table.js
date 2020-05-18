import React, {Component} from 'react';

class Table extends Component{
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>24/07/2020</td>
                        <td>Deploying my site</td>
                    </tr>

                    <tr>
                        <td>24/07/2020</td>
                        <td>Going to Market</td>
                    </tr>

                    <tr>
                        <td>24/07/2020</td>
                        <td>Going to Church</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table