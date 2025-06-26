import { CollectionSummary } from "./CollectionSummary";

export const Home = ({collections}) => {
  return collections.map(
    (collection,index) => 
      <CollectionSummary collection={collection} key={index} />)
}
