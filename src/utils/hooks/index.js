import { useContext } from "react";
import { ThemeContext } from "../context";
import { useState, useEffect } from "react";

export function useTheme() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return {theme, toggleTheme};
}

export function useFetch(url) {
    const [datas, setDatas] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    console.log(url);

    useEffect(() => {
        if(!url) return;
        async function fetchData() {
            try {
                const response = await fetch(url); 
                const data = await response.json();
                setDatas(data);  

            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {datas, isLoading, error };
}