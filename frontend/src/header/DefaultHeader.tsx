import { TabItem } from '@/Const';
import { Link, Tabs } from '@chakra-ui/react';

interface DefaultHeaderProps {
    items: Array<TabItem>; // 修正: プロパティ名を items に変更
}

const DefaultHeader = ({ items }: DefaultHeaderProps) => {
    return (
        <Tabs.Root defaultValue="members">
            <Tabs.List
                style={{
                    display: 'flex', // 横並びにする
                    gap: '10px', // 要素間の間隔
                    justifyContent: 'space-around', // 中央揃え
                    alignItems: 'center', // 垂直方向の中央揃え
                    padding: '1px', // 内側の余白
                    backgroundColor: '#f5f5f5', // 背景色
                    borderRadius: '8px', // 角丸
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // ボックスシャドウ
                }}
            >
                {items.map((item, index) => (
                    <Tabs.Trigger key={index} value={item.value} asChild>
                        <Link unstyled href={item.path}>
                            {item.content}
                        </Link>
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
        </Tabs.Root>
    );
};

export default DefaultHeader;
