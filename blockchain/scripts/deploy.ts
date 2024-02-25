import {ethers} from 'hardhat';

async function main(): Promise<void> {
    const helloWorldFactory = await ethers.getContractFactory('HelloWorld');
    const helloWorld = await helloWorldFactory.deploy('Hello World!');

    await helloWorld.waitForDeployment();

    console.log(`Deployed to ${helloWorld.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exitCode = 0)
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
