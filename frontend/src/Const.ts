export type TabItem = {
    value: string;
    path: string;
    content: string;
};
export const TAB_ITEMS: Array<TabItem> = [
    { value: 'top', path: '/', content: 'トップ' },
    { value: 'login', path: '/login', content: 'ログイン' },
    { value: 'projects', path: '/projects', content: 'プロジェクト一覧・作成' },
    { value: 'tasks', path: '/tasks', content: 'タスク一覧・作成' },
];
