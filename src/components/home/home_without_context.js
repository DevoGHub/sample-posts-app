import './home.css';

import Table from '../table/table.js';

import { useEffect, useState } from 'react';

function Home(){
    // States and Contexts
    const [valuesFilled, setValuesFilled] = useState(false);
    const [values, setValues] = useState([]);
    const [rowCount, setRowCount] = useState(0);

    // Effects
    useEffect(() => {
        const ipArr = document.querySelectorAll('.form-input');
        for(const ele of ipArr) ele.addEventListener('change' , checkValuesFilled);
    }, []);

    // DOM Functions
    const checkValuesFilled = () => {
        const ipArr = document.querySelectorAll('.form-input');

        let flag = true;
        for(const ele of ipArr){
            if(ele.value === ''){
                flag = false;
                break;
            }
        }

        setValuesFilled(flag);
    }

    function addTableRow(){
        const ipArr = document.querySelectorAll('.form-input');

        let obj = {};
        for(const ele of ipArr){
            const type = ele.id.split('-')[1];
            obj[type] = ele.value;
        }
        obj.key = rowCount;
        setRowCount(rowCount + 1);
        setValues([...values, obj]);
    }

    // Component returns
    return (
        <div className="main-component main-flex column-flex home-main">
            <div className='first-div'>
                <form>
                    <div>
                        <div>
                            <label htmlFor='form-length'>Length (in) <span className='mand-star'>*</span></label>
                            <input type='number' placeholder='Length' id='form-length' className='form-input'/>
                        </div> 

                        <div>
                            <label htmlFor='form-breadth'>Breadth (in) <span className='mand-star'>*</span></label>
                            <input type='number' placeholder='Breadth' id='form-breadth' className='form-input'/>
                        </div>

                        <div>
                            <label htmlFor='form-height'>Heigth (in) <span className='mand-star'>*</span></label>
                            <input type='number' placeholder='Heigth' id='form-height' className='form-input'/>
                        </div> 

                        <div>
                            <label htmlFor='form-weight'>Weigth (lb) <span className='mand-star'>*</span></label>
                            <input type='number' placeholder='Weigth' id='form-weigth' className='form-input'/>
                        </div>           
                    </div>
    
                    <div>
                        <button type='button' disabled = {!valuesFilled} onClick = {addTableRow}>
                            View
                        </button>
                    </div>
                </form>
            </div>

            {
                values.length === 0 ? <h2 style = {{textAlign : 'center'}}>Enter the values and click on view to view table</h2> : <Table tableArr = {values} />
            }
        </div>
    );
}

export default Home;