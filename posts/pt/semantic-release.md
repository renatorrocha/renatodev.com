---
title: Versionamento e Releases Automáticas
description: Como eu versiono minhas aplicações com releases e changelogs automatizados
date: 2025-04-17
---

# O que é versionamento?

Versionamento é o processo de atribuir números de versão ao seu código, geralmente seguindo o padrão `vX.Y.Z` (também conhecido como **SemVer** – [Semantic Versioning](https://semver.org/)).

Cada parte desse número tem um significado:

- **Major (`X`)**: incrementado quando são feitas mudanças incompatíveis com versões anteriores (breaking changes).
- **Minor (`Y`)**: incrementado quando são adicionadas novas funcionalidades que **não quebram** o funcionamento anterior.
- **Patch (`Z`)**: incrementado quando são feitas **correções de bugs** compatíveis com versões anteriores.

Esse tipo de versionamento ajuda a comunicar claramente o impacto de uma nova versão para quem usa sua aplicação ou biblioteca.

# O que é uma release?

Uma **release** é uma versão empacotada e publicada do seu projeto. Ela geralmente inclui:

- O número da nova versão
- Um changelog com o que foi alterado
- Possivelmente os binários, artefatos ou arquivos de distribuição (dependendo do projeto)
- Um commit e uma tag no repositório que marcam essa versão

Em outras palavras: é a entrega oficial de uma nova versão do seu código.

# Como gerar versionamento e releases automaticamente?

É aqui que entra o [**semantic-release**](https://semantic-release.gitbook.io/semantic-release/) — um pacote que automatiza todo o processo de:

- Gerar e aplicar o versionamento baseado nos commits (usando convenções como [Conventional Commits](https://www.conventionalcommits.org/))
- Criar changelogs automaticamente
- Criar e publicar a release (com tag, mensagem e até envio para o GitHub/GitLab/NPM/etc.)

Tudo isso sem precisar decidir manualmente o número da nova versão.

> Ou seja: você só se preocupa em escrever bons commits, e o semantic-release cuida do resto.

# Ele é exclusivo de projetos JavaScript?

**Não mesmo!** Já testei o semantic-release em projetos Golang e funcionou perfeitamente. O truque foi criar um `package.json` e um `.releaserc.json`, onde defino os scripts e as dependências necessárias para rodar o semantic-release (e sinceramente, talvez nem precise de tudo isso kkk).

Depois, é só criar um workflow no GitHub Actions que executa o script do semantic-release na branch desejada. Dá pra configurar a regra como preferir: rodar a cada commit, PR mergeado, ou qualquer outro gatilho.

> 💡 **Lembre-se** de criar um `repository secret` armazenando o seu PAT (Personal Access Token) e de habilitar, nas configurações do repositório, a opção de **Workflow Permissions** com permissão de leitura e escrita no repositório.  
> (Quebrei muuuito a cabeça até descobrir que era isso que tava bloqueando meu release automático kkkkk)

# Exemplos de repositórios com semantic-release configurado

Se quiser ver na prática como ficou a configuração, aqui vão dois repositórios de exemplo que montei:

- [**semantic-release-boilerplate**](https://github.com/renatorrocha/semantic-release-boilerplate): projeto básico usando **Bun** no frontend para demonstrar o semantic-release em um contexto JS/TS.
- [**semantic-release-golang**](https://github.com/renatorrocha/semantic-release-golang): um projeto em **Go**, mostrando como o semantic-release pode ser usado mesmo fora do ecossistema Node.js (irônico o fato de ter um package.json no repositório kkkkk).
