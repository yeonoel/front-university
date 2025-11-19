import { useCallback, useContext } from "react";
import { AuthContext, ThemeContext } from "../context";
import { useState, useEffect } from "react";

export function useTheme() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return {theme, toggleTheme};
}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context) throw new Error('useAuth doit etre utilisé dans AuthProvider');
    return context;
}

export function useFetch(url) {
    const [datas, setDatas] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

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

// Pour les POST/PUT/DELETE (écriture)
export function useMutation() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const mutate = async (url, options) => {
        setIsLoading(true);
        setError(null);
                    console.log("eeeeeeeeee",options);

        try {
            const response = await fetch(url, {
                method: options.method || 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                body: JSON.stringify(options.body)
            });

            const data = await response.json();
            console.log("dssdsdsdddsdsdds",data);
            
            if (!response.ok) {
                throw new Error(data.message || 'Erreur');
            }
            
            return data;
            
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return { mutate, isLoading, error };
}

export function useSearch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (url, filters) => {
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();

      if (filters?.filiere) params.append("filiere", filters.filiere);
      if (filters?.commune) params.append("commune", filters.commune);
      if (filters?.query) params.append("query", filters.query);

      const response = await fetch(`${url}?${params.toString()}`);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || "Erreur de recherche");
      }

      setData(json);   // <-- on stocke réellement les datas
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, search };
}
