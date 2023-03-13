import { Container, H1Chamativo, H4Chamativo, Card} from './styles'

const Pricing = () => {
  return (
    <Container>
      <H1Chamativo>Contrate o melhor plano para você</H1Chamativo>
      <H4Chamativo>Temos planos para todos os portes, contrate oque melhor combina com sua biblioteca.</H4Chamativo>
      <Card>
        <div>
          <ul>
            <li>Plano Lite</li>
            <li>Plano Simples</li>
            <li>R$ 79 /mes</li>
            <input type="button" value="Contratar pacote" />
            <li>Vantagens do Plano Lite:</li>
            <li>Sistema de emprestimo online com envio de notificação</li>
            <li>Relatorios mensais</li>
            <li>Controle dos usuarios da biblioteca</li>
            <input type="button" value="Ler mais" />
          </ul>
        </div>
        <div>
          <ul>
            <li>Plano Pro</li>
            <li>Plano completo</li>
            <li>R$ 79 /mes</li>
            <input type="button" value="Contratar pacote" />
            <li>Vantagens do Plano Pro:</li>
            <li>Acesso ao acervo digital</li>
            <li>Acesso a 3 telas para a dashboard</li>
            <li>Controle dos usuarios da biblioteca</li>
            <li>Sistema de emprestimo online com envio de notificação</li>
            <li>Relatorios mensais</li>
            <input type="button" value="Ler mais" />
          </ul>
        </div>
        <div>
          <ul>
            <li>Plano Essentials</li>
            <li>Plano padrão</li>
            <li>R$ 109 /mes</li>
            <input type="button" value="Contratar pacote" />
            <li>Vantagens do Plano Essentials:</li>
            <li>Acesso ao acervo digital</li>
            <li>Controle dos usuarios da biblioteca</li>
            <li>Sistema de emprestimo online com envio de notificação</li>
            <li>Relatorios mensais</li>
            <input type="button" value="Ler mais" />
          </ul>
        </div>
      </Card>
    </Container>
  )
}

export default Pricing;