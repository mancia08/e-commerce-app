import { ApiContext } from '../../../../context/DataProvider';
import { useContext, useEffect } from 'react';
const First = () => {
    const context = useContext(ApiContext);

    useEffect(() => {
        context.getByCategory('electronics');
    }, [])


    return (
        <div>
            { !context.loading && console.log(context.data)}
        </div>
   
    )
}
    

export default First;