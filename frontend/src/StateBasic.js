import React, { useState } from 'react';

// StateBasicコンポーネントを定義し、デフォルトエクスポートします
export default function StateBasic({ init }) {
    // useStateフックを使用して、カウントの状態を管理します
    const [count, setCount] = useState(init);

    // ボタンがクリックされたときにカウントをインクリメントする関数
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            {/* 現在のカウントを表示します */}
            <p>Count: {count}</p>
            {/* ボタンをクリックするとincrementCount関数が呼び出されます */}
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}