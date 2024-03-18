"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[964],{2448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(4848),o=t(8453);const s={id:"network",sidebar_label:"Network Layer",title:"Network Layer"},i="Network Layer Design",a={id:"dev/network",title:"Network Layer",description:"Overview",source:"@site/docs/dev/network.md",sourceDirName:"dev",slug:"/dev/network",permalink:"/docs/dev/network",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/dev/network.md",tags:[],version:"current",frontMatter:{id:"network",sidebar_label:"Network Layer",title:"Network Layer"},sidebar:"garnetDocSidebar",previous:{title:"Configuration",permalink:"/docs/dev/configuration"},next:{title:"Processing Layer",permalink:"/docs/dev/processing"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"NetworkHandler",id:"networkhandler",level:2},{value:"GarnetTcpNetworkSender",id:"garnettcpnetworksender",level:2},{value:"Network memory pool using LimitedFixedBufferPool",id:"network-memory-pool-using-limitedfixedbufferpool",level:2},{value:"PoolEntry Class",id:"poolentry-class",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"network-layer-design",children:"Network Layer Design"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"This document describes how the network layer of Garnet server is designed and the various classes it uses to perform network operations to communicate with the client."}),"\n",(0,r.jsxs)(n.p,{children:["On initialization, GarnetServer instantiates GarnetServerTcp object to handle incoming network connections.\nIts ",(0,r.jsx)(n.code,{children:"Start"})," method, invoked when the GarnetServer starts, binds to the IP address and port as specified in the config (See ",(0,r.jsx)(n.a,{href:"/docs/getting-started/configuration",children:"Configuration page"}),") and begins accepting new connections from clients. It also registers ",(0,r.jsx)(n.code,{children:"AcceptEventArg_Completed"})," as the callback function to be invoked on receiving a new connection."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"AcceptEventArg_Completed"})," method that is called when a new connection is accepted, handles the new connection by creating a new ",(0,r.jsx)(n.code,{children:"ServerTcpNetworkHandler"})," object and adding it to the activeHandlers dictionary using the ",(0,r.jsx)(n.code,{children:"HandleNewConnection"})," method."]}),"\n",(0,r.jsx)(n.h2,{id:"networkhandler",children:"NetworkHandler"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ServerTcpNetworkHandler"})," performs the following steps to receive and process the incoming data."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"On instantiation, allocates the network buffer memory to receive data."}),"\n",(0,r.jsxs)(n.li,{children:["Network buffer is allocated using pool of memory governed by the ",(0,r.jsx)(n.code,{children:"LimitedFixedBufferPool"})," class. See ",(0,r.jsx)(n.a,{href:"#network-memory-pool-using-limitedfixedbufferpool",children:"LimitedFixedBufferPool"})," for details."]}),"\n",(0,r.jsx)(n.li,{children:"The allocated network buffer is configured to receive data directly from the network."}),"\n",(0,r.jsxs)(n.li,{children:["It (through base class TcpNetworkHandlerBase) registers ",(0,r.jsx)(n.code,{children:"RecvEventArg_Completed"})," as the callback method to receive data from the socket."]}),"\n",(0,r.jsxs)(n.li,{children:["Also, validates SSL connection by performing client server authentication using ",(0,r.jsx)(n.code,{children:"SslStream.AuthenticateAsServerAsync"})," method, depending on whether TLS encryption is enabled."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The base class ",(0,r.jsx)(n.code,{children:"NetworkHandler"})," provides functionality for handling network communication, including sending and receiving data over a network connection.\nThe main parts of the class:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The class' constructor initializes various fields and properties, including the server hook, network sender, network buffer pool, TLS-related fields, and logger. It also sets up the network and transport receive buffers based on whether TLS is enabled or not."}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"Start"})," and ",(0,r.jsx)(n.code,{children:"StartAsync"})," methods are used to begin the network handler, including the authentication phase if TLS is enabled. These methods take optional parameters such as TLS options and remote endpoint name. They internally call the AuthenticateAsServerAsync or AuthenticateAsClientAsync methods to perform authentication."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"AuthenticateAsServerAsync"})," and ",(0,r.jsx)(n.code,{children:"AuthenticateAsClientAsync"})," methods handle authentication process for TLS connections. They use the sslStream object to perform the authentication and establish a secure connection. These methods also handle reading any extra bytes left over after authentication."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"OnNetworkReceive"})," method is called when data is received from the network. This method is responsible for processing the received data. It first checks the status of the TLS reader and performs the necessary transformations on the network and transport receive buffers. Then, it calls the ",(0,r.jsx)(n.code,{children:"Process"})," method to handle the received data."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"Process"})," method is responsible for processing the received data. It checks if there is any data in the transport receive buffer and if there is a message consumer available. If so, it tries to process the request by calling the ",(0,r.jsx)(n.code,{children:"TryProcessRequest"})," method. The message consumer is responsible for retrieving the session provider based on the wire protocol - ASCII is the only format supported currently. The session provider is previously registered when the Garnet server is initialized. The retrieved session provider is then used to create a new session object, if one doesn't exist already. For processing messages, the ",(0,r.jsx)(n.code,{children:"GarnetProvider"})," class is registered as the session provider and is used to create objects of ",(0,r.jsx)(n.code,{children:"RespServerSession"})," class to handle RESP messages."]}),"\n",(0,r.jsx)(n.li,{children:"The class also performs other operations for buffer management, shifting buffers, logging security information, and disposing of resources."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"garnettcpnetworksender",children:"GarnetTcpNetworkSender"}),"\n",(0,r.jsxs)(n.p,{children:["The GarnetTcpNetworkSender class is a TCP network sender that inherits from the ",(0,r.jsx)(n.code,{children:"NetworkSenderBase"})," class. It is responsible for sending network data over a TCP connection for response messages back to the client. This is instantiated as part of creation of the ",(0,r.jsx)(n.code,{children:"ServerTcpNetworkHandler"})," object."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"It uses the socket, previously created to accept the connection, to send response back to the client."}),"\n",(0,r.jsxs)(n.li,{children:["The class uses a stack of ",(0,r.jsx)(n.code,{children:"GarnetSaeaBuffer"})," objects to manage reusable send buffers. These buffers are created using a networkPool field of type ",(0,r.jsx)(n.a,{href:"#network-memory-pool-using-limitedfixedbufferpool",children:(0,r.jsx)(n.code,{children:"LimitedFixedBufferPool"})}),". These buffers are used to store the data that is to be sent over the network."]}),"\n",(0,r.jsx)(n.li,{children:"The class uses throttling to limit the number of concurrent sends. It has a throttleCount field that keeps track of the number of ongoing sends and a throttle semaphore that controls the maximum number of concurrent sends."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"network-memory-pool-using-limitedfixedbufferpool",children:"Network memory pool using LimitedFixedBufferPool"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"LimitedFixedBufferPool"})," class is a memory pool implementation that provides a pool of memory segments of varying sizes. It is designed to efficiently manage memory allocations and deallocations for improved performance in scenarios where frequent memory allocation and deallocation operations are required. It does this using an array of concurrent queues. Each concurrent queue represents a memory segment of a specific size range. The class provides methods to allocate and deallocate memory segments from the pool."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"LimitedFixedBufferPool"})," class is designed to be thread-safe and can be used in multi-threaded scenarios."]}),"\n",(0,r.jsx)(n.li,{children:"The pool internally uses concurrent queues to manage memory segments, ensuring efficient allocation and deallocation operations."}),"\n",(0,r.jsx)(n.li,{children:"The pool supports memory segments of sizes that are powers of two and greater than or equal to the minimum allocation size."}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"LimitedFixedBufferPool"})," class is disposable and should be disposed when no longer needed to release allocated memory segments."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Get"})," method allocates a memory segment from the pool for the requested size. It returns a ",(0,r.jsx)(n.a,{href:"#poolentry-class",children:(0,r.jsx)(n.code,{children:"PoolEntry"})})," object representing the allocated memory segment."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Return"})," method returns a memory segment to the pool for reuse."]}),"\n",(0,r.jsx)(n.h3,{id:"poolentry-class",children:"PoolEntry Class"}),"\n",(0,r.jsx)(n.p,{children:"The LimitedFixedBufferPool class internally uses the PoolEntry class to represent memory segments. The PoolEntry class provides methods to reuse and manage the allocated memory segments."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);