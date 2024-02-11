import { Route, Routes } from 'react-router-dom'
import { AboutPage, HomePage } from './component/pages'

export const AppRouter = () => (
  <Routes>
    <Route path="/">
      <Route index Component={HomePage} />
      <Route path="about" Component={AboutPage} />
    </Route>
  </Routes>
)
