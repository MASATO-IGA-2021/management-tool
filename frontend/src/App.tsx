import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, Image, Link, Text } from '@chakra-ui/react';
import CreateProjects from './screens/createProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box>
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

      <CreateProjects />
    </>
  )
}

export default App
