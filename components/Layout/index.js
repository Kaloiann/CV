import Navigation from '../Navigation'
import css from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={css.app}>
      <Navigation />
      <main>{children}</main>
    </div>
  )
}