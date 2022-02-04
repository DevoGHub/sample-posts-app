import './table.css';


import PropTypes from 'prop-types';

function Table(props){

    // Component Return
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Length</th>
                        <th>Breadth</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>

                <tbody>
                    {
                       props.tableArr.map(ele => {
                        return (
                            <tr key = {ele.key}>
                                <td>{ele.length}</td>
                                <td>{ele.breadth}</td>
                                <td>{ele.height}</td>
                                <td>{ele.weigth}</td>
                            </tr>
                        );
                       })
                    }
                </tbody>
            </table>
        </div>
    );
}

Table.propTypes = {
    tableArr : PropTypes.arrayOf(PropTypes.object).isRequired
};

// Table.defaultProps = {
//     tableArr : [{key : 0}]
// }

export default Table;