import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor } from "../../constants/color";

export const VisuallyHiddenInput = styled("input")({
    border: 0,
    width: 8,
    height: 8,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    color: "white",
});

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    &:hover {
        backgroung-color: rgba(0, 0, 0, 0.1);
    }
`;

export const InputBox = styled("input")`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    padding: 0 3rem;
    border-radius: 1.5rem;
    background-color: ${grayColor};
`;
