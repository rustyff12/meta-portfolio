import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    return (
        <VStack bg="white" color="black" borderRadius="10px" align="stretch">
            <Image src={imageSrc} objectFit="cover" borderRadius="10px" />
            <VStack p="10px" alignItems="start">
                <Heading fontSize="1.5rem" fontWeight="700">
                    {title}
                </Heading>
                <Text fontWeight="300">{description}</Text>
                <HStack gap="5px" fontWeight="700">
                    <Text>See more</Text>
                    <FontAwesomeIcon icon={faArrowRight} size="1x" />
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Card;

// Implement the UI for the Card component according to the instructions.
// You should be able to implement the component with the elements imported above.
// Feel free to import other UI components from Chakra UI if you wish to.
