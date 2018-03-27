trainings.push(
    {
        name: "Programming in C#, ExamRef 70-483",
        description: "Training für den Einsatz von C# und ggf. zur Vorbereitung auf Prüfung 70-483.",

        fragen: [

    /**
     *  Chapter 1, Manage program flow
     */
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `A _ can be seen as a virtualized CPU.`,
        "antwort"      : `A thread can be seen as a virtualized CPU.`,
    },  
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `Using multiple threads can improve _ and enables you to make use of multiple _.`,
        "antwort"      : `Using multiple threads can improve responsiveness and enables you to make use of multiple processors.`,
    },  
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `The _ class can be used if you want to create your own threads explicitly. Otherwise, you can use _ to queue work and let the runtime handle things.`,
        "antwort"      : `The Thread class can be used if you want to create your own threads explicitly. Otherwise, you can use ThreadPool to queue work and let the runtime handle things.`,
    },  
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `A _ object encapsulates a job that needs to be executed. _ are the recommended way to create multithreaded code.`,
        "antwort"      : `A Task object encapsulates a job that needs to be executed. Tasks are the recommended way to create multithreaded code.`,
    }, 
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `The _ class can be used to run code in parallel.`,
        "antwort"      : `The Parallel class can be used to run code in parallel.`,
    }, 
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `_ is an extension to LINQ to run queries in parallel.`,
        "antwort"      : `PLINQ is an extension to LINQ to run queries in parallel.`,
    }, 
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `The new _ and _ operators can be used to write asynchronous code more easily.`,
        "antwort"      : `The new async and await operators can be used to write asynchronous code more easily.`,
    }, 
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `_ collections can be used to safely work with data in a multithreaded environment.`,
        "antwort"      : `Concurrent collections can be used to safely work with data in a multithreaded environment.`,
    }, 

    {
        "typ"       : "multiple-choice",
        "frage"     : `You have a lot of items that need to be processed. For each item, you need to perform a complex calculation. Which technique should you use?`,
        "optionen" : [
            { id: "1", text: `You create a Task for each item an then wait until all tasks are finished`, richtig: false, begruendung: `Manually creating and managing tasks is not necessary. The Parallel class takes care of this and uses the optimal configuration options.` },
            { id: "2", text: `You use Parallel.For to process all items concurrently.`, richtig: true, begruendung: `Parallel.For is ideal for executing parallel operations on a large set of items that have to do a lot of work.` },
            { id: "3", text: `You use async/await to process all items concurrently`, richtig: false, begruendung: `async/await does not process items concurrently. Instead it waits until the current task has finished and then continues executing the code.` },
            { id: "4", text: `You add all items to a BlockingCollection and process them on a thread created by the Thread class.`, richtig: false, begruendung: `The BlockingCollection can be used to share data between multiple threads. Using one producer and one consumer thread, however, won't improve scalability. The Parallel class is designed for this scenario and should be used.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating a complex query that doesn't require any particular order and you want to run it in parallel. Which method should you use?`,
        "optionen" : [
            { id: "1", text: `AsParallel`, richtig: true, begruendung: `AsParallel makes a sequential query parallel if the runtime thinks this will improve performance.` },
            { id: "2", text: `AsSequential`, richtig: false, begruendung: `AsSequential is used to make a parallel query sequential again.` },
            { id: "3", text: `AsOrdered`, richtig: false, begruendung: `AsOrdered is used to make sure that the results of a parallel query are returned in order.` },
            { id: "4", text: `WithDegreeOfParallelism`, richtig: false, begruendung: `WithDegreeOfParallelism is used to specify how many threads the parallel query should use.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are working on an ASP.Net application that retrieves some data from another web server and then writes the response to the database. Should you async/await?`,
        "optionen" : [
            { id: "1", text: `No, both operations depend on external factors. You need to wait before they are finished.`, richtig: false, begruendung: `Because you have to wait for external factors (the database and web response), you should use async/await to free your thread. That way your thread can do some other work while waiting for the external responses to come back.` },
            { id: "2", text: `No, in a server application you don't have to use async/await. It's only for responsiveness on the client.`, richtig: false, begruendung: `Async/await can be used to improve responsiveness on the client but it can also be used in server scenarios. Especially when waiting for an I/O-bound operation, you can use asnchronous code to free the thread from waiting.` },
            { id: "3", text: `Yes, this will free your thread to serve other requests while waiting for the I/O to complete.`, richtig: true, begruendung: `The operating system waits for the I/O request to complete and then activates a thread that can process the response. In the meantime, the thread can do other work.` },
            { id: "4", text: `Yes, this puts your thread to sleep while waiting for I/O so that it doesn't use any CPU.`, richtig: false, begruendung: `Async/await does not put your thread to sleep in an I7O-bound situation. Instead, your thread can process other work while the operating system monitors the status of the request. When the request finishes, a thread is used to process the response. With a CPU-bound operation, your thread waits for the operation to finish on another thread.` },
        ]
    },    

    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `When accessing shared data in a multithreaded environment, you need to _ access to avoid errors or corrupted data.`,
        "antwort"      : `When accessing shared data in a multithreaded environment, you need to synchronize access to avoid errors or corrupted data.`,
    }, 
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `Use the _ statement on a private object to synchronize access to a piece of code.`,
        "antwort"      : `Use the lock statement on a private object to synchronize access to a piece of code.`,
    },        
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `You can use the _ class to execute simple atomic operations.`,
        "antwort"      : `You can use the Interlocked class to execute simple atomic operations.`,
    },        
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `You can cancel tasks by using the _ class with a _.`,
        "antwort"      : `You can cancel tasks by using the CancellationTokenSource class with a CancellationToken.`,
    },           
    {
        "typ"       : "multiple-choice",
        "frage"     : `You want to synchonize access by using a lock statement. On which member do you lock?`,
        "optionen" : [
            { id: "1", text: `this`, richtig: false, begruendung: `You should never lock on this. Another part of your code may already be using your object to execute a lock.` },
            { id: "2", text: `string _lock = "mylock"`, richtig: false, begruendung: `You shouldn't use a string for locking. With string-interning, one object can be used for multiple strings, so you would be locking on an object that is also in use in other locations.` },
            { id: "3", text: `int _lock = 42;`, richtig: false, begruendung: `Locking on a value type will generate a compile error. The value type will be boxed each time you lock on it, resulting in a unique lock each time.` },
            { id: "4", text: `object _lock = new object();`, richtig: true, begruendung: `A private lock of type object is the best choice.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You need to implement cancellation for a long running task. Which object do you pass to the task?`,
        "optionen" : [
            { id: "1", text: `CancellationTokenSource`, richtig: false, begruendung: `The CancellationTokenSource is used to generate a CancellationToken. The token should be passed to the task, and the CancellationTokenSource can then be used to request cancellation on the token.` },
            { id: "2", text: `CancellationToken`, richtig: true, begruendung: `A CancellationToken generated by a CancellationTokenSource should be passed to the task.` },
            { id: "3", text: `Boolean isCancelled variable`, richtig: false, begruendung: `A Boolean variable can be used to cancel a task, but it's not the preferred way. A CancellationToken offers more flexibility and should be used.` },
            { id: "4", text: `Volatile`, richtig: false, begruendung: `The volatile keyword should be used to signal to the compiler that the order of reads and writes on a field is important and that the compiler shouldn't change it.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are implementing a state machine in a multithreaded class. You need to check what the current state is and change it to the new one on each step. Which method do you use?`,
        "optionen" : [
            { id: "1", text: `Volatile.Write(ref currentState);`, richtig: false, begruendung: `Volatile.Write is used to signal to the compiler that writing the value to a field should happen at that exact location.` },
            { id: "2", text: `Interlocked.CompareExchange(ref currentState, ref newState, expectedState)`, richtig: true, begruendung: `CompareExchange will see whether the current state is correct and it will then change it to the new state in one atomic operation.` },
            { id: "3", text: `Interlocked.Exchange(ref currentState, newState)`, richtig: false, begruendung: `Exchange only changes the value; it doesn't check to see whether the current state is correct.` },
            { id: "4", text: `Interlocked.Decrement(ref newState)`, richtig: false, begruendung: `Decrement is used to subtract one off the value in an atomic operation.` },
        ]
    },
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `Boolean expressions can use several operators: ==, !=, <, >, <=, >=, !. Those operators can be combined together by using AND (_), OR (_) and XOR (_).`,
        "antwort"      : `Boolean expressions can use several operators: ==, !=, <, >, <=, >=, !. Those operators can be combined together by using AND (&&), OR (||) and XOR (^).`,
    },        
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `You can use the _-_ statement to execute code depending on a specific condition.`,
        "antwort"      : `You can use the if-else statement to execute code depending on a specific condition.`,
    },        
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `The _ statement can be used when matching a value against a couple of options.`,
        "antwort"      : `The switch statement can be used when matching a value against a couple of options.`,
    },        
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `The _ loop can be used when iterating over a collection where you know the number of iterations in advance.`,
        "antwort"      : `The for loop can be used when iterating over a collection where you know the number of iterations in advance.`,
    },        
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `A _ loop can be used to execute some code while a condition is true; _-_ should be used when the code should be executed at least once.`,
        "antwort"      : `A while loop can be used to execute some code while a condition is true; do-while should be used when the code should be executed at least once.`,
    },    
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `_ can be used to iterate over collections.`,
        "antwort"      : `foreach can be used to iterate over collections.`,
    },        
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `Jump statements such as b_, g_ and c_ can be used to transfer control to another line of the program.`,
        "antwort"      : `Jump statements such as break, goto and continue can be used to transfer control to another line of the program.`,
    },        
    
    {
        "typ"       : "multiple-choice",
        "frage"     : `You need to iterate over a collection in which you know the number of items. You need to remove certain items from the collection. Which statement do you use?`,
        "optionen" : [
            { id: "1", text: `switch`, richtig: false, begruendung: `switch is used as a descision statement. You map a value to certain labels to execute specific code; it doesn't iterate over collections.` },
            { id: "2", text: `foreach`, richtig: false, begruendung: `Although the foreach statement can be used to iterate over a collection; it doesn't allow changes to the collection while iterating.` },
            { id: "3", text: `for`, richtig: true, begruendung: `With for, you can iterate over the collection while modifiying it. It's your own job to make sure that the index stays correct.` },
            { id: "4", text: `goto`, richtig: false, begruendung: `goto is a jump statement that should be avoided.` },
        ]
    },    
     {
        "typ"       : "multiple-choice",
        "frage"     : `You have a lot of checks in your application for null values. If a value is not null, you want to call a method on it. You want to simplify your code. Which technique do you use?`,
        "optionen" : [
            { id: "1", text: `for`, richtig: false, begruendung: `for is an iteration statement that can't be used to check for null values.` },
            { id: "2", text: `Conditional operator`, richtig: false, begruendung: `The conditional operator can be used to shorten if statements. It's not useful to conditionally call a method.` },
            { id: "3", text: `Null-coalescing operator`, richtig: false, begruendung: `The null-coalescing operator does check for null values but it's used to provide a default value. It's not useful when calling a method if the value is not null.` },
            { id: "4", text: `The short-circuiting behaviour of the and operator.`, richtig: true, begruendung: `Short-circuiting enables you to see wether a value is null and call a member on it in one and statement. If the left value is null, the right operand won't be executed.` },
        ]
    },   
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are processing some data from over the network. You use a HasNext and Read method to retrieve the data. You need to run some code on each item. What do you use?`,
        "optionen" : [
            { id: "1", text: `for`, richtig: false, begruendung: `A for statement is most useful when iterating over a collection in which you know the number of items beforehand.` },
            { id: "2", text: `foreach`, richtig: false, begruendung: `foreach can be used only on types that implement IEnumerable. It can't be easily used with your two custom methods.` },
            { id: "3", text: `while`, richtig: true, begruendung: `You can use while (o.HasNext) { var i = o.Read(); } to process the items. When o.HasNext returns false, you automatically end the loop.` },
            { id: "4", text: `do-while`, richtig: false, begruendung: `Do-while will run the code at least once. If there are no items on the network, the code doesn't have to run.` },
        ]
    },

    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `Delegates are a type that defines a _ signature and can contain a reference to a _.`,
        "antwort"      : `Delegates are a type that defines a method signature and can contain a reference to a method.`,
    },    
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `Delegates can be _, passed around, and _.`,
        "antwort"      : `Delegates can be instantiated, passed around, and invoked.`,
    },   
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `Lambda expressions, also known as _ methods, use the _ operator and form a compact way of creating inline methods.`,
        "antwort"      : `Lambda expressions, also known as anonymous methods, use the => operator and form a compact way of creating inline methods.`,
    },   
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `Events are a layer of syntactic sugar on top of delegates to easily implement the _ pattern.`,
        "antwort"      : `Events are a layer of syntactic sugar on top of delegates to easily implement the publish-subscribe pattern.`,
    },        
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `Events can be raised only from the declaring class. Users of events can only _ and _ methods the invocation list.`,
        "antwort"      : `Events can be raised only from the declaring class. Users of events can only remove and add methods the invocation list.`,
    },    
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `You can customize events by adding a custom event _ and by directly using the underlying _ type.`,
        "antwort"      : `You can customize events by adding a custom event accessor and by directly using the underlying delegate type.`,
    },    
    {
        "typ"       : "multiple-choice",
        "frage"     : `You have a private method in your class and you want to make invocation of the method possible by certain callers. What do you do?`,
        "optionen" : [
            { id: "1", text: `Make the method public.`, richtig: false, begruendung: `Making the method public gives you access to all users of your class.` },
            { id: "2", text: `Use an event so outside users can be notified when the method is executed.`, richtig: false, begruendung: `This doesn't give users of your class the ability to execute the method.` },
            { id: "3", text: `Use a method that returns a delegate to authorized callers.`, richtig: true, begruendung: `The method can see whether the caller is authorized and then return a delegate to the private method that can be invoked at will.` },
            { id: "4", text: `Declare the private method as a lambda.`, richtig: false, begruendung: `Changing the method to a lambda doesn't change the fact that outside users can't access the method.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You have declared an event on your class, and you want outside users of your class to raise this event. What do you do?`,
        "optionen" : [
            { id: "1", text: `Make the event public.`, richtig: false, begruendung: `The compiler restricts the use of events outside of the class where it's defined. They can only add and remove subscribers. Only the class itself can raise the event.` },
            { id: "2", text: `Add a public method to your class that raises the event.`, richtig: true, begruendung: `The public method can be called by outside users of your class. Internally it can raise the event.` },
            { id: "3", text: `Use a public delegate instead of an event.`, richtig: false, begruendung: `Using a delegate does allow it to be invoked from outside the class. However, you lose the protection that an event gives you. A public delegate can be completely modified by outside users without any restrictions.` },
            { id: "4", text: `Use a custom event accessor to give access to outside users.`, richtig: false, begruendung: `Canonical name (CNAME) records map an alias or nickname to the real or canonical name that might lie outside the current zone.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are using a multicast delegate with multiple subscribers. You want to make sure that all subscribers are notified, even if an exception is thrown. What do you do?`,
        "optionen" : [
            { id: "1", text: `Manually raise the events by using GetInvocationList.`, richtig: true, begruendung: `You can handle each individual error and make sure that all subscribers are called.` },
            { id: "2", text: `Wrap the raising of the event in a try/catch.`, richtig: false, begruendung: `Wrapping the raising of the event in one try/catch will still cause the invocation to stop at the first exception. Later subscribers won't be notified.` },
            { id: "3", text: `Nothing. This is the default behaviour.`, richtig: false, begruendung: `By default, the invocation of subscribers stops when the first unhandled exception happens in one of the subscribers.` },
            { id: "4", text: `Let subscribers return true or false instead of throwing an exception.`, richtig: false, begruendung: `Exceptions are the preferred way of dealing with errors. Returning a value from each event still requires you to invoke them manually one by one to check the return value.` },
        ]
    },    

    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `In the .NET Framework, you should use _ to report errors instead of error codes.`,
        "antwort"      : `In the .NET Framework, you should use exceptions to report errors instead of error codes.`,
    },      
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `_ are objects that contain data about the reason for the exception.`,
        "antwort"      : `Exceptions are objects that contain data about the reason for the exception.`,
    },  
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `You can use a _ block to specify code that should always run after, whether or not an _ occurred.`,
        "antwort"      : `You can use a finally block to specify code that should always run after, whether or not an exception occurred.`,
    },  
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `You can use the _ keyword to raise an exception.`,
        "antwort"      : `You can use the throw keyword to raise an exception.`,
    },   
    {
        "typ"          : "text",
        "frage"        : ``,
        "antwort-init" : `You can define your own custom _ when you are sure that users of your code will handle it in a different way. Otherwise, you should use the standard .Net Framework _.`,
        "antwort"      : `You can define your own custom exceptions when you are sure that users of your code will handle it in a different way. Otherwise, you should use the standard .Net Framework Exceptions.`,
    },   

    {
        "typ"       : "multiple-choice",
        "frage"     : `You are checking the arguments of your method for illegal null values. If you encounter a null value, which exception do you throw?`,
        "optionen" : [
            { id: "1", text: `ArgumentException`, richtig: false, begruendung: `Although the exception has to do with an agument to your method, you should throw the more specialized ArgumentNullException.` },
            { id: "2", text: `InvalidOperationException`, richtig: false, begruendung: `InvalidOperationException should be used when your class is not in the correct state to handle a request.` },
            { id: "3", text: `NullReferenceException`, richtig: false, begruendung: `NullReferenceException is thrown by the runtime when you try to reference a null value.` },
            { id: "4", text: `ArgumentNullException`, richtig: true, begruendung: `ArgumentNullException is the most specialized exception that you can use to tell which argument was null and what you expect.` },
        ]
    },                
    {
        "typ"       : "multiple-choice",
        "frage"     : `Your code catches an IOException when a file cannot be accessed. You want to give more information to the caller of your code. What do you do?`,
        "optionen" : [
            { id: "1", text: `Change the message of the exception and rethrow the exception.`, richtig: false, begruendung: `The Message property of an exception is read-only. You can't change it after the exception is created.` },
            { id: "2", text: `Throw a new exception with extra information that has the IOException as InnerException.`, richtig: true, begruendung: `THe new exception can contain extra info. Setting the InnerException makes sure that the original exception stays available.` },
            { id: "3", text: `Throw a new exception with more detailed info.`, richtig: false, begruendung: `Throwing a brand-new exception loses the original exception and the information that it had.` },
            { id: "4", text: `Use throw to rethrow the exception and save the call stack.`, richtig: false, begruendung: `Using throw without an identifier will rethrow the original exception while maintaining the stack trace, but it won't add any extra information.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating a custom exception called LogonFailedException. Which constructors should you at least add?`,
        "optionen" : [
            { id: "1", text: `LogonFailedException()`, richtig: true, begruendung: `You should always add a default empty constructor.` },
            { id: "2", text: `LogonFailedException(string message)`, richtig: true, begruendung: `A second constructor should take a descriptive message of why the error occurred.` },
            { id: "3", text: `LogonFailedException(string message, Exception innerException)`, richtig: true, begruendung: `An InnerException can be set to correlate two exceptions and show whet the original error was.` },
            { id: "4", text: `LogonFailed(Exception(Exception innerException)`, richtig: false, begruendung: `You don't have to define a constuctor that only takes an InnerException without a message.` },
        ]
    },

    /* Chapter 2: Create and use types */

    Wuerfeltextaufgabe("Single responsibility principle", "A class should have only one responsibility. For example, a class shouldn't be both responsible for saving itself to the database and for displaying to the user."),
    Wuerfeltextaufgabe(`Open/closed principle`, `An object should be open for extension but closed for modification. For example, by using a common interface, new objects can integrate with existing code without modifying the existing code.`),
    Wuerfeltextaufgabe(`Liskov substitution principle`,`A base type should be replaceable with subtypes in each and every situation. For example, a Duck can swim and an inherited ElectricDuck that can swim only if the batteries are full. Suddenly, code needs to check whether the Duck is an ElectricDuck to replace empty batteries.`),
    Wuerfeltextaufgabe(`Interface segregation principle`, `Use client-specific interfaces instead of one general interface. A user of an interface should not have to implement all kinds of methods that he doesn't use.`),
    Wuerfeltextaufgabe(`Dependency Inversion principle`, `Depend upon abstractions, not concretions. For example, when you use SomeServiceType inside your class, you shouldn't depend on the actual implementation of SomeServiceType. Instead you should depend on an interface or abstract class. This way, you are less coupled to the actual implementation.`),
    Wuerfeltextaufgabe("", `Types in C# can be a value or a reference type.`),
    Wuerfeltextaufgabe("", `Generic types use a type parameter to make the code more flexible.`),
    Wuerfeltextaufgabe("", `Constructors, methods, properties, fields, and indexer properties can be used to create a type.`),
    Wuerfeltextaufgabe("", `Optional and named parameters can be used when creating and calling methods.`),
    Wuerfeltextaufgabe("", `Overloading methods enable a method to accept different parameters.`),
    Wuerfeltextaufgabe("", `Extension methods can be used to add new functionality to an existing type.`),
    Wuerfeltextaufgabe("", `Overriding enables you to redefine functionality from a base class in a derived class.`),
     
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating a new collection type and you want to make sure the elements in it can be easily accessed. What should you add to the type?`,
        "optionen" : [
            { id: "1", text: `Constructor`, richtig: false, begruendung: `A constructor is used to create an instance of a new type.` },
            { id: "2", text: `Indexer property`, richtig: true, begruendung: `An indexer property enables the user of the type to easily access a type that represents an array-like collection.` },
            { id: "3", text: `Generic type parameter`, richtig: false, begruendung: `Making the type generic enables you to store multiple different types inside your collection.` },
            { id: "4", text: `Static property`, richtig: false, begruendung: `` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating a generic class that should work only with reference types. Which type constraint should you add?`,
        "optionen" : [
            { id: "1", text: `where T : class`, richtig: true, begruendung: `Constraining your generic type parameter to class allows the class to be used only with a reference type.` },
            { id: "2", text: `where T : struct`, richtig: false, begruendung: `This will constrain the class to be used with a value type, not a reference type.` },
            { id: "3", text: `where T : new()`, richtig: false, begruendung: `This will constrain the class to be used with a type that has an empty default constructor. It can be both a value and a reference type.` },
            { id: "4", text: `where T : IDisposable`, richtig: false, begruendung: `This constrains the class to be used with a type that implements the IDisposable interface.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You pass a struct variable into a method as an argument. THe method changes the variable; however, when the method returns, the variable has not changed. What happened?`,
        "optionen" : [
            { id: "1", text: `The variable was not initialized before it was passed in.`, richtig: false, begruendung: `Passing a noninitialized struct will result in a compile error of using an unassigned local variable.` },
            { id: "2", text: `A value type cannot be changed inside a method.`, richtig: false, begruendung: `A struct can be changed inside a method. It won't change the original struct that was passed in, however.` },
            { id: "3", text: `Passing a value type makes a copy of the data. The original wasn't changed.`, richtig: true, begruendung: `Passing a struct will make a copy of the data. The copy can be changed, the original won't change with it.` },
            { id: "4", text: `The method didn't return the changes.`, richtig: false, begruendung: `With a reference type, the method can make changes that will reflect on the original. Beachause a value type is copied, it won't change the original. Returning the changes from the method will again create a new instance that will overwrite the original.` },
        ]
    },
    
    Wuerfeltextaufgabe("", "Boxing occurs when a value type is treted as a reference type."),
    Wuerfeltextaufgabe("", "When converting between types, you can have an implicit or an explicit conversion."),
    Wuerfeltextaufgabe("", "An explicit conversion is called casting and requires special syntax."),
    Wuerfeltextaufgabe("", "You can create your own implicit and explicit user-defined conversions."),
    Wuerfeltextaufgabe("", "The .NET Framework offers several helper methods for converting types."),
    Wuerfeltextaufgabe("", "The dynamic keyword can be used to ease the static typing of C# and to improve interoperability with other languages."),

    {
        "typ"       : "multiple-choice",
        "frage"     : `Your are creating a custom Distance class. You want to ease the conversion from your Distance class to a double. What should you add?`,
        "optionen" : [
            { id: "1", text: `Nothing; this is already possible.`, richtig: false, begruendung: `A conversion between a custom class and a value type does not exist by default.` },
            { id: "2", text: `An implicit cast operator.`, richtig: true, begruendung: `Adding an implicit operator will enable users of your class to convert between Distance and double without any extra work.` },
            { id: "3", text: `An explicit cast operator.`, richtig: false, begruendung: `Although adding an explicit cast operator will enable users of the class to convert from Distance to double, they will still need to explicitly cast it.` },
            { id: "4", text: `A static Parse method.`, richtig: false, begruendung: `A Parse method is used when converting a string to a type. It doesn't add conversions from your type to another type.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You want to determine whether the value of an object reference is derived from a particular type. Which C# language feature can you use?`,
        "optionen" : [
            { id: "1", text: `An as operator`, richtig: true, begruendung: `The as operator will return null if the conversion failed. If it succeeds, it will return the converted object. Seeing wether the result is null enables you to check for a valid conversion.` },
            { id: "2", text: `An implicit cast`, richtig: false, begruendung: `Implicitly casting something of type object to another type is not possible. It would require an explicit class.` },
            { id: "3", text: `An is operator`, richtig: true, begruendung: `The is keyword will see wether a type is derived from another type.` },
            { id: "4", text: `A dynamic keyword`, richtig: false, begruendung: `The dynamic keyword can be used when you want weakly typing. It will still throw errors at runtime if an action is not possible.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `Your are using an ArrayList as a collection for a list of Points, which are a custom struct. You are experiencing performance problems when working with a large amount of Points. What do you have to do?`,
        "optionen" : [
            { id: "1", text: `Use a generic collection instead of ArrayList.`, richtig: true, begruendung: `Using a generic collection will eliminate the need to box and unbox values. This will improve performance, especially when working with a large number of items.` },
            { id: "2", text: `Change Point to be a reference type.`, richtig: false, begruendung: `Changing Point to be a reference type could increase memory usage. You will still have to convert from object to Point when using the nongeneric ArrayList.` },
            { id: "3", text: `Add an implicit conversion from Point to object.`, richtig: false, begruendung: `Point is a struct that inherits from System.ValueType, which in turn inherits from System.Object. The implicit conversion is already present; adding it won't improve performance.` },
            { id: "4", text: `Make the collection of type dynamic.`, richtig: false, begruendung: `Making the collection dynamic will loosen compile-time checking. It won't improve performance because the runtime has to do extra work.` },
        ]
    },


    Wuerfeltextaufgabe("", "Encapsulation is important in object-oriented software. It hides internal details and improves the usability of a type."),
    Wuerfeltextaufgabe("", "Data can be encapsulated with a property."),
    Wuerfeltextaufgabe("", "Properties can have both a get and a set accessor that can run additional code, commonly known as getters and setters."),
    Wuerfeltextaufgabe("", "Types and type elements can have access modifiers to restrict accessability."),
    Wuerfeltextaufgabe("", "The access modifiers are public, internal, protected, protected internal, and private."),
    Wuerfeltextaufgabe("", "Explicit interface implementation can be used to hide information or to implement interfaces with duplicate member signatures."),
   
    {
        "typ"       : "multiple-choice",
        "frage"     : `What access modifier should you use to make sure that a method in a class can only be accessed inside the same assembly by derived types?`,
        "optionen" : [
            { id: "1", text: `Make the class public and its members public.`, richtig: false, begruendung: `A public class with public members can be accessed from other assemblies without any restrictions.` },
            { id: "2", text: `Make the class public and its members protected.`, richtig: false, begruendung: `Types in other assemblies can derive from the class and access the protected methods.` },
            { id: "3", text: `Make the class internal and its members internal.`, richtig: false, begruendung: `Types in other assemblies cannot derive from the class, but other types in the same assembly can access the method.` },
            { id: "4", text: `Make the class internal and its members protected.`, richtig: true, begruendung: `An internal class cannot be accessed outside of its assembly. The protected methods can be accessed only by derived types.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You need to explose some data from a class. The data can be read by other types but can be changed only by derived types. What should you use?`,
        "optionen" : [
            { id: "1", text: `A protected field`, richtig: false, begruendung: `A protected field cannot be read by other types outside of the class.` },
            { id: "2", text: `A public property with a protected set modifier`, richtig: true, begruendung: `A public protperty can be read by all other types. The protected set modifier restricts changes to derived types.` },
            { id: "3", text: `A protected property`, richtig: false, begruendung: `A protected property cannot be read by other types outside of the class.` },
            { id: "4", text: `A protected property with a public get modifier`, richtig: false, begruendung: `This will generate a compile error because the accessibility modifier of the get accessor must be more restrictive than the property. Public is less restrictive than protected.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You have a class that implements two interfaces that both have a method with the same name. Interface IA should be the default implementation. Interface IB should be used only in special situations. How to you implement those interfaces?`,
        "optionen" : [
            { id: "1", text: `Implement IA implicitly and IB explicitly`, richtig: true, begruendung: `Implementing IA implicitly will make this the default implementation. When dealing with a reference to the class, this method will be invoked. Implementing IB explicitly will invoke the implementation for IB when dealing with a reference to the IB interface.` },
            { id: "2", text: `Implement both IA and IB explicitly`, richtig: false, begruendung: `When both IA and IB are implemented explicitly, you need to cast a reference to the class to one or both interface types to invoke the method.` },
            { id: "3", text: `Implement both IA and IB implicitly`, richtig: false, begruendung: `Implementing both IA and IB implicitly won't allow for a different implementation for IB.` },
            { id: "4", text: `Implement IA explicitly and IB implicitly`, richtig: false, begruendung: `Implementing IB implicitly makes IB the default implementation instead of IA.` },
        ]
    },

    Wuerfeltextaufgabe("", `Inheritance is the process in which a class is derived from another class or from an interface.`),
    Wuerfeltextaufgabe("", `An interface specifies the public elements that a type must implement.`),
    Wuerfeltextaufgabe("", `A class can implement multiple interfaces.`),
    Wuerfeltextaufgabe("", `A base class can mark methods as virtual; a derived class can then override those methods to add or replace behaviour.`),
    Wuerfeltextaufgabe("", `A class can be marked as abstract so it can't be instantiated and can function only as a base class.`),
    Wuerfeltextaufgabe("", `A class can be marked as sealed so it can't be inherited.`),
    Wuerfeltextaufgabe("", `The .Net Framework offers default interfaces such as IComparable. IEnumerable. IDisposable and IUnknown.`),

    {
        "typ"       : "multiple-choice",
        "frage"     : `You want to create a hierarchy of types because you have some implementation code you want to share between all types. You also have some method signatures you want to share. What should you use?`,
        "optionen" : [
            { id: "1", text: `An interface`, richtig: false, begruendung: `An interace won't let you share any implementation code, only the public member signatures.` },
            { id: "2", text: `A class with virtual methods`, richtig: false, begruendung: `A class requires you to have an implementation for every member. It doesn't give you the option to only declare a member signature.` },
            { id: "3", text: `An abstract class`, richtig: true, begruendung: `An abstract class enables you to share both implemented methods and method signatures that a derived class needs to implement.` },
            { id: "4", text: `A sealed class`, richtig: false, begruendung: `A sealed class can't be inherited.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You want to create a type that can be easily sorted. Which interface should you implement?`,
        "optionen" : [
            { id: "1", text: `IEnumerable`, richtig: false, begruendung: `IEnumerable shoud be implemented on collection-like types so they can be easily iterated over.` },
            { id: "2", text: `IComparable`, richtig: true, begruendung: `IComparable enables objects to be compared to each other. It returns an integer value that represents the relative position as smaller than 0, 0 or larger than 0.` },
            { id: "3", text: `IDisposable`, richtig: false, begruendung: `IDisposable should be implemented on types that access unmanaged resources and that need to release them.` },
            { id: "4", text: `IUnknown`, richtig: false, begruendung: `IUnknown is used only when working with the COM.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You want to inherit from an existing class and add some behavior to a method. Which steps do you have to take?`,
        "optionen" : [
            { id: "1", text: `Use the abstract keyword on the base type.`, richtig: false, begruendung: `When you mark the base type as abstract, you can't create an instance of it. You can't use both the base and the derived type as concrete types in your code.` },
            { id: "2", text: `Use the virtual keyword on the base method.`, richtig: false, begruendung: `Marking the method in the base class as virtual enables it to be overridden by derived classes.` },
            { id: "3", text: `Use the new keyword on the derived method.`, richtig: false, begruendung: `The new keyword hides the method in the base class. You shouldn't use it when you want to extend the behaviour from the base class.` },
            { id: "4", text: `Use the override keyword on the derived method.`, richtig: true, begruendung: `The override keyword enables you to override a method marked as virtual in a base class.` },
        ]
    }, 
 
    Wuerfeltextaufgabe("", `A C# assembly stores both code and metadata.`),
    Wuerfeltextaufgabe("", `Attributes are a type of metadata that can be applied in code and queried at runtime.`),
    Wuerfeltextaufgabe("", `Reflection is the process of inspecting the metadata of a C# application.`),
    Wuerfeltextaufgabe("", `Through reflection you can create types, call methods, read properties, and so forth.`),
    Wuerfeltextaufgabe("", `The CodeDOM canbe used to create a compilation unit and runtime. It can be compiled or converted to a source file.`),
    Wuerfeltextaufgabe("", `Expression trees describe a piece of code. They can be translated to something else (for example, SQL) or they can be compiled and executed.`),
    
    {
        "typ"       : "multiple-choice",
        "frage"     : `You want to read the value of a private field on a class. Which BindingFlags do you need?`,
        "optionen" : [
            { id: "1", text: `Instance`, richtig: true, begruendung: `The field is a nonstatic instance field.` },
            { id: "2", text: `DeclaredOnly`, richtig: false, begruendung: `DeclaredOnly is used when you don't want to include inherited members.` },
            { id: "3", text: `Static`, richtig: false, begruendung: `The field is not static; it's a per-instance field.` },
            { id: "4", text: `NonPublic`, richtig: true, begruendung: `Nonpublic is necessary because the field is private.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You need to create an attribute that can be applied multiple times on a method or a parameter. Which syntax should you use?`,
        "optionen" : [
            { id: "1", text: `[AttributeUsage(AttributeTargets.GenericParameter | AttributeTargets.Method.AllowMultiple = true)]`, richtig: false, begruendung: `The AttributeTargets.GenericParameter can be applied to generic parameters. It's not used for regular method arguments.` },
            { id: "2", text: `[AttributeUsage(AttributeTargets.Method | AttributeTargets.Parameter, AllowMultiple = true)]`, richtig: true, begruendung: `The Attribute targets both Methods and Parameters. It can also be applied multiple times.` },
            { id: "3", text: `[AttributeUsage(AttributeTargets.All)]`, richtig: false, begruendung: `With AttributeTargets.All, the attribute can be applied to all types. It also can't be applied multiple times.` },
            { id: "4", text: `[AttributeUsage(AttributeTargets.Method | AttributeTargets.Parameter)]`, richtig: false, begruendung: `Because AllowMultiple is false by deafult, this attribute can't be applied multiple times.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You want to create a delegate that can filter a list of strings on a specific value. Which type should you use?`,
        "optionen" : [
            { id: "1", text: `Action<bool, IEnumerable<string>>`, richtig: false, begruendung: `An Action doesn't return a value. It also takes a Boolean input instead of the list of strings and the filter value.` },
            { id: "2", text: `Func<IEnumerable<string>, IEnumerable<string>>`, richtig: false, begruendung: `This delegate doesn't have a parameter for the value to filter on.` },
            { id: "3", text: `Func<string, IEnumerable<string>, IEnumerable<string>>`, richtig: true, begruendung: `It takes both the input list and the value to filter on and returns the filtered list.` },
            { id: "4", text: `Func<IEnumerable<string>>`, richtig: false, begruendung: `This returns only a list of strings. It doesn't have an argument for the filter parameter or the original list.` },
        ]
    }, 
 
    Wuerfeltextaufgabe("", `Memory in C# consists of both the stack and the heap.`),
    Wuerfeltextaufgabe("", `The heap is managed by the garbage collector.`),
    Wuerfeltextaufgabe("", `The garbage collector frees any memory that is not referenced any mode.`),
    Wuerfeltextaufgabe("", `A finalizer is a special piece of code that's run by the garbage collector when it removes an object.`),
    Wuerfeltextaufgabe("", `IDisposable can be implemented to free any unmanaged resources in a deterministic way.`),
    Wuerfeltextaufgabe("", `Objects implementing IDisposable can be used with a using statement to make sure they are always freed.`),
    Wuerfeltextaufgabe("", `A WeakReference can be used to maintain a reference to items that can be garbage collected when necessary.`),

     {
        "typ"       : "multiple-choice",
        "frage"     : `You are about to execute a piece of code that is performance-sensitive. You are afraid that a garbage collection will occur during the execution of this code. Which method should you call before executing your code?`,
        "optionen" : [
            { id: "1", text: `GC.RemoveMemoryPressure()`, richtig: false, begruendung: `RemoveMemoryPressure should be called only after calling AddMemoryPressure to inform the runtime that a managed object uses a large mount of unmanaged memory.` },
            { id: "2", text: `GC.SuppressFinalize()`, richtig: false, begruendung: `SuppressFinalize should be called in the Dispose mthod of an object to inform the runtime that the object doesn't need to be finalized any more.` },
            { id: "3", text: `GC.Collect()`, richtig: true, begruendung: `Collect will execute a garbage collection, freeing as much memory as possible at that time, which can be a very expensive process. This won't prevent the garbage collector from executing during your time-sensitive code, but it will make it less likely to happen.` },
            { id: "4", text: `GC.WaitForPendingFinalizers()`, richtig: false, begruendung: `WaitForPendingFinalizers suspends the current thread so all finalizers that are on the finalizeation queue can run. This will free some memory (vor all objects that are waiting for finalization). Normally, however, you call this code after calling Collect if you want to make sure that all finalizers have run.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `An object that is implementing IDisposable is passed to your class as an argument. Should you wrap the element in a using statement?`,
        "optionen" : [
            { id: "1", text: `Yes otherwise a memory leak could happen.`, richtig: false, begruendung: `A memory leak won't happen because the finalizer of the class will eventually execute and dispose of the element. Disposing of the object in your method will cause an ObjectDisposedException to be thrown in other code that uses the object.` },
            { id: "2", text: `No, you should call Close on the object.`, richtig: false, begruendung: `The Close method is sometimes used as a secondary method that internally calls Dispose. It's implemented on types such as File. The same reasoning applies as with answer A.` },
            { id: "3", text: `No, you should use a try/finally statement and call Dispose yourself.`, richtig: false, begruendung: `A using statement is equivalent to a try/finally statement with a Dispose call. However, you don't want to dispose of the item because the calling code could depend on the object being in a usable state.` },
            { id: "4", text: `No, the calling method should use a using statement.`, richtig: true, begruendung: `The calling code knows what the lifetime of the object should be and should decide when to dispose of the object.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `Your application is using a lot of memory. Which solution should you use?`,
        "optionen" : [
            { id: "1", text: `Turn all references into WeakReferences.`, richtig: false, begruendung: `A WeakReference is not an equivalent to an efficient caching strategy. Turning all items into WeakReferences will complicate your code (you have to see whether the memory is cleared). It could potentially increase your memory usage because the WeakReference itself also takes up memory.` },
            { id: "2", text: `Set all references to null when you are done with them.`, richtig: false, begruendung: `Setting references to null is optimized away by the compiler. Unlike some other languages, it doesn't explicitly free any memory.` },
            { id: "3", text: `Use a caching algorithm to decide which objects can be freed.`, richtig: true, begruendung: `A caching strategy is the best solution. You can decide whether you want to free memory based on usage, a timestamp, or some other criteria.` },
            { id: "4", text: `Use a background thread to call GC.Collect() on a scheduled interval.`, richtig: false, begruendung: `Calling GC.Collect on a scheduled interval won't improve your memory usage. Memory is freed only when there are no root references to an object. GC.Collect will stall your execution thread, making things slower, while not freeing any more memory than waiting for a regular Collect to take place.` },
        ]
    },
 
    Wuerfeltextaufgabe("", `A string is an immutable reference type.`),
    Wuerfeltextaufgabe("", `When doing a lot of string manipulations, you should use a StringBuilder.`),
    Wuerfeltextaufgabe("", `The String class offers a lot of methods for dealing with strings like IndexOf, LastIndexOf, StartsWith, EndsWith, and Substring.`),
    Wuerfeltextaufgabe("", `Strings can be enumerated as a collection of characters.`),
    Wuerfeltextaufgabe("", `Formatting is the process of displaying an object as a string.`),
    Wuerfeltextaufgabe("", `You can use format strings to change how an object is converted to a string.`),
    Wuerfeltextaufgabe("", `You can implement formatting for your own types.`),
    
     {
        "typ"       : "multiple-choice",
        "frage"     : `You want to display only the date portion of a DateTime according to the French culture. What method should you use?`,
        "optionen" : [
            { id: "1", text: `dt.ToString(new CultureInfo("fr-FR"))`, richtig: false, begruendung: `Only specifying the culture will give you the full date and time.` },
            { id: "2", text: `dt.ToString("M", new CultureInfo("fr-FR"))`, richtig: false, begruendung: `Specifying "M" as the format string results in "22 avril" without the year.` },
            { id: "3", text: `dt.ToString("d")`, richtig: false, begruendung: `This will give the date in the correct format, but not with the French culture.` },
            { id: "4", text: `dt.ToString("d", new CultureInfo("ft-FR"))`, richtig: true, begruendung: `This will give the date in the correct French format.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You want your type to be able to be converted from string. Which interface should you implement?`,
        "optionen" : [
            { id: "1", text: `IFormattable`, richtig: true, begruendung: `IFormattable provides the functionality to format the value of an object into a string representation. It is also used by the Convert class to do the opposite.` },
            { id: "2", text: `IFormatProvider`, richtig: false, begruendung: `IFormatProvider is used to retrieve an object that controls formatting, not the actual formatting.` },
            { id: "3", text: `IComparable`, richtig: false, begruendung: `IComparable is used to sort items.` },
            { id: "4", text: `IConvertible`, richtig: false, begruendung: `IConvertible defines methods to convert a type to an equivalent CLR type.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You are parsing a large pieve of text to replace values based on some complex algorithm. Which class should you use?`,
        "optionen" : [
            { id: "1", text: `StringReader`, richtig: false, begruendung: `StringReader is an adapter of the StringBuilder class so that it can be used in places where a TextReader is required.` },
            { id: "2", text: `StringBuilder`, richtig: true, begruendung: `The StringBuilder class is most efficient when changing large amounts of strings.` },
            { id: "3", text: `StringWriter`, richtig: false, begruendung: `The StringWriter is used in places where a TextWriter is required. It's an adapter of the StringBuilder.` },
            { id: "4", text: `String`, richtig: false, begruendung: `The regular String class is immutable, so it's not efficient to use when changing large amounts of strings.` },
        ]
    },

    /** Chapter 3 */

    Wuerfeltextaufgabe("Entity integrity", "States that each entity (a record in a database) should be uniquely identifiable. In a database, this is achieved by using a primary key column. A primary key uniquely identifies each row of data. It can be generated by the database or by your application."),
    Wuerfeltextaufgabe("Domain integrity", "Refers to the validity of the data that an entity contains. THis can be about the type of data and the possible values that are allowed (a valid postal code, a number within a certain range, or a default value, for example)."),
    Wuerfeltextaufgabe("Referential integrity", "The relationship that entities have with each other, such as the relationship between an order and a customer."),
    Wuerfeltextaufgabe("User-defined integrity", "Comprises specific business rules that you need to enforce. A business rule for a web shop might involve a new customer who is not allowed to place an order above a certain dollar amount."),
    
    Wuerfeltextaufgabe("", "Validating application input is important to protect your application against both mistakes and attacks."),
    Wuerfeltextaufgabe("", "Data integrity should be managed both by your application and your data store."),
    Wuerfeltextaufgabe("", "The Parse, TryParse, and Convert functions can be used to convert between types."),
    Wuerfeltextaufgabe("", "Regular expressions, or regex, can be used to match input against a specified pattern or replace specified characters with other values."),
    Wuerfeltextaufgabe("", "When receiving JSON and XML files, it's important to validate them using the built-in types, such as with JavaScriptSerializer and XML Schemas."),

    {
        "typ"       : "multiple-choice",
        "frage"     : `A user needs to enter a DateTime text field. You need to parse the value in code. Which method do you use?`,
        "optionen" : [
            { id: "1", text: `DateTime.Parse`, richtig: false, begruendung: `Parse will throw an exception when the user enters an invalid date, which is not uncommon.` },
            { id: "2", text: `DateTime.TryParse`, richtig: true, begruendung: `TryParse will see whether the entered value is a valid date. If not, it will return gracefully instead of throwing an exception.` },
            { id: "3", text: `Convert.ToDateTime`, richtig: false, begruendung: `Convert.ToDateTime uses Parse internally. This will throw an exception when entered data is in the wrong format.` },
            { id: "4", text: `Regex.Match`, richtig: false, begruendung: `RegEx.Match can be used to see whether the input date is a valid date. It can't convert the input string to a DateTime object.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are working on a globalized web application. You need to parse a text field where the user enters an amount of money. Which method do you use?`,
        "optionen" : [
            { id: "1", text: `int.TryParse(value, NumberStyles.Currency, UICulture)`, richtig: false, begruendung: `Money should not be stored in an integer because it can't store decimal numbers.` },
            { id: "2", text: `decimal.TryParse(value, NumberStyles.Currency, UICulture);`, richtig: true, begruendung: `You need to specify the NumberStyles.Currency and the culture that the user is using to parse the DateTime correctly.` },
            { id: "3", text: `decimal.TryParse(value, ServerCulture);`, richtig: false, begruendung: `Using the server culture doesn't account for the differences in user culture. You also need the NumberStyles.Currency parameter to make sure the user can enter a currency symbol.` },
            { id: "4", text: `decimal.TrypParse(value)`, richtig: false, begruendung: `Leaving off the culture defaults to the culture of the operating system. YOu also need the NumberStyles.Currency parameter to make sure the user can enter a currency symbol.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You need to validate an XML file. What do you use?`,
        "optionen" : [
            { id: "1", text: `JavaScriptSerializer`, richtig: false, begruendung: `The JavaScriptSerializer is used to serialize and deserialize objects to and from JSON. THis is primarily used in communication with web browsers or other HTTP-based services.` },
            { id: "2", text: `RegEx`, richtig: false, begruendung: `RegEx can be used to do pattern matching on text. For example, you can use RegEx to check whether an email address is in a valid form. Using RegEx to validate a whole XML document is extremely difficult to impossible.` },
            { id: "3", text: `StringBuilder`, richtig: false, begruendung: `A StringBuilder is used to dynamically construct a string in an efficient way. It's not used for XML validation.` },
            { id: "4", text: `XSD`, richtig: true, begruendung: `XSD is an XML Schema Definition. An XSD describes the format of an XML document. It states the elements and attributes that are allowed and the overall structure of the XML document. An XSD can then be used to verify whether an XML document follows these rules.` },
        ]
    },    

    Wuerfeltextaufgabe("", "A symmetric algorithm uses the same key to encrypt and decrypt data."),
    Wuerfeltextaufgabe("", "An asymmetric algorithm uses a public and private key that are mathematically linked."),
    Wuerfeltextaufgabe("", "Hashing is the process of converting a large amount of data to a smaller hash code."),
    Wuerfeltextaufgabe("", "Digital certificates can be used to verify the authenticity of an author."),
    Wuerfeltextaufgabe("", "CAS are used to restrict the resources and operations an application can access and execute."),
    Wuerfeltextaufgabe("", "System.Security.SecureString can be used to keep sensitive string data in memory."),

    {
        "typ"       : "multiple-choice",
        "frage"     : `Bob and Alice are using an asymmetric algorithm to exchange data. Which key should they send to the other party to make this possible?`,
        "optionen" : [
            { id: "1", text: `Bob sends Alice his private key, and Alice sends Bob her public key.`, richtig: false, begruendung: `The private key should always be kept confidential.` },
            { id: "2", text: `Bob sends Alice his private key, and Alice sends Bob her private key.`, richtig: false, begruendung: `The private key should always be kept confidential.` },
            { id: "3", text: `Bob sends Alice his public key, and Alice sends Bob her public key.`, richtig: true, begruendung: `By sending each other their public key, they can then encrypt data with the other party's public key to send them data.` },
            { id: "4", text: `Bob sends Alice his public key, and Alice sends Bob her private key.`, richtig: false, begruendung: `The private key should always be kept confidential.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You need to encrypt a large amount of data. Which algorithm do you use?`,
        "optionen" : [
            { id: "1", text: `SHA256`, richtig: false, begruendung: `SHA256 is a hashing algorithm. It can't be used to encrypt data.` },
            { id: "2", text: `RSACryptoServiceProvider`, richtig: false, begruendung: `RSACryptoServiceProvider is an asymmetric encryption algorithm. Asymmetric algorithms are not suited for encrypting large amounts of data.` },
            { id: "3", text: `MD5CryptoServiceProvider`, richtig: false, begruendung: `MD5CryptoServiceProvider is a hashing algorithm. It can't be used to encrypt data.` },
            { id: "4", text: `AesManaged`, richtig: true, begruendung: `AesManaged is a symmetric algorithm that can be used to encrypt large amounts of data.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You need to send sensitive data to another party and you want to make sure that no one tampers with the data. Which method do you use?`,
        "optionen" : [
            { id: "1", text: `X509Certificate2.SignHash`, richtig: true, begruendung: `Using the digital certificate X509 can be used to sign hashed data. If the other party uses the verify method, it can check that the hash hasn't changed.` },
            { id: "2", text: `RSACryptoServiceProvider.Encrypt`, richtig: false, begruendung: `This method encrypts the data with an asymmetric algorithm. It doesn't ensure that the data hasn't been tampered with.` },
            { id: "3", text: `UnicodeEncoding.GetBytes`, richtig: true, begruendung: `UnicodeEncoding.GetBytes converts a string to a byte sequence. It doesn't protect the data in any way.` },
            { id: "4", text: `Marshal.ZeroFreeBSTR`, richtig: false, begruendung: `The Marshal class should be used when working with System.SecureString. The ZeroFreeBSTR method can be used to zero out an area of memory that contained an insecure string.` },
        ]
    },
    
    Wuerfeltextaufgabe("Strong names guarantee uniqueness.", "Your unique private key is used to generate the name for your assembly. No other assembly can have the exact same strong name."),    
    Wuerfeltextaufgabe("Strong names protect your versioning lineage.", "Because you control the private key, you are the only one who can distribute updates to your assemblies. Users can be sure that the new version originates from the same publisher."),    
    Wuerfeltextaufgabe("Strong names provide a strong integrity check.", "The .Net Framework sees whether a strong-named assembly has changed since the moment it was signed."),    
     
     
    Wuerfeltextaufgabe("", "An assembly is a compiled unit of code that contains metadata."),    
    Wuerfeltextaufgabe("", "An assembly can be strongly signed to make sure that no one can tamper with the content."),    
    Wuerfeltextaufgabe("", "Signed assemblies can be put in the GAC."),    
    Wuerfeltextaufgabe("", "An assembly can be versioned, and applciations will use the assembly version they where developed with. It's possible to use configuration files to change these bindings."),    
    Wuerfeltextaufgabe("", "A WinMD assembly is a special type of assembly that is used by WinRT to map non-native languages to the native WinRT components."),
    
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are building a strong-named assembly and you want to reference a regular assembly to reuse some code you built. What do you have to do?`,
        "optionen" : [
            { id: "1", text: `You first need to put the assembly in the GAC.`, richtig: false, begruendung: `An assembly in the GAC needs to be strongly named. Your assembly still won't be able to reference the nonsigned assembly.` },
            { id: "2", text: `Nothing. Referencing another assembly to use some code is always possible.`, richtig: false, begruendung: `A strong-named assembly cannot reference a non-strong-named assembly.` },
            { id: "3", text: `You need to sign the other assembly before using it.`, richtig: true, begruendung: `You need to strongly name the other assembly before you can reference it.` },
            { id: "4", text: `You need to use the public key token of the other assembly to reference it.`, richtig: false, begruendung: `The public key token is part of the manifest of a strong-named assembly. The non-strong-named assembly doesn't have this key information. It needs to be strongly named first.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You are building an assembly that will be used by a coupe of server applications. You want to make the update process of this assembly as smooth as possible. Which steps should you take?`,
        "optionen" : [
            { id: "1", text: `Create a WinMD Metadata file.`, richtig: false, begruendung: `A WinMD file is used by the WInRT in Windows 8. It shouldn't be used outside of this context.` },
            { id: "2", text: `Deploy the assembly to the GAC.`, richtig: true, begruendung: `A shared assembly can be deployed in the GAC. Other applications can refernce it there. When you update it, you can do so by deploying the new version to the GAC. By using configuration files, you can then let other applications reference your new assembly.` },
            { id: "3", text: `Add an assemblyBinding section to each client application that points to the location of the assembly.`, richtig: false, begruendung: `You can use the assemblyBinding configuration element to add extra search locations for an assembly. This would ask for changes to each client application, however. The GAC is the location where a shared assembly needs to be deployed.` },
            { id: "4", text: `Strongly name the assembly.`, richtig: true, begruendung: `Strongly naming an assembly is required to deploy an assembly to the GAC where it can be shared by all applications.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You want to deploy an assembly to a shared location on the intranet. Which steps should you take?`,
        "optionen" : [
            { id: "1", text: `Strongly name the assembly.`, richtig: true, begruendung: `Strongly naming the assembly is required to be able to reference it on the intranet.` },
            { id: "2", text: `Use the codebase configuration element in the applications that use the assembly.`, richtig: true, begruendung: `The codebase configuration element can be used to have local client applications know they can find an assembly on another location such as the intranet.` },
            { id: "3", text: `Deploy the assembly to the GAC.`, richtig: false, begruendung: `Deploying it to the GAC won't put the assembly on the intranet.` },
            { id: "4", text: `Use the assemblyBinding configuration element with the probing option.`, richtig: false, begruendung: `The probing option can be used only to give additional locations relative to the application path. It can't be used to point to the intranet.` },
        ]
    },    
    
    Wuerfeltextaufgabe("", "Visual Studio build configurations can be used to configure the compiler."),
    Wuerfeltextaufgabe("", "A debug build outputs a nonoptimized version of the code that contains extra instructions to help debugging."),        
    Wuerfeltextaufgabe("", "A release build outputs optimized code that can be deployed to a production environment."),        
    Wuerfeltextaufgabe("", "Compiler directives can be used to give extra instructions to the compiler. You can use them, for example, to include code only in certain build configurations or to suppress certain warnings."),        
    Wuerfeltextaufgabe("", "A program database (PDB) file contains extra information that is required when debugging an application."),        
    
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are ready to deploy your code to a production server. Which configuration do you deploy?`,
        "optionen" : [
            { id: "1", text: `Debug configuration`, richtig: false, begruendung: `A debug configuration is not fully optimized and is not suitable for a production environment.` },
            { id: "2", text: `Release configuration`, richtig: true, begruendung: `A release configuration is fully optimized and will give the best results in a production environment.` },
            { id: "3", text: `Custom configuration with PDB files`, richtig: false, begruendung: `PDB files are necessary only when debugging an application.` },
            { id: "4", text: `Release configuration build with the /debug:full compiler flag`, richtig: false, begruendung: `A Symbol Server stores your PDB files and helps your debugger find the correct version. If you have a Symbol Server in place, you can easily start a debugging session to your server, and your debugger will find the correct PDB files automatically.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You are debugging an application for a web shop and are inspecting a lot of Order classes. What can you do to make your debugging easier?`,
        "optionen" : [
            { id: "1", text: `Use the DebuggerDisplayAttribute on the Order class.`, richtig: true, begruendung: `The DebuggerDisplayAttribute helps you in supplying a more helpful description when inspecting an item through the debugger.` },
            { id: "2", text: `Override ToString on the Order class.`, richtig: false, begruendung: `Overriding ToString does help, but a better solution is to use the DebuggerDisplayAttribute because this won't influence your code in production.` },
            { id: "3", text: `Use the ConditionalAttribute on the Order class.`, richtig: false, begruendung: `The ConditionalAttribute can be used to remove code from your compiled application. Most of the time, it's used to remove certain calls when doing a release build.` },
            { id: "4", text: `Use the #line compiler directive to make sure you can find the correct location when an exception occurs.`, richtig: false, begruendung: `The #line directive is used to change the line numbers of your code. Normally this won't be necessary.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You are using custom code generation to insert security checks into your classes. When an exception happens, you're having trouble finding the correct line in your source code. What should you do?`,
        "optionen" : [
            { id: "1", text: `Use #error to signal the error from your code so that it's easier to find.`, richtig: false, begruendung: `#error will signal an error at compile time.` },
            { id: "2", text: `Use #line hidden to hide unneccessary lines from the debugger.`, richtig: false, begruendung: `#line hidden will remove the extra generated lines from the debugger, but it won't restore your line numbers.` },
            { id: "3", text: `Use the ConditionalAttribute to remove the security checks from your debug build.`, richtig: false, begruendung: `This is a dangerous solution because it creates different behavior between debug and release builds. You won't be able to test your security checks while working with a debug build.` },
            { id: "4", text: `Use the #line directive with the correct line numbers in your generated code to restore the original line numbers.`, richtig: true, begruendung: `The #line directive can be used to tell the compiler to change the line number of a line of code. This way you can remove the line numbers for the generated code so that exceptions will match the original code.` },
        ]
    },    

    Wuerfeltextaufgabe("CPU sampling", "This is the most lightweight option. It has little effect on the application. You use it for an initial search for your performance problems."),
    Wuerfeltextaufgabe("Instrumentation", "This method injects code into your compiled file that captures timing information for each function that is called. With instrumentation, you can find problems that have to do with input/output (I/O) or you can closely examine a particular method."),
    Wuerfeltextaufgabe(".NET memory allocation", "This method interrupts your program each time the application allocates a new object or when the object is collected by the garbage collector to give you a good idea of how memory is being used in your program."),
    Wuerfeltextaufgabe("Resource contention data", "This method can be used in multithreaded applications to find out why methods have to wait for each other before they can access a shared ressource."),

    Wuerfeltextaufgabe("", "Logging and Tracing are important to monitor an application that is in production and should be implemented right from the start."),
    Wuerfeltextaufgabe("", "You can use the Debug and TraceSource classes to log and trace messages. By configuring different listeners, you can configure your application to know which data to send where."),
    Wuerfeltextaufgabe("", "When you are experiencing performance problems, you can profile your application to find the root cause and fix it."),
    Wuerfeltextaufgabe("", "Performance counters can be used to constantly monitor the health of your applications."),


    {
        "typ"       : "multiple-choice",
        "frage"     : `You are using the TraceSource class to trace data for your application. You want to trace data when an order cannot be submitted to the database and you are going to perform a retry. Which TraceEventType sould you use?`,
        "optionen" : [
            { id: "1", text: `Information`, richtig: false, begruendung: `A failing order is not something that sould be seen eas only an informative event. It should be treated as something critical.` },
            { id: "2", text: `Verbose`, richtig: false, begruendung: `Verbose should be used only for very detailed tracing messages.` },
            { id: "3", text: `Critical`, richtig: false, begruendung: `You can still recover from the error, which maes it a severity of Error, not Critical.` },
            { id: "4", text: `Error`, richtig: true, begruendung: `You should let the operators know that something is wrong and that you are typing to recover. If recovery fails, you should log a Critical event.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `Users are reporting errors in your application, and you want to configure your application to output more trace data. Which configuration setting should you change?`,
        "optionen" : [
            { id: "1", text: `NumberOfItems32`, richtig: false, begruendung: `NumberOfItems32 is an option for creating a performance counter.` },
            { id: "2", text: `Listener`, richtig: false, begruendung: `A listener determines what is done with the tracing events. It doesn't influence which events are traced.` },
            { id: "3", text: `Filter`, richtig: false, begruendung: `A filter is used to filter the message that a listener processes. It doesn't influence which events are traced.` },
            { id: "4", text: `Switch`, richtig: true, begruendung: `The switch value determines which trace events should be handled. By lowering the severity for the switch, you will see more trace events in your output.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are working on a global application with lots of users. THe operation staff requests information on how many user logons per second are occuring. What should you do?`,
        "optionen" : [
            { id: "1", text: `Add a TraceSource and write each logon to a text file.`, richtig: false, begruendung: `Writing the events to a text file will still require a tool to parse the text file and give results to the operation staff.` },
            { id: "2", text: `Implement a performance counter using the RateOfCountsPerSecond64 type.`, richtig: true, begruendung: `This performance counter will help the operation staff to see exctly what happens every second.` },
            { id: "3", text: `Instrument your application with the profiler so you can see exactly how many times the logon method is called.`, richtig: false, begruendung: `Profiler instrumentation will really slow down the performance of your application. It's also something that's not easy readable by your operations staff.` },
            { id: "4", text: `Use the EventLog class to write an event to the event log for each logon.`, richtig: false, begruendung: `Although the event log can be read by the operation staff, they will have to manually count all events to calculate the logons per second.` },
        ]
    },
    
    
   /* Chapter 4 */

    Wuerfeltextaufgabe("", "You can work with drives using Drive and DriveInfo."),
    Wuerfeltextaufgabe("", "For folders, you can use Directory and DirectoryInfo."),
    Wuerfeltextaufgabe("", "File and FileInfo offer methods to work with files."),
    Wuerfeltextaufgabe("", "The static Path class can help you in creating and parsing file paths."),
    Wuerfeltextaufgabe("", "Streams are an abstract way of working with a series of bytes."),
    Wuerfeltextaufgabe("", "There are many Stream implementations for dealing with files, network operations, and any other types of I/O."),
    Wuerfeltextaufgabe("", "Remember that the file system can be accessed and changed by multiple users at the same time. You need to keep this is mind when creating reliable applications."),
    Wuerfeltextaufgabe("", "When performing network requests, you can use the WebRequest and WebResponse classes from the System.Net namespace."),
    Wuerfeltextaufgabe("", "Asynchronous I/O can help you create a better user experience and a more scalable application."),

    {
        "typ"       : "multiple-choice",
        "frage"     : `You are creating a new file to store some log data. Each time a new log entry is necessary, you write a string to file. Which method do you use?`,
        "optionen" : [
            { id: "1", text: `File.CreateText`, richtig: false, begruendung: `File.CreateText would create a new file each time. You only want to append some text.` },
            { id: "2", text: `FileInfo.Create`, richtig: false, begruendung: `FileInfo.Create would return a FileStream to a newly created file. You would need to encode your data to a byte array to write it to the stream.` },
            { id: "3", text: `File.Create`, richtig: false, begruendung: `File.Create is the static equivalent of FileInfo.Create. It returns a FileStream that would require encoding to write your log entries.` },
            { id: "4", text: `File.AppendText`, richtig: true, begruendung: `File.AppendText adds some text to the end of a file.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You have built a complex calculation algorithm. It takes quite some time to complete and you want to make sure that your application remains responsive. What do you do?`,
        "optionen" : [
            { id: "1", text: `Use async/await.`, richtig: false, begruendung: `async/await is not usable when working with a CPU-bound algorithm.` },
            { id: "2", text: `Run the code synchonously.`, richtig: false, begruendung: `Running the code synchronoulsy would make the user interface unresponsive.` },
            { id: "3", text: `Use Task.Run`, richtig: true, begruendung: `Task.Run will run the CPU-bound code on a seperate thread. This will free the user interface thread to make sure that the application remains responsive.` },
            { id: "4", text: `Use a BackgroundWorker.`, richtig: false, begruendung: `BackgroundWorker is retired. The new Task Parallel Library replaces it.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You are writing an application that will be deployed to Western countries. It outputs user activity to a text file. Which encoding should you use?`,
        "optionen" : [
            { id: "1", text: `UTF-8`, richtig: true, begruendung: `UTF-8 is a general-purpose encoding format that works on many operating systems.` },
            { id: "2", text: `UTF-7`, richtig: false, begruendung: `UTF-7 is used as a protocol for newsgroup and e-mail. It's not as secure as the other encodings, requires more space, and it's slower in encoding/decoding. UTF-8 should be used whenever possible.` },
            { id: "3", text: `ASCII`, richtig: false, begruendung: `Because ASCII supports only a limited range of characters, it is inadequate in most cases for international applications.` },
            { id: "4", text: `UTF-32`, richtig: false, begruendung: `UTF-32 requires a lot of space for storing characters (4 bytes for each character). It is used when applications want to encode Unicode supplementary characters (for example, Chinese characters) as one single glyph. You need this only when the encoded space of such characters is important to you. If you don't need the Unicode supplementary characters, you can use UTF-8. If you do need them, UTF-16 can be used except when you have strict space requirements.` },
        ]
    },    

    Wuerfeltextaufgabe("ACID - Atomicity", "All operations are grouped together. If one fails, they all fail."),
    Wuerfeltextaufgabe("ACID - Consistency", "Transactions bring the database from one valid state to another."),
    Wuerfeltextaufgabe("ACID - Isolation", "Transactions can operate independently of each other. Multiple concurrent transactions won't influence each other. It will be as if they were executed serially."),
    Wuerfeltextaufgabe("ACID - Durability", "The result of a committed transaction is always stored permanently, even if the database crashes immediately thereafter."),

    Wuerfeltextaufgabe("TransactionScope - Required", "Join the ambient transaction or create a new one if it doesn't exist. If there is an ambient transaction, that transaction controls when the transaction is completed. This is the default scope."),
    Wuerfeltextaufgabe("TransactionScope - RequiresNew", "Start a new transaction."),
    Wuerfeltextaufgabe("TransactionScope - Suppress", "Don't take part in any transaction."),
    
    Wuerfeltextaufgabe("EntityFramework - Database First", "You want to map an existing database to your object structure."),
    Wuerfeltextaufgabe("EntityFramework - Model First", "You want to design your object model with a graphical designer and then create a database that supports it."),
    Wuerfeltextaufgabe("EntityFramework - Code First", "You create your object model in code and then generate a database that can store your data."),
  
    Wuerfeltextaufgabe("", "ADO.NET uses a provider model that enables you to connect to different types of databases."),
    Wuerfeltextaufgabe("", "You use a DbConnection object to create a connection to a database."),
    Wuerfeltextaufgabe("", "You can execute queries that create, update, read, and delete (CRUD) data from a database."),
    Wuerfeltextaufgabe("", "When creating queries it's important to use parameterized queries so you avoid SQL injection."),
    Wuerfeltextaufgabe("", "You can consume a web service from your application by creating a proxy for it."),
    Wuerfeltextaufgabe("", "You can work with XML by using the XmlReader, XmlWriter, XPathNavigator, and XmlDocument classes."),

    {
        "typ"       : "multiple-choice",
        "frage"     : `You want to update a specific row in the database. Which objects should you use?`,
        "optionen" : [
            { id: "1", text: `SqlCommand`, richtig: true, begruendung: `You need a SqlCommand to execute your update query against the database.` },
            { id: "2", text: `SqlDataReader`, richtig: false, begruendung: `A SqlDataReader is used when you select some data from your database. You don't use it when executing an update command.` },
            { id: "3", text: `SqlConnection`, richtig: true, begruendung: `You need a SqlConnection to establish a connection to your database. The SqlCommand uses this connection to execute the update query.` },
            { id: "4", text: `TransactionScope`, richtig: false, begruendung: `A Transaction is not necessary when executing only a single command. If an exception occurs, no other queries have to be canceled.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You are planning to build an application that will use an object-oriented design. It will be used by multiple users at the same time. Which technology should you use?`,
        "optionen" : [
            { id: "1", text: `XML files`, richtig: false, begruendung: `Storing your data in a plain XML file doesn't allow multiple users to read and update it at the same time.` },
            { id: "2", text: `Entity Framework`, richtig: true, begruendung: `A relational database that stores the data with the Entity Framework mapping it to your objects helps you with quickly developing your application.` },
            { id: "3", text: `ADO.NET`, richtig: false, begruendung: `A relational database is the best option to store your data. Using plain ADO.NET code would require you to manually map your objects to the database, and vice versa.` },
            { id: "4", text: `Web service`, richtig: false, begruendung: `A Web service will only move the problem to another layer of your application. Inside the Web service you sitll have to use some kind of storage to save your application data.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You need to process a large number of XML files in a scheduled service to extract some data. Which class should you use?`,
        "optionen" : [
            { id: "1", text: `XmlReader`, richtig: false, begruendung: `XmlReader is the fastest option when processing a lot of data. Because you only have to read it and not make any changes, this is the best choice.` },
            { id: "2", text: `XmlDocument`, richtig: false, begruendung: `XmlDocument is not fast enough then working with a large XML file.` },
            { id: "3", text: `XmlWriter`, richtig: false, begruendung: `The XmlWriter is used to create XML files, not to read them.` },
            { id: "4", text: `FileStream`, richtig: false, begruendung: `Using a FileStream would treat the XML file as plain text. You lose the benefits of the hierarchical nature of your document. Furthermore, parsing it as plain text is not a trivial task.` },
        ]
    }, 

    Wuerfeltextaufgabe("", "LINQ, which stands for Language Integrated Query, is a uniform way of writing queries against multiple data sources."),
    Wuerfeltextaufgabe("", "Important language features when working with LINQ queries are implicit typing, object initialization syntax, lambdas, extension methods, and anonymous types."),
    Wuerfeltextaufgabe("", "You can use LINQ with a method-based syntax and the query syntax."),
    Wuerfeltextaufgabe("", "LINQ queries are deferred-execution, which means that the query executes when it is first iterated."),
    Wuerfeltextaufgabe("", "You can use LINQ to XML to query, create, and update XML."),
    
    {
        "typ"       : "multiple-choice",
        "frage"     : `You have a list of dates. You want to filter the dates to the current year and then select the highest date. Which query do you use?`,
        "optionen" : [
            { id: "1", text: `DateTime result = dates.Where(d => d == DateTime.Now).OrderBy(d => d).First();`, richtig: false, begruendung: `Comparing DateTime.Now to the dates will give you only the dates for today, not for the whole year. Also, using OrderBy instead of OrderByDescending will give you the lowest date, not the highest.` },
            { id: "2", text: `DateTime result = dates.Where(d => d.Year == DateTime.Now.Year).OrderByDescending(d => d).FirstOrDefault();`, richtig: true, begruendung: `This will return the highest date for the current year. If your filter can't find a value for the current year, it will return '1-1-00001 00:00:00' (DateTime.MinValue).` },
            { id: "3", text: `DateTime result = dates.Where(d => d.Year == DateTime.Now.Year).OrderByDescending(d => d).First();`, richtig: false, begruendung: `If your filter doesn't return a value, you will get an error. You should use FirstOrDefault instead.` },
            { id: "4", text: `DateTime result = dates.Where(d => d.Year == DateTime.Now.Year).OrderByDescending(d => d).Single();`, richtig: true, begruendung: `Using Single will throw an exception if there are multiple dates for the current year.` },
        ]
    },
    {
        "typ"       : "multiple-choice",
        "frage"     : `You are trying to use a LINQ query, but you are getting a compile error that the Where method cannot be found. What should you do?`,
        "optionen" : [
            { id: "1", text: `Add a using System.Linq statement.`, richtig: true, begruendung: `You need to add a using statement for LINQ to make sure that all LINQ extension methods are available.` },
            { id: "2", text: `Check that you are using a type that implements IEnumerable.`, richtig: true, begruendung: `LINQ is implemented as extension methods on IEnumerable. If oyu type does not implement this, you can't use the extension methods.` },
            { id: "3", text: `Change your query form query to method syntax.`, richtig: false, begruendung: `The compiler changes your query syntax to method syntax. Using one or the other doesn't change anything.` },
            { id: "4", text: `Change the type of your query to var.`, richtig: false, begruendung: `Using implicit typing lets the compiler determine the result of your query. It doesn't help the compiler find the Where method.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You are using the following LINQ to Entities query:
<pre>
var query = from p in myContext.Products 
            where p.Price < 50
            select p;
int numberOfItems = query.Count();
var products = query.ToList();
</pre>
You are suffering performance problems. How can you improve your query?`,
        "optionen" : [
            { id: "1", text: `Avoid hitting the database multiple times.`, richtig: true, begruendung: `Because of the deferred execution of LINQ, you execute the query twice - one for getting the number of items, and one for getting all the products. You can change your query to get both these numbers in one call.` },
            { id: "2", text: `Don't execute ToList() on the query.`, richtig: false, begruendung: `ToList() is necessary for running the query. If you never iterate the query, you won't get any results.` },
            { id: "3", text: `Use paging.`, richtig: true, begruendung: `Paging can help limit the number of items that your retrieve.` },
            { id: "4", text: `Change the query to method syntax.`, richtig: false, begruendung: `Method syntax is compiled to query syntax. It doesn't make any functional difference.` },
        ]
    },    
   
    Wuerfeltextaufgabe("", "Serialization is the process of transforming an object to a flat file or a series of bytes."),
    Wuerfeltextaufgabe("", "Deserialization takes a series of bytes or a flat file and transforms it into an object."),
    Wuerfeltextaufgabe("", "XML serialization can be done by using the XmlSerializer."),
    Wuerfeltextaufgabe("", "You can use special attributes to configure the XmlSerializer."),
    Wuerfeltextaufgabe("", "Binary serialization can be done by using the BinaryFormatter class."),
    Wuerfeltextaufgabe("", "WCF uses another type of serialization that is performed by the DataContractSerializer."),
    Wuerfeltextaufgabe("", "JSON is a compact text format that can be created by using the DataContractJsonSerializer."),

    {
        "typ"       : "multiple-choice",
        "frage"     : `You need to store a large amount of data, and you want to do this in the most optimal way. Which serializer should you use?`,
        "optionen" : [
            { id: "1", text: `XmlSerializer`, richtig: false, begruendung: `Although XML is human-readable, it's not the most optimized format. It will result in larger files then using a binary format.` },
            { id: "2", text: `BinaryFormatter`, richtig: true, begruendung: `A binary format is the most efficient for storing a large amount of data.` },
            { id: "3", text: `DataContractSerializer`, richtig: false, begruendung: `The DataContractSerializer is used by WCF to serialize data to XML.` },
            { id: "4", text: `DataContractJsonSerializer`, richtig: false, begruendung: `The DataContractJsonSerializer serializes your objects to JSON. JSON is used for communication between a web browser and the server.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You are serializing some sensitive data to a binary format. What should you use?`,
        "optionen" : [
            { id: "1", text: `XmlSerializer`, richtig: false, begruendung: `XmlSerializer outputs XML text, not binary data.` },
            { id: "2", text: `ISerializable`, richtig: true, begruendung: `ISerializable should be implemented on types that have some sensitive data.` },
            { id: "3", text: `DataContractSerializer`, richtig: false, begruendung: `The DataContractSerializer is used by WCF to serialize data to XML.` },
            { id: "4", text: `BinaryFormatter`, richtig: true, begruendung: `The BinaryFormatter can be used to serialize data to a binary format.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You want to serialize some data to XML, and you need to make sure that a certain property is not serialized. Which attribute should you use?`,
        "optionen" : [
            { id: "1", text: `XmlElement`, richtig: false, begruendung: `XmlElement is used to configure how a member is serialized to an XML element.` },
            { id: "2", text: `XmlAttribute`, richtig: false, begruendung: `XmlAttribute outputs a member as an attribute on its parent instead of as a separate node.` },
            { id: "3", text: `XmlIgnore`, richtig: true, begruendung: `XmlIgnore makes sure that a member is not serialized.` },
            { id: "4", text: `NonSerialized`, richtig: false, begruendung: `The NonSerialized attribute is used with the BinaryFormatter or SoapFormatter.` },
        ]
    }, 

    Wuerfeltextaufgabe("", "The .NET Framework offers both generic and nongeneric collections. When possible, you should use the generic version."),
    Wuerfeltextaufgabe("", "Array is the most basic type to store a number of items. It has a fixed size."),
    Wuerfeltextaufgabe("", "List is a collection that can grow when needed. It's the most-used collection."),
    Wuerfeltextaufgabe("", "Dictionary stores and accesses items using key/value pairs."),
    Wuerfeltextaufgabe("", "HashSet stroes unique items and offers set operations that can be used on them."),
    Wuerfeltextaufgabe("", "A Queue is a first-in, first-out (FIFO) collection."),
    Wuerfeltextaufgabe("", "A Stack is a first-in, last-out (FILO) collection."),
    Wuerfeltextaufgabe("", "You can create a custom collection by inheriting from a collection class or inheriting from one of the collection interfaces."),

    {
        "typ"       : "multiple-choice",
        "frage"     : `You want to store a group of orders and make sure that a user can easily select an order by its order number. Which collection do you use?`,
        "optionen" : [
            { id: "1", text: `List<Order>`, richtig: false, begruendung: `A List<Order> offers random access to elements. It's not fast at selecting specific Order items by id.` },
            { id: "2", text: `Dictionary<int,Order>`, richtig: true, begruendung: `By using a Dictionary<int,Order>, you can easily select an Order by id.` },
            { id: "3", text: `HashSet<Order>`, richtig: false, begruendung: `A HashSet doesn't offer random access to its items. You need to enumerate the whole set to get to an order.` },
            { id: "4", text: `Queue<Order>`, richtig: false, begruendung: `A Queue offers a FIFO set. You can't randomly access items, and an item is discarded after retrieving it.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You are using a queue and you want to add a new item. Which method do you use?`,
        "optionen" : [
            { id: "1", text: `Push`, richtig: false, begruendung: `Push is used to add items to a Stack.` },
            { id: "2", text: `Add`, richtig: false, begruendung: `Add is used on types inheriting from ICollection<T>. A Queue does not inherit from ICollection<T> but from ICollection.` },
            { id: "3", text: `Dequeue`, richtig: false, begruendung: `Dequeue is used to remove an item from a Queue.` },
            { id: "4", text: `Enqueue`, richtig: true, begruendung: `A Queue offers a FIFO set. You can't randomly access items, and an item is discarded after retrieving it.` },
        ]
    },
        {
        "typ"       : "multiple-choice",
        "frage"     : `You are working with a large group of family name objects. You need to remove all duplicates and then group them by last name. Which collections should you use?`,
        "optionen" : [
            { id: "1", text: `List<T>`, richtig: true, begruendung: `You need a list to store all duplicate family name items.` },
            { id: "2", text: `Stack<T>`, richtig: false, begruendung: `A Stack stores items in a LIFO basis. It's not suitable for storing the duplicated or nonduplicated items.` },
            { id: "3", text: `Dictionary<string,T>`, richtig: true, begruendung: `The Dictionary<string,T> can be used to store the nonduplicated items on family name.` },
            { id: "4", text: `T[]`, richtig: false, begruendung: `You can't remove items from a regular array.` },
        ]
    },



]});