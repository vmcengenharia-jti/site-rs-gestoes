# Site RS Gestões & Participações

Site institucional estático (HTML/CSS/JS puro, sem build ou dependências) baseado na apresentação
institucional da empresa (`RS APRESENTAÇÃO-REV-25-09-12.pptx`).

## Identidade visual

O layout usa a paleta da logomarca oficial (vermelho `#9c2b28`, tinta `#211f1a`, papel `#f6f1e6`) e
repete o formato assimétrico do emblema (dois cantos retos, dois arredondados) em botões, cards e fotos.
O monograma "RS" no cabeçalho/rodapé é uma recriação em SVG feita a olho a partir da logo enviada —
troque pelo arquivo vetorial oficial (`.svg`/`.cdr` convertido) assim que possível para exatidão de marca.

## Fotos do portfólio

O portfólio (`img/portfolio/`) foi reconstruído a partir do arquivo "Lista de Empreendimentos para
Atualização do Portfólio do Site.docx" enviado — 34 empreendimentos, cada um com foto, nome, cidade/UF
e segmento, na ordem exata da lista (imagem 1 = item 1, imagem 2 = item 2, etc.), organizados em 6 filtros:
Incorporação, Condomínio Fechado, Loteamentos, Shopping Centers, Comercial & Logístico e Centro de Distribuição.

Duas correções de cidade/UF feitas por serem erros geográficos evidentes na lista original:
- **Condomínio Alta Vista**: lista dizia "Cuiabá/GO" → corrigido para **Cuiabá/MT**
- **Recanto das Brisas**: lista dizia "Senador Canedo/MT" → corrigido para **Senador Canedo/GO**

**Reserva Catalunha**: confirmado como Catalão/GO.

## Formulário de contato (Formspree) — IMPORTANTE, sem isso o formulário não envia nada

O formulário da seção Contato usa o [Formspree](https://formspree.io) para enviar as mensagens direto
para o e-mail `central@rsgestoes.com`, sem sair da página. É preciso ativar antes de publicar:

1. Crie uma conta gratuita em https://formspree.io/register (plano grátis: 50 envios/mês)
2. Clique em **New Form**, dê um nome (ex: "Site RS Gestões") e defina o e-mail de destino como
   `central@rsgestoes.com`
3. O Formspree vai gerar uma URL parecida com `https://formspree.io/f/xyzabcde`
4. Abra `index.html`, procure por `SEU_FORM_ID` (dentro de `<form id="contactForm" action="...">`)
   e troque pelo ID gerado (a parte depois de `/f/`)
5. Confirme o e-mail de verificação que o Formspree manda para `central@rsgestoes.com` na primeira
   vez — sem isso os envios ficam retidos até a confirmação

Enquanto `SEU_FORM_ID` não for trocado, o formulário mostra um aviso pedindo para configurar em vez
de tentar enviar.

## Antes de publicar

- [ ] Configurar o Formspree (ver acima) — **sem isso o formulário não funciona**
- [ ] Trocar o monograma SVG pela logo vetorial oficial, se disponível
- [ ] Revisar os números do portfólio (m², valores, datas) com a diretoria antes de publicar

## Ver localmente

Abra `index.html` diretamente no navegador (as imagens e fontes carregam normalmente), ou rode um servidor local:

```bash
npx http-server . -p 5174
```

## Hospedagem gratuita — passo a passo

### Opção 1: GitHub Pages (recomendado, domínio próprio grátis tipo `usuario.github.io`)

1. Crie uma conta gratuita em https://github.com (se ainda não tiver)
2. Crie um novo repositório (ex: `site-rs-gestoes`)
3. Envie os arquivos desta pasta (`index.html`, `css/`, `js/`) para o repositório:
   ```bash
   git init
   git add index.html css js img README.md
   git commit -m "Site institucional RS Gestões"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/site-rs-gestoes.git
   git push -u origin main
   ```
4. No GitHub, vá em **Settings > Pages**, selecione a branch `main` e pasta `/ (root)`, salve
5. Em alguns minutos o site estará no ar em `https://SEU-USUARIO.github.io/site-rs-gestoes/`
6. Para usar um domínio próprio (ex: `rsgestoes.com`), configure um registro CNAME apontando para
   `SEU-USUARIO.github.io` no seu provedor de DNS, e adicione o domínio em Settings > Pages

### Opção 2: Netlify (mais simples, arrastar e soltar)

1. Crie uma conta gratuita em https://app.netlify.com
2. Acesse https://app.netlify.com/drop
3. Arraste esta pasta inteira (`site-rs-gestoes`) para a área de upload
4. O site fica no ar instantaneamente em um endereço tipo `nome-aleatorio.netlify.app`
5. Depois é possível renomear o subdomínio ou conectar um domínio próprio, gratuitamente, em
   **Site settings > Domain management**

### Opção 3: Vercel

1. Crie uma conta gratuita em https://vercel.com
2. Use o comando `npx vercel` dentro desta pasta e siga as instruções, ou importe a pasta pelo painel web
