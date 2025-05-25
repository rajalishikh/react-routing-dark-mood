import { ClockLoader } from 'react-spinners';

const Spinear = () => {
    return (
        <div className='flex flex-col  justify-center items-center min-h-[calc(100vh-120px)] color-pink '>
            <ClockLoader size={100} color='#F92FD3'></ClockLoader>
            
        </div>
    );
};

export default Spinear;