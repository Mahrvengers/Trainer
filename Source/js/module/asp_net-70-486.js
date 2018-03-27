trainings.push(
    {
        name: "Developing ASP.NET MVC4 Web Applications",
        description: "Exam 70-486",

        fragen: [

    Wuerfeltextaufgabe(``, `The ASP.NET MVC framework provides a certain level of SoC by breaking the application responsibilities down into models, views, and controllers. Many aspects of each can be customized if necessary by overriding the base classes and creating your own.`),
    Wuerfeltextaufgabe(``, `A view represents the area of the application that will be seen by the user. When coding your views, do not do anything to directly change the model. There are two view engines included with ASP.NET MVC 4: the Razor view engine and the Web Forms view engine. Each provides different ways to write and manage data within the view. The Razor view engine cannot parse ASPX-style coding, and the ASPX view engine cannot parse Razor syntax.`),
    Wuerfeltextaufgabe(``, `A controller handles the incoming HTTP requests and sends commands to the model to update the model’s state, and sends commands to its associated view to change the view’s presentation of the model. A model is the part of the application that handles the data and business logic. It also manages the persistence layer and data access.`),
    Wuerfeltextaufgabe(``, `Client-side processing is ideal for work that is specific to the client. It is also important when it can help remove processing from the server. Server-side processing is recommended when you might be needing to perform the same processing in multiple views or when you need large amounts of data to do the processing and you do not want to have to transfer this information.`),
    Wuerfeltextaufgabe(``, `As you design your application, you should also design for scalability. This might have multiple levels of impact upon other decisions that you might be making around caching, server-side versus client-side processing and data access.`),
    Wuerfeltextaufgabe(``, `There are three primary ways to manage the creation of a database when using the Entity Framework. The Database First approach enables you to leverage an existing database schema to create entities. Code First and Model First approaches are intended to be used in scenarios in which you are creating a new database schema as part of your project. Code First enables developers to create the object structure first and then use it to create the database schema, whereas the Model First approach enables designers to work in a tool that enables them to build the object model visually and will use that output to create the database schema. The approach you choose should depend on the current status of your database as well as the preferences and skills of the team implementing the initial version.`),
    Wuerfeltextaufgabe(``, `The stateless nature of ASP.NET MVC disables some of the built in features of Entity Framework. This will cause you to have to write additional code to make the best use of the DBContext class and its approach to data access. With that in mind, it is best to abstract the data access layer. The Repository pattern is one of the most used patterns for managing data abstraction.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are designing an application in which a section of the main page will be populated by content from a third-party provider. You do not have control over the responsiveness of the client or how much information will be returned with each request. The call is to a RESTful service and will return the information formatted in Extensible Markup Language (XML). What is the best way to implement this application?`,
        "optionen" : [
            { id: "1", text: `Design a model that handles the data call to populate the model. Create a partial view containing only this display area and put an asynchronous service call that returns this model in the partial view controller.`, richtig: true, begruendung: `Correct: Because you do not have control over the responsiveness of the third-party provider and you do not know how much data might be returned from each call, you should wrap the call in the asynchronous framework. Providing the data in a strongly-typed model gives it more flexibility than working with the raw XML on the client side.` },
            { id: "2", text: `Put a synchronous service call into the main page controller.`, richtig: false, begruendung: `Incorrect: You do not know how long the call to the third party will take, and putting a synchronous call into the main page will not give any response until the call is completed.` },
            { id: "3", text: `Create a partial view containing only this display area and put a synchronous service call in the partial view controller.`, richtig: false, begruendung: `Incorrect: You do not want to use a synchronous call in this case due to the unknown response time.` },
            { id: "4", text: `Create a partial view containing only this display area and put an asynchronous service call in the partial view controller.`, richtig: false, begruendung: `Incorrect: Although you can take this approach, it infers that you will manipulate the third-party response data in either the controller or the view. SoC recommends that this manipulation occur in a model.` },

        ]  
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You have been given requirements for a dashboard page that will contain summary information from your order processing system in a single display table. However, this summarization needs to be done by combining data requests from the order system, the shipping system, and the accounting system. The dashboard page will be the only place you use this combined data. What is the best way to implement this requirement?`,
        "optionen" : [
            { id: "1", text: `Make the various data requests and compile the information in the controller for display.`, richtig: false, begruendung: `Incorrect: You should not perform any data manipulation in the controller.` },
            { id: "2", text: `Create an individual model for each of the data requests, and then create a view-specific model that calls those models and merges the data.`, richtig: true, begruendung: `Correct: You will have a better chance of code reuse if you break down the separate calls into their own models and then create another model to pull them together and compile them.` },
            { id: "3", text: `Create a model for the summary data and handle the various data requests within that model as well as the merging of the data.`, richtig: false, begruendung: `Incorrect: Although this would be a plausible way to implement the solution, it is not the best. If any other work came up that uses any of the calls within this model, you will either have to refactor the code to extract it at that point or have duplicate code.` },
            { id: "4", text: `Create an individual model for each of the data requests and then merge the data on the client side for display.`, richtig: false, begruendung: `Incorrect: The fact that this data can be merged into a single table display shows there is some intrinsic business worth to the information in this format. Merging on the client side goes against SoC considerations.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `A significant change has been requested in an application maintained within your company. The application is a classic ASP application that uses custom Open Database Connectivity (ODBC) drivers to connect to a relational data repository on a mainframe computer. The CIO decided that the company needs to replace this 30-year-old system. The team that worked on the original project is made up of developers who have never worked with an object-oriented approach before. Which approaches would be the best to use when designing your initial schema in Entity Framework? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Create your own custom design because it’s too much work to manage an inexperienced staff.`, richtig: false, begruendung: `Incorrect: You should incorporate your team into the project as soon as possible.` },
            { id: "2", text: `Use Code First.`, richtig: false, begruendung: `Incorrect: Because the team has no experience with object-oriented programming, the Code First approach is unlikely to be the most efficient way to create the new schema.` },
            { id: "3", text: `Use Model First.`, richtig: true, begruendung: `Correct: The use of the Entity Designer as an integral component in the Model First approach will help unfamiliar users to walk through the process.` },
            { id: "4", text: `Use Database First.`, richtig: true, begruendung: `Correct: There is already a working relational database for the application, although it is in a system that will be replaced. A port of the design should be considered.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are designing an application that allows employees to change their human resources (HR) information, such as next of kin and direct deposit information. The requirements state that the application should talk directly to the HR systems’ database. However, at a recent company meeting, the CFO announced that the company will be converting to a new HR system over the next two years. They will take an additional year to move employees to the new system, one department at a time. How will this affect your design?`,
        "optionen" : [
            { id: "1", text: `It won’t; the requirements state that the application should talk directly to the HR systems’ database.`, richtig: false, begruendung: `Incorrect: It is the designer’s job to ensure that any known enhancements or future changes are accounted for. Although this approach follows the requirements, it is not the best long-term solution.` },
            { id: "2", text: `You should ensure your naming convention for the database as clearly as possible so you can rework your data calls with minimal changes.`, richtig: false, begruendung: `Incorrect: This solution does not provide the proper level of abstraction; it requires either a “one or the other” approach to supporting the HR system, or an approach in which you have to manage which database you are calling from within each data call.` },
            { id: "3", text: `You should implement the Repository pattern with the current HR system being the first repository that is built. When the second system comes online, you implement that data access using the same pattern.`, richtig: true, begruendung: `Correct: Using the Repository pattern will give you a level of abstraction into the data layer. When you create the second data access component for the new HR system, you can then differentiate on a user or departmental level which implementation to use.` },
            { id: "4", text: `You should map the model directly to the database calls, anticipating that you will have to change the model as the new system rolls out.`, richtig: false, begruendung: `Incorrect: This solution does not provide the proper level of abstraction; it requires either a “one or the other approach” to supporting the HR system, or an approach in which you have to manage which database you are calling from within each data call.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Web services are a traditional way to transfer information from one system to another on the Internet. They have been managed in several different ways over the years. ASMX services use WSDL to communicate with consumers about endpoints, protocols, and message formats. WCF is a SOAP-based protocol and is still the primary communications mechanism, but ASP.NET MVC 4 Web API has made advances in RESTful services. Web API also uses the ASP.NET MVC pattern for managing HTTP requests.`),
    Wuerfeltextaufgabe(``, `Designing for a distributed environment can be one of the most complex tasks a developer take on. Each part of the application that will be deployed separately needs to be able to manage message sending and receiving. This issue occurs whenever you separate items, such as the database from your ASP.NET MVC application, or when you locate the view on one server and the model on another. Communications between all parts of the application are critical and need to be accounted for while the application is being built.`),
    Wuerfeltextaufgabe(``, `Different types of web services can be used in distributed environments. WCF and Web API are two out-of-the-box frameworks that help you design and implement web services.`),
    Wuerfeltextaufgabe(``, `A hybrid application is an application that is partially deployed on-premise and partly off-premise. When working in this kind of environment, you need to be aware of the riskier nature of communications and manage the concept of a retry. You can split the application and host the parts in different locations. The web server portion can be on-premise while the data management area is off-premise, or vice versa.`),
    Wuerfeltextaufgabe(``, `When you design for a distributed environment, you will find state management to be a point of concern, especially when using sessions. Some design consideration should go into how you will implement sessions or whether you should design the application to be sessionless.`),
    Wuerfeltextaufgabe(``, `A distributed environment can improve availability, reliability, and scalability. One of the ways you can do that at the web server level is to use a web farm, in which you have multiple servers working in parallel to manage the various user requests.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are developing an application. One requirement is that part of your data access layer needs to be available to a third party, that wants to get this information from a REST URL in XML. Your company does not have experience with web services, but you have several websites running ASP.NET MVC 4. How could you design and provide these new services? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Task an individual on staff to learn WCF, and have this individual develop and deploy these new services using WCF.`, richtig: false, begruendung: `Incorrect: Although you would eventually be able to get a WCF REST services, it would not be efficient.` },
            { id: "2", text: `Use the Web API to create REST services using ApiController in which the serialization type is defined by the Accepts property of the browser.`, richtig: true, begruendung: `Correct: Using the Web API is a straightforward way to present REST services.` },
            { id: "3", text: `Build a basic ASP.NET MVC 4 project in which the view simply passes through the information provided by the controller, and the controller manages the code for serializing the response.`, richtig: true, begruendung: `Correct: Using ASP.NET MVC is another way to create a controller that will return XML.` },
            { id: "4", text: `Create an ASP.NET ASMX services file to get, serialize, and return the data.`, richtig: false, begruendung: `Incorrect: An ASMX web service is SOAP-based, not REST-based.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `How could you traditionally consume an ASMX web service from your application? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Generate a proxy by selecting Add Reference In Visual Studio.`, richtig: false, begruendung: `Incorrect: Selecting Add Reference does not enable you to create a proxy.` },
            { id: "2", text: `Create an HttpService and connect using Get(URL).`, richtig: true, begruendung: `Correct: HttpService.Get gets the output of a REST service.` },
            { id: "3", text: `Generate a proxy by selecting Add A Service Reference in Visual Studio.`, richtig: false, begruendung: `Incorrect: Visual Studio creates a proxy for you from the WSDL at the site you select.` },
            { id: "4", text: `Create a WCF proxy class.`, richtig: false, begruendung: `Incorrect: A WCF proxy class needs endpoints and bindings. REST services do not use, nor understand, WCF endpoints and bindings.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What are examples of hybrid applications using Windows Azure? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `An application where the local network hosts the IIS server while the database is being run from the corporate IT office`, richtig: false, begruendung: `Incorrect: Both the web application and the database storage are being run from within the company network. Although this is a distributed design, it is not a hybrid application.` },
            { id: "2", text: `An application where Windows Azure is used to host the IIS process, and Windows Azure SQL is used to store the data`, richtig: false, begruendung: `Incorrect: Both the web instance and the data repository are using Windows Azure technology. This is not a hybrid app; it is a fully deployed Windows Azure application.` },
            { id: "3", text: `An application where the IIS process is run on a local web server, whereas the data is stored in Windows Azure SQL`, richtig: true, begruendung: `Correct: Part of the application is being run in the Windows Azure environment; the other part is being run in the corporate network environment.` },
            { id: "4", text: `An application where the web part of the application is run on Windows Azure, whereas the confidential data is stored in the company’s network`, richtig: true, begruendung: `Correct: Part of the application is being run in the Windows Azure environment; the other part is being run in the corporate network environment.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Windows Azure is a cloud-based offering from Microsoft that enables companies and developers to have access to a fully configurable, flexible hosting and services environment. It enables ASP.NET MVC developers to work in a Windows-based system, yet offers the flexibility and scalability of a cloud-based service.`),
    Wuerfeltextaufgabe(``, `Azure is a stateless system, so any changes to the system whenever a role is run is not persisted to the next run. Although many applications might not be affected by this consideration, some will be, and consideration has to be given as how to manage this. A traditional server in your data center has any additional needs configured and is available every time that server is restarted. That is not the case for Windows Azure.`),
    Wuerfeltextaufgabe(``, `A developer can give a role a set of startup tasks to be run, in a preconfigured order as the system starts up. AppCmd.exe is a flexible Windows Azure-provided tool that enables you to manage your startup tasks. These startup tasks can be batch files, console files, or batch files that run Windows PowerShell scripts. You can use the startup tasks to install any additional software or third-party tool that you might need, make changes to the registry, or handle any other specific needs to support your ASP.NET MVC application.`),
    Wuerfeltextaufgabe(``, `After the startup tasks are completed, the OnStart method is called. You can override the OnStart method to implement other functionality. You need to make sure that you return true from the method, or else the startup will stop with an error.`),
    Wuerfeltextaufgabe(``, `After the OnStart method has returned, the process calls Run. Because Run is a void method, you can use the override to have applications start that can run in parallel to the main application.`),
    Wuerfeltextaufgabe(``, `Upon shutdown, the process calls the OnStop method. This is a void method as well, and would typically be used to close and clean up any ancillary processes you might have started in the OnStart or Run methods.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `What occurs if an unhandled error is fired on a startup task?`,
        "optionen" : [
            { id: "1", text: `The startup role consumes the error during its load; if there is no event handler configured, it is set to Handled as the task completes.`, richtig: false, begruendung: `Incorrect: If the startup task fires an unhandled error, the role startup stops in a failure. The task will not complete successfully.` },
            { id: "2", text: `The startup is cancelled and the role does not start.`, richtig: true, begruendung: `Correct: The task will stop processing and return a non-zero value.` },
            { id: "3", text: `The OnStop method automatically runs.`, richtig: false, begruendung: `Incorrect: The task will stop in error. The OnStop process will not run because the role will not get that far.` },
            { id: "4", text: `The startup task goes to the lowest security setting and continues to run, if possible.`, richtig: false, begruendung: `Incorrect: The task will stop processing. It will not try to continue to run on a lower security setting.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `AppCmd.exe is an application that helps you work with which objects? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Site`, richtig: true, begruendung: `Correct: AppCmd.exe enables the configuration of virtual sites.` },
            { id: "2", text: `Users`, richtig: false, begruendung: `Incorrect: There is no capability to manage users in AppCmd.exe.` },
            { id: "3", text: `Config`, richtig: true, begruendung: `Correct: AppCmd.exe supports the administration of general configuration sections.` },
            { id: "4", text: `App`, richtig: true, begruendung: `Correct: AppCmd.exe manages the support of applications.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `Which of the following are valid reasons for overriding the Run method? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Creating and starting a messaging service that will work in parallel with the Web role to manage queued messages`, richtig: true, begruendung: `Correct: Creating and running an application in parallel is what the Run method was designed to allow.` },
            { id: "2", text: `Creating an always-running service that periodically makes HTTP calls to other websites to determine their availability`, richtig: true, begruendung: `Correct: The polling service is a good example of an activity in which the Run method enables a process to work independently of the main role.` },
            { id: "3", text: `Managing error handling for the application`, richtig: false, begruendung: `Incorrect: The error handling will be managed in the OnError event and will not involve the overridden Run method.` },
            { id: "4", text: `Starting and supporting a logging application for use by the Worker role`, richtig: true, begruendung: `Correct: Creating and running an application in parallel is what the Run method was designed to allow.` },

        ]
    },
    Wuerfeltextaufgabe(``, `State management can be an important part of a software application. It is complicated in web applications because, by definition, HTTP is a stateless transfer protocol. ASP.NET MVC 4 offers multiple ways to maintain state. Decisions about maintaining state need to take into account considerations such as whether state information will be just used on the server or in the client as well, latency, and amount of data that is being stored.`),
    Wuerfeltextaufgabe(``, `The most common way to maintain state is through a session. The session can be configured to be stored in a SQL Server or separate state server and can also be configured to put the session ID in either a cookie or as part of the query string.`),
    Wuerfeltextaufgabe(``, `The query string is also a place where you can put a limited amount of information to pass back and forth to the server. The information is not secure, however, and is not unlimited because there are size limits on requested URLs. The query string is easy to access from ASP.NET MVC 4.`),
    Wuerfeltextaufgabe(``, `There is also the capability to completely store state information on the client side if that best serves the application requirements using HTML5 Web Storage API. You need to ensure that the browser adequately handles HTML5, but. ASP.NET MVC 4 does not have any default handlers to work with the client-side information other than the jQuery library.`),
    Wuerfeltextaufgabe(``, `Scalability is a major concern when determining how best to manage state. Creating a scaleable architecture will immediately rule out some of the available choices, as having an indeterminate server process the request is problematic because that server might not have access to the state information if it is stored on a single server. ASP.NET MVC 4 supports stateless protocols for scalability as well.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are designing an ASP.NET MVC 4 application that uses an Oracle database for persistence. What session configuration choices enable you to deploy your application on a web farm? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `InProc`, richtig: false, begruendung: `Incorrect: InProc does not support web farms as session items are stored only in the individual server’s memory.` },
            { id: "2", text: `SQLServer`, richtig: false, begruendung: `Incorrect: SQLServer is not available in the application stack. This means that using the default SQLServer state is not possible.` },
            { id: "3", text: `StateServer`, richtig: true, begruendung: `Correct: Using a shared state server across the web farm is an available option. Using a state server designates one server to maintain state for all the servers that connect to it.` },
            { id: "4", text: `Custom session provider`, richtig: true, begruendung: `Correct: A custom session provider enables you to maintain state as necessary by doing the work in your custom code. It is generally used when you try to use a different RDBMS system or when you do not want to use the default session database design.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating an ASP.NET MVC 4 web application that will be accessed by a large number of traditional consumers. If you need to be able to access state information on the client side in JavaScript/jQuery, where can you store it? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `localStorage`, richtig: false, begruendung: `Incorrect: localStorage is HTML5 and is not available in all browsers.` },
            { id: "2", text: `QueryString`, richtig: true, begruendung: `Correct: Query string information is available across all browsers and is usable on both the client and server.` },
            { id: "3", text: `ViewState`, richtig: false, begruendung: `Incorrect: Although ViewState is available in a form field on the page, it is encrypted and cannot be used on the client side. It is also not used by many ASP.NET MVC 4 constructs.` },
            { id: "4", text: `Cookies`, richtig: true, begruendung: `Correct: Cookies can be stored for a period of time on the client and be read from either client- or server-side operations.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `As you design a sessionless state management system, what do you need to ensure that your application manages? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Access to the state management system, whether it is a database, a web service, or other type of system`, richtig: true, begruendung: `Correct: Your application needs to manage whatever information might be required to access the state management system.` },
            { id: "2", text: `The HTTP headers`, richtig: false, begruendung: `Incorrect: The HTTP headers are usually not used as part of state management.` },
            { id: "3", text: `The session setting within the Web.config file`, richtig: false, begruendung: `Incorrect: Because your application is sessionless, there is no need to manage session in the Web.config file.` },
            { id: "4", text: `An identifier used by the server to identify the request`, richtig: true, begruendung: `Correct: Your application needs to manage the passing of the identifier between requests.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Page output caching is a shared strategy on clients and servers. Types of page output caching include full page caching and partial page caching. Donut caching and donut hole caching are types of partial page caching. Donut caching caches the majority of the page, enabling some dynamic content. Donut hole caching enables a majority of the page to be dynamic and caches some content.`),
    Wuerfeltextaufgabe(``, `Data caching is a server-side technique that enables you to put an intermediate step between your business logic and the database. Data caching provides a way to reuse data and enhance performance by making database calls only when the cache is invalidated or expired.`),
    Wuerfeltextaufgabe(``, `Windows AppFabric is an example of a third-party tool that enables you to create caching content on one server and share it across multiple servers in a web farm. Windows AppFabric is a set of services built upon Windows Server that manages distributed caching. It can also be configured to manage the session in an ASP.NET MVC 4 application.`),
    Wuerfeltextaufgabe(``, `Application caching is an HTML5 feature that enables you to create a caching manifest that describes the settings across a website or for a page.`),
    Wuerfeltextaufgabe(``, `HTTP caching is a caching mechanism built into the HTTP protocol that handles its own version of expiration calculation and uses it to determine the response to send to the client.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are designing a work order management application for a mid-size repair company. The application will be used by repair personnel in the field on their laptops with wireless phone connections. The connections are slow, and the laptops are several years out of date. There will never be more than 15 users at any one time, and rarely more than 2 concurrent users. What kind of caching will give the repair personnel a better user experience? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Page output caching`, richtig: true, begruendung: `Correct: Page output caching will cache content at the client side to eliminate some of the required downloads. It is useful in a limited bandwidth environment. It can also be used in donut hole and donut caching scenarios for partial client-side caching.` },
            { id: "2", text: `Application caching`, richtig: false, begruendung: `Incorrect: Application caching is an HTML5 feature, and it is unlikely that the older laptops will be able to support the feature.` },
            { id: "3", text: `Data caching`, richtig: false, begruendung: `Incorrect: Data caching might decrease some server time, but with the limited number of users, it is unlikely that the data access would be an issue.` },
            { id: "4", text: `HTTP caching`, richtig: true, begruendung: `Correct: HTTP caching will help response time even though there is not much a developer needs to do to implement the caching.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating a solution in which the majority of the application is dynamic, but some areas can be cached for a long time. What kind of approach would you take? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Data caching`, richtig: false, begruendung: `Incorrect: Although data caching can add some support in a highly dynamic situation, it does not support the capability to have long-term caching.` },
            { id: "2", text: `Donut hole caching`, richtig: true, begruendung: `Correct: Donut hole caching provides the ability to cache parts of each page.` },
            { id: "3", text: `Donut caching`, richtig: true, begruendung: `Correct: Donut caching is another approach that gives the ability to cache parts of the application.` },
            { id: "4", text: `Windows AppFabric caching`, richtig: false, begruendung: `Incorrect: AppFabric caching would provide some support in a highly dynamic situation, but it does not suit the need to store some of the page output.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are adding a reporting vertical to an enterprise application. Many of the reports will be run every morning by a set of users. Some of the reports will be identical as every member of a team will get the same report sometime in the morning. What kind of caching will provide an improvement in performance? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Data caching`, richtig: true, begruendung: `Correct: Data caching with the appropriate timeout will enable the data needed for the reports to be stored so that the call to the database is not necessary.` },
            { id: "2", text: `Page output caching with a duration of two minutes`, richtig: false, begruendung: `Incorrect: Although a page output caching would be useful, the short time frame of two minutes means that the cache will likely expire before the next user requests the page.` },
            { id: "3", text: `Page output caching with a duration of four hours`, richtig: true, begruendung: `Correct: A page output caching of four hours caches the output of the report for the whole morning and should eliminate the need for the report to be run a second time.` },
            { id: "4", text: `Windows AppFabric caching`, richtig: true, begruendung: `Correct: AppFabric caching acts much like data caching to eliminate the need for additional calls to the database to generate the reports.` },

        ]
    },
    Wuerfeltextaufgabe(``, `HTTP polling is a JavaScript methodology of continuously polling the server to see whether there is any information that the client needs to know. Although not the most efficient method, it has the luxury of working in any browser that supports JavaScript and does not require HTML5 support.`),
    Wuerfeltextaufgabe(``, `HTTP long polling is a way to use HTTP to mock up a way for the server to pass data back to the client, as determined by the server, by opening a long-standing connection to the server that will either time out or return data when the server determines it is necessary. Upon timeout or data return, the client can immediately open a new connection.`),
    Wuerfeltextaufgabe(``, `WebSockets are a way to provide duplex, or two-way, communication between the client and server. Both sides can communicate at the same time to the other side. The client connects via HTTP and then sends an upgrade request to the server, which gives a WebSockets connection. You need to create both client- and server-side code to interact with the socket. After that is done, every command is basically an event that is fired when a message is received.`),
    Wuerfeltextaufgabe(``, `WebSockets can be used in situations in which long-term, two-way communication is useful. It is not necessarily always the best solution, especially when there is a chance that the application will be viewed in older browsers that do not support HTML5 features.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `What is the technique in which the client sends a request to the server, and the server holds the response until it either times out or has information to send to the client is?`,
        "optionen" : [
            { id: "1", text: `HTTP polling`, richtig: false, begruendung: `Incorrect: In HTTP polling, the client sends a request to the server, and as soon as the response is returned, it sends a new request.` },
            { id: "2", text: `HTTP long polling`, richtig: true, begruendung: `Correct: In HTTP long polling, the client sends a request to the server, and the server holds it open until it either has something to return to the client or the connection times out.` },
            { id: "3", text: `WebSockets`, richtig: false, begruendung: `Incorrect: WebSockets are a way for two-way communication between the client and the server. The server does not hold onto the response.` },
            { id: "4", text: `HTTP request-response`, richtig: false, begruendung: `Incorrect: The request-response path is a traditional HTTP connection.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are building an application in which you want to display updated information to a website every 15 minutes. What are efficient ways to manage the update? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `WebSockets`, richtig: true, begruendung: `Correct: WebSockets can be used to pass information between the client and server.` },
            { id: "2", text: `HTTP polling with 1-minute intervals`, richtig: false, begruendung: `Incorrect: HTTP polling can provide the need, but the 1-minute refresh interval would not be efficient.` },
            { id: "3", text: `HTTP long polling`, richtig: false, begruendung: `Incorrect: HTTP long polling is not a valid strategy. The typical timeout on a single request is less than 15 minutes, and chaining multiple requests to get the 15-minute timespan is resource intensive.` },
            { id: "4", text: `HTTP polling with 15-minute intervals`, richtig: true, begruendung: `Correct: HTTP polling with 15-minute intervals is a valid way to get the information within the required time frame.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What is the first request sent to start HTTP polling?`,
        "optionen" : [
            { id: "1", text: `HTTP DELETE`, richtig: false, begruendung: `Incorrect: HTTP DELETE is not used to start the WebSocket connection; it is instead used to perform a delete on a discrete item.` },
            { id: "2", text: `HTTP GET`, richtig: true, begruendung: `Correct: The first request to open a WebSocket connection is a standard HTTP GET. After the request is received, the browser sends a separate upgrade request.` },
            { id: "3", text: `HTTP CONNECT`, richtig: false, begruendung: `Incorrect: HTTP CONNECT converts the request connection to a transparent TCP/IP tunnel.` },
            { id: "4", text: `Upgrade request`, richtig: false, begruendung: `Incorrect: The upgrade request is sent after the server has responded to an HTTP GET request.` },

        ]
    },
    Wuerfeltextaufgabe(``, `HTTP modules and handlers insert into the request processing path in IIS.`),
    Wuerfeltextaufgabe(``, `Modules fit into the process on the way down to the handler, and on the way back out from the handler. A synchronous module has an Init method that enables you to set a handler for one of the events attached to the request process.`),
    Wuerfeltextaufgabe(``, `An asynchronous module is more complicated to work with, but with async, await, and Task you can create an HTTP module that can handle long-running tasks without stopping the process.`),
    Wuerfeltextaufgabe(``, `Handlers are the destination of the request process and serve requests for a particular URL/extension. A handler can be synchronous or asynchronous, depending on the base class they extend.`),
    Wuerfeltextaufgabe(``, `Choosing which one to create is a matter of determining where in the request process you need to add your functionality. If your requirements expect you to be able to handle a specific URL or extension differently from others, a handler is probably what you need to create. If you instead want to act when something happens during the process, you should use a module.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `In an HTTP module, can you redirect the request to a different handler than is in the routing table? If so, what event would you handle?`,
        "optionen" : [
            { id: "1", text: `Yes, and you handle the PostAuthorizeRequest event.`, richtig: false, begruendung: `Incorrect: The PostAuthorizeRequest event is thrown before the handler is mapped.` },
            { id: "2", text: `No, after the request starts into the process, it either continues through to the mapped handler or throws an error.`, richtig: false, begruendung: `Incorrect: You can handle the mapping of the request in the MapRequestHandler.` },
            { id: "3", text: `Yes, and you handle the MapRequestHandler event.`, richtig: true, begruendung: `Correct: You handle the mapping of the request in the MapRequestHandler.` },
            { id: "4", text: `Yes, and you handle the ReleaseRequestState event.`, richtig: false, begruendung: `Incorrect: The ReleaseRequestState is thrown after the handler has completed.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `When you are creating a custom handler, what is the parameter being passed into the ProcessRequest method?`,
        "optionen" : [
            { id: "1", text: `object, EventArgs`, richtig: false, begruendung: `Incorrect: object, EventArgs are the parameters used for the event handlers thrown during the startup process. The event handlers are assigned in the Init method.` },
            { id: "2", text: `HttpApplication`, richtig: false, begruendung: `Incorrect: HttpApplication is the parameter used in the Init method.` },
            { id: "3", text: `HttpContext`, richtig: true, begruendung: `Correct: The ProcessRequest method takes the HttpContext parameter.` },
            { id: "4", text: `Object`, richtig: false, begruendung: `Incorrect: There are no default methods that just accept an object parameter.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What is the best way to intercept every request for an image on your site and ensure that a watermark is added to the image?`,
        "optionen" : [
            { id: "1", text: `An HTTP module handling the AuthorizeRequest event`, richtig: false, begruendung: `Incorrect: A module is not the best way to handle the request because it would have to deal with every HTTP request rather than just the image calls.` },
            { id: "2", text: `A custom HTTP handler set to handle .htm and .html pages`, richtig: false, begruendung: `Incorrect: Serving .htm and .html pages will not create watermarks on image files.` },
            { id: "3", text: `A custom HTTP handler configured to serve .png and .jpg files`, richtig: true, begruendung: `Correct: Intercepting every request for .jpg and .png files is the easiest way to consistently add watermarks to the images.` },
            { id: "4", text: `An HTTP module handling the PostRequestHandlerExecute event`, richtig: false, begruendung: `Incorrect: A module is not the best way to handle the request because it would have to deal with every HTTP request rather than just the image calls.` },

        ]
    },
    Wuerfeltextaufgabe(``, `HTML provides much of the structure to a rendered webpage. CSS provides additional control over the look and feel, or presentation, of a webpage. The combination of HTML and CSS is what allows two different websites to look different from each other yet use the same constructs.`),
    Wuerfeltextaufgabe(``, `A primary function of ASP.NET MVC is to provide information to the site visitor. HTML and CSS enable you to format that information in a visually appealing way that enhances the visitor’s ability to use your website and find and use the information the website provides.`),
    Wuerfeltextaufgabe(``, `Dynamic page content is the main reason to use ASP.NET MVC 4. Dynamic content is different information displayed based on a set of conditions. These conditions can include user, day, time, user actions, site status, or a similar criterion.`),
    Wuerfeltextaufgabe(``, `When using the Razor view engine, the _Layout.cshtml file contains the primary design template for the application. One of the key features is the link to the CSS file that defines the styles for the site. This file also contains common UI elements, such as menus, headers, and footers for the pages in the site. A site can have one or more CSS files.`),
    Wuerfeltextaufgabe(``, `The ASPX view engine uses the Site.Master file rather than the _Layout.cshtml file.`),
    Wuerfeltextaufgabe(``, `Helpers are ASP.NET MVC code constructs that output HTML. There are many different helpers, such as @Html.TextBox, that give the developer a way to use one line of code to create a complete HTML structure.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `Layout.cshtml and Site.Master are the two default template pages in ASP.NET MVC. Which of the following scenarios would best be solved using a single layout or master template? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Your application has a requirement to display a menu section that changes based on the area of the application the user is visiting.`, richtig: true, begruendung: `Correct: Adding logic to the master page to determine the menu design enables your application to display a menu section that changes based on the area of the application the user is visiting.` },
            { id: "2", text: `Each content area on your page needs a header that displays the company’s branded color and contains the first 40 characters of the content area’s content followed by an ellipsis.`, richtig: false, begruendung: `Incorrect: The master page does not have the capability to “look” into the content sections and select the first 40 characters.` },
            { id: "3", text: `You have created a set of styles, each in a different style sheet. The styles need to be available to every page in the application.`, richtig: true, begruendung: `Correct: Referencing all style pages in a single place, the layout page, is an appropriate use.` },
            { id: "4", text: `Your application has three different default page designs: two rows of information, two columns of information, and three columns of information.`, richtig: false, begruendung: `Incorrect: A master page does not control the design of the content being displayed.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are designing a web application. You want to create a certain look and feel while reusing styles across pages as much as possible. How should you handle styles?`,
        "optionen" : [
            { id: "1", text: `Use only one or two styles throughout your application to simplify maintenance.`, richtig: false, begruendung: `Incorrect: It is unlikely that one or two styles will enable you to create the look and feel you want.` },
            { id: "2", text: `Use a specific (unique) style for every element.`, richtig: false, begruendung: `Incorrect: Using a specific style for each element will limit your ability for style reuse.` },
            { id: "3", text: `Use general styles for common elements and specific styles for elements that are unique.`, richtig: true, begruendung: `Correct: You should use general styles as much as possible. Achieving a certain look and feel means that you might have to create some specific styles, however.` },
            { id: "4", text: `Use inline styling.`, richtig: false, begruendung: `Incorrect: Although inline styling will give you the most, control over styling, it removes the possibility of code reuse. Design changes would be difficult to implement.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What are compelling reasons to switch from static web content to dynamic web content? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `The ability to substitute a new image for the company logo`, richtig: false, begruendung: `Incorrect: There is no need to create a dynamic website simply to replace the company logo.` },
            { id: "2", text: `The ability to display information from a database`, richtig: true, begruendung: `Correct: Displaying data from a database is an ideal reason to use a dynamic website.` },
            { id: "3", text: `The ability to link to other pages outside of your application`, richtig: false, begruendung: `Incorrect: Linking to other pages outside of an application does not require a dynamic website.` },
            { id: "4", text: `The ability to display information pertaining to the current user`, richtig: true, begruendung: `Correct: Personalization, or displaying information about the user on-screen, is an example of dynamic content.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Client validation is an important feature that JavaScript and ASP.NET MVC support that help eliminate trips between the client and the server by checking on the client side whether valid values have been put into a form. These client-side validation rules are built on top of data annotations just as the validation rules that are run on the server side are.`),
    Wuerfeltextaufgabe(``, `Third-party JavaScript libraries, including JQuery, can be useful when designing the UI of an MVC application. After selecting an element through the DOM, you can programmatically manipulate all aspects of the element. JavaScript enables UI logic to be handled completely on the client side without the need for additional communication with the server.`),
    Wuerfeltextaufgabe(``, `The jQuery library isn’t limited to adding a few additional widgets. It can also be used to create effects and animations, creating a more interactive web application. It is also important in helping to ensure that cross-browser compatibility issues are managed. The jQuery library was designed to support all major browsers and many of their older versions.`),
    Wuerfeltextaufgabe(``, `JavaScript is different from languages such as C# because it does not support a constructor. Instead, developers can use prototypes to create objects. The objects can encompass previously created JavaScript libraries. Because both objects—the original object and the prototype—share the same behaviors, it makes it simpler to manage what each of the objects is doing in the UI.`),
    Wuerfeltextaufgabe(``, `Although AJAX is mainly used to retrieve and send information, it can also be used to push the newly acquired information into UI elements. Doing so can help create a dynamic, fast, and fluid application.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating an ASP.NET MVC web application. The application must accept user input for a ProductName field. To reduce delays due to invalid entries making round trips between the client and server, user input should be validated on the client before being submitted to the server. Which code segment should you choose?`,
        "optionen" : [
            { id: "1", text: `<div class=“editor-label”>
@Html.LabelFor(model => model.ProductName)
</div>
<div class=“editor-field”>
@Html.EditorFor(model => model.ProductName)
</div>`, richtig: false, begruendung: `Incorrect: @Html.EditorFor only inserts data. The data is verified on the server side.` },
            { id: "2", text: `<div class=“editor-label”>
@Html.LabelFor(model => model.ProductName)
</div>
<div class=“editor-field”>
@Html.ValidationMessageFor (model => model.ProductName)
</div>`, richtig: false, begruendung: `Incorrect: @Html.ValidationMessageFor displays the validation message. There is no code included in this answer choice to validate the data.` },
            { id: "3", text: `<div class=“editor-field”>
@Html.EditorFor(model => model.ProductName)
@Html.ValidationMessageFor(model => model.ProductName)
</div>`, richtig: true, begruendung: `Correct: @Html.EditorFor, in combination with @Html.ValidationMessageFor, are used for client-side validation.` },
            { id: "4", text: `<div class=“editor-label”>
@Html.LabelFor(model => model.ProductName)
</div>`, richtig: false, begruendung: `Incorrect: @Html.LabelFor only displays labels for the items.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `Your team is building an application and you are reviewing the functional specifications. Your team must include a stockticker in the UI that displays the company’s stock price every 15 minutes, and include the capability to do partial saves of base objects as users step through a data entry wizard. You want to use the same approach for both requirements to make it easier to add functionality and maintain it going forward. What approach should you use?`,
        "optionen" : [
            { id: "1", text: `Use JavaScript to refresh the page every 15 minutes and to manage whether wizard buttons are enabled or disabled.`, richtig: false, begruendung: `Incorrect: This approach will update the stockticker, but enabling and disabling the wizard buttons will not ensure that the base objects are saved.` },
            { id: "2", text: `Use AJAX to make asynchronous calls to the server on a timer for the stock price and to automatically save the base objects as the user navigates through the wizard.`, richtig: true, begruendung: `Correct: The best way to solve this issue is to use AJAX to do asynchronous calls to check the stock price as well as manage the save process through the wizard.` },
            { id: "3", text: `Use jQuery to refresh the page every 15 minutes and to manage whether wizard buttons are enabled or disabled.`, richtig: false, begruendung: `Incorrect: This approach will update the stockticker, but enabling and disabling wizard buttons will not ensure that the base objects are saved.` },
            { id: "4", text: `Use data validation annotations on the model to ensure that the stock price is validated every 15 minutes and that the client saves the base object information after every wizard step.`, richtig: false, begruendung: `Incorrect: Data validation annotations will not meet any of the requirements.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `In which of the following scenarios should you include validation? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `You have an online diary with two form fields, a title, and a large subject box. A title is not required, and the subject content is stored in a database column with no maximum size.`, richtig: true, begruendung: `Correct: You should build in validation to check that at least one field has been populated before saving an entry.` },
            { id: "2", text: `The web application you maintain has an area that serves as a pass-through to another company’s web services. The form contains personal information, such as address and phone number, and is used to set up a profile on the company’s retirement partner website. The partner has never given you any instructions as to what is or is not required to be sent to them.`, richtig: true, begruendung: `Correct: Although the partner company has not provided any requirements, your company is responsible for data entry and therefore should ensure that the data passing through the application meets some minimum criteria.` },
            { id: "3", text: `Your application is a long wizard that college students use to apply for financial aid. They do not have access to the application until they are already logged on to the system so the application knows who they are. Most students will log on many times to finish the application, so any field might or might not be completed at any time.`, richtig: true, begruendung: `Correct: The application has many entry fields so it is difficult to predict when an entry hits a valid stage. However, you already know you have constraints on the data being input because of the size of the database columns in which you will be storing them. A MaxLength validator on each field would help ensure that there is no loss of data.` },
            { id: "4", text: `You are developing a simple form that helps home brewers keep track of their process. The form provides two input fields: Date/time and ph level. The Date/time box needs to be an ordinary text box because people around the world might enter the date differently, in a way that is meaningful to them. The ph level can be either a numeric value or a text description.`, richtig: true, begruendung: `Correct: Although either field in the form can be anything, they should have a maximum length limit imposed so the data does not exceed the size of the database column they will be stored in. You should also validate that neither field is empty.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Partial views are a way to reuse functionality on multiple pages. They enable the developer to write code once and include it on other pages as needed. Partial views are the MVC replacement for user controls from ASP.NET Web Forms. Partial views are usually stored in the Views/Shared folder.`),
    Wuerfeltextaufgabe(``, `The Razor view engine enables you to create reusable templates. The templates are assignable by object type, and can be either for display (DisplayTemplates) or edit (EditTemplates). Templates are stored in the ~Views/Shared/EditorTemplates or ~Views/ControllerName/EditorTemplates directories and are called by @Html.EditorFor and @Html.DisplayFor.`),
    Wuerfeltextaufgabe(``, `Views and partial views should be reused whenever possible. If views and partial views use the same model and controller, you can manage the validity of the model through data annotations and HTML helpers. However, in other cases, you have to manage the validation yourself, such as by using AJAX to accomplish client-side validation or modifying the controller and/or models to accommodate such a task.`),
    Wuerfeltextaufgabe(``, `Master or layout pages can be switched on the fly via code. Because master or layout pages usually contain information on loading JavaScript libraries and style sheets, switching the master or layout page can change the UI appreciably. This could be useful if the goal is to create different user experiences based on conditions (for example, on a mobile browser as opposed to a desktop or laptop browser).`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating an ASP.NET MVC web application. Within the application, you have created a partial view for contact email and phone number. Which code segment should you use to display the partial view on the main page?`,
        "optionen" : [
            { id: "1", text: `<div class=“float-right”>
<section id=“contact”>
@Html.ActionLink(“ContactPartial”)
</section>
</div>`, richtig: false, begruendung: `Incorrect: @Html.ActionLink creates a link but does not load a partial view.` },
            { id: "2", text: `<div class=“float-right”>
<section id=“contact”>
@Html.Partial(“ContactPartial”)
</section>
</div>`, richtig: true, begruendung: `Correct: @Html.Partial loads a partial view.` },
            { id: "3", text: `<div class=“float-right”>
<section id=“contact”>
@RenderPage(“ContactPartial”)
</section>
</div>`, richtig: false, begruendung: `Incorrect: @RenderPage method inserts one complete page into another This is not what you are looking to do as you only want the partial view content to be displayed.` },
            { id: "4", text: `<div class=“float-right”>
<section id=“contact ”>
@RenderBody()
</section>
</div>`, richtig: false, begruendung: `Incorrect: @RenderBody inserts views on master layout pages.` },
            { id: "5", text: `You are creating an ASP.NET MVC web application. The application accepts phone number input through the application’s form. When viewing the source from a browser, you find the following code:
PhoneNumber: <input id="phoneNumber" name="phoneNumber" size="10" type="text" value="" /><br />`, richtig: false, begruendung: `` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What Razor syntax code segment was used?`,
        "optionen" : [
            { id: "1", text: `PhoneNumber: <input id=“phoneNumber” name=“phoneNumber” size=“10” type=“text” value=“3125551212” /><br />`, richtig: false, begruendung: `Incorrect: The Value construct sets the display information in the element. In addition, the field is not bound to the model.` },
            { id: "2", text: `<div class=“editor-field”>
@Html.EditorFor(model => model.PhoneNumber)
</div>`, richtig: false, begruendung: `Incorrect: This will not validate or set the size requirement.` },
            { id: "3", text: `PhoneNumber: @Html.TextBox(“phoneNumber”, Request[“phoneNumber”], new { @placeholder = “3125551212”})<br />`, richtig: false, begruendung: `Incorrect: This will make the input field display with a placeholder.` },
            { id: "4", text: `PhoneNumber: @Html.TextBox(“phoneNumber”, Request[“phoneNumber”], new { size = 10 })<br />`, richtig: true, begruendung: `Correct: This is the proper way to limit the size of a certain field that is being bound to the model.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are modifying an ASP.NET MVC web application and you have created a new master layout page named _Layout.WindowsPhone.cshtml. You want to use that layout in a new view. Which code segment do you use?`,
        "optionen" : [
            { id: "1", text: `@Html.ActionLink(“_Layout.WindowsPhone.cshtml”);`, richtig: false, begruendung: `Incorrect: @Html.ActionLink creates a clickable link and does not do anything to set the layout.` },
            { id: "2", text: `Layout=“~/Views/Shared/_Layout.WindowsPhone.cshtml”;`, richtig: true, begruendung: `Correct: Layout=“” loads the layout file to be used with that view.` },
            { id: "3", text: `Layout=“Layout.WindowsPhone.cshtml”;`, richtig: false, begruendung: `Incorrect: Layout=“Layout.WindowsPhone.cshtml” points to an incorrect view folder.` },
            { id: "4", text: `@Html.Partial(“_Layout.WindowsPhone.cshtml”);`, richtig: false, begruendung: `Incorrect: @Html.Partial loads. a partial view, but does not manage the layout being used by the page.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Because all browsers are not created equally, you must be careful when choosing how to display information in the UI. If business requirements dictate, you must ensure that your application is accessible across all browsers and devices and that the viewing experience is the same. Additional libraries such as jQuery and Modernizr. can help achieve that goal.`),
    Wuerfeltextaufgabe(``, `The HTML5 and CSS3 specifications are moving toward finalization. Browser vendors have incorporated alternative property names to make their browsers compatible with nonfinalized HTML5 and CSS3 specifications. These features are sometimes available only in specific manufacturers’ browsers, and only in certain versions of each browser. When developing for multiple browser deployment across multiple devices, you should use the most common features available across all the browsers for compatibility.`),
    Wuerfeltextaufgabe(``, `If an application is targeted for a specific market (such as mobile or intranet) for which only a certain type of browser exists on a given device or devices, you should use only HTML and CSS features supported by that browser. This way, the client can be coded to specifically manage various tasks such as client-side verification and UI animation.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You want to support the Internet Explorer, Firefox, and Opera web browsers in your application. Which vendor-specific extensions do you need to include with CSS3 properties? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `-webkit-`, richtig: false, begruendung: `Incorrect: The -webkit- prefix is used for Google Chrome and Apple Safari.` },
            { id: "2", text: `-ms-`, richtig: true, begruendung: `Correct: The -ms- prefix is used for Internet Explorer.` },
            { id: "3", text: `-o-`, richtig: true, begruendung: `Correct: The -o- prefix is used for the Opera browser.` },
            { id: "4", text: `-hp-`, richtig: false, begruendung: `Incorrect: The -hp- prefix is used by Hewlett-Packard.` },
            { id: "5", text: `-moz-`, richtig: true, begruendung: `Correct: The -moz- prefix is used for Mozilla Firefox.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What are common methods for detecting the type of browser running on a client? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Use JavaScript to query for the userAgent header.`, richtig: true, begruendung: `Correct: Using JavaScript to query the userAgent gives you information about the type of browser being used by the client.` },
            { id: "2", text: `Use the window.addEventListener method.`, richtig: false, begruendung: `Incorrect: The window.addEventlistener does not give any information on the browser being used by the client, but it can be used to see whether a browser is HTML5-compliant.` },
            { id: "3", text: `Use the viewport <meta> tag.`, richtig: false, begruendung: `Incorrect: The viewport <meta> tag gives access to the visible area of the device; it does not tell you anything about the device itself.` },
            { id: "4", text: `Use the DisplayMode provider.`, richtig: true, begruendung: `Correct: The display mode provider performs some of the analysis of the HTTP request to try and determine what kind of browser made the request.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating a different view for each of several different browsers/devices, such as Home.iemobile.cshtml and Home.IPad.cshtml. What is the best way to implement it so your application knows to look for the specific views?`,
        "optionen" : [
            { id: "1", text: `Use the viewport <meta> tag.`, richtig: false, begruendung: `Incorrect: The viewport <meta> tag does not do any direction to views; it is strictly a client-side helper.` },
            { id: "2", text: `Add a new DisplayModeProvider for each of the special view types you want to support.`, richtig: true, begruendung: `Correct: Adding a DisplayModeProvider for each type of special view, such as IEMobile or IPad, informs the framework to use those views where the context condition is fulfilled.` },
            { id: "3", text: `Put logic into each action to select the appropriate view based on information in the request.`, richtig: false, begruendung: `Incorrect: Putting logic into each action could be done, but it would be time-consuming and difficult to maintain. The DisplayModeProvider does the work for you in the background and eliminates the need for special code.` },
            { id: "4", text: `You don’t have to do anything. The framework automatically handles browser/device detection by reading the new extensions on the views.`, richtig: false, begruendung: `Incorrect: The framework does not make any assumptions by itself; it only knows what to do based on configurations that it has been given.` },

        ]
    },
    Wuerfeltextaufgabe(``, `ASP.NET MVC 4 supports multiple approaches to mobile users. You can create overridden views that are generic for any mobile device or specific to a device. The System.Web.Mvc.VirtualPathProviderViewEngine.DisplayModeProvider evaluates incoming requests and routes them based on the values in the userAgent of the request and the configured DisplayModeProviders.`),
    Wuerfeltextaufgabe(``, `Another choice for designing a mobile-viewable website is to use the viewport <meta> tag and CSS @media queries. These enable you to create different style groups, based on the minimum and maximum width of device screens.`),
    Wuerfeltextaufgabe(``, `The jQuery Mobile library enables you to use markup to provide additional functionality as supported by the client browser. If a browser does not support the functionality, the jQuery library will downgrade the functionality gracefully.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating an ASP.NET MVC web application, and you decide to create a new layout for mobile devices with relatively small screens. Which @media query should you create or modify to accomplish the task? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `@media (max-width:768px)`, richtig: true, begruendung: `Correct: This allows for devices with a maximum width of 768 pixels.` },
            { id: "2", text: `@media (max-width:478px) and (orientation:portrait)`, richtig: true, begruendung: `Correct: This allows for devices with a maximum width of 478 pixels in portrait view, such as tablets.` },
            { id: "3", text: `@media (min-width:768px) and (orientation:portrait)`, richtig: false, begruendung: `Incorrect: The screen resolution is too large for a typical mobile device.` },
            { id: "4", text: `@media (min-width:1200px)`, richtig: false, begruendung: `Incorrect: The screen resolution is too large for a typical mobile device.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are modifying an existing ASP.NET MVC web application to incorporate mobile access. What should you do to ensure that mobile devices view mobile-only pages? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Run the Install-Package jQuery.Mobile.MVC command using the Package Manager console.`, richtig: true, begruendung: `Correct: This installs all the necessary mobile packages.` },
            { id: "2", text: `Create a _Layout.Mobile.cshtml master layout page.`, richtig: false, begruendung: `Incorrect: You need the additional views made for mobile calling the master layout.` },
            { id: "3", text: `Create additional views with .Mobile, such as Index.Mobile.cshtml.`, richtig: false, begruendung: `Incorrect: Just the views alone do not work; you need the master layout as well.` },
            { id: "4", text: `Create additional views with .Mobile, such as Index.Mobile.cshtml as well as a _Layout.Mobile.cshtml master layout page.`, richtig: true, begruendung: `Correct: All mobile views and mobile master layout ensure that the page will load accordingly.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are modifying an ASP.NET MVC web application for a client. The client requires that the application must be viewable on Android devices in a UI format native to the device. What should you do? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Run the Install-Package jQuery.Mobile.MVC command using the Package Manager console.`, richtig: false, begruendung: `Incorrect: Simply installing the jQuery Mobile package does not provide support for Android-specific browsers. It enables the application to use the package.` },
            { id: "2", text: `Create a viewport and use @media queries to make styles that are specific for Android.`, richtig: false, begruendung: `Incorrect: By using @media queries and viewport, you can create an Android-readable website, but it won’t give an Android-specific UI.` },
            { id: "3", text: `Create corresponding mobile views for the project targeted toward Android.`, richtig: true, begruendung: `Correct: Additional views must be created or ported to fit the smaller layout.` },
            { id: "4", text: `Modify the Web.config file in Shared views in the project to add in support for other browsers.`, richtig: false, begruendung: `Incorrect: You do not have to modify the Web.config file.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Many companies, especially e-commerce companies, rely on search engines to help drive web users to their sites. The more visitors a website has, the more income that can be generated from sales, advertising, or other monetizing possibilities.`),
    Wuerfeltextaufgabe(``, `As part of your SEO efforts, you need to remove obstacles that might prevent a search engine from crawling your website effectively. Ensure that your code does not have missing or incorrectly ordered HTML tags and that you have separated your content from your presentation and scripting information. This is especially important for ASP.NET MVC applications because much of the final rendered HTML is created by HTML helpers or shared from template pages, and is not usually inspected.`),
    Wuerfeltextaufgabe(``, `HTML analysis tools can help you determine the validity of the HTML your application outputs. These tools include the IIS SEO Toolkit and the Internet Explorer Developer Toolbar. W3C also provides online validators that check HTML and CSS, among other things.`),
    Wuerfeltextaufgabe(``, `Technology is constantly improving, enabling people with disabilities to use the Internet more effectively. WAI-ARIA is a markup system that helps assistive technologies, and thus users, better understand and make use of your content.`),
    Wuerfeltextaufgabe(``, `ASP.NET MVC 4 does not currently offer built-in support for ARIA. However, the extensible nature of ASP.NET MVC enables you to create HTML helpers that extend the current set of built-in helpers and make your site more ARIA-compliant.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You have been asked by the marketing department to help improve your company’s ranking in search engine results. They are particularly concerned about a section of the site that is highly interactive, with extensive mouse-over color, background, and text changes. Without looking at the code, what is the most likely reason for ranking low in search engine results?`,
        "optionen" : [
            { id: "1", text: `Unclosed HTML tags`, richtig: false, begruendung: `Incorrect: Although the pages might contain unclosed HTML tags, the highly interactive nature of the site indicates that the content could be in script files, and therefore hidden from the search crawler.` },
            { id: "2", text: `Content hidden in JavaScript tags`, richtig: true, begruendung: `Correct: Text revealed by mouse-overs not being picked up by search engine crawlers indicates that content is being skipped.` },
            { id: "3", text: `Broken links`, richtig: false, begruendung: `Incorrect: Broken links do not slow down a crawler.` },
            { id: "4", text: `Excessive number of images`, richtig: false, begruendung: `Incorrect: The presence of images does not affect the search engine crawler.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You have been asked by a company to evaluate its web application as a user. The company wants you to review the website from outside its network and identify areas that might be problematic. You have been asked to consider SEO and accessibility. Which tools would be helpful for your review? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `IIS SEO Toolkit`, richtig: false, begruendung: `Incorrect: The IIS toolkit requires access to the server, and your charge is to perform the assessment from outside the client’s network.` },
            { id: "2", text: `Internet Explorer F12 tools`, richtig: true, begruendung: `Correct: The Internet Explorer F12 tool enables you view HTML and CSS code, which can help you detect structural problems or errors that might affect accessibility or SEO.` },
            { id: "3", text: `IIS Logging tab`, richtig: false, begruendung: `Incorrect: The IIS Logging tab displays logs related to functioning of a website and also requires access to the server.` },
            { id: "4", text: `Bing Webmaster Toolkit`, richtig: false, begruendung: `Incorrect: The Bing Webmaster Toolkit requires access to the server to put a special file on to the file system so that Bing can tie a Webmaster account to a particular site.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `Your company has joined an industry accessibility group and you are a member. As one of your responsibilities, you have been asked to estimate the time it would take to modify your corporate site for accessibility. What should you consider to properly estimate the required time? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `The amount of text in the website`, richtig: false, begruendung: `Incorrect: The amount of text shouldn’t affect the amount of accessibility work to be performed. The work will be the same whether there is one word in the ARIA-compliant element or 100 words.` },
            { id: "2", text: `The level of current usage of HTML helpers in your views`, richtig: true, begruendung: `Correct: Because ASP.NET MVC 3 HTML helpers are not ARIA compliant, you need to write custom HTML helpers or use a different process to create HTML forms.` },
            { id: "3", text: `The numbers of controllers in the application`, richtig: false, begruendung: `Incorrect: The number of controllers does not affect your need to make the rendered HTML ARIA compliant.` },
            { id: "4", text: `The complexity of your data entry forms`, richtig: true, begruendung: `Correct: Because many of the problems with accessibility are related to giving context to content, complex forms need a thorough review to ensure that labels and section context are provided for every element on the page.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Globalization is the technical effort necessary to prepare an application to support multiple cultures. After you globalize an application, you don’t have to repeat the effort. Internationalization is the work that is done to make an application ready to support multiple cultures. Localization is the process of creating locale-specific content, images, and video—all the items your application presents to the user.`),
    Wuerfeltextaufgabe(``, `Globalization requires you to put all displayable strings in resource files. You can choose which resource files to create, but you should minimize duplication of strings to ensure minimal time for performing translations. This can be problematic because you might need to add strings to resource files to enable proper translation of certain values. The word “head,” for example, refers to both a body part and the top part of a document.`),
    Wuerfeltextaufgabe(``, `An alternative approach to resource files is to provide different views for different languages. This approach eliminates dependency on resource files, but it can lead to code replication.`),
    Wuerfeltextaufgabe(``, `You can use a shared approach to globalization, in which resource files are used along with multiple copies of views. This kind of approach is best suited to supporting non-Western languages. Using another set of views strictly for right-to-left languages is a logical approach.`),
    Wuerfeltextaufgabe(``, `Provide globalization resources to jQuery-specific items. JavaScript cannot determine the culture from the browser, even if the information is available and is being sent by the browser.`),
    Wuerfeltextaufgabe(``, `You can give users the option to choose their culture in your application. This enables people who use shared computers or who do not completely understand how to manage their browser settings to be able to enjoy the multicultural aspects of your website.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are globalizing an application and are compiling a list of items that need to be translated. Which items should be included on the list? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Images that are used as part of the menu structure`, richtig: true, begruendung: `Correct: Images that are being used for menus likely have text displayed on them. That text should be localized, and extra sets of buttons might have to be created.` },
            { id: "2", text: `The company logo`, richtig: false, begruendung: `Incorrect: A company logo should not be changed because it provides brand awareness.` },
            { id: "3", text: `Server error-logging messages`, richtig: false, begruendung: `Incorrect: Server error-logging messages are not seen by the user and are instead an internal item. You should keep them in the default language.` },
            { id: "4", text: `Button tooltips`, richtig: true, begruendung: `Correct: Tooltips are supposed to give extra contextual help about the item the mouse hovers over. It is important to get them translated.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating an ASP.NET MVC website and you want to replace a <h2>hello</h2> tag within the view with custom resources you have created. What should you use?`,
        "optionen" : [
            { id: "1", text: `<h2>@mvcapp.Resources.Home.Index.Heading</h2>`, richtig: true, begruendung: `Correct: This is the correct way to insert resources into a view.` },
            { id: "2", text: `<h2 div=“resource”>Hello</h2>`, richtig: false, begruendung: `Incorrect: The <div> tag cannot be used to insert resources into a view.` },
            { id: "3", text: `<h2 class=“resource”>Hello</h2>`, richtig: false, begruendung: `Incorrect: This attempts to style the element, looking for a style named “resource.”` },
            { id: "4", text: `<h2>@mvcapp.Resources.Home.Index.Heading Hello</h2>`, richtig: false, begruendung: `Incorrect: Although this inserts resources into the view, it also adds Hello to the end of the header tag.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are developing an ASP.NET MVC application and you need to create satellite assemblies from resource files. What code should you use?`,
        "optionen" : [
            { id: "1", text: `mage.exe /n: /embed:strings.de-DE.resources MyApp.de-DE.resources.dll`, richtig: false, begruendung: `Incorrect: Manifest Generation and Editing Tool is for creation and editing of application manifests.` },
            { id: "2", text: `WinRes.exe /t: embed:strings.de-DE.resources /culture:de-DE`, richtig: false, begruendung: `Incorrect: Windows Form Resource Editor is a visual layout tool for the Windows Forms user interface.` },
            { id: "3", text: `Lc.exe strings.de-DE.resources MyApp.de-DE.resources.dll`, richtig: false, begruendung: `Incorrect: License Compiler reads text license files and compiles them into binary format.` },
            { id: "4", text: `al.exe /t:lib /embed:strings.de-DE.resources /culture:de-DE /out:MyApp.de-DE.resources.dll`, richtig: true, begruendung: `Correct: Assembly Linker generates modules or resource files.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Filter attributes provide a way for the developer to examine and take action on information in a request before and after the action is called. ASP.NET MVC comes with built-in attributes that help with authentication and authorization, secure access, anti-forgery support, and error management. However, you can create custom action filters as needed.`),
    Wuerfeltextaufgabe(``, `Action results are the finishing actions taken by an application. They are the last step of handling the HttpRequest and are responsible for writing information back to the response stream. The commonly used ViewResultBase is the base for rendering HTML to the client; both ViewResult and PartialViewResult inherit ViewResultBase. There are also two file-based returns, FileResult and ContentResult, one for binary and the other for ASCII content. JavaScriptResult and JsonResult are designed to support client-side processing by returning JavaScript code or JSON objects. RedirectResult and RedirectToRouteResult forward the processing to another process either by URL or by named route.`),
    Wuerfeltextaufgabe(``, `Model binding is a flexible process that maps fields on the UI to properties on the model. There are three types of model binding: strongly-typed binding, weakly-typed binding, and using the value provider.`),
    Wuerfeltextaufgabe(``, `Strongly-typed binding is a two-way tool in that the HTML helper understands attributes on the model and can set up client-side validation based on that information. The framework can also identify the information as it returns to hydrate the model for use within the action method.`),
    Wuerfeltextaufgabe(``, `Weakly-typed binding is a one-way binding in that it doesn’t provide validation on the client side, but it does create the model after the request is returned. You can provide some helpers to weak binding, as well as create an accepted list or blocked list of attributes that should be populated from the form by using the Include and Exclude parameters on the Bind attribute.`),
    Wuerfeltextaufgabe(``, `You can map forms data returned from the client using the ToValueProvider on the FormCollection object. This process attempts to match the fields of an empty model with the values it finds in the list of keys. If it finds a semantic match, it populates the property in the model with the value in the form collection.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You have a set of requirements that expects a particular action to be accessed only through HTTPS by an authenticated user. What is the best way to meet these requirements?`,
        "optionen" : [
            { id: "1", text: `Use the Authorize attribute before the RequireHttps filter.`, richtig: false, begruendung: `Incorrect: Although this would solve the requirements, it is not the best way. It is better to run the RequireHttps filter first because it expends fewer resources than the Authorization filter.` },
            { id: "2", text: `Use the RequireHttps attribute before the Authorize filter.`, richtig: true, begruendung: `Correct: It filters out those users not on an SSL connection before performing the more resource-intensive authentication check.` },
            { id: "3", text: `Use a custom action filter that combines the check for HTTPS and the check for authentication into a single filter.`, richtig: false, begruendung: `Incorrect: A custom action filter that performs both is more complicated to write than using the standard filters provided with ASP.NET MVC.` },
            { id: "4", text: `Use Authorize alone; you do not need to use RequireHttps separately if you already have Authorize, because using Authorize implies the use of HTTPS.`, richtig: false, begruendung: `Incorrect: A user can be authorized and not be connected over HTTPS. The two are independent and need to be treated as such.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You have written a shareware application and want to sell it on your personal website. You are considering various approaches for distributing the application after users purchase it. Which of the following is the best approach?`,
        "optionen" : [
            { id: "1", text: `Use the FileResult action result to initiate the file download.`, richtig: true, begruendung: `Correct: The FileResult property was designed for this need.` },
            { id: "2", text: `Convert the application to an encoded string and provide it for download through the ContentResult.`, richtig: false, begruendung: `Incorrect: The product being distributed is a binary file and does not successfully transition to a string format.` },
            { id: "3", text: `Create a view or partial view that contains an action link to a route in which the user can download the file.`, richtig: false, begruendung: `Incorrect: Creating a link to download the file through the application just postpones the decision until that link is clicked as it is still going through the application.` },
            { id: "4", text: `Create an email containing a link to a route from which the user can download the file.`, richtig: false, begruendung: `Incorrect: Creating a link to download the file in an email just postpones the decision until that link is clicked as it is still going through the application.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You have been tasked with modernizing an application created in ASP 3.0. Part of one of the pages contains HTML that comes as a string from a third-party application as part of a service call that populates part of a form. The same form contains input values for your application. You need to support the same business process as the original application, but you also want to use some MVC features. What is the approach?`,
        "optionen" : [
            { id: "1", text: `Create a single model containing information from your local application. Use strongly-typed binding as much as possible and manually match the rest of the fields.`, richtig: false, begruendung: `Incorrect: Although this could conceivably work, it has the misfortune of expecting manual mapping. It also uses the approach of a single model, and because the provided HTML input forms might change under you, it makes more sense to use two models so that the information your application controls is not affected.` },
            { id: "2", text: `Create a single model for the local input fields and the service call input, and use ToValueProvider to map the entire object.`, richtig: false, begruendung: `Incorrect: Although this would work, it uses the single model approach. Because the provided HTML input forms can change outside of your own release cycle, it makes more sense to use two models so that the information your application controls is not affected.` },
            { id: "3", text: `Create a single model. Use weakly-typed binding for the form fields, and the HTML provided by the third-party application.`, richtig: false, begruendung: `Incorrect: You cannot weakly bind to the input fields provided from the third party because weakly-bound models imply that you have used an HTML helper to write the information, and you are just giving the helper a hint to the property it should map to in the model.` },
            { id: "4", text: `Create a model that contains only your fields and strongly bind the fields to the model. Create a second model that maps to the fields in the imported HTML and bind to that model using ToValueProvider.`, richtig: true, begruendung: `Correct: The key is separating your data input fields from the provided input fields. You can strongly-bind to yours because you have full control over the relationship between your model and your view, and can then use the ToValueProvider to merge the other model that is tied to the provided input fields.` },

        ]
    },
    Wuerfeltextaufgabe(``, `When SEO is important to your application, consider supporting human-understandable URLs, such as Product/<BookTitle>, rather than something like Product/1. Doing so enhances your SEO efforts because the content of the URL is more descriptive of the content of the page. If the link between the URL and the content is not obvious, you might need to support multiple ways to get to that particular page, such as by title, ISBN, or author’s last name. Properly configured routes help your application quickly determine what action should handle the request.`),
    Wuerfeltextaufgabe(``, `The order in which you place routes into the RouteCollection object, or route table, is important. The route handler processes the list until it finds one that matches the incoming pattern. You should start your list with the patterns that the route handler should ignore and then add more specific URL patterns so they will be matched by the route handler before a more general one finds it. Use the MapRoute function to add a route to the RouteCollection object.`),
    Wuerfeltextaufgabe(``, `When creating a route, you can add default values to take the place of any values that are missing in the URL string. As part of that process, you can make parameters optional so the route handler will know to examine overridden functions that might take different parameters. You can also use this strategy to handle special needs, such as creating simple URLs that the server will know to translate to a more complex controller/action combination, such as http://yoururl/specials getting routed to the Product controller and the GetCurrentSpecials action method.`),
    Wuerfeltextaufgabe(``, `Constraints are a way to filter a requested URL to define different routing for items based on the variable type or content. The route handler reviews the constraint as a regular expression and evaluates the appropriate variable against it to determine whether a match exists.`),
    Wuerfeltextaufgabe(``, `Large, complex ASP.NET MVC applications might need to support hundreds of actions on a controller. Using areas enables the designer to separate functionality into logical or functional groups. It creates new copies of the Models, Views, and Controllers directories in an Areas directory so you can split the functionality in an appropriate way. Each has its own route management features as well, so one area can define a route different from another area. The areas are split in the application by AreaName/Controller/Action.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are developing an ASP.NET MVC application. You have a set of requirements to create a help section for remote users. Your typical help scheme is help/desktop or help/mobile, so logically this section should be help/remote. The change board wants the links in the application to point to the default support site. Which code segment would you use?`,
        "optionen" : [
            { id: "1", text: `routes.MapRoute(
name: “Default”,
url: “{controller}/{action}/{id}”,
defaults: new { controller = “Home”,
action = “Index”, id = UrlParameter.Optional });`, richtig: false, begruendung: `Incorrect: This is a default route; it accomplishes nothing.` },
            { id: "2", text: `routes.MapRoute(
“remote”,
“help/remote”,
new { controller = “support”, action = “Index” }
);`, richtig: true, begruendung: `Correct: This is how you add an additional route and point to a different controller.` },
            { id: "3", text: `routes.MapRoute(
“remote”,
“help”,
new { controller = “support”, action = “Index” }
);`, richtig: false, begruendung: `Incorrect: The URL portion of the new route does not satisfy the question being asked.` },
            { id: "4", text: `routes.MapRoute(
“remote”,
“remote/help”,
new { controller = “support”, action = “Index” }
);`, richtig: false, begruendung: `Incorrect: The URL portion of the new route is reversed.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are developing an ASP.NET MVC application. You noticed a bug on the DVD controller of the application. You want to ignore the DVD pages until the bug is fixed. What should you do?`,
        "optionen" : [
            { id: "1", text: `Add route.SetItem(route.Count, “dvd/”); to the RegisterRoute method.`, richtig: false, begruendung: `Incorrect: SetItem adds an item to the collection. However, adding a route at the end of the collection does not solve the problem because it is being added as a route that should be matched.` },
            { id: "2", text: `Add route.IgnoreRoute(“dvd/”); to the RegisterRoute method.`, richtig: true, begruendung: `Correct: IgnoreRoute is the correct statement to use.` },
            { id: "3", text: `Add route.Insert(route.Count,“dvd/”); to the RegisterRoute method.`, richtig: false, begruendung: `Incorrect: Insert adds a new route to the collection for matching, but does not ignore pages.` },
            { id: "4", text: `Add route.Remove(“dvd/”); to the RegisterRoute method.`, richtig: false, begruendung: `Incorrect: Remove removes a route from the table. More than likely, this is an implied mapping, so removing the DVD route does not stop the application from mapping the request to the same action.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are the lead developer on a team that has been working on a large website for months, and several controllers are getting unwieldy. You do not have that problem with views and models because most of your communications are through AJAX to display snippets of information on the UI. What changes can best help you solve your problem? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Create partial classes for the controllers that have AJAX functionality to create a set of Controller.Ajax.cs files. Put the AJAX-specific functionality in those files.`, richtig: true, begruendung: `Correct: Creating partial classes offers some relief to the problem that you are experiencing, although not as much as a more-functional separation such as offered by areas. You do not have to make any UI changes, however.` },
            { id: "2", text: `Create an area called AJAX. Move all controllers, models, and views into the area.`, richtig: false, begruendung: `Incorrect: You do not want or need to move any views or models. The code clutter is due to the small discrete actions that support your AJAX site.` },
            { id: "3", text: `Create an area called AJAX. Move the specific AJAX functionality into the Controllers directory and leave the Views and Models directories empty.`, richtig: true, begruendung: `Correct: Your best move is to separate the AJAX components into an area. You would have to change all the calls to it, but you would achieve complete separation of concern for AJAX calls.` },
            { id: "4", text: `Create a new ASP.NET MVC 4 application project. Move the AJAX functionality into that so that it will be more responsive.`, richtig: false, begruendung: `Incorrect: This would be too drastic a change. It would require a complete change, from deployment to testing, throughout the entire application stack.` },

        ]
    },
    Wuerfeltextaufgabe(``, `ASP.NET MVC 4 provides developers with many extensibility points that enable you to insert needed functionality throughout the framework. You can do nearly anything with the request at every step through the request handling process.`),
    Wuerfeltextaufgabe(``, `One of the most powerful extensibility points, and likely the most used one, is the action filter. You can overwrite an existing action filter to add custom functionality, or you can create your own filter by implementing the IActionFilter interface and assigning the filter as required. The action filter enables you to get into the processing stack before the action gets executed, or immediately after the action gets executed.`),
    Wuerfeltextaufgabe(``, `You can add a result filter, which is like an action filter but for action results. It has two methods: OnResultExecuting, which is called before the result is executed; and OnResultExecuted, which is called after the result has completed execution.`),
    Wuerfeltextaufgabe(``, `You can create a custom controller factory that enables you to make nontraditional decisions about how your controllers are constructed. This kind of approach is useful when you need to pass in certain information such as dependencies or runtime references.`),
    Wuerfeltextaufgabe(``, `Overriding a view engine enables you to interject additional business logic into the HTML rendering. If your needs are more extensive than adding behavior, such as replacing behavior or wanting to support a syntax different from Razor or ASPX, you can create and register your own custom view engine.`),
    Wuerfeltextaufgabe(``, `Model binding is a vehicle for facilitating one- and two-way communication between the view/form items and a model in the application. Sometimes there is no direct correlation between the two values. In those cases, custom model binding is a good way to pull that out of a controller and make it testable and reusable.`),
    Wuerfeltextaufgabe(``, `The default route handler gives the developer a lot of flexibility in defining routes, but sometimes you might need additional or different functionality. ASP.NET MVC 4 enables you to create custom route handlers that support your need to interpret URLs differently. As with the other customization choices, you can either override the existing default functionality to add your required logic or you can completely replace it.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `Your application manages the sale of expensive well-drilling equipment. Your IT director wants you to add functionality that sends an email to a customer’s sales account manager whenever someone from your client company logs in to the system. What is an appropriate solution?`,
        "optionen" : [
            { id: "1", text: `Override the AuthorizeAttribute and apply it to the login action. Run the base method first to handle the authentication and then evaluate the status of the request. If the user is a customer, send the email.`, richtig: false, begruendung: `Incorrect: You should not have an AuthorizeAttribute on your login action, because it ensures that users have to be authenticated before they log in. Users can never log in to the site.` },
            { id: "2", text: `Create a custom action filter that is globally defined and overrides the OnActionExecuting method. This action filter evaluates the status of the user and sends the email if it is a customer.`, richtig: false, begruendung: `Incorrect: Because this filter is applied globally, it sends the email every time the user takes an action, rather than just once per visit.` },
            { id: "3", text: `Override the AuthorizeAttribute that is applied to the login action, check for the user’s authentication status, and determine whether it is a customer prior to sending it to the base authentication method.`, richtig: false, begruendung: `Incorrect: You should not have an AuthorizeAttribute on your login action because it ensures that users have to be authenticated before they log in. Users can never log in to the site.` },
            { id: "4", text: `Create an action filter that overrides the OnActionExecuted method and apply it to the login action. This action filter evaluates the status of the user and sends the email if it is a customer.`, richtig: true, begruendung: `Correct: This is be applied only because the user is leaving the login section of the application, at which point you also know whether they have been authenticated.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You work for a financial services company that deals with many small brokers. Your executives want to be able to run a report that details all the actions taken by the brokers on the site as a form of auditing and protection. Neither the application nor system currently stores this kind of information. Which of the following are viable solutions? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Create a globally applied custom action filter that implements the OnActionExecuting method. Have it store the user, the URL, and the forms collection.`, richtig: true, begruendung: `Correct: Creating a globally applied action filter enables you to save the state of every action taken by the user while logged in to your site.` },
            { id: "2", text: `Create a globally applied custom action filter, ensuring that you set the AllowMultiple parameter to false, that implements the OnActionExecuting method. Have it store the user, the URL, and the forms collection.`, richtig: false, begruendung: `Incorrect: By setting the AllowMultiple to false, you have configured the filter to be run only once during the lifetime of the application.` },
            { id: "3", text: `Create a globally applied custom action filter that implements the OnActionExecuted method. Have it store the user, the URL, and the forms collection.`, richtig: true, begruendung: `Correct: By creating a globally applied action filter you have ensured that every action taken by the user will be logged.` },
            { id: "4", text: `Override the AuthorizeAttribute and have it store the user, the URL, and the forms collection.`, richtig: false, begruendung: `Incorrect: Because this is applied only to the AuthorizeAttribute, it logs only those actions where the user has to be logged in. That enables them to take actions that might not be logged.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are adding the capability for users to customize their site’s display colors. You are required to provide a slider that enables users to change each RGB element. What can you do to ensure that this gets treated in the model and stored in the database as a single RGB color? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Strongly bind the sliders to their own individual fields in the model. Ensure that the model unit for color only implements the GET, where you write code that concatenates the values.`, richtig: false, begruendung: `Incorrect: This does not easily enable saving into the database because the color itself only implements the HTTP Get.` },
            { id: "2", text: `Create a custom model binder that knows to look for the three values and how to put them together to get the single color.`, richtig: true, begruendung: `Correct: This solution works because it combines the three discrete values into a single object on the model.` },
            { id: "3", text: `Add the three different elements to the model and ensure that your update statement to the database correctly joins the elements to get the appropriate color.`, richtig: false, begruendung: `Incorrect: Although this solution gets the value into the database appropriately, it does not fulfill the requirement that the model be able to use the color as a single value.` },
            { id: "4", text: `Create a custom model binder that evaluates the entire color customization process and binds the entire model rather than just managing a subset of the information.`, richtig: true, begruendung: `Correct: Although it takes more work, using an approach of creating a model binder for the entire object, rather than just a part, successfully manages the need to have it in the model and in the database.` },

        ]
    },
    Wuerfeltextaufgabe(``, `When bandwidth is minimal or throttled, you can promote a good user experience by ensuring that the number and size of the files they need to download are minimized.`),
    Wuerfeltextaufgabe(``, `There are several processes you can run to shrink the size of files and minimize the number of files to be downloaded. ASP.NET MVC 4 supports the ability to minify JavaScript and CSS files. This is a process that removes comments, white space, and other unused and wasted characters from files. It also shrinks method and variable names in JavaScript files. The other process offered is the ability to bundle scripts. There is a certain overhead when creating an HTTP connection, and most modern browsers limit the number of concurrent connections you can have to a site. Between these two issues is the ability to bundle files or keep them as smaller discrete files for development purposes, but turn them into a larger combined file before distribution to your users.`),
    Wuerfeltextaufgabe(``, `IIS enables you to configure your web server to send compressed content to users whose browsers accept gzipped content. You can have the web server compress only static files, such as JavaScript and CSS files, or every file, including dynamic files. You can also set a minimum size of the file before the server will compress it.`),
    Wuerfeltextaufgabe(``, `You can have your application zip up content before providing it to users, which is appropriate for needs such as reports and documents. Users have decompress the compressed file.`),
    Wuerfeltextaufgabe(``, `CDNs enable you to distribute your content across a broader set of providers than your own internal set, which gives you several advantages. Your servers have to do less processing of simple GETs to retrieve images, scripts, and so on. A CDN can put the content closer to the client so their time spent on the network is lower, potentially improving their performance.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are working on a AJAX-heavy site, and your script files are separated in your solution by function. You have already implemented minification and bundling, but you are still getting reports of poor performance when users try to access your pages. You cannot replicate the problem locally. What additional steps can you take and still provide the same user experience?`,
        "optionen" : [
            { id: "1", text: `Compress all scripts locally and have the users download the compressed files rather than the uncompressed files.`, richtig: false, begruendung: `Incorrect: Although you might be able to minimize the size of the files being downloaded, your browser cannot open and use those files.` },
            { id: "2", text: `Turn IIS compression on, turn on the option to compress dynamic pages, and set the minimum file size to 0 so that every file served will be compressed.`, richtig: false, begruendung: `Incorrect: This approach minimizes the size of the files being sent to the client, but it also has a heavy cost on both server-side and client-side processing because the server tries to compress every file.` },
            { id: "3", text: `Turn IIS compression on, disable dynamic page compression, and set the minimum file size to the size of your smallest bundled script file.`, richtig: true, begruendung: `Correct: This is an appropriate next step to try to compress the script and style files being sent to the client.` },
            { id: "4", text: `There is nothing more to do without redesigning the site.`, richtig: false, begruendung: `Incorrect: IIS compression has not yet been tried. It makes more sense to try all other solutions before approaching a code rewrite.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You want to implement bundling and minification in your site. What are some of the potential problems you need to be aware of? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `None; there is no condition in which this is a poor decision.`, richtig: false, begruendung: `Incorrect: Poor decisions in implementing bundling and minification can hurt performance rather than help it.` },
            { id: "2", text: `You need to be sure you do not bundle too many scripts together because you cannot take advantage of concurrent downloads if only one or two files are being downloaded.`, richtig: true, begruendung: `Correct: Bundling every script into a single large file might decrease the effectiveness of concurrent downloading.` },
            { id: "3", text: `You should bundle and minimize scripts and CSS files together for maximum effectiveness.`, richtig: false, begruendung: `Incorrect: You should keep scripts and CSS files separated for maximum effectiveness. They represent different aspects of the user experience, so a logical separation, even on the client side, makes sense.` },
            { id: "4", text: `Not bundling logically linked scripts together can have a negative effect on performance.`, richtig: true, begruendung: `Correct: Not separating scripts logically might lead to the user downloading scripts that will never be used. Although the download experience is maximized, it does not make sense to download unused scripts.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `Your U.S.-based company recently opened an office in England. Staff members have been making lots of sales calls, which have generated an increase in visits to the company’s websites. Much of the activity involves downloading sales sheets, product descriptions, and other sales support information currently stored in PDFs. There have been some performance-related complaints from remote sales staff, but no local users have noticed any problems. Which of the following are potential solutions? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Bundle and minify the PDF files to ensure that there is no wasted space.`, richtig: false, begruendung: `Incorrect: Bundling would create unreadable files because it would concatenate PDF files inappropriately.` },
            { id: "2", text: `Write an action result that takes a file name and returns a compressed version of the file for download.`, richtig: true, begruendung: `Correct: This solution causes more work on the client side to open and view the compressed content, but it provides a more responsive user experience.` },
            { id: "3", text: `Sign on with a CDN with nodes in North America and Europe and use it to serve files and other static content to sales support staff.`, richtig: true, begruendung: `Correct: Moving the part of the site most affected by the new usage closer to the users increases their download speed and thus their perceived performance.` },
            { id: "4", text: `Add two additional servers and create a server farm to serve your content.`, richtig: false, begruendung: `Incorrect: Because local users have not noticed a reduction in performance, it is unlikely that adding more cycles at the server level would improve the responsiveness of the application for remote users.` },

        ]
    },
    Wuerfeltextaufgabe(``, `The purpose of an ASP.NET MVC application is to enable users to perform a set of tasks. An application should be designed to make these tasks easier. A key part of the user experience is application performance, which can be affected in multiple ways.`),
    Wuerfeltextaufgabe(``, `Troubleshooting performance impacts is critical to making your application as robust as possible. The Performance Wizard in Visual Studio enables you to configure profiling to capture information on CPU usage, memory usage, and resource/threading information. The Visual Studio profiler performs a complete trace of all the calls in an application. This enables you to monitor and evaluate the process and logic flow within your application. You can find problems such as methods being called too often and other potential performance impacts.`),
    Wuerfeltextaufgabe(``, `Performance Monitor comes with the Windows operating system and provides information about many different characteristics of the running application.`),
    Wuerfeltextaufgabe(``, `Tracing is functionality in the System.Diagnostics namespace that enables you to write information to one or more TraceListeners. A listener writes the information to a text file, XML file, or another format. You can call the functionality to write this information by using the Trace object and the static methods for Write, WriteIf, WriteLine, and WriteLineIf. You can also create a custom TraceListener, if necessary.`),
    Wuerfeltextaufgabe(``, `Logging is the process of capturing information about your application. It is generally added to those methods that are doing work that you want to have further details on, whether it is making note of the time a call to an external web service started and the time the call ended, or the number of rows returned from a database query. You can perform logging through third-party tools such as NLog and log4net, and you can use the System.Diagnostics namespace to capture and write information.`),
    Wuerfeltextaufgabe(``, `Code contracts are a way to make a method responsible for defining and publicizing its own internal conditions. These conditions include preconditions, which define the acceptable parameters for the method; invariant conditions, which provide definitions of those things that must not change during the class lifetime; and postconditions, which define the expectations on the returned value. Code contracts throw exceptions if their rules are violated, and they give instruction during the development process about what those rules are so you know the expectations when developing methods that are calling the contracted method.`),
    Wuerfeltextaufgabe(``, `Health monitoring is a system that is part of ASP.NET that tracks various events occurring within your application. You add it through configuration. Health monitoring can also capture limited information about an application’s state as it runs. There are specific mappings for all errors, infrastructure errors, processing errors, failures, and other events.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `Your application has an intermittent issue, based on the user’s path through the application, in which the application seems to stop running. Even when running in debug mode, the application calls a web service and then stops. The application locks and the call never returns, thus the user’s request is never completed and eventually times out. What performance or profiling tool will provide the most pertinent information about your application?`,
        "optionen" : [
            { id: "1", text: `CPU sampling in the Performance Wizard`, richtig: false, begruendung: `Incorrect: CPU sampling will not provide assistance for the main problem of the application locking up.` },
            { id: "2", text: `Memory allocation in the Performance Wizard`, richtig: false, begruendung: `Incorrect: Memory analysis will not provide assistance for the main problem of the application locking up.` },
            { id: "3", text: `Resource contention data in the Performance Wizard`, richtig: true, begruendung: `Correct: Thread and resource profiling will give some understanding of what kind of actions are taking place that will cause a resource or thread to be blocked.` },
            { id: "4", text: `Tracing from the System.Diagnostics namespace that logs the times of web service call and web service return`, richtig: false, begruendung: `Incorrect: Tracing information regarding when a web service starts and stops would be interesting. However, the problem is that the web service is called and never returns, so this logging information would not be complete or useful.` },
            { id: "5", text: `The Health Monitoring tool, for capturing security information related to the interaction with the web service`, richtig: false, begruendung: `Incorrect: A problem with security information would likely not cause the service to stop responding.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You inherited a working application that began as a proof of concept but was eventually adopted as a production application without being refactored. Many new requirements need to be added. As part of your initial analysis, you notice a lot of problems with bad data. Which solutions will help remediate this issue? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Running the Performance Wizard to sample CPU usage`, richtig: false, begruendung: `Incorrect: The Performance Wizard does not support management or identify data issues.` },
            { id: "2", text: `Adding code contracts to ensure that the input parameters have expected values`, richtig: true, begruendung: `Correct: Preconditional code contracts ensure that incorrect information is not submitted to a method. This helps eliminate the possibility of bad data.` },
            { id: "3", text: `Adding code contracts to ensure that the return values meet specific criteria`, richtig: true, begruendung: `Correct: Postconditional code contracts ensure that incorrect information is not returned from a method. This helps eliminate the possibility of bad data.` },
            { id: "4", text: `Adding code contracts to ensure that objects do not become invalid during process`, richtig: true, begruendung: `Correct: Invariant code contracts ensure that objects do not get to an invalid state. This helps eliminate the possibility of bad data.` },
            { id: "5", text: `Running the Visual Studio profiler to analyze application flow`, richtig: false, begruendung: `Incorrect: The Visual Studio profiler does not provide any support for managing or identifying data issues.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are helping a client estimate the effort involved in adding comprehensive monitoring to an enterprise-level ASP.NET MVC application. Which of the following are useful considerations while building the estimate? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Adding health monitoring involves many choices. An evaluation will have to be performed to determine which monitors will be of real use.`, richtig: true, begruendung: `Correct: Adding health monitors is an easy task. Determining which options provide the information you need will be time-consuming because of the number of choices.` },
            { id: "2", text: `Adding generic logging can be done as part of the rework. After the logging pattern has been established, you can add logging as part of any new work and as part of the refactoring process.`, richtig: true, begruendung: `Correct: Generic logging is a useful addition and can be added as items are refactored; it is not an all-or-nothing type of work.` },
            { id: "3", text: `Adding tracing must be done completely and comprehensively before it can be of any use. There is no point in implementing tracing in a single part of the application if you are not going to refactor the application.`, richtig: false, begruendung: `Incorrect: You can perform tracing on an ad-hoc basis as needed.` },
            { id: "4", text: `Creating a data collection set in Performance Monitor will provide all the needed information and can be set up in a few minutes.`, richtig: false, begruendung: `Incorrect: Data collection in Performance Monitor is relatively simple. However, determining the most critical items to monitor can be time-consuming because there are hundreds of counters.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Exceptions can occur almost anywhere in an application. What you need to do with the exceptions varies based on where in your application the error occurs. You might display a database error to the user differently than a business logic error. Typically, a layer in a multilayer application handles two sets of exceptions: its own and the exceptions from the layer below it in the stack. A layer does not handle exceptions from the layer above. For example, the UI layer should not handle exceptions thrown in the data layer. Those exceptions should be handled by the business layer.`),
    Wuerfeltextaufgabe(``, `You can create custom error pages for display in your application. These pages can look and feel like other pages in your application but show error-specific information. You create custom error pages like any other controller/view combination. You define the error handling controller and then you create the view(s) to manage the various errors. You can add the pointers to the error files in both code and in configuration.`),
    Wuerfeltextaufgabe(``, `First chance exceptions are exceptions that are immediately thrown, before they have been handled. You can add a first chance exception handler to your application. This handler will be called for every exception that is thrown in your application. You can add logging or other diagnostic or cleanup items in this handler. However, you need to make sure the first chance exception handler is exception-free, as exceptions will cascade and could easily cause a stack overflow.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are re-creating an application that was originally built with ASP 2.0. You need to break the monolithic application into a traditional three-tier application. One of the requirements is that database errors must be displayed in the UI. Which solution will present enough information to the user so they can notify the appropriate person of a problem, but not allow the user to gain information about the design of the database?`,
        "optionen" : [
            { id: "1", text: `Add a first chance exception handler and log the information in the error.`, richtig: false, begruendung: `Incorrect: Although logging information is an important consideration, it does not provide additional information to the users.` },
            { id: "2", text: `Add a generic database-layer exception handler to the business layer, and pass appropriate error information to the UI layer for display in a custom error page.`, richtig: true, begruendung: `Correct: The business layer is the appropriate place to manage data layer exceptions. By repackaging it and sending it up to the user layer, you can maintain separation of concerns and meet the requirement to display information to the user. This will also enable you to log the information as necessary to support debugging.` },
            { id: "3", text: `Add specific database exception handlers in the business layer and log the information into the database for further review.`, richtig: false, begruendung: `Incorrect: You are having the business layer handle the database exception correctly, but you are not meeting the requirement to provide information about the error to the user.` },
            { id: "4", text: `Let the errors pass through the business layer to the UI layer where they can be handled as specific errors and presented as appropriate in the UI.`, richtig: false, begruendung: `Incorrect: By not having the business layer capture and handle the error, you are building an improper relationship between the UI and the database.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What is an advantage to using first chance exception notification?`,
        "optionen" : [
            { id: "1", text: `The ability to capture and handle all exceptions that occur within the application in one place`, richtig: false, begruendung: `Incorrect: First chance exception is a notification only. It does not let you do anything other than observe the exception.` },
            { id: "2", text: `The ability to log an exception after it is handled by its appropriate error handling code`, richtig: false, begruendung: `Incorrect: The first chance exception handler gets the exception before it has been issued to its appropriate error management code. You cannot see what happens to the exception as it is being handled.` },
            { id: "3", text: `The ability to log an exception before it is touched by any other error handler`, richtig: true, begruendung: `Correct: The first chance exception handler enables you to examine an exception and take some action before it is touched by any other handler.` },
            { id: "4", text: `The ability to forward an exception to an error handler based on the type of exception that was thrown`, richtig: false, begruendung: `Incorrect: The first chance exception handler can examine the exception, but cannot forward or handle the exception.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `Using custom error pages provides a lot of flexibility to an application because it allows for a consistent user experience even when the application has a problem. To take full advantage of this flexibility, you need to be able to create the pages and configure the application to use these pages. What code will provide custom error pages for 404 errors and general exceptions?`,
        "optionen" : [
            { id: "1", text: `<system.web> <customErrors mode="RemoteOnly" defaultRedirect="Error/GeneralException"> <error statusCode="404" redirect="ErrorController.Status404" /> </customErrors> </system.web>`, richtig: false, begruendung: `Incorrect: This shows only the <system.web> part of the configuration. There is also a need to have an entry in the <system.webServer> node.` },
            { id: "2", text: `<system.web> <customErrors mode="RemoteOnly" defaultRedirect="Error/GeneralException"> <error statusCode="404" redirect="Error/Status404" /> </customErrors> </system.web> <system.webServer> <httpErrors errorMode="Detailed" /> </system.webServer>`, richtig: true, begruendung: `Correct: This example shows the 404 error status and it sets the default error handler to the server error action.` },
            { id: "3", text: `<system.web> <customErrors mode="RemoteOnly"> <error statusCode="404" redirect="Error/Status404" /> <error statusCode="GeneralException" redirect="Error/GeneralException" /> </customErrors> </system.web> <system.webServer> <httpErrors errorMode="Detailed" /> </system.webServer>`, richtig: false, begruendung: `Incorrect: This example shows the general exception handler using a status code of GeneralException. The status codes relates to the type of HTTP error that will be handled.` },
            { id: "4", text: `<system.web> <customErrors mode="LocalOnly" defaultRedirect="Error/GeneralException"> <error statusCode="404" redirect="Error/Status404" /> </customErrors> </system.web> <system.webServer> <httpErrors errorMode="Detailed" /> </system.webServer>`, richtig: false, begruendung: `Incorrect: The custom error mode is set to mode=“LocalOnly”, which means that users will not see the actual error pages.` },

        ]
    },
    Wuerfeltextaufgabe(``, `As you create an application, you should ensure that each piece is functioning correctly before you move to the next piece. Unit tests enable you to validate your application repeatedly.`),
    Wuerfeltextaufgabe(``, `There are two primary types of automated developer-created tests: unit tests and integration tests. Unit tests usually focus on a single method and attempt to test only that function without any dependencies. An integration test examines more than one item at a time, such as retrieving known information from a database and performing some business logic on it.`),
    Wuerfeltextaufgabe(``, `When creating unit tests, cover all potential use cases, not just the common positive and negative uses cases. This includes edge cases and “impossible” cases as well because you cannot predict how a method might be used in the future by some other functionality.`),
    Wuerfeltextaufgabe(``, `You can create unit tests against simple methods, your model, or ASP.NET MVC application methods. You can also create them against action methods in a controller by examining the action result returned from the Action method.`),
    Wuerfeltextaufgabe(``, `You can use Visual Studio Ultimate 2012 edition to create and run web performance and load tests. You first create the individual mix of web tests you want to run, which become the actual tests run during load tests. These load tests enable you to scale from one to many users to validate your application under load. You can set a specific number of users or choose a sliding scale that gradually increases the number of users hitting the application. You can also set thresholds based on the system that will monitor when an application reaches a CPU or memory usage threshold.`),
    Wuerfeltextaufgabe(``, `Testing approaches include the smoke test, stress test, and performance testing. The smoke test typically performs a fast, general review of an application. A stress test tends to be more intensive, lasting longer, using more resources, and testing deeper into the application. The purpose of a performance test is to understand the responsiveness of the application. Capacity planning helps determine the amount of concurrent users that will stress a system to a predetermined level.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are under contract with a large company that is starting to implement a TDD approach. As part of the long-term support for this effort, the company needs you to complete several unit tests. As you review the current code base, you find good tests for the model, but no tests for anything other than the model. Which of the following is the best approach to complete the unit tests?`,
        "optionen" : [
            { id: "1", text: `Create a new directory in the unit test project for the controller- and action-specific tests. Create a unit test file for each controller. Inside that file, have one or more tests for only the controller action methods.`, richtig: false, begruendung: `Incorrect: There might very well be nonaction methods in a controller. Those methods should be tested as well.` },
            { id: "2", text: `Add a new file to the unit test project called ControllerTests. Put all tests for all the controllers and the actions in the file.`, richtig: false, begruendung: `Incorrect: You should provide much more separation of your tests than using a single file for every unit test that applies to a controller.` },
            { id: "3", text: `Create a new directory in the unit test project for the controller- and action-specific tests. Create a unit test file for each action you are going to test.`, richtig: false, begruendung: `Incorrect: This is too much of a breakdown. The best relationship between controllers and the applicable unit tests is usually 1 to 1. However, a controller with a large number of methods working within the controller will not meet the 1-to-1 ratio. You should test nonaction methods in the controller as well.` },
            { id: "4", text: `Create a new directory in the unit test project for the controller- and action-specific tests. Create a unit test file for each controller. Inside that file have one or more tests for all methods in the controller, regardless of whether they are an action or not.`, richtig: true, begruendung: `Correct: This solution provides for testing actions and nonactions as well as a good split of the tests per file.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `Your ASP.NET MVC web application has just been released to a group of pilot users. The users are reporting periods of extreme performance degradation. You did not encounter performance issues during development or the quality assurance phase. What can you do in your development environment to understand what is occurring in the production environment?`,
        "optionen" : [
            { id: "1", text: `Create a set of unit tests that repeatedly test certain parts of the application. Run them continuously over a period of time to ensure that the application works as expected.`, richtig: false, begruendung: `Incorrect: Unit tests are designed to ensure that the functionality and logic of the application are correct. They do not work well when you need a performance-based analysis.` },
            { id: "2", text: `Create a set of web tests that exercise the application. Set a run load of 50 percent of your pilot users and run them in a constant load testing process to validate the application’s behavior.`, richtig: false, begruendung: `Incorrect: Although this test will provide some useful and interesting information, running a constant load of 50 percent might not give you the information you need. More users could use the application at any point in time.` },
            { id: "3", text: `Create a set of web tests that exercise the application. Using a step approach, start with a minimal number of users and increase to the total number of users in the pilot program.`, richtig: true, begruendung: `Correct: Starting from a midlevel count of users and then increasing to the total number of possible numbers should give you an idea of what is happening during the day-to-day running of the application in production.` },
            { id: "4", text: `Create a set of web tests that exercise the application. Using a goal-based approach, set the process to run to 75 percent CPU utilization. When you reach that point, compare the results with the number of users in the pilot program.`, richtig: false, begruendung: `Incorrect: Understanding the number of users required to reach 75 percent utilization of the CPU might be interesting, but it does not help you understand the users’ issue. They might be experiencing slowness due to memory utilization or threading contention that this approach will not be able to detect.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You support hardware purchasing for an ASP.NET MVC application in your company. The application is finished, and the development team knows the number of intended users. Which approach will give the team the best understanding of the application’s hardware needs?`,
        "optionen" : [
            { id: "1", text: `Create several web tests that exercise all parts of the application, including all static pages. Run these tests in a constant load at various levels to see the effect on performance.`, richtig: false, begruendung: `Incorrect: Running at a constant load, even at various levels of user count, will not efficiently give them the information that they need.` },
            { id: "2", text: `Create several web tests that exercise all parts of the application, including all static pages. Run these tests in a step approach up to the maximum expected number of users. This will give you an idea of the load one server can handle.`, richtig: false, begruendung: `Incorrect: Although this approach will give them interesting information and an understanding of the capacity of a server, it is based less on statistical information than on a subjective analysis of performance.` },
            { id: "3", text: `Create several web tests that exercise all parts of the application, including all static pages. Run these tests in a goal-based approach in which the percent of CPU usage and percent of memory usage metrics are set to the company standard maximums. Evaluate how many users it takes to reach the maximum levels.`, richtig: true, begruendung: `Correct: This approach will give them an objective analysis of the amount of users a server can manage at a particular level of memory or CPU usage.` },
            { id: "4", text: `Create several web tests that exercise only the dynamic parts of the application, ignoring all static content. Run these tests in a goal-based approach in which the percent of CPU usage and percent of memory usage metrics are set to the company standard maximums. Evaluate how many users it takes to reach these maximum levels.`, richtig: false, begruendung: `Incorrect: This approach leaves out static pages. For a true test, you should exercise all parts of the application.` },

        ]
    },
    Wuerfeltextaufgabe(``, `When you have deployed your application into Windows Azure, you will find that some of your traditional ways of gathering diagnostic information are not available or do not give you the expected results. To compensate for this, Microsoft has provided a special Windows Azure–specific diagnostics API, Microsoft.WindowsAzure.Diagnostics.`),
    Wuerfeltextaufgabe(``, `Getting diagnostics running in your Windows Azure–deployed application requires several steps. The first is adding information into your ServiceDefinition.csdef file so that you can import the Diagnostics module. You also need to make sure that information is added into your ServiceConfiguration.cscfg file so that that the diagnostic module can access databases or other business needs.`),
    Wuerfeltextaufgabe(``, `After diagnostics are fully available in your Windows Azure application, you can either code your calls to the diagnostics or use the built-in event monitors. To configure the event monitors, create a new file: Diagnostics.wadcfg. This file contains the configuration entries that will set up the appropriate counters. After diagnostic information is being saved, you can programmatically download the information from the server or get it on demand.`),
    Wuerfeltextaufgabe(``, `Windows Azure also enables you to configure the role to run IntelliTrace on the application. You need to deploy the application using Visual Studio Ultimate 2012 and make some configuration changes during the publish process. After IntelliTrace is logging the role, you can download and review this information through Visual Studio.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `You will be deploying your application in Windows Azure. You know that you need to include logging, but you have some concerns. What diagnostic capabilities can Windows Azure support? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `The capability to turn on and off different aspects of the Windows Azure diagnostics through configuration changes`, richtig: true, begruendung: `Correct: You can control the diagnostics setting through configuration within your Windows Azure–hosted application.` },
            { id: "2", text: `The capability to retain logs from your custom logging solution on a Windows Azure storage account`, richtig: true, begruendung: `Correct: Although the Windows Azure VMs get recycled when the role restarts, saving the logs to the Windows Azure storage system outside of your VM would ensure that they are available.` },
            { id: "3", text: `The capability to retain logs from your custom logging solution when written to a local store`, richtig: false, begruendung: `Incorrect: Because the Windows Azure VMs are entirely virtual and recycle whenever a role restarts, there is a significant chance you will lose logging information.` },
            { id: "4", text: `The capability to send entries to the Windows Azure diagnostics system from within your application`, richtig: true, begruendung: `Correct: You can treat the Windows Azure diagnostics system like a traditional logging tool by writing messages to the system.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What do you need to do to use IntelliTrace from within Windows Azure? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Publish the solution from any version of Visual Studio Professional 2012 or higher.`, richtig: false, begruendung: `Incorrect: You can enable IntelliTrace only through Visual Studio Ultimate 2012 edition.` },
            { id: "2", text: `Select the Enable IntelliTrace check box before publishing the solution.`, richtig: true, begruendung: `Correct: When publishing the projects, you can configure the process to deploy in debug mode with IntelliTrace enabled.` },
            { id: "3", text: `Ensure that you made all configuration changes in the Web.config file that will turn on IntelliTrace.`, richtig: false, begruendung: `Incorrect: There are no Web.config changes required to run the system with IntelliTrace turned on.` },
            { id: "4", text: `Download and view the IntelliTrace logs through a web browser.`, richtig: false, begruendung: `Incorrect: You cannot download and run the IntelliTrace logs through a web browser. Running them requires Visual Studio Ultimate 2012.` },
            { id: "5", text: `Download and view the IntelliTrace logs through Visual Studio Ultimate 2012.`, richtig: true, begruendung: `Correct: You can view the IntelliTrace logs through Visual Studio after download.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You want to configure Windows Azure diagnostics. Where do you configure the specific Performance Monitors you want to have run in support of your application?`,
        "optionen" : [
            { id: "1", text: `ServiceDefinition.csdef`, richtig: false, begruendung: `Incorrect: You include diagnostics in a project using the ServiceDefinition.csdef file. The file does not configure which monitors will be included when your application is running.` },
            { id: "2", text: `ServiceConfiguration.cscfg`, richtig: false, begruendung: `Incorrect: You configure log storage locations in the ServiceConfiguration.cscfg file. The file does not configure which monitors will be included when your application is running.` },
            { id: "3", text: `Diagnostics.wadcfg`, richtig: true, begruendung: `Correct: You configure specific monitors that will run in your application in the Diagnostics.wadcfg file.` },
            { id: "4", text: `Web.config`, richtig: false, begruendung: `Incorrect: The Web.config file is not used to include Windows Azure diagnostics in an application.` },

        ]
    },
    Wuerfeltextaufgabe(``, `IIS is the primary mechanism for authentication because it comes bundled with seven providers. However, starting with IIS 7, only the Anonymous authentication provider comes installed by default. If you want to use any of the other providers, you need to install them separately.`),
    Wuerfeltextaufgabe(``, `Anonymous authentication does not require users to input login credentials. Basic authentication requires credentials that are validated against the domain, but the information is not sent securely. Digest authentication is similar to Basic authentication, but the credentials are sent hashed. Forms authentication is one of the most commonly used authentication mechanisms because it enables you to authenticate users whatever way you want. Windows authentication uses credentials from Windows logged-in users and sends them with the HTTP request. Client Certificate authentication matches certificates between the client and the server and uses it to access user information. IIS Client Certificate authentication allows validation against both Active Directory and the local server store.`),
    Wuerfeltextaufgabe(``, `The main way to enforce authentication in ASP.NET MVC 4 is through the use of attributes. The Authorize attribute tells the system that any users calling the controller or the action need to be authenticated. The AllowAnonymous attribute tells the system that it is permissible for the users to not be authenticated.`),
    Wuerfeltextaufgabe(``, `You can use custom authentication in ASP.NET MVC 4. The best method is to implement the IIdentity and IPrincipal interfaces. This enables you to work with all the default authentication mechanisms.`),
    Wuerfeltextaufgabe(``, `Membership providers have been a part of ASP.NET since .NET 2.0. However, ASP.NET MVC 4 introduced the concepts of SimpleMembership and SimpleRoles. These enable you to customize access to data storage by specifying the table, unique identifier, and user name in the initialization.`),
    Wuerfeltextaufgabe(``, `You can create custom membership providers by subclassing AuthorizeAttribute or by deriving from the Forms authentication provider and overriding the applicable methods.`),
    Wuerfeltextaufgabe(``, `Choosing the appropriate authentication type depends on several factors. The primary factor is the user store that contains the login information that will be used to verify the website user. If you are using an Active Directory–based authentication system, you should use one of the standard challenge-based methods. If you are using a different technology for your user store, you need to use an overridden provider or a custom provider. If you do not have a provider or need a special one just for the website, Forms authentication can be the best way to implement your authentication requirements.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `What type of authentication accepts login credentials that will be checked against the domain or local server and are sent in a hashed format?`,
        "optionen" : [
            { id: "1", text: `Basic authentication`, richtig: false, begruendung: `Incorrect: Basic authentication is transmitted from the client to the server in Base64 encoding and is not encrypted.` },
            { id: "2", text: `Digest authentication`, richtig: true, begruendung: `Correct: Digest authentication is a challenge-response–based authentication method to ensure that user credentials are not sent over the network in clear text.` },
            { id: "3", text: `Forms authentication`, richtig: false, begruendung: `Incorrect: Forms authentication does not require login credentials to be sent in an encrypted form, and it does not automatically check against the domain and/or local server.` },
            { id: "4", text: `Windows authentication`, richtig: false, begruendung: `Incorrect: Windows authentication does not send user names and passwords from the client to the server.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `Forms authentication enables you to write code to validate user credentials. After it is complete, you can register the authentication cookies for use throughout the user’s visit by using which of the following?`,
        "optionen" : [
            { id: "1", text: `FormsAuthentication.SetAuthCookie`, richtig: true, begruendung: `Correct: FormsAuthentication.SetAuthCookie registers the authentication token in the cookie for use in future requests.` },
            { id: "2", text: `FormsAuthenticationCookie = new FormsAuthenicationCookie();`, richtig: false, begruendung: `Incorrect: You have created a new FormsAuthenticationCookie, but it has no values, so it would not be useful in future requests.` },
            { id: "3", text: `FormsAuthentication.ClearAuthCookie`, richtig: false, begruendung: `Incorrect: FormsAuthentication.ClearAuthCookie removes the authentication token.` },
            { id: "4", text: `MembershipProvider.User =`, richtig: false, begruendung: `Incorrect: MembershipProvider.User = does not maintain information between requests.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What default attributes or inline checks would you use to create an accepted-list scenario in ASP.NET MVC 4? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Authorize attribute`, richtig: true, begruendung: `Correct: AuthorizeAttribute can be put on controllers and actions to require authorization.` },
            { id: "2", text: `RequireHttps attribute`, richtig: false, begruendung: `Incorrect: RequireHttps will ensure that the communication between client and server is encrypted, but it does not do anything to help ensure an accepted-list scenario.` },
            { id: "3", text: `WebSecurity.IsAuthenticated`, richtig: false, begruendung: `Incorrect: WebSecurity.IsAuthenticated verifies that a user is authenticated, but it does not do it in a way that supports an accepted-list scenario.` },
            { id: "4", text: `AllowAnonymous attribute`, richtig: true, begruendung: `Correct: AllowAnonymous can be put on controllers and actions to enable unauthorized users access.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What interfaces or classes should be implemented or inherited when creating custom authentication that is based on a non-Windows, third-party provider? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `ActiveDirectoryMembershipProvider`, richtig: false, begruendung: `Incorrect: ActiveDirectoryMembershipProvider is a Windows-specific authentication provider. It would not provide assistance in this case.` },
            { id: "2", text: `IIdentity`, richtig: true, begruendung: `Correct: IIdentity describes the user that was authenticated.` },
            { id: "3", text: `SqlMembershipProvider`, richtig: false, begruendung: `Incorrect: SqlMembershipProvider provides assistance in getting membership data from SQL databases. It would not help get information from a third-party solution.` },
            { id: "4", text: `IPrincipal`, richtig: true, begruendung: `Correct: IPrincipal provides the security context of the user on whose behalf the code is running.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What kind of helper methods does WebSecurity provide? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Login`, richtig: true, begruendung: `Correct: Login is one of the methods provided by the WebSecurity helper.` },
            { id: "2", text: `ResetPassword`, richtig: true, begruendung: `Correct: ResetPassword is one of the methods provided by the WebSecurity helper.` },
            { id: "3", text: `CreateAccount`, richtig: true, begruendung: `Correct: CreateAccount is one of the methods provided by the WebSecurity helper.` },
            { id: "4", text: `ChangePassword`, richtig: true, begruendung: `Correct: ChangePassword is one of the methods provided by the WebSecurity helper.` },
            { id: "5", text: `DeleteAccount`, richtig: false, begruendung: `Incorrect: DeleteAccount is not supported through the WebSecurity helper.` },

        ]
    },
    Wuerfeltextaufgabe(``, `To add roles, you must create a suitable user interface and invoke the Roles API. When launching a new application, you can also ensure that role creation occurs as part of the database creation script. If you will support user-created roles in your application, you need to write this functionality yourself.`),
    Wuerfeltextaufgabe(``, `You can check the validity of roles in several ways: through attributes on the controller or action [Authorize(Roles=“Admin”)], or in code by using IsUserInRole or GetRolesForUser. You can also check whether a user has a role in code through the use of methods such as RoleProvider.GetRolesForUser, HttpContext.User.IsInRole, and RoleProvider.IsUserInRole.`),
    Wuerfeltextaufgabe(``, `You can create custom role providers by implementing RoleProvider. Custom role providers enable you to manage role access when standard role providers don’t meet your needs. You might want to create a custom role provider to get information from nonstandard databases, or when you want to use a different database schema from the standard .NET implementation.`),
    Wuerfeltextaufgabe(``, `When your application consumes WCF services, you must often manage authentication between your application and the service. To manage authentication, you can use the Credentials collection on the client proxy (created by using the Add Service Reference command in Visual Studio). You can create a credential using a user name and password, a specific Windows credential based on domain user name and password, or the WindowsIdentity from the principal.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `What attribute or code snippet within a controller enables a role named Admin to access actions or code blocks after the check-in code?`,
        "optionen" : [
            { id: "1", text: `RoleProvider.GetRolesForUser(“Admin”)`, richtig: false, begruendung: `Incorrect: RoleProvider.GetRolesForUser(“Admin”) gets the list of roles for the user that is passed in as a parameter. In this case, it uses a hard-coded value of “Admin.”` },
            { id: "2", text: `[Authorize(Roles=“Admin”)]`, richtig: true, begruendung: `Correct: The Authorize attribute handles authorization on a controller and/or action basis by using the Roles= qualifier.` },
            { id: "3", text: `RoleProvider.IsUserInRole(User.Name)`, richtig: false, begruendung: `Incorrect: RoleProvider.IsUserInRole(User.Name) does a check to see whether the currently logged in user is within a role that is passed in as a parameter to the function. In this case, the code will be looking for a role that matches the user’s name.` },
            { id: "4", text: `[AuthorizeAttribute(Roles=“Admin”)]`, richtig: false, begruendung: `Incorrect: Although AuthorizeAttribute is the correct class, the proper way to use it in attribution is through the Authorize keyword.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `Which methods help the RoleProvider determine whether a user is assigned a role or set of roles? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `GetRoles`, richtig: false, begruendung: `Incorrect: The GetRoles method provides a list of all roles for an ApplicationName.` },
            { id: "2", text: `GetRolesForUser`, richtig: true, begruendung: `Correct: GetRolesForUser gets a list of roles for a user.` },
            { id: "3", text: `IsUserInRole`, richtig: true, begruendung: `Correct: IsUserInRole returns a Boolean on whether a particular user has a role.` },
            { id: "4", text: `FindUsersInRole`, richtig: false, begruendung: `Incorrect: FindUsersInRole returns a list of users that have the applicable role.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `Why should you create a custom role provider? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `To use a data source not regularly supported`, richtig: true, begruendung: `Correct: Because traditional providers work only on SQL Server, accessing a different data provider such as MySQL would require a custom provider.` },
            { id: "2", text: `To use the SimpleRoleProvider`, richtig: false, begruendung: `Incorrect: Using the SimpleRole provider would not require you to create a custom provider.` },
            { id: "3", text: `To use a database design different than .NET provides`, richtig: true, begruendung: `Correct: Using a different database design would require that you create a custom provider.` },
            { id: "4", text: `To provide a special configuration file entry`, richtig: false, begruendung: `Incorrect: Creating a custom provider would require a special configuration file entry, but that would not be a reason to create the custom provider in the first place.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Windows Azure Access Control Service (ACS) enables you to implement federated authentication. The four primary participants in the ACS authentication process are the relying party (your application), the client browser, the identity provider, and the ACS.`),
    Wuerfeltextaufgabe(``, `OAuthWebSecurity.VerifyAuthentication is the main process used to create the external callback for authentication. As you are calling it, you can determine whether you want to create a persistent cookie. This cookie will let you determine in subsequent calls whether the user is still authenticated.`),
    Wuerfeltextaufgabe(``, `WIF is part of the .NET Framework and can be used to build identity-aware applications. You can use it to manage any of the built-in token handlers, as well as the tokens that provide the information.`),
    Wuerfeltextaufgabe(``, `You can create custom tokens as well as custom token handlers to read tokens. Custom token handlers are useful when you need to create custom tokens. They are also necessary when you use a token where support is not already built in to the framework, such as SWT and JWT.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `Windows Azure ACS allows for federated identification from outside agencies such as a Microsoft account or Facebook. Which entity issues the final token that your application will accept for access?`,
        "optionen" : [
            { id: "1", text: `The outside agency`, richtig: false, begruendung: `Incorrect: The token provided by a Microsoft account or Facebook is read by ACS, which then creates the token that your application uses.` },
            { id: "2", text: `Your application`, richtig: false, begruendung: `Incorrect: An application does not read the token; it reads the token provided by ACS.` },
            { id: "3", text: `Your network firewall`, richtig: false, begruendung: `Incorrect: A network firewall does not provide a security token.` },
            { id: "4", text: `Windows Azure ACS`, richtig: true, begruendung: `Correct: ACS reads the token provided by the identity providers and creates a token that your application understands and accepts.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `WIF enables you to create a custom token. To be able to use the token, you must create a custom token handler by overriding which of the following?`,
        "optionen" : [
            { id: "1", text: `SecurityToken`, richtig: false, begruendung: `Incorrect: SecurityToken is the .NET Framework class that identifies the token.` },
            { id: "2", text: `SecurityTokenHandler`, richtig: true, begruendung: `Correct: SecurityTokenHandler is the appropriate class to override for creating a custom token handler.` },
            { id: "3", text: `SWTToken`, richtig: false, begruendung: `Incorrect: SWTToken is a type of common token.` },
            { id: "4", text: `Saml2SecurityTokenHandler`, richtig: false, begruendung: `Incorrect: Saml2SecurityTokenHandler is a specific handler for a specific type of token.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `WIF adds the concepts of claims to which of the following? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `IIdentity`, richtig: true, begruendung: `Correct: The class implementing the IIdentity interface contains claims information.` },
            { id: "2", text: `IPrincipal`, richtig: true, begruendung: `Correct: The class implementing the IPrincipal interface contains claims information.` },
            { id: "3", text: `User`, richtig: false, begruendung: `Incorrect: User does not carry any claims information.` },
            { id: "4", text: `MembershipProvider`, richtig: false, begruendung: `Incorrect: MembershipProvider does not contain claims information.` },

        ]
    },
    Wuerfeltextaufgabe(``, `Encryption is the process of turning plain text input into an illegible format that is decipherable only to applications that have the decryption key. Hashing creates a value based on strings of information in a set of data. After the data is transferred, the hash value of the transferred data is compared to the hash value of the original data. If they match, you can assume that the transferred data has not been modified. Salting is the process of adding a random string to input text before the hashing or encryption process. A salt adds unpredictability to the conversion from text to hash to help prevent unauthorized access of the text.`),
    Wuerfeltextaufgabe(``, `Symmetric and asymmetric algorithms are used for encryption. Symmetric encryption uses the same key to encrypt and decrypt data. Asymmetric encryption uses two different keys. A public key is widely distributed and is used for encryption, whereas a private key is kept on the decryption side and is used with the public key to decrypt the data.`),
    Wuerfeltextaufgabe(``, `When using encryption, you must keep the keys protected and store them separate from the encrypted data. You should switch your keys on a defined basis, which includes redefining the process of decrypting and encrypting the data.`),
    Wuerfeltextaufgabe(``, `You can encrypt sections of a Web.config file using the aspnet_regiis.exe command with the -pe, -app, and -prev options. Encrypting areas of a Web.config file protects the file’s content in case the file is served to users inadvertently. Decryption of the file can be handled with the -pd option.`),
    Wuerfeltextaufgabe(``, `Signing application data provides authentication, authorization, and nonrepudiation. This enables you to verify your communications partner and gives you confirmation that the signed application data came from your partner rather than someone else.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `What class handles the actual data encryption?`,
        "optionen" : [
            { id: "1", text: `RijndaelManaged`, richtig: false, begruendung: `Incorrect: RijndaelManaged is a method of encryption and does not create a stream.` },
            { id: "2", text: `RSACryptoServiceProvider`, richtig: false, begruendung: `Incorrect: RSACryptoServiceProvider does not provide a stream.` },
            { id: "3", text: `CryptoStream`, richtig: true, begruendung: `Correct: CryptoStream provides access to an encrypted stream.` },
            { id: "4", text: `RSAKeyInfo`, richtig: false, begruendung: `Incorrect: RSAKeyInfo contains information for managing an RSA key and does manage encryption.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What are digital signatures used for? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Encryption`, richtig: false, begruendung: `Incorrect: Encryption is not a valid reason for digital signing.` },
            { id: "2", text: `Authentication`, richtig: true, begruendung: `Correct: Authentication is a reason for digital signing because it uniquely defines the party signing the data.` },
            { id: "3", text: `Nonrepudiation`, richtig: true, begruendung: `Correct: Nonrepudiation is a reason for digital signing because it uniquely defines the party signing the data and shows that it had to be the original party that submitted the data.` },
            { id: "4", text: `Authorization`, richtig: true, begruendung: `Correct: Authorization can be determined after the individual is uniquely defined.` },
            { id: "5", text: `Hashing`, richtig: false, begruendung: `Incorrect: Hashing is not a valid reason for digital signing.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `How do you encrypt the <connectionStrings> section of the Web.config file?`,
        "optionen" : [
            { id: "1", text: `aspnet_regiis -pe “ConnectionStrings” -app “/MachineDPAPI” -prov “RsaProtectedConfigurationProvider”`, richtig: true, begruendung: `Correct: This is the proper way to encrypt the <connectionStrings> setting of the Web.config file.` },
            { id: "2", text: `aspnet_regiis -pe “Web.Config”-app “/MachineDPAPI” -prov “RsaProtectedConfigurationProvider”`, richtig: false, begruendung: `Incorrect: This command encrypts more than the <connectionStrings> section of the Web.config file.` },
            { id: "3", text: `aspnet_regiis -pd “ConnectionStrings” -app “/MachineDPAPI” -prov “RsaProtectedConfigurationProvider”`, richtig: false, begruendung: `Incorrect: This command decrypts the <connectionStrings> section of the Web.config file.` },
            { id: "4", text: `aspnet_regiis -pd “Web.Config” -app “/MachineDPAPI” -prov “RsaProtectedConfigurationProvider”`, richtig: false, begruendung: `Incorrect: This command decrypts rather than encrypts information, and more information than just the <connectionStrings> section.` },

        ]
    },
    Wuerfeltextaufgabe(``, `SSL is used by the browser and server to establish secure communications. It uses a PKI in which the public key is bound to a company or responsible individual through a trusted third party or CA.`),
    Wuerfeltextaufgabe(``, `Before you can use SSL, you need to ensure that your web server has HTTPS: bindings enabled. You then need to send identifying information and your server-created public key, with the Certificate Signing Request (CSR) to the certificate authority for validation. After your information has been validated and your request approved, the CA will send you a data document containing your certificate that you can load into your server for usage.`),
    Wuerfeltextaufgabe(``, `Storing your user passwords in clear text is not secure. Doing that will ensure that break-ins to your database will compromise your entire site’s security. The easiest way to keep passwords secure is to salt and hash them before persistence. Salting is the process of adding random strings to the password and then hashing forms a one-way illegible value.`),
    Wuerfeltextaufgabe(``, `The AntiXSS Library takes an accepted-list approach to encoding characters for display to prevent XSS attacks, in which a hacker injects their own JavaScript into a website. An example of how this is done is through the use of a review of comment feature that does not alter the data when it is being displayed. Using the Encode feature of the AntiXSS Library will ensure that the display does not include items such as embedded JavaScript.`),
    Wuerfeltextaufgabe(``, `A SQL injection attack occurs when a hacker inserts SQL commands into unprotected queries in an attempt to alter or view data or cause other damage. You control this by parameterizing your queries using SQLParameters. Entity SQL has the same risk, so if you are using this form of data access you need to take the same precautions. Linq-to-Entities does not have the same problem because it uses the object model.`),
    Wuerfeltextaufgabe(``, `CSRFs play on the trust that a server has for its clients. It happens when a user takes information from the server, alters it, and then sends it back to the server. This could enable the user to affect orders placed by another user, or add things to a shopping cart without paying for them. The AntiForgery method on the form and the ValidateAntiForgeryToken on the controller/action work together to make sure that the page returned to the server is the same as the one that was sent to the client.`),
    {
        "typ"       : "multiple-choice",
        "frage"     : `What roles does a CA play in a PKI? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Serves the certificate for the web server`, richtig: false, begruendung: `Incorrect: The CA does not serve the certificate; the CA validates and signs it.` },
            { id: "2", text: `Validates the company or individual purchasing the certificate`, richtig: true, begruendung: `Correct: The CA validates the company or individual.` },
            { id: "3", text: `Signs the certificate as authentic`, richtig: true, begruendung: `Correct: The CA signs the certificate.` },
            { id: "4", text: `Provides the Domain Name System (DNS) connections between the client and server`, richtig: false, begruendung: `Incorrect: The CA does not do anything with DNS.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `What are the primary differences between the AntiXSS Library and the default .NET Framework? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `The AntiXSS Library takes a blocked-list approach, whereas the .NET Framework takes an accepted-list approach.`, richtig: false, begruendung: `Incorrect: AntiXSS takes an accepted-list approach, which means only those characters that have been approved are allowed through.` },
            { id: "2", text: `The AntiXSS Library has be modified to realize performance gains.`, richtig: true, begruendung: `Correct: The AntiXSS Library is more performant than the traditional .NET Framework.` },
            { id: "3", text: `The AntiXSS Library takes an accepted-list approach, whereas the .NET Framework takes a blocked-list approach.`, richtig: true, begruendung: `Correct: AntiXSS takes an accepted-list approach, which means only those characters that have been approved are allowed through.` },
            { id: "4", text: `The AntiXSS Library offers enhanced globalization capabilities.`, richtig: true, begruendung: `Correct: AntiXSS was designed to allow additional support for globalization.` },

        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `A SQL injection attack occurs when an application allows input submitted by the client to be run as part of a SQL command. What actions should a developer take to ensure that this doesn’t happen? (Choose all that apply.)`,
        "optionen" : [
            { id: "1", text: `Use Entity SQL because it does not suffer from the same risk.`, richtig: false, begruendung: `Incorrect: Entity SQL is vulnerable to SQL injection attacks, so you would have to take the same steps to protect an application using it for the data layer.` },
            { id: "2", text: `Use SQLParameters to submit the parameters.`, richtig: true, begruendung: `Correct: Using. SQLParameters is the best way to manage this risk.` },
            { id: "3", text: `Use Linq-to-Entities to access the database,`, richtig: true, begruendung: `Correct: Linq-to-Entities uses an object model as access into the data layer, so the risk is mitigated.` },
            { id: "4", text: `Filter out keywords and symbols.`, richtig: false, begruendung: `Incorrect: This approach is dangerous because you might end up filtering out parts of the content. It is also a blocked-list approach; an accepted list is more secure.` },

        ]
    },




               
]});