import { useEffect, useState } from "react"


const useDataLoader = () => {
    const [productsData, setProductsData] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProductsData(data))
    }, [])

    return [productsData]
}


export default useDataLoader ;