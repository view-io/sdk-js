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
var { ViewConfigurationSdk } = require('view-sdk');

var api = new ViewConfigurationSdk(
  'default', //tenant Id
  'default', //access token
  'http://example.com' //endpoint
);
var guid = 'default'; // {String}
```
## Available Services

The SDK provides access to the following services:

- **Assistant**: AI assistant management and interactions
- **Configuration**: System configuration and settings management
  - Blobs, Credentials, Data Repositories
  - Encryption Keys, Graph Repositories
  - Nodes, Tenants, Users
  - Vector Repositories, Webhooks
- **Graphs**: Graph database operations
  - Create and manage graphs
  - Add and connect nodes with edges
  - Support for graph data and metadata
  - Integration with LiteGraph for advanced graph operations
- **Lexi**: Natural language processing capabilities
- **Orchestration**: Workflow and process orchestration
- **Processor**: Data processing and transformation
- **Semantic**: Semantic analysis and processing
- **Storage**: Data storage operations
- **Vector**: Vector operations and similarity search
- **IngestQueue**: Manage ingest queue operations


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
### Example Usage with Tenant

```javascript
const writeTenantMetadata = async () => {
  try {
    const tenant = {
      AccountGUID: 'your-account-guid', // Example GUID
      Name: 'Example Tenant',
      S3BaseDomain: 's3.example.com',
      RestBaseDomain: 'api.example.com',
      DefaultPoolGUID: 'pool-7890-xyz'
    };

    const xtoken = 'your-x-token-here';

    const data = await api.writeTenant(tenant, null, xtoken);
    console.log(data, 'chk tenant data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

writeTenantMetadata();
```

### Example Usage with Credentials

```javascript
// region Credentials
const createNewCredential = async () => {
  try {
    const credential = {
      GUID: null, 
      tenantGuid: 'your-tenant-guid-here',
      UserGUID: 'user-1234-xyz',
      AccessKey: 'your-access-key-here',
      SecretKey: 'your-secret-key-here',
      Active: true,
      CreatedUtc: new Date().toISOString(),
    };

    const data = await api.createCredential(credential);
    console.log(data, 'chk created credential');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

createNewCredential();
```

```javascript
// region Credentials
const getAllCredentials = async () => {
  try {
    const data = await api.retrieveCredentials();
    console.log(data, 'chk credentials data');
  } catch (err) {
    console.error('Error retrieving credentials:', JSON.stringify(err));
  }
};

getAllCredentials();

```

### Example Usage with User

```javascript
const createNewUser = async () => {
  try {
    const user = {
      GUID: null, // Let the system generate it
      tenantGuid: 'your-tenant-guid-here',
      FirstName: 'John',
      LastName: 'Doe',
      Notes: 'New user for testing',
      Email: 'john.doe@example.com',
      PasswordSha256: 'your-sha256-hashed-password',
      Active: true,
      CreatedUtc: new Date().toISOString(),
    };

    const data = await api.createUser(user);
    console.log(data, 'chk created user');
  } catch (err) {
    console.error('Error creating user:', JSON.stringify(err));
  }
};

createNewUser();
```

### Example Usage with Vector Repository

```javascript
// region Vector Repositories
const createNewVectorRepository = async () => {
  try {
    const vectorRepository = {
      GUID: null, // Auto-generated if not provided
      TenantGUID: 'your-tenant-guid-here',
      name: 'My Vector Repository',
      repositoryType: 'example-repo-type',
      endpointUrl: 'https://api.example.com/vector',
      apiKey: 'your-api-key-here',
      model: 'all-MiniLM-L6-v2', // Default model
      dimensionality: 768, // Example dimensionality
      databaseHostname: 'db.example.com',
      databaseName: 'vectorDB',
      databaseTable: 'vector_table',
      databasePort: 5432, // Example DB port
      databaseUser: 'dbuser',
      databasePassword: 'securepassword',
      promptPrefix: 'Start:',
      createdUtc: new Date().toISOString(),
    };

    const data = await api.createVectorRepository(vectorRepository);
    console.log(data, 'chk created vector repository');
  } catch (err) {
    console.error('Error creating vector repository:', JSON.stringify(err));
  }
};

createNewVectorRepository();
```

### Example Usage with Graph Repository

```javascript
// region Graph Repositories
const createNewGraphRepository = async () => {
  try {
    const graphRepository = {
    Name: "name",
    RepositoryType: "your-repo-name",
    EndpointUrl: "end-point-url",
    Port: 0,
    GraphIdentifier: "graph-identifier"
};

    const data = await api.createGraphRepository(graphRepository);
    console.log(data, 'chk created graph repository');
  } catch (err) {
    console.error('Error creating graph repository:', JSON.stringify(err));
  }
};

createNewGraphRepository();

```

```javascript
const checkGraphRepositoryExists = async (guid) => {
  try {
    const exists = await api.existsGraphRepository(guid);
    console.log(`Graph repository with GUID ${guid} exists:`, exists);
  } catch (err) {
    console.error('Error checking graph repository existence:', JSON.stringify(err));
  }
};

// Example GUID
checkGraphRepositoryExists('your-graph-repo-guid-here');
```

```javascript
const getGraphRepositoryById = async (guid) => {
  try {
    const data = await api.retrieveGraphRepository(guid);
    console.log(data, 'chk graph repository data');
  } catch (err) {
    console.error('Error retrieving graph repository:', JSON.stringify(err));
  }
};

// Example GUID
getGraphRepositoryById('your-graph-repo-guid-here');
```

```javascript
const getAllGraphRepositories = async () => {
  try {
    const data = await api.retrieveGraphRepositories();
    console.log(data, 'chk all graph repositories');
  } catch (err) {
    console.error('Error retrieving all graph repositories:', JSON.stringify(err));
  }
};

getAllGraphRepositories();
```

## Documentation for API Endpoints

To Generate the documentation, run the following command:

```bash
npm run build:docs
```

[View Documentation](docs/docs.md)

## Development

### Setting up Pre-commit Hooks

This project uses pre-commit hooks to ensure code quality. To set up pre-commit:

```bash
# Install pre-commit
pip install pre-commit

# Install the pre-commit hooks
pre-commit install

# (Optional) Run pre-commit on all files
pre-commit run --all-files
```

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

- Node.js v18.20.4
- npm

Use the command `npm i` to install dependencies and then `npm run build` to build the project.

### Linking the project locally (for development and testing)

#### Building and Installing LiteGraph SDK

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

## Support

For support, please:
1. Check the [documentation](docs/)
2. Open an issue on GitHub
3. Contact View AI support

## Feedback and Issues

Have feedback or found an issue? Please file an issue in our GitHub repository.

## Documentation

For detailed API documentation and examples, visit [View Documentation](https://docs.view.io).

## Version History

Please refer to [CHANGELOG.md](CHANGELOG.md) for a detailed version history.
