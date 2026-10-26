import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>

      {/* em espera */}
      <div className='container-fluid'>
        <div className='container'>
          <div className='content'>
            <section></section>
          </div>
        </div>
      </div>
    </>
  );
}
