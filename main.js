// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev86749.service-now.com/',
  username: 'admin',
  password: 'Admin@123',
  serviceNowTable: 'change_request'
};


// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
  // Test the object's get and post methods.
  // You must write the arguments for get and post.
  let error = null;
  let data = null;
  connector.get((data, error) => {
    if (error) {
      console.error(`\nError returned from GET request:\n${JSON.stringify(error)}`);
    }
    console.log(`\nResponse returned from GET request:\n${JSON.stringify(data)}`)
  });
  connector.post((data, error) => {
    if (error) {
      console.error(`\nError returned from GET request:\n${JSON.stringify(error)}`);
    }
    console.log(`\nResponse returned from GET request:\n${JSON.stringify(data)}`)
  });

}

// Call mainOnObject to run it.
mainOnObject();