import {PageHeader, Button} from 'antd'
import styles from '../styles/header.module.css'
const Header = () => {
  return (
    <div>
      <PageHeader
        className={styles.header}
        title='Minha aplicação'
        extra={[
          <Button>Login</Button>,
          <Button type="primary">Cadastrar</Button>
        ]}
      />
    </div>
  )
}

export default Header