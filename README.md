# #91 Talk4Devs - Blockchain Hello World

## 1. Project structure

### 1.1. Blockchain

Module contains smart contracts, script for deploying them on containerized local blockchain by Ganache.

Technologies:

```text
Hardhat
Ganache
Typescript
```

### 1.2. Backend

It's Spring Boot MVC application with few endpoints for managing state of smart contracts in Your local blockchain.

Technologies:

```text
Java 17
Maven 3.9.3
Spring Boot 3.2.x
Web3j 4.11.0
```

### 1.3. Frontend

Angular application that contains integration with blockchain via Metamask and Web3 library.

Technologies:

```text
Angular 17.2.1
Web3 x.x.x
Metamask (Firefox or Chromium-based web browser) x.x.x
```

## 2. Development Environment

### 2.1. Blockchain

Install dependencies:

```shell
cd ./blockchain
npm install
cd ..
```

Build Ganache docker container:

```shell
cd ./blockchain
docker build -t talk4devs-ganache:1.0.0 .
docker run --name talk4devs-ganache -p 18545:8545 -d talk4devs-ganache:1.0.0
cd ..
```

Compile smart contracts:

```shell
cd ./blockchain
npx hardhat compile
cd ..
```

Deploy smart contract on Your local blockchain:

```shell
cd ./blockchain
npx hardhat run scripts/deploy.ts --network talk4devs
cd ..
```

### 2.2. Backend



### 2.3. Frontend

Install dependencies:

```shell
cd ./frontend
npm install
cd ..
```

Run application:

```shell
cd ./frontend
npm run start
```

Open web browser [http://localhost:4200](http://localhost:4200)
