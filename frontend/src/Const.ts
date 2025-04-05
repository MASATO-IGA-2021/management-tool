export type TabItem = {
    value: string;
    path: string;
    content: string;
};
export const TAB_ITEMS: Array<TabItem> = [
    { value: 'top', path: '/', content: 'トップ' },
    { value: 'login', path: '/login', content: 'ログイン' },
    { value: 'return-item', path: '/return-item', content: '注文履歴・返品' },
    { value: 'in-cart', path: '/in-cart', content: 'カート' },
];
