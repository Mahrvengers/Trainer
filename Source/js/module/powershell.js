trainings.push(
    {
        name: "Powershell-Training",
        description: "",

        fragen: [
    {
        "antwort":  "Get-Random",
        "kategorie":  "",
        "frage":  "What is the name of the Commandlet that helps you to select random things?"
    },
    {
        "antwort":  "Get-Date",
        "kategorie":  "",
        "frage":  "How do you get the current date/time?"
    },
    {
        "antwort":  "foreach",
        "kategorie":  "",
        "frage":  "What is | % the short form of?"
    },
    {
        "antwort":  "where",
        "kategorie":  "",
        "frage":  "What is | ? the short form of?"
    },
    {
        "antwort":  "Add-Type",
        "kategorie":  "",
        "frage":  "What Commandlet lets you add C# classes to Powershell code?"
    },
    {
        "antwort":  "New-Object",
        "kategorie":  "",
        "frage":  "What Commandlet lets you instanciate C# classes in Powershell code?"
    },
    {
        "antwort":  "New-Object Todo -ArgumentList \"this is a todo\",\"new\"",
        "kategorie":  "",
        "frage":  "Instantiate the c# class \"Todo\" that has 2 constructor parameters \"this is a todo\" and \"new\" (the status)."
    },
    {
        "antwort":  "Get-Content",
        "kategorie":  "",
        "frage":  "How do you read the contents of a file?"
    },
    {
        "antwort":  "(Get-Content some.json) -join \"`n\" | ConvertFrom-Json",
        "kategorie":  "",
        "frage":  "Read the some.json File into a Powershell class"
    },
    {
        "antwort":  "array",
        "kategorie":  "",
        "frage":  "Does the operator -contains search a substring or if an item is part of an array?"
    },
    {
        "antwort":  "-match",
        "kategorie":  "",
        "frage":  "What operator do you use for checking if a string contains a substring?"
    },
    {
        "antwort":  "Get-Help Get-Service",
        "kategorie":  "",
        "frage":  "Get help for the Commandlet Get-Service"
    },
    {
        "antwort":  "Get-Service | Get-Member",
        "kategorie":  "",
        "frage":  "List all members of the Result Object of the Commandlet Get-Service"
    },
    {
        "antwort":  "[int]$a = 32",
        "kategorie":  "",
        "frage":  "Define a new variable a to be an int and of value 32."
    },
    {
        "antwort":  "$a = \"blue\",\"red\",\"yellow\"",
        "kategorie":  "",
        "frage":  "Define an array named a with the values blue, red and yellow."
    },
    {
        "antwort":  "Add-Computer",
        "kategorie":  "Management Commandlets",
        "frage":  "Add the local computer to a domain or workgroup."
    },
    {
        "antwort":  "Add-Content",
        "kategorie":  "Management Commandlets",
        "frage":  "Adds content to the specified items, such as adding words to a file."
    },
    {
        "antwort":  "Checkpoint-Computer",
        "kategorie":  "Management Commandlets",
        "frage":  "Creates a system restore point on the local computer."
    },
    {
        "antwort":  "Clear-Content",
        "kategorie":  "Management Commandlets",
        "frage":  "Deletes the contents of an item, but does not delete the item."
    },
    {
        "antwort":  "Clear-EventLog",
        "kategorie":  "Management Commandlets",
        "frage":  "Deletes all entries from specified event logs on the local or remote computers."
    },
    {
        "antwort":  "Clear-Item",
        "kategorie":  "Management Commandlets",
        "frage":  "Deletes the contents of an item, but does not delete the item."
    },
    {
        "antwort":  "Clear-ItemProperty",
        "kategorie":  "Management Commandlets",
        "frage":  "Deletes the value of a property but does not delete the property."
    },
    {
        "antwort":  "Complete-Transaction",
        "kategorie":  "Management Commandlets",
        "frage":  "Commits the active transaction."
    },
    {
        "antwort":  "Convert-Path",
        "kategorie":  "Management Commandlets",
        "frage":  "Converts a path from a Windows PowerShell path to a Windows PowerShell provider path."
    },
    {
        "antwort":  "Copy-Item",
        "kategorie":  "Management Commandlets",
        "frage":  "Copies an item from one location to another."
    },
    {
        "antwort":  "Copy-ItemProperty",
        "kategorie":  "Management Commandlets",
        "frage":  "Copies a property and value from a specified location to another location."
    },
    {
        "antwort":  "Debug-Process",
        "kategorie":  "Management Commandlets",
        "frage":  "Debugs one or more processes running on the local computer."
    },
    {
        "antwort":  "Disable-ComputerRestore",
        "kategorie":  "Management Commandlets",
        "frage":  "Disables the System Restore feature on the specified file system drive."
    },
    {
        "antwort":  "Enable-ComputerRestore",
        "kategorie":  "Management Commandlets",
        "frage":  "Enables the System Restore feature on the specified file system drive."
    },
    {
        "antwort":  "Get-ChildItem",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets the items and child items in one or more specified locations."
    },
    {
        "antwort":  "Get-ComputerRestorePoint",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets the restore points on the local computer."
    },
    {
        "antwort":  "Get-Content",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets the content of the item at the specified location."
    },
    {
        "antwort":  "Get-ControlPanelItem",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets control panel items."
    },
    {
        "antwort":  "Get-EventLog",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets the events in an event log, or a list of the event logs, on the local or remote computers."
    },
    {
        "antwort":  "Get-HotFix",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets the hotfixes that have been applied to the local and remote computers."
    },
    {
        "antwort":  "Get-Item",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets the item at the specified location."
    },
    {
        "antwort":  "Get-ItemProperty",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets the properties of a specified item."
    },
    {
        "antwort":  "Get-Location",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets information about the current working location or a location stack."
    },
    {
        "antwort":  "Get-Process",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets the processes that are running on the local computer or a remote computer."
    },
    {
        "antwort":  "Get-PSDrive",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets drives in the current session."
    },
    {
        "antwort":  "Get-PSProvider",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets information about the specified Windows PowerShell provider."
    },
    {
        "antwort":  "Get-Service",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets the services on a local or remote computer."
    },
    {
        "antwort":  "Get-Transaction",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets the current (active) transaction."
    },
    {
        "antwort":  "Get-WmiObject",
        "kategorie":  "Management Commandlets",
        "frage":  "Gets instances of Windows Management Instrumentation (WMI) classes or information about the available classes."
    },
    {
        "antwort":  "Invoke-Item",
        "kategorie":  "Management Commandlets",
        "frage":  "Performs the default action on the specified item."
    },
    {
        "antwort":  "Invoke-WmiMethod",
        "kategorie":  "Management Commandlets",
        "frage":  "Calls WMI methods."
    },
    {
        "antwort":  "Join-Path",
        "kategorie":  "Management Commandlets",
        "frage":  "Combines a path and child-path into a single path."
    },
    {
        "antwort":  "Limit-EventLog",
        "kategorie":  "Management Commandlets",
        "frage":  "Sets the event log properties that limit the size of the event log and the age of its entries."
    },
    {
        "antwort":  "Move-Item",
        "kategorie":  "Management Commandlets",
        "frage":  "Moves an item from one location to another."
    },
    {
        "antwort":  "Move-ItemProperty",
        "kategorie":  "Management Commandlets",
        "frage":  "Moves a property from one location to another."
    },
    {
        "antwort":  "New-EventLog",
        "kategorie":  "Management Commandlets",
        "frage":  "Creates a new event log and a new event source on a local or remote computer."
    },
    {
        "antwort":  "New-Item",
        "kategorie":  "Management Commandlets",
        "frage":  "Creates a new item."
    },
    {
        "antwort":  "New-ItemProperty",
        "kategorie":  "Management Commandlets",
        "frage":  "Creates a new property for an item and sets its value. For example, you can use New-ItemProperty to create and change registry values and data, which are properties of a registry key."
    },
    {
        "antwort":  "New-PSDrive",
        "kategorie":  "Management Commandlets",
        "frage":  "Creates a Windows PowerShell drive in the current console."
    },
    {
        "antwort":  "New-Service",
        "kategorie":  "Management Commandlets",
        "frage":  "Creates a new Windows service."
    },
    {
        "antwort":  "New-WebServiceProxy",
        "kategorie":  "Management Commandlets",
        "frage":  "Creates a Web service proxy object that lets you use and manage the Web service in Windows PowerShell."
    },
    {
        "antwort":  "Pop-Location",
        "kategorie":  "Management Commandlets",
        "frage":  "Changes to the location most recently pushed onto the stack by Push-Location."
    },
    {
        "antwort":  "Push-Location",
        "kategorie":  "Management Commandlets",
        "frage":  "Adds the current location to the top of a list of locations (\"stack\")."
    },
    {
        "antwort":  "Register-WmiEvent",
        "kategorie":  "Management Commandlets",
        "frage":  "Subscribes to an event generated by a WMI object."
    },
    {
        "antwort":  "Remove-Computer",
        "kategorie":  "Management Commandlets",
        "frage":  "Removes computers from workgroups or domains."
    },
    {
        "antwort":  "Remove-EventLog",
        "kategorie":  "Management Commandlets",
        "frage":  "Deletes an event log or unregisters an event source."
    },
    {
        "antwort":  "Remove-Item",
        "kategorie":  "Management Commandlets",
        "frage":  "Deletes the specified items."
    },
    {
        "antwort":  "Remove-ItemProperty",
        "kategorie":  "Management Commandlets",
        "frage":  "Deletes the property and its value from an item."
    },
    {
        "antwort":  "Remove-PSDrive",
        "kategorie":  "Management Commandlets",
        "frage":  "Removes a Windows PowerShell drive from its location."
    },
    {
        "antwort":  "Remove-WmiObject",
        "kategorie":  "Management Commandlets",
        "frage":  "Deletes WMI classes and instances."
    },
    {
        "antwort":  "Rename-Computer",
        "kategorie":  "Management Commandlets",
        "frage":  "Renames a computer."
    },
    {
        "antwort":  "Rename-Item",
        "kategorie":  "Management Commandlets",
        "frage":  "Renames an item in a Windows PowerShell provider namespace."
    },
    {
        "antwort":  "Rename-ItemProperty",
        "kategorie":  "Management Commandlets",
        "frage":  "Renames a property of an item."
    },
    {
        "antwort":  "Reset-ComputerMachinePassword",
        "kategorie":  "Management Commandlets",
        "frage":  "Resets the machine account password for the computer."
    },
    {
        "antwort":  "Resolve-Path",
        "kategorie":  "Management Commandlets",
        "frage":  "Resolves the wildcard characters in a path and displays the path contents."
    },
    {
        "antwort":  "Restart-Computer",
        "kategorie":  "Management Commandlets",
        "frage":  "Restarts (\"reboots\") the operating system on local and remote computers."
    },
    {
        "antwort":  "Restart-Service",
        "kategorie":  "Management Commandlets",
        "frage":  "Stops and then starts one or more services."
    },
    {
        "antwort":  "Restore-Computer",
        "kategorie":  "Management Commandlets",
        "frage":  "Starts a system restore on the local computer."
    },
    {
        "antwort":  "Resume-Service",
        "kategorie":  "Management Commandlets",
        "frage":  "Resumes one or more suspended (paused) services."
    },
    {
        "antwort":  "Set-Content",
        "kategorie":  "Management Commandlets",
        "frage":  "Writes or replaces the content in an item with new content."
    },
    {
        "antwort":  "Set-Item",
        "kategorie":  "Management Commandlets",
        "frage":  "Changes the value of an item to the value specified in the command."
    },
    {
        "antwort":  "Set-ItemProperty",
        "kategorie":  "Management Commandlets",
        "frage":  "Creates or changes the value of a property of an item."
    },
    {
        "antwort":  "Set-Location",
        "kategorie":  "Management Commandlets",
        "frage":  "Sets the current working location to a specified location."
    },
    {
        "antwort":  "Set-Service",
        "kategorie":  "Management Commandlets",
        "frage":  "Starts, stops, and suspends a service, and changes its properties."
    },
    {
        "antwort":  "Set-WmiInstance",
        "kategorie":  "Management Commandlets",
        "frage":  "Creates or modifies instances of WMI classes."
    },
    {
        "antwort":  "Show-ControlPanelItem",
        "kategorie":  "Management Commandlets",
        "frage":  "Opens control panel items."
    },
    {
        "antwort":  "Show-EventLog",
        "kategorie":  "Management Commandlets",
        "frage":  "Displays the event logs of the local or a remote computer in Event Viewer."
    },
    {
        "antwort":  "Split-Path",
        "kategorie":  "Management Commandlets",
        "frage":  "Returns the specified part of a path."
    },
    {
        "antwort":  "Start-Process",
        "kategorie":  "Management Commandlets",
        "frage":  "Starts one or more processes on the local computer."
    },
    {
        "antwort":  "Start-Service",
        "kategorie":  "Management Commandlets",
        "frage":  "Starts one or more stopped services."
    },
    {
        "antwort":  "Start-Transaction",
        "kategorie":  "Management Commandlets",
        "frage":  "Starts a transaction."
    },
    {
        "antwort":  "Stop-Computer",
        "kategorie":  "Management Commandlets",
        "frage":  "Shuts down local and remote computers."
    },
    {
        "antwort":  "Stop-Process",
        "kategorie":  "Management Commandlets",
        "frage":  "Stops one or more running processes."
    },
    {
        "antwort":  "Stop-Service",
        "kategorie":  "Management Commandlets",
        "frage":  "Stops one or more running services."
    },
    {
        "antwort":  "Suspend-Service",
        "kategorie":  "Management Commandlets",
        "frage":  "Suspends (pauses) one or more running services."
    },
    {
        "antwort":  "Test-ComputerSecureChannel",
        "kategorie":  "Management Commandlets",
        "frage":  "Tests and repairs the secure channel between the local computer and its domain."
    },
    {
        "antwort":  "Test-Connection",
        "kategorie":  "Management Commandlets",
        "frage":  "Sends ICMP echo request packets (\"pings\") to one or more computers."
    },
    {
        "antwort":  "Test-Path",
        "kategorie":  "Management Commandlets",
        "frage":  "Determines whether all elements of a path exist."
    },
    {
        "antwort":  "Undo-Transaction",
        "kategorie":  "Management Commandlets",
        "frage":  "Rolls back the active transaction."
    },
    {
        "antwort":  "Use-Transaction",
        "kategorie":  "Management Commandlets",
        "frage":  "Adds the script block to the active transaction."
    },
    {
        "antwort":  "Wait-Process",
        "kategorie":  "Management Commandlets",
        "frage":  "Waits for the processes to be stopped before accepting more input."
    },
    {
        "antwort":  "Write-EventLog",
        "kategorie":  "Management Commandlets",
        "frage":  "Writes an event to an event log."
    }
]});