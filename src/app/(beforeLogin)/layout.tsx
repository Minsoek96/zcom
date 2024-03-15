import styles from './_component/main.module.css'

const Layout = ({children, modal}: {children: React.ReactNode, modal: React.ReactNode}) => {
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    )
}

export default Layout