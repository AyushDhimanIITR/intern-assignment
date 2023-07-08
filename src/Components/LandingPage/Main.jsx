import React, { useEffect, useState } from "react";
import style from "./main.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    // console.log(data);
    const truncate = (i) => i.length>40 ? `${i.substring(0,30)}...`: i;
    const descTruncate = (i) => i.length>100 ? `${i.substring(0,100)}...`: i;


    return (
        <div className={style.cont}>
            <div className={style.head}>
                News
            </div>
            <div className={style.grid}>
            {data.map((data, index) => {

                return <div key={index} className={style.gridItem}>
                        <div className={style.title}>{truncate(data.title)} </div>
                        <div className={style.desc}> {descTruncate(data.body)} </div>
                        <div className={style.btn}> 
                        <Link to={`posts/${data.id}`}>Read More...</Link>
                        </div>
                    </div>
            })}

                </div>
        </div>
    )
}

export default Main;