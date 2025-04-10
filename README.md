# Basic React app that can be easily deployed and run within the Vonage Cloud Runtime service.

### Clone the repo

```console
git clone https://github.com/vernick/vonage-vcr-react-starter.git
```
### Environment Variables

Do the following if you want to use environment variables in the server or react app that is not deployed by VCR (for example, by running yarn dev)
See comments in the .env-example on how the variables are used

```console
cd server
cp .env-example .env
```

### Steps to run and access the app locally

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

Note.  In dev mode, this starts a watcher, so if the app is modified it rebuilds the app and restarts the server.  Note that in this mode, the VCR service does not inject the environment 
variables set within the vcr.yml.  It will, however, read the variables in the .env file.

```console
yarn dev
```

### Initialzing the app for VCR environment

```console
cp vcr.yml-example vcr.yml
```
Then update the vcr.yml file based on your project, region and environment variables, if needed

#### Steps to run the server locally in VCR  debug mode but accessible over the cloud

This sets up a tunnel from the cloud to the server running locally.

```console
vcr debug
```

### Steps to deploy the project to the VCR Cloud

```console
vcr deploy
```
