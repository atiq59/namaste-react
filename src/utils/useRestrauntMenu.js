import { useEffect, useState } from "react";

const useRestrauntMenu = (resId) => {

    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + resId);

        const data = await res.json();
        setResMenu(data);

    }

    return resMenu
}

export default useRestrauntMenu;