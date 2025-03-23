import React from 'react';

// EventBasicコンポーネントをエクスポート
export default function EventBasic() {
    // ボタンクリック時に現在時刻を表示する関数
    const handleClick = () => {
        const currentTime = new Date().toLocaleTimeString();
        console.log('現在時刻：'+currentTime);
    };

    return (
        <div>
            <button onClick={handleClick}>Show Current Time</button>
        </div>
    );
}