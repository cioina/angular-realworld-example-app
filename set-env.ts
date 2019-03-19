//https://medium.com/@natchiketa/angular-cli-and-os-environment-variables-4cfa3b849659
//https://github.com/nodeshift/centos7-s2i-web-app/blob/master/s2i/run#L10

//https://docs.openshift.com/container-platform/3.11/dev_guide/environment_variables.html
//https://docs.openshift.com/container-platform/3.11/dev_guide/application_lifecycle/new_app.html
//https://developers.redhat.com/blog/2018/10/04/modern-web-apps-openshift-part-1/

import { writeFile } from 'fs';
import { argv } from 'yargs';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `
export const environment = {
  production: true,
  api_url: '${argv.API_URL}'
};
`
writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Output environment generated at ${targetPath}`);
});