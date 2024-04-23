import { CategorySchema } from "@/types/schema";
import axios from "axios";
import React, { createContext, useState } from "react";


export const categoryContext = createContext<{
    categories: CategorySchema[],
    loading: boolean

}>({
    categories: [],
    loading: false
});

export const CategoryProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    React.useEffect(() => {
        setLoading(true);
        axios.get("/api/categories").then((response) => {
            setCategories(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
        });
    }
        , []);
    return <categoryContext.Provider value={{ categories: categories, loading }}>{children}</categoryContext.Provider>;
}
