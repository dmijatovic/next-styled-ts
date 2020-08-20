import Head from 'next/head'

import Container from 'components/layout/Container'
import CardLink from 'components/layout/CardLink'
import Description from 'components/layout/Description'
import Grid from 'components/layout/Grid'
import Title from 'components/layout/Title'
import Main from 'components/layout/Main'
import Footer from 'components/layout/Footer'

export default function Home(props){
  // console.log("home props: ", props)
  return (
    <>
    <Head>
      <title>Next app with typescript and styled components</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <Main>
      <Title>
        This is my title test
      </Title>
      <Description>
        Here comes main content
      </Description>
      <Grid>
        <CardLink href="https://nextjs.org/docs">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </CardLink>
        <CardLink href="https://nextjs.org/docs">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </CardLink>
        <CardLink href="https://nextjs.org/docs">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </CardLink>
        <CardLink href="/index2">
          <h3>Original page</h3>
          <p>This is original page using css modules</p>
        </CardLink>
      </Grid>
      </Main>
      <Footer>
        And this place for the footer
      </Footer>
    </Container>
    </>
  )
}
