import { Box, Button, Container, Field, Heading, Input, Portal, Select, VStack, createListCollection } from '@chakra-ui/react';
import { useState } from 'react';
import { toaster } from "@/components/ui/toaster"

const CreateProjects = () => {
    const [inputs, setInputs] = useState<string[]>([]);
    const [projectName, setProjectName] = useState('');
    const [projectMembers, setProjectMembers] = useState('');
    const [projectDetails, setProjectDetails] = useState('');

    const sampleData = createListCollection({
        items: [
            { label: "user1", value: "1" },
            { label: "user12", value: "2" },
            { label: "user123", value: "3" },
            { label: "user1234", value: "4" },
        ],
    })

  // フォームの送信処理
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        toaster.create({
            title: `Toast status is success`,
            type: 'success',
        })
    }



    return (
    <Container maxW="2xl" py={8}>
        <Box p={6} borderWidth={1} borderRadius="md" boxShadow="lg">
        <VStack >
            <Heading as="h2" size="lg" textAlign="center">プロジェクト作成</Heading>

            {/* プロジェクト名 */}
            <Field.Root required>
                <Field.Label>
                    プロジェクト名 <Field.RequiredIndicator />
                </Field.Label>
            </Field.Root>
            <Input placeholder="プロジェクト名" value={projectName} onChange={(e) => setProjectName(e.target.value)} mb={4} />
            {/* プロジェクトメンバー */}
            <Select.Root multiple collection={sampleData} >
                <Select.HiddenSelect />
                <Select.Label>メンバー</Select.Label>
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
                            {sampleData.items.map((member) => (
                                <Select.Item item={member} key={member.value}>
                                    {member.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                                ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>
            {/* フォーム送信ボタン */}
            <Button colorPalette="yellow" onClick={(e) => handleSubmit} width="full">
                プロジェクト作成
            </Button>
        </VStack>
        </Box>
    </Container>
    );
};

export default CreateProjects;
