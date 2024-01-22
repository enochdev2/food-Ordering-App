import {useEffect, useState} from "react";

export function useProfile() {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    try{
      fetch('/api/profile').then(response => {
        response.json().then(data => {
          setData(data);
          setLoading(false);
        });
      })

    }catch{

    }
  }, []);

  return {loading, data};
}