import { Heading, Center, Text, Image, Box, ScrollView } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <ScrollView>
      <Header title={"News"} withBack="true" />

      <Image source={{ uri: params.image }} w="100%" h="20%" alt="Data foto" />
      <Box p={4}>
        <Text fontSize="sm">{params.date}</Text>
        <Heading textAlign="left" fontSize="xl" fontWeight="bold">
          {params.title}
        </Heading>
        <Text fontSize="md" fontFamily="Roboto">
          {params.content}
        </Text>
      </Box>
    </ScrollView>
  );
};

export default NewsDetail;
