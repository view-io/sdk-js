<img src="assets/view_logo.png" height="48">

# JavaScript SDK for View AI

View AI enables organizations to rapidly deploy conversational AI experiences and yield instant insights. This SDK provides a simplified interface for consuming View AI configuration services in JavaScript applications.

## License

View software is licensed under the [Fair Core License (FCL)](https://fcl.dev/) with graduation after two years to an Apache 2.0 license. Use of the software requires acceptance of the license terms found in the file `LICENSE.md`.

## Requirements

- Node.js v18.20.4
- npm

### Dependencies

Use the command `npm i` to install dependencies.

## Installation

Install the SDK using npm:

```bash
npm install view-sdk
```

## Getting Started

Following below is the example of JS code utilizing the sdk:

### Basic Configuration

```javascript
import { ViewConfigurationSdk } from 'view-sdk';

const api = new ViewConfigurationSdk(
  'http://view.homedns.org:8000', //endpoint
  '<tenantId>', //tenant Id
  '******' //access token
);
```

## Available Services

The SDK provides access to the following services:

- **Assistant**: AI assistant management and interactions
- **Configuration**: System configuration and settings management
  - Blobs, Credentials, Data Repositories
  - Encryption Keys, Graph Repositories
  - Nodes, Tenants, Users
  - Vector Repositories, Webhooks
- **Lexi**: Natural language processing capabilities
- **Processor**: Data processing and transformation
- **Semantic**: Semantic analysis and processing
- **Storage**: Data storage operations
- **Vector**: Vector operations and similarity search
- **IngestQueue**: Manage ingest queue operations
- **Embeddings**: Embedding operations
- **Healthcheck**: Healthcheck operations
- **Crawler**: Crawler operations
- **Director**: Director operations


### Example Usage

```javascript
// region Nodes
const getNode = async () => {
  try {
    const nodes = await api.Nodes.read('<nodeId>');
    console.log(nodes, 'Nodes fetched successfully');
  } catch (err) {
    console.log('Error fetching Nodes:', err);
  }
};
getNode();
```

### Example Usage with Tenant

```javascript

const createTenant = async () => {
  try {
    const createdTenant = await api.Tenant.create({
      Name: 'My tenant',
      Region: 'us-west-1',
      S3BaseDomain: 'localhost',
      RestBaseDomain: 'localhost',
      DefaultPoolGUID: '00000000-0000-0000-0000-000000000000',
    });
    console.log(createdTenant, 'Tenant created successfully');
  } catch (err) {
    console.log('Error creating Tenant:', err);
  }
};

createTenant();
```

### Example Usage with Credentials

```javascript
// region Credentials
export const createCredential = async () => {
  try {
    const response = await api.Credential.create({
      UserGUID: '<userId>',
      Name: 'Default credential',
      Active: true,
    });
    console.log(response, 'Credential created successfully');
  } catch (err) {
    console.log('Error creating Credential:', err);
  }
};
createCredential();

```

```javascript
// region Credentials
export const getAllCredentials = async () => {
  try {
    const credentials = await api.Credential.readAll();
    console.log(credentials, 'All credentials fetched successfully');
  } catch (err) {
    console.log('Error fetching Credentials:', err);
  }
};

getAllCredentials();
```

### Example Usage with User

```javascript
export const createUser = async () => {
  try {
    const user = await api.User.create({
      FirstName: 'John',
      LastName: 'Doe',
      Notes: 'Default password is password',
      Email: 'john.doe@example.com',
      PasswordSha256: '******',
    });
    console.log(user, 'User created successfully');
  } catch (err) {
    console.log('Error creating User:', err);
  }
};
createUser();
```

### Example Usage with Vector Repository

```javascript
// region Vector Repositories
const createVectorRepository = async () => {
  try {
    const response = await api.VectorRepository.create({
      Name: 'My vector repository ash 3',
      RepositoryType: 'Pgvector' as any,
      Model: 'all-MiniLM-L6-v2',
      Dimensionality: 384,
      DatabaseHostname: 'localhost',
      DatabaseName: 'vectordb',
      SchemaName: 'public',
      DatabaseTable: 'minilm',
      DatabasePort: 5432,
      DatabaseUser: 'postgres',
      DatabasePassword: 'password',
    });
    console.log(response, 'Vector repository created successfully');
  } catch (err) {
    console.log('Error creating Vector repository:', err);
  }
};

createVectorRepository();
```

### Example Usage with Graph Repository

```javascript
// region Graph Repositories
const createGraphRepository = async () => {
  try {
    const response = await api.GraphRepository.create({
      Name: 'My LiteGraph instance ash 3',
      RepositoryType: 'LiteGraph',
      EndpointUrl: 'http://localhost:8701/',
      ApiKey: 'default',
      GraphIdentifier: '00000000-0000-0000-0000-000000000000',
    });
    console.log(response, 'Graph repository created successfully');
  } catch (err) {
    console.log('Error creating Graph repository:', err);
  }
};

createGraphRepository();
```

```javascript
const graphRepositoryExists = async () => {
  try {
    const response = await api.GraphRepository.exists('<graphRepositoryId>');
    console.log(response, 'Graph repository exists');
  } catch (err) {
    console.log('Error checking Graph repository:', err);
  }
};

graphRepositoryExists();
```

```javascript

const readGraphRepository = async () => {
  try {
    const response = await api.GraphRepository.read('<graphRepositoryId>');
    console.log(response, 'Graph repository fetched successfully');
  } catch (err) {
    console.log('Error fetching Graph repository:', err);
  }
};

readGraphRepository();
```

```javascript
const getAllGraphRepositories = async () => {
  try {
    const data = await api.GraphRepository.readAll();
    console.log(data, 'All graph repositories fetched successfully');
  } catch (err) {
    console.log('Error fetching Graph repositories:', err);
  }
};

getAllGraphRepositories();
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## Support

For support, please:

1. Check the [documentation](https://docs.view.io/)
2. Open an issue on GitHub
3. Contact View AI support

## Development

### Setting up Pre-commit Hooks

The pre-commit hooks will run automatically on `git commit`. They help maintain:

- Code formatting (using ruff)
- Import sorting
- Code quality checks
- And other project-specific checks

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

## Feedback and Issues

Have feedback or found an issue? Please file an issue in our GitHub repository.

## Documentation

For detailed API documentation and examples, visit [View Documentation](https://docs.view.io).

## Version History

Please refer to [CHANGELOG.md](CHANGELOG.md) for a detailed version history.
