import { Container } from "./style";

interface HeadeBodyProps {
  // Se você quiser adicionar mais props ao componente Header, pode fazer isso aqui
}

export function HeadBody(props: HeadeBodyProps) {
  return (
    <Container>
      <h1 className="headTittle">Lençol Avulso</h1>
    </Container>
  );
}
