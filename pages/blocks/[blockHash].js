//import { Text } from "@chakra-ui/react";
//
//export async function getStaticProps(context) {
//  const hash = context.params.blockHash;
//
//  const data = await fetch(`http://143.110.233.192:8000/blocks/${hash}`);
//
//  const blockData = await data.json();
//
//  return {
//    props: { blockData: blockData.data },
//  };
//}
//
//export async function getStaticPaths() {
//  const response = await fetch("http://143.110.233.192:8000/blocks/");
//
//  const data = await response.json();
//
//  const paths = data.data.map((items) => {
//    return {
//      params: { blockHash: items.hash },
//    };
//  });
//
//  return { paths, fallback: false };
//}
//
//export default function Block({ blockData }) {
//  console.log(blockData);
//  return (
//    <>
//      <Text>Block hash:</Text>
//    </>
//  );
//}
