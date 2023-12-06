import React from 'react';
import { Helmet } from "react-helmet";

const Head = () => {

    return (

        <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="App.scss" />
        </Helmet>


    );
};

export default Head;