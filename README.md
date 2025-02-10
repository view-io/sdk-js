<img src="assets/view_logo.png" height="48">

# view-sdk

`view-sdk` is a JavaScript SDK for managing Nodes, Tenants, Credentials, and Users within a system via an API. It extends `ViewSdkBase` and provides methods to interact with these entities through RESTful API endpoints.

## Requirements

- Node.js v12+

## License

View software is licensed under the [Fair Core License (FCL)](https://fcl.dev/) with graduation after two years to an Apache 2.0 license. Use of the software requires acceptance of the license terms found in the file `LICENSE.md`.

## Installation

Install the SDK using npm:

```bash
npm install view-sdk
```

## Getting Started

Following below is the example of JS code utilizing the sdk:

### Basic Configuration

```javascript
var { ViewConfigurationSdk } = require('view-sdk');

var api = new ViewConfigurationSdk(
  'default', //tenant Id
  'default', //access token
  'http://example.com' //endpoint
);
var guid = 'default'; // {String}
```

### Example Usage

```javascript
// region Nodes
const getNodeById = async () => {
  try {
    const data = await api.retrieveNode(guid);
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};
getNodeById();
```

## Documentation for API Endpoints

To Generate the documentation, run the following command:

```bash
npm run build:docs
```

[View Documentation](doc.json)

## Development

### Running Tests

The project uses `jest` for running tests in isolated environments. Make sure you have jest installed, which should automatically be there if you have installed dependencies via `npm i` command:

```bash
# Run only the tests
npm run test

# Run tests with coverage report
npm run test:coverage

# Build the package
npm run build

```

### Development Installation

- Node.js v18.20.4
- npm

Use the command `npm i` to install dependencies and then `npm run build` to build the project.

### Linking the project locally (for development and testing)

#### Linking lite-graph dependency locally

Since view-sdk depends on `lite-graph` which is not published on npm, you'll need to link it locally. Follow these steps:

1. Clone the lite-graph repository
2. Install lite-graph dependencies:

   ```shell
   npm install
   ```

3. Build lite-graph:

   ```shell
   npm run build
   ```

4. Create a global link for lite-graph:

   ```shell
   npm link
   ```

5. Go back to view-sdk directory and link to lite-graph:
   ```shell
   cd path/to/view-sdk
   npm link lite-graph
   ```

This will create the necessary local links between view-sdk and lite-graph for development.

#### Linking view-sdk dependency locally

To use the library locally without publishing to a remote npm registry, first install the dependencies with the command:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in local system's npm with the following command:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your view-sdk from, and run:

```shell
npm link view-sdk
```

Finally, you need to build the sdk, use command:

```shell
npm run build
```

You can then import the SDK with either import or require based on the ES Module (esm) or CommonJS (cjs) project, as shown below:

```javascript
import sdk from 'view-sdk';
//or
var sdk = require('view-sdk');
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## Feedback and Issues

Have feedback or found an issue? Please file an issue in our GitHub repository.

## Documentation

For detailed API documentation and examples, visit [View Documentation](https://docs.view.io).

## Version History

Please refer to [CHANGELOG.md](CHANGELOG.md) for a detailed version history.
