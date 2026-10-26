import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>FORM</Heading>
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
