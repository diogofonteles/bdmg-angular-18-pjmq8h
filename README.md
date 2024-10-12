# bdmg-angular-18-pjmq8h

Este projeto foi feito em Angular 18 usando NgRx para gerenciamento de estado e RxJs com seus operadores. para otimizar a programação reativa.

Adotei uma arquitetura mais voltada para o modelo Feature-based Architecture, ou seja, uma arquitetura baseada em funcionalidades ou módulos, que promove modularidade, escalabilidade, e facilita a manutenção do código, muito recomendada para aplicações Angular de médio a grande porte.

Em resumo, esta arquitetura possibilita:

1. Organização por funcionalidades

- O projeto está organizado por funcionalidades específicas, neste caso o diretório views/features/usuarios é dedicado à funcionalidade de usuários, contendo componentes como dados-usuario-form e dados-salvos.

- Sugere uma abordagem modular, onde cadas funcionalidade tem seu próprio conjunto de componentes, serviços, modelos, rotas e estado.

2. Separação de responsabilidades por componentes e serviços

- Há uma clara separação entre componentes (components), modelos (models) e serviços (services), que ajuda a manter a responsabilidade separada em cada camada.

- A pasta shared indica que há um diretório para armazenar funcionalidades e modelos compartilhados, para evitar duplicação de código.

3. Store e rotas isoladas por funcionalidade

- O arquivo usuarios.routes.ts e a pasta store dentro da funcionalidade usuarios mostram que está sendo utilizando NgRx para gerenciamento de estado local para cada funcionalidade especificamente, o que é uma boa prática em arquiteturas modulares.

- Isso sugere que cada feature tem seu próprio gerenciamento de rotas e estado, o que torna o projeto escalável. 

4. Modularidade e escalabilidade:

- Essa arquitetura é modular, o que significa que novos módulos ou funcionalidades podem ser facilmente adicionados sem impactar outras partes do projeto. Cada funcionalidade tem seu próprio espaço isolado (componentes, modelos, serviços), o que facilita a manutenção e o desenvolvimento de novas features.

5. Lazy Loading e Modular Routing

Esta arquitetura possibilita usar com facilidade lazy loading para carregamento dos módulos sob demanda.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/diogofonteles/bdmg-angular-18-pjmq8h)
