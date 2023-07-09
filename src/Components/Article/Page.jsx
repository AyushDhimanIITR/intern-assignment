import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import axios from "axios";

const Page = () => {
    const p = window.location.pathname;
    const [data, setData] = useState("");
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com${p}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com${p}/comments`)
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    }, [])

    // console.log(comments);
    return (
        <div className={style.cont}>
            <div className={style.head}>
                Post- {data.id}
            </div>
            <div className={style.post}>
                <p>Title: {data.title} </p>
                <p> {data.body} </p>
            </div>
            <div className={style.comments}>
                <div className={style.head}>Comments</div>
                {
                    comments.map((val, i) => {
                        return <div key={i}>
                            <li>{val.email} ( <span style={{textTransform:"capitalize"}}>{val.name} </span>) </li>
                            <p className={style.commentBody}>{val.body} </p>
                            <hr/> 
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Page;