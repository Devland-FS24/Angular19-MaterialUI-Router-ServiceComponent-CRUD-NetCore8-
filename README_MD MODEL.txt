# Angular19 MaterialUI Router ServiceComponent CRUD + NetCore8 

   

## Table of Contents
- [About](#about)
- [InstallationUsage](#installationusage)
- [Highlights](#highlights)
- [Contributing](#contributing)
- [License](#license)

## About
This Angular 19 app is a demo of an Employee CRUD component, an Autocomplete component, an Input Component, a Service Component and a .NET Core 8 API endpoint. This application also presents a folder structure and the implementation of a Service Component. The Autocomplete component makes use of the Service Component through the call to "service.GetColorList()". That is a demo implentation so you can implement the service "service.getAllDDLItemsByParam(searchValue: string)" in the same Autocomplete component replacing the service GetColorList(). This in case you want to replicate the same functionality of the one described on the other NG19 app "NG19NetCore8Autocomplete project".

## InstallationUsage

  Previous requirements:

  THE .NET 8 FRAMEWORK MUST BE INSTALLED.
  EXPLORER BY DEFAULT, GOOGLE CHROME.
  Visual Studio 2022 Community.
  Visual Studio Code.
  SQL Server 2014 or higher.
  SQL Management Studio v17.8.1 or higher.
  NodeJS v 22.6.0 for windows 10.
  Angular 19 installed locally, not globally, with npx command.
  
1. Download the ZIP file of this project.
IMPORTANT: 
        By default only the Autocomplete part of this demo works.
        Please follow the instructions in order to test the second part of this demo:
        Employee CRUD. 

WARNING: Before running the NG server, make sure you're running the Employee.Api WEB API, coming along with this demo and also make sure you have installed the DB "TestDb" on your local SQL server. You may or may not need to make some adjustments on your connection strings inside the Employee.Api.


- The CRUD part presents the classic Create-Read-Update-Delete operations for a Company's employee. The operations work by calling their corresponding APIs on an Employee.Api WEB API .NET Core 8 application.


        1. Run your NG server with the command: npm start

        2. Open a browser and go to the link:

                http://localhost:4200

        3. In this app you can try the following URLs:

          Home component: 
                    http://localhost:4200
                    Presentation of this app.

          Employee CRUD component: 
                    http://localhost:4200/employee-data
                    CRUD operations.

          Input component: 
                    http://localhost:4200/input
                    Angular Material tags.

          Autocomplete component:
                     http://localhost:4200/autocomplete
                     It has hardcoded values for the Drop Down List options.
                     You can type in any character and it will display all the results containing that character, instantly.
                     If you prefer values from an API endpoint you can adapt the call to the service 
                         "service.getAllDDLItemsByParam(searchValue: string)"
                    and then you'll be able to get data from a real API endpoint.

## Highlights

     Some Angular 19 features worth noting:

    1. Angular Routes
    2. Component imports.
    3. Service Components
    4. Folder structure.
    5. Angular Material UI.
    6. In the file "\src\app\app.routes.ts" you are presented with a set routes, matching the components you can find in the folder structure.
          
## Contributing
 This application is intended as a demo that is part of my Portfolio of apps. 
 I'll update this Portfolio with the latest technologies I have skills on as soon as possible.

## License
This project is licensed under the [MIT License](LICENSE).
