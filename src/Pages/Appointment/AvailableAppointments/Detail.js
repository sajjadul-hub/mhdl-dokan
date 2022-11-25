
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import BookingModel from '../BookingModel/BookingModel';
import Item from './Item';

const Detail = ({refetch}) => {
    const [treatment, setTreatment] = useState(null);
    const detaillist = useLoaderData();
    return (
        <div>
            {
                detaillist.map(delait=><Item key={delait._id} delait={delait} setTreatment={setTreatment} ></Item>)
            }
          {
            treatment&&  <BookingModel
          
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModel>
          }
        </div>
    );
};

export default Detail;