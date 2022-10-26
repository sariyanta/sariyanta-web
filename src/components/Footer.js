import { Flex } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Flex as={"footer"} borderTop="1px" borderColor={"gray.100"}>
			<Flex maxWidth={"60rem"} mx="auto" py=".5rem">
				Powered by love
			</Flex>
		</Flex>
	);
}
