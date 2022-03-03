import { useEffect } from "react";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const Success = () => {

    const [val, setVal] = useState();

    const getData = async () => {
        const queryParams = new URLSearchParams(window.location.search)
        const sessionId = queryParams.get("session_id")
        const response = await publicRequest.post("/session", {sessionId})
        console.log(response.data);
        if (response.data) {
            setVal(response.data.response);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(val);    

    return (
        <div>Successfull</div>
    )
};

export default Success