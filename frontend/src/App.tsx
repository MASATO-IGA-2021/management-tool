import { useAtom } from 'jotai';
import './App.css';
import { TAB_ITEMS } from './Const'; // 修正: 正しい名前でインポート
import DefaultHeader from './header/DefaultHeader';
import {
    memberAtom,
    milestoneAtom,
    projectAtom,
    taskAtom,
} from './store/mainStore';
import ProjectSideMenu from './sideMenu/projectsSideMenu';

function App() {
    const [projects, setProjects] = useAtom(projectAtom);
    const [tasks, setTasks] = useAtom(taskAtom);
    const [members, setMembers] = useAtom(memberAtom);
    const [mailestones, setMilestones] = useAtom(milestoneAtom);
    return (
        <>
            {/* 修正: itemProps を items に変更 */}
            <DefaultHeader items={TAB_ITEMS} />
            <ProjectSideMenu />
            {/* <Box>
        <Link href="https://vite.dev" target="_blank">
          <Image src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <Image src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </Box>
      <Text textStyle="5xl">Vite + React</Text>
      <Box className="card">
        <Button variant="solid" color="green" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Text textStyle="xl">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </Box>
      <Text className="read-the-docs" textStyle="xl">
        Click on the Vite and React logos to learn more
      </Text>

      <CreateProjects /> */}
        </>
    );
}

export default App;
