import React from 'react';

export default function MyHello(props) {
    return (
        <div>
            こんにちは、{props.name}さん！
            <p>あなたは{props.age}歳ですね。</p>
        </div>
    );
}