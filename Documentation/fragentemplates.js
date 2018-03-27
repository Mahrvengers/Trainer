var templates = [
    {
        "typ"       : "multiple-choice",
        "frage"     : ``,
        "optionen" : [
            { id: "1", text: ``, richtig: false, begruendung: `` },
            { id: "2", text: ``, richtig: false, begruendung: `` },
            { id: "3", text: ``, richtig: false, begruendung: `` },
            { id: "4", text: ``, richtig: false, begruendung: `` },
        ]
    },
    
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : ``,
        "antwort"      : ``,
    },    
    
    Wuerfeltextaufgabe("", ""),
    
    Wortsuchaufgabe("", "", ""),
    
        Wuerfeltextaufgabe("In an ASP.NET MVC 4 Application, state can be stored in several locations, for example:", 
        "In Cache, which is a memory pool stored on the server and shared across users."),
    Wuerfeltextaufgabe("In an ASP.NET MVC 4 Application, state can be stored in several locations, for example:", 
        "In Session, which is stored on the server and unique for the user."),
    Wuerfeltextaufgabe("In an ASP.NET MVC 4 Application, state can be stored in several locations, for example:", 
        "In Cookies, which are stored on the client and passed with each HTTP request to the server."),
    Wuerfeltextaufgabe("In an ASP.NET MVC 4 Application, state can be stored in several locations, for example:", 
        "In the QueryString, which is passed as part of the complete URL string"),
    Wuerfeltextaufgabe("In an ASP.NET MVC 4 Application, state can be stored in several locations, for example:", 
        "In Context.Items, which is part of the HttpContext and lasts only the lifetime of that request."),
    Wuerfeltextaufgabe("In an ASP.NET MVC 4 Application, state can be stored in several locations, for example:", 
        "In the Profile, which is stored in a database and maintains information across multiple sessions."),
        
        
    Wortsuchaufgabe("ASP.NET life cycle events", "The first event raised; always raised when processing a request", "BeginRequest"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised when a security module has identified the user", "AuthenticateRequest"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised after the AuthenticateRequest event is raised", "PostAuthenticateRequest"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised after a security module has authorized the user", "AuthorizeRequest"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised after the AuthorizeRequest event is raised", "PostAuthorizeRequest"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised to let caching modules serve the requests", "ResolveRequestCache"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised when a caching module served the request", "PostResolveRequestCache"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised when the appropriate HttpHandler is selected", "MapRequestHandler"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised after the MapRequestHandler event is raised", "PostMapRequestHandler"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised when the current state, such as session state, is acquired", "AquireSessionState"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised after the AcquireRequestState event is raised", "PostAcquireRequestState"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised just prior to executing an event handler", "PreRequestHandlerExecute"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised when the HttpHandler has completed execution", "PostRequestHandlerExecute"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised when all request event handlers are completed", "ReleaseRequestState"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised after the PostReleaseRequestState event is raised", "PostReleaseRequestState"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised after caching modules store the response for future use", "UpdateRequestCache"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised after the UpdateRequestCache is raised", "PostUpdateRequestCache"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised just prior to logging the request", "LogRequest"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised when all LogRequest event handlers are completed", "PostLogRequest"),
    Wortsuchaufgabe("ASP.NET life cycle events", "The last event raised in the HTTP pipeline", "EndRequest"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised just before the HTTP headers are sent to the client", "PreSendRequestHeaders"),
    Wortsuchaufgabe("ASP.NET life cycle events", "Raised just before the content is sent to the client", "PreSendRequestContent"),
    
    Wuerfeltextaufgabe("MVC filter 'Authorization'", "An authorization filter implements the System.Web.Mvc.IAuthorizationFilter and makes a security-based evaluation about whether an action method should be executed, and it can perform custom authentication or other security needs and avaluations."),
    Wuerfeltextaufgabe("MVC filter 'Action'", "An Action filter implements the System.Web.Mvc.IActionFilter and enables the developer to wrap the execution of the action method. It also enables the system to perform an additional workaround, providing extra information into the action method; or it can inspect the information coming out of the action and also cancel an action methods execution."),
    Wuerfeltextaufgabe("MVC filter 'Result'", "A result filter implements the System.Web.Mvc.IResultFilter and is a wrapper around an action result. It enables the developer to do extra processing of the results from an action method."),
    Wuerfeltextaufgabe("MVC filter 'Exception'", "An exception filter implements the System.Web.Mvc.IExceptionFilter and is run when there is an unhandled exception thrown in the processing of an action method. It covers the whole lifetime of the action, from the initial authorization filters through the result filter."),
];