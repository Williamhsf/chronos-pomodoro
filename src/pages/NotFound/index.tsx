import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam in
          unde asperiores amet!
        </p>
      </Container>
    </MainTemplate>
  );
}
