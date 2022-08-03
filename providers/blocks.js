export async function getStaticProps() {
  const data = await fetch("http://143.110.233.192:8000/blocks");

  const blocksData = await data.json();

  return {
    props: { blocksData: blocksData.data },
  };
}

console.log(blocks);
