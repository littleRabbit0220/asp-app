import { Flex, Box, Text } from "theme-ui"
import FadeInOutRight from "../animation/FadeInOutRight"
import HomeAnimation from "../animation/HomeAnimation"

const Home = () => (
  <Flex
    id="home"
    sx={{
      p: [0, 4],
      flex: 1,
      color: "white",
      flexWrap: "wrap",
    }}
  >
    <Flex
      sx={{
        width: ["100%", "100%", "100%", "45%", "50%"],
        py: [0, 4],
        px: 4,
        alignItems: "center",
      }}
    >
      <FadeInOutRight>
        <Text
          as="h1"
          sx={{ fontSize: 9, fontWeight: 100, pb: 4 }}
        >
          TweenPages
        </Text>
        <Text
          as="h2"
          sx={{ fontSize: 4, fontWeight: 500, pb: [0, 0, 0, 5] }}
        >
          Build complex animated page transitions with GSAP and Next.js.
        </Text>
      </FadeInOutRight>
    </Flex>
    <Box sx={{ width: ["100%", "100%", "100%", "55%", "50%"] }}>
      <HomeAnimation />
    </Box>
  </Flex>
)

export default Home
