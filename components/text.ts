import styled from "@emotion/native";

export const baseText = styled.Text`
color: black;
`;

export const Heading = styled(baseText)<{ scale: number }>`
font-size: ${(props) => `${props.scale * 24}px`};

`;

export const Header = styled.View<{ ws: number }>`
align-items: center;
margin-bottom: ${(props) => `${props.ws * 24}px`};
`;
