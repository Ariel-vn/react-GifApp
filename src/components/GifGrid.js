import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const [images, setImage] = useState([]);

    // useEffect(()=>{
    //    getGifs(category)
    //     .then(imgs=>setImage(imgs))
    // }, [category] );

    const {data,loading}=useFetchGifs(category);
    


    return (
        <>
            <h3>{category}</h3>
            {loading&&<p>Cargando</p>}
            <div className='card-grid animate__animated animate__fadeIn animate__delay-2s'>
                
                    {
                        data.map(img=>(
                            <GifGridItem 
                            key={img.id}
                            {...img} />

                        ))
                    }
                
            </div>
        </>
    )
}
