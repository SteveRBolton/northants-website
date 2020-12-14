import { gql } from "@apollo/react-hooks";
import callToActionFragment from '../CallToAction/fragment';

const fragment = gql`
    ${callToActionFragment}
    fragment EmbeddedParagraph on EmbeddedParagraph {
        id
        paragraph {
            ...CallToAction
        }
    }
`;

export default fragment;