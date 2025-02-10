# Basic React app that can be easily deployed and run within the Vonage Cloud Runtime service.

### Clone the repo

```console
git clone https://github.com/vernick/vonage-vcr-react-starter.git
```

### Steps to run locally.

#### Installing dependencies

```console
cd <project_directory>
yarn
```

#### Build the React Client app and copy to the Server to be served

```console
yarn build
```

#### Start the server

Note.  In dev mode, this starts a watcher, so if the app is modified it rebuilds the app and restarts the server

```console
yarn dev
```

### Steps to deploy the project to VCR.

```console
cd server
cp .env-example .env
```
#### Modify the .env file with the Application ID and Private Key

```console
vcr deploy
```
