import React from 'react'
import Layout from '../components/layout'
import SEO from '../utils/seo'
import Container from '../components/grid/container'

const IndexPage = () => (
  <Layout
    title="David Elster"
    subtitle="Frontend Developer & JAMstack Advocate"
    gradient="linear-gradient(135deg, #155589 0%, #155589 20%, #5df4dd 100%)"
  >
    <SEO title="Home" keywords={[`delster`, `developer`, `portfolio`]} />
    <Container>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Sed aliquam varius sagittis. In ac nulla eu nunc euismod lobortis. Quisque ultrices, ipsum eget iaculis faucibus, velit augue blandit felis, non commodo augue ipsum a diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus lorem sed quam rhoncus, sed aliquet est posuere. Aliquam erat volutpat. Suspendisse potenti. Aenean nec aliquam velit. Phasellus vehicula purus pulvinar neque tincidunt, nec suscipit purus volutpat. Praesent posuere ligula et mattis mollis. Suspendisse felis purus, ornare eu vehicula nec, sagittis eu justo. Fusce eros lorem, molestie in gravida cursus, ultricies sed augue. Morbi dictum sem ultrices, finibus quam ut, molestie turpis. Integer placerat lacinia odio non porta.</p>
      <p>Donec vehicula mi quis varius vehicula. Etiam eget massa libero. Nulla dictum et leo sit amet elementum. Nam bibendum est sapien, ac malesuada dolor molestie sit amet. Pellentesque vestibulum sollicitudin neque, gravida ullamcorper eros malesuada sed. In euismod efficitur mauris id ornare. Quisque hendrerit risus nec tempor accumsan. Nullam id magna molestie nisl finibus gravida quis nec erat. In et nulla urna. Phasellus ut erat egestas lectus semper placerat sit amet non leo. Quisque posuere vulputate arcu id bibendum.</p>
    </Container>
  </Layout>
)

export default IndexPage
