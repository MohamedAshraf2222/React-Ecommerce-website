import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Bag from '../../components/Bag';
import SideBar from '../../components/SideBar';
import { RadioGroup, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { green } from '@mui/material/colors';
import { data } from '../../data/data';

const ItemView = () => {

    const [Finalresult, setFinalresult] = useState({})
    // const [resultObject, setResultObject] = useState(null);
    const [value, setValue] = React.useState(4);
    const [hover, setHover] = React.useState(-1);
    const params = useParams();

    const results = (data) => {
        console.log(this.data);
        const result = this.data.filter(pro => pro.id === params.id)
        console.log(data);
        console.log(result);
        return result
    }


    return (
        <>
            <div className="grid grid-home">
                <SideBar />
                <div className='itemview-content'>
                    {params.id}
                    ItemView
                    {/* {results(data)} */}
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        // getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ color: green }} fontSize="inherit" />}
                    />
                </div>
                <Bag />
            </div>
        </>
    )
}

export default ItemView