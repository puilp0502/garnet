"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1182],{6300:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=r(5893),i=r(1151);const t={id:"onboarding",sidebar_label:"Onboarding",title:"Onboarding"},o="Onboarding for Garnet Development",l={id:"dev/onboarding",title:"Onboarding",description:"Welcome to Garnet!, in this page you will find the main steps to set up your work environment for developing in Garnet.",source:"@site/docs/dev/onboarding.md",sourceDirName:"dev",slug:"/dev/onboarding",permalink:"/docs/dev/onboarding",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/Garnet/tree/main/website/docs/dev/onboarding.md",tags:[],version:"current",frontMatter:{id:"onboarding",sidebar_label:"Onboarding",title:"Onboarding"},sidebar:"garnetDocSidebar",previous:{title:"Key Migration",permalink:"/docs/cluster/key-migration"},next:{title:"Code Structure",permalink:"/docs/dev/code-structure"}},c={},a=[{value:"Quick start &amp; useful resources",id:"quick-start--useful-resources",level:2},{value:"Tools",id:"tools",level:3},{value:"Start hacking",id:"start-hacking",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Garnet API development",id:"garnet-api-development",level:2},{value:"Code Patterns",id:"code-patterns",level:3},{value:"Development concepts",id:"development-concepts",level:3},{value:"Pull Request protocol",id:"pull-request-protocol",level:2},{value:"Formatting style guide",id:"formatting-style-guide",level:2},{value:"Structure of the Garnet VS solution.",id:"structure-of-the-garnet-vs-solution",level:2},{value:"Running the benchmark application",id:"running-the-benchmark-application",level:2},{value:"Build",id:"build",level:2},{value:"Test",id:"test",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"onboarding-for-garnet-development",children:"Onboarding for Garnet Development"}),"\n",(0,s.jsx)(n.p,{children:"Welcome to Garnet!, in this page you will find the main steps to set up your work environment for developing in Garnet."}),"\n",(0,s.jsx)(n.h2,{id:"quick-start--useful-resources",children:"Quick start & useful resources"}),"\n",(0,s.jsxs)(n.p,{children:["For a first contact with Garnet and its capabilities, you can start with ",(0,s.jsx)(n.a,{href:"/docs/",children:"Welcome to Garnet"})," page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Additionally the following pages and documentation might be helpful:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/docs/reference/protocol-spec/",children:"RESP specification"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://redis.io/docs/data-types/",children:"Redis data types"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://microsoft.github.io/FASTER/docs/fasterkv-basics/",children:"FASTER"}),", which we forked for use in Garnet"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Visual Studio 2022 (Preview version recommended)"}),"\n",(0,s.jsx)(n.li,{children:".NET 8.x"}),"\n",(0,s.jsx)(n.li,{children:"Git"}),"\n",(0,s.jsx)(n.li,{children:"Azure Windows VM"}),"\n",(0,s.jsx)(n.li,{children:"Azure Linux VM"}),"\n",(0,s.jsx)(n.li,{children:"redis-cli, interactive RESP client in Linux"}),"\n",(0,s.jsx)(n.li,{children:"Memurai, for using memurai-cli client on Windows, or use redis-cli via WSL"}),"\n",(0,s.jsx)(n.li,{children:"RedisInsight for experimenting with contents of the store"}),"\n",(0,s.jsx)(n.li,{children:"telnet."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"start-hacking",children:"Start hacking"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clone the repository"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["git clone ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/Garnet.git",children:"https://github.com/microsoft/Garnet.git"})]}),"\n",(0,s.jsx)(n.p,{children:"After cloning the repository you can either run the unit tests or run the server and use one of the RESP client suggested in Windows or Linux."}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Run the tests suite"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'    dotnet test -c Release -l "console;verbosity=detailed"\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run the server"}),"\n",(0,s.jsx)(n.p,{children:"Using a size memory of 4 GB and index size of 64 MB:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["cd ",(0,s.jsx)(n.code,{children:"<root>"}),"/main/GarnetServer/"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"dotnet run -- --logger-level Trace -m 4g -i 64m"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Use the Memurai client in Windows to send commands to Garnet. A guide about how to install Memurai on Windows can be found ",(0,s.jsx)(n.a,{href:"https://docs.memurai.com/en/installation.html",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you are using Linux, you can use the redis-cli tool. Our official supported Linux distribution is Ubuntu."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A third option is to install Redis-Insight on Windows. Follow the official guide ",(0,s.jsx)(n.a,{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you need to use tls in linux follow the guide at:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<root>"}),"/Garnet/test/testcerts/README.md"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you get errors when builing of failed restore use:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["dotnet restore --interactive -s ",(0,s.jsx)(n.a,{href:"https://api.nuget.org/v3/index.json",children:"https://api.nuget.org/v3/index.json"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you need to run the local device library make sure to have these dependencies:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"sudo apt install -y g++ libaio-dev uuid-dev libtbb-dev"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"garnet-api-development",children:"Garnet API development"}),"\n",(0,s.jsx)(n.h3,{id:"code-patterns",children:"Code Patterns"}),"\n",(0,s.jsx)(n.p,{children:"All requests to the server are either basic RESP commands or array RESP commands. The following shows one example of each of them:"}),"\n",(0,s.jsx)(n.p,{children:"Basic Command: PING\r\nRESP representation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$4\\r\\nPING\\r\\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Array Command: SET mykey abc"}),"\n",(0,s.jsx)(n.p,{children:"RESP representation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*3\\r\\n$3\\r\\nSET\\r\\n$5\\r\\nmykey\\r\\n$7\\r\\nabcdefg\\r\\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"development-concepts",children:"Development concepts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Understanding of the types of memory in C#: Managed Heap, Stack memory, Unmanaged memory, etc."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use of Span and SpanByte"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tsavorite"})," and ",(0,s.jsx)(n.strong,{children:"Garnet"})," rely heavily on these two types for allocating data in memory and then transfer it on the network layer. Understanding and familiarity with both of them will be very helpful for a better understanding of the code in general."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.span-1?view=net-7.0",children:"Documentation about Span"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/unsafe-code",children:"Use of pointers and unsafe code"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the project:"}),"\n",(0,s.jsx)(n.p,{children:"Implementation of SpanByte:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<root>"}),"\\Tsavorite\\cs\\src\\core\\VarLen\\SpanByte.cs"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"pull-request-protocol",children:"Pull Request protocol"}),"\n",(0,s.jsx)(n.p,{children:"Any new feature, change to existing functionality or bug fixing needs to be done using the following process:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a Issue Item on the ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/Garnet",children:"Garnet Project"}),", use the following criteria: Enhancement for new features, Bug for fixes, Task for small improvements or changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Is a good practice to create your own local branch with the following naming convention:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<username>"}),"/branch-name"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Include Unit Tests to test the new commands or feature."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Once it is ready for review, create a ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/Garnet/pulls",children:"Pull Request"}),". Make sure to link it to your issue item in the development section."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add one required reviewer and 2 optional reviewers."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"formatting-style-guide",children:"Formatting style guide"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Comments are an important part of the documentation. Make sure your code includes them."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The official format for comments is:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"//<one whitespace> Comment starting with a capital letter"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"// This comment has good formatting "})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Methods should have their summary block comment and description for each parameter."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'\r\n/// <summary>\r\n/// Iterates the set of keys in the main store.\r\n/// </summary>\r\n/// <param name="patternB">The pattern to apply for filtering</param>\r\n/// <param name="allKeys">When true the filter is ommited</param>\r\n/// <param name="cursor">The value of the cursor in the command request</param>\r\n/// <param name="storeCursor">Value of the cursor returned</param>\r\n/// <param name="Keys">The list of keys from the stores</param>\r\n/// <param name="count">The size of the batch of keys</param>\r\n/// <param name="type">Type of key to filter out</param>\r\n/// <returns></returns>\r\npublic bool DbScan(ArgSlice patternB, bool allKeys, long cursor, out long storeCursor, out List<byte[]> Keys,  long count = 10, Span<byte> type = default);\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["As a good practice, follow the ",(0,s.jsx)("b",{children:"camel case C# naming convention."})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"structure-of-the-garnet-vs-solution",children:"Structure of the Garnet VS solution."}),"\n",(0,s.jsx)(n.p,{children:"In the list following list, is described what are the csharp projects in the Ganet VS solution:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Embedded.benchmark","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," A Client/Server benchmark tool to issue RESP commands to Garnet code, while bypassing the network stack. The following are the options available to run it:"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    --runtime: Run time for the tool in seconds.\r\n    --threads: Number of threads (sessions) that will send requests to the embedded RESP Server.\r\n    --op-workload: Commands to include in the benchmark by default: PING, DBSIZE, CLIENT, ECHO.\r\n    --op-percent: Percentage of load to each of the commands executed.\r\n    --seed: Seed to initialize random pecentange of load generation of commands to run.\r\n    --logger-level: Level of logging for error messages: LogLevel.Trace, LogLevel.Debug, LogLevel.Warning, LogLevel.Error.\r\n    --disable-console-logger: True if logging is off.\r\n    --file-logger: Send the logging to a specific path. \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Resp.benchmark","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," A benchmark tool to issue RESP commands to Garnet Server."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Tsavorite.core","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," The Key/Value store libraries."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Garnet.client","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," A client that can be used with Garnet server with limited functionality."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Garnet.cluster","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," The Garnet Cluster implementation."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Garnet.common","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Network layer implementation and common tools used for requests and responses processing."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Garnet.host","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," The class that instantiates the Garnet Server."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Garnet.server","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," All the API for the keys operations, ACL commands, Checkpointing, Metrics, Transactions, Garnet server API, and storage layer implementation with RESP."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["GarnetServer","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," The main program where the Garnet Server is created."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["HdrHistogram","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Project for creating High Dynamic Range (HDR) Histograms used for graphs of different server metrics."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Bitmap","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," A project that exercises different bitmaps operations, using Tsavorite."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["GarnetClientStress","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," A project to run stress tests against the GarnetClient library."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["GarnetClusterManagement","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Project used to run different cluster tests."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["HyperLogLog","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Project to do different tests to  Hyperloglog implementation in Garnet."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["JobQueueExample","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," A small project that shows how to create a Queue in Garnet server."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["MetricsDump","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," A console application to send metrics to a Prometheus server endpoint, like latency, active connections etc."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["TstRunner","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Console application to run keys migration commands."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["GarnetClientSample","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Example of how to use GarnetClient."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["MetricsMonitor","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Console app to get Latency metrics using StackExchange.Redis."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Garnet.test","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Project for Garnet server unit tests, including unit tests of RESP commands."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Garnet.test.cluster","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Project for Cluster unit tests."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-the-benchmark-application",children:"Running the benchmark application"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Refer to the Resp benchmark page for details ",(0,s.jsx)(n.a,{href:"/docs/benchmarking/how-to",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For details refer to the ",(0,s.jsx)(n.a,{href:"/docs/getting-started",children:"Build and Test page"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"test",children:"Test"}),"\n",(0,s.jsx)(n.p,{children:"As a sanity check, you can run the Garnet test suite. The command to run tests in Release mode, for .NET 8, in shown below (make sure you are in the root folder of the repo)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'    dotnet test -c Release -l "console;verbosity=detailed" -f net8.0\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tip:"})," By default, Garnet listens to TCP port 3278, you can use this information to adjust your firewall settings when you need to access from remote machines."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var s=r(7294);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);