async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const proxy_address = process.env.PROXY_ADDRESS;
  let box = await upgrades.upgradeProxy(proxy_address, BoxV2);
  console.log("Your upgraded proxy is done!", box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
