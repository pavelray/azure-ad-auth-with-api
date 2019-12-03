import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {  
  tenant: 'schooltoolb2c.onmicrosoft.com',
  clientId: 'ba324d99-b8e4-40fa-8a79-8941b89ab331',
  endpoints: {
    api:'https://schooltoolb2c.onmicrosoft.com/todoListService_web_daemon_v1'
  },
  cacheLocation: 'localStorage'
};

export const authContext = new AuthenticationContext(adalConfig);

export const getToken = () => {
    let auth_token = null;
    authContext.acquireToken(adalConfig.endpoints.api, (message, token, msg) => {
        if (token) {
            auth_token = token
        }
    });
    
   
    
    return (auth_token);

}
