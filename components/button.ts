import styled from "@emotion/native";

export const Btn = styled.TouchableOpacity<{ widthT: string; bg: string }>`
background-color: #e5e5e5;
padding: 10px;
margin: 10px;
border-radius: 5px;
width: ${(props) => props.widthT};
background-color: ${(props) => props.bg};
color: white;
display: flex;
align-items: center;
border-radius: 100px;
`;
