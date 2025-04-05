import { ListCollection, Portal, Select } from '@chakra-ui/react';

export type Item = { label: string; value: string };

interface MultiPulldownProps {
    label: string;
    value: string[]; // 選択された値を配列で受け取る
    items: ListCollection<Item>;
    onChange: (value: string[]) => void; // 選択変更時に呼び出される
}

const MultiPulldown = (props: MultiPulldownProps) => {
    return (
        <Select.Root
            multiple
            collection={props.items}
            value={props.value} // 現在の選択値を渡す
            // onValueChange={(newValue) => props.onChange(newValue)} // 選択変更時に親に通知
        >
            <Select.HiddenSelect />
            <Select.Label>{props.label}</Select.Label>
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder="メンバーを追加" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {props.items.items.map((item, index) => (
                            <Select.Item item={item} key={index}>
                                {/* {item.label} */}
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    );
};

export default MultiPulldown;
