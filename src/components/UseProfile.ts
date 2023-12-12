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
          console.log("🚀 ~ file: UseProfile.ts:12 ~ response.json ~ data:", data)
          setLoading(false);
        });
      })

    }catch{

    }
  }, []);

  return {loading, data};
}