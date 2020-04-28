import React from 'react';

interface Props {
    text: string;
}

const Title: React.FC<Props> = ({ text }) => (
    <>
        <h1>
            {text}
        </h1>
        <style jsx>{`
      h1{
        color: #2d84f1;
        text-align: center;
        padding: 10px;
        margin: 10px;
        margin-right: auto;
        margin-left: auto;
      }
    `}</style>
    </>
);

export default Title;
