# Sitema de listagem e visualização de posts
Teste para vaga dev front-end

Link ao vivo para o teste:

[Aqui](https://petz.zerinoid.vercel.app/)

## Tecnologias utilizadas
- NextJs 
- Sass (scss)
- Styled-components
- Font awesome (ícones)

## Deploy
Para deploy escolhi a plataforma **Vercel**, dos mesmos criadores do NextJs. Ela oferece grande viabilidade graças à integração com o github, fazendo com que o deploy seja automático a cada pull request na branch *main*, mas também gerando páginas de staging para commits na branch *dev*.

## Funcionalidade
O input de busca gera um render automático da lista de posts via **two way binding** implementado.

Nele é possível buscar pelo titulo do post, pelo corpo (conteúdo) e pelo id do post (porém esta última funcionalidade é omitida ao usuário por ser mais técnica).

#### OBS
Devido à um bug no **styled-components** tive de criar um config externo para o babel (babel.config.json). Ainda assim o carregamento do component *Button* está atrasado o que causa um impacto no CLS da página.
Porém decidi manter assim para que o uso da biblioteca se mantenha presente no teste.

## Agradecimento
Obrigado pela oportunidade, espero que atinja os requisitos mínimos.
