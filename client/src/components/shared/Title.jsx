import React from "react";
import { Helmet } from "react-helmet-async";


const Title = ({
    title = "chat",
    discription = "this is a chat app named Hello World",
}) => {
    return <Helmet>
        <title>{title}</title>
        <meta name="discription" content={discription} />
    </Helmet>
};

export default Title;
