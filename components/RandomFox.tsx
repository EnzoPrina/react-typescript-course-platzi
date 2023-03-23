import {useRef, useEffect, useState} from 'react'
// generate a random function between 1 and 123

type Props = { image: string};

export const RandomFox = ({image}: Props): JSX.Element => {
    const [src, setSrc] = useState('"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="')

    const node = useRef<HTMLImageElement>(null)

    useEffect(()=> {
    // nuevo observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // onIntersection -> console.log
            if(entry.isIntersecting){
                setSrc(image)
                
            }
        })
    })

    //observe node
    if(node.current) {
        observer.observe(node.current);
    }


    // desconectar
    return() => {
        observer.disconnect()
    }
    }, [image]);



    // eslint-disable-next-line jsx-a11y/alt-text
    return <img 
                ref={node} 
                width={320} 
                height='auto' 
                src={src}  
                className='rounded-md bg-gray-300'
                />
}

