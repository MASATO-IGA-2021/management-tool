import React from 'react';

export default function ForItem({ item }) {
    return (
            <React.Fragment key={item.isbn}>
                <dt>
                    <a href={`https:/wings.msn.to/books/${item.isbn}/${item.isbn}.jpg`}>
                        {item.title} ({item.price}円)
                    </a>
                </dt>
                <dd>
                    {item.summary}
                </dd>
            </React.Fragment>  
    );
}