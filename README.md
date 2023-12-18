# S3MER - Advanced Customizable Live Streaming Platform

S3MER is an innovative and customizable live streaming platform designed to revolutionize the streaming experience. It offers a feature-rich environment akin to popular platforms, while integrating cutting-edge technologies for enhanced security, customization, and seamless user interaction.

## Project Description:

🌟 **S3MER Platform 🎥**

This repository hosts a cutting-edge livestream platform built upon a robust tech stack utilizing TypeScript, React, Next.js, and TailwindCSS to provide a dynamic and responsive user interface. Leveraging the power of Shadcn-ui and Clerk, LiveStreamX delivers a visually immersive experience with personalized themes and advanced user authentication capabilities.

##

### Demo Images

> - Home Page
>   - logged in
>     <img src="/public/demo-images/home.png"/>
>   - live
>     <img src="/public/demo-images/homeLive.png"/>
>   - live logged in
>     <img src="/public/demo-images/homeLiveLogedIn.png"/>
>
> ##
>
> - Dashboard
>   - dashboard offline
>     <img src="/public/demo-images/dashboardOffline.png"/>
>   - dashboard live
>     <img src="/public/demo-images/dashboardLive.png"/>
>   - dashboard about section
>     <img src="/public/demo-images/dashboardAbout.png"/>
>   - dashboard live chat
>     <img src="/public/demo-images/dashboardLiveChat.png"/>
>
> ##
>
> - Search Results
>   - offline
>     <img src="/public\demo-images\searchResults.png"/>
>   - live
>     <img src="/public\demo-images\searchResultsLive.png"/>
>
> ##
>
> - Live Chat
>   - Chat
>     <img src="/public\demo-images\liveChat.png"/> ><br/>
>   - Community Tab
>     <img src="/public\demo-images\communityTab.png"/>
>
> ##
>
> - Live Badge
>   <br/>
>   <img src="/public\demo-images\liveBadge.png"/>

##

### Technologies & Key Features

- **Frontend:** TypeScript, React, Next.js, TailwindCSS, Shadcn-ui
- **Prisma & MySQL**: Ensuring efficient data management and storage.
- **Socket.io & WebRTC**: Enabling real-time communication and streaming capabilities.
- **WebSockets, Clerk & JWT-decode**: Strengthening secure data transmission and authentication.
- **Livekit**: Leveraging Livekit components, client, and server SDKs for enriched streaming functionalities.
- **Tanstack/react-table & Zustand**: Facilitating seamless data handling and state management.
- **Uploadthing & Sonner**: Streamlining file uploads and enhancing user interaction.
- **Svix & Webhooks**: Providing a robust integration framework for external services.
- **NGROK**: Enabling secure tunneling for local development and testing.
- **RTMP and WHIP connections**: Supporting diverse streaming protocols for broad compatibility.
- **Server actions**: Implementing comprehensive server-side functionalities for streamlined operations.

##

### Features & Capabilities:

- **Real-Time Streaming:** Utilizing WebRTC and WebSockets for seamless live streaming capabilities.
- **Security**: Prioritizing robust security measures for user data and interactions. Integrated authentication, JWT, and additional security layers for user protection.
- **Efficient Data Management:** Leveraging Prisma, MySQL, and other technologies for efficient data management.
- **Cutting-edge Technologies**: Leveraging the latest in streaming technology to provide a seamless experience.
- **Customizable UI/UX:** Developed with TailwindCSS and Shadcn-ui, ensuring an engaging user interface. Empowering users with extensive customization options for their streaming environments.
- **Scalable Architecture & Performance:** Built with scalability in mind to accommodate growing user bases while maintaining optimal performance with a focus on delivering a smooth streaming experience.

##

#### Get Involved & Contribute

This project is continuously evolving, incorporating new technologies and enhancements to deliver an exceptional live streaming experience. Contributions and feedback from the community are highly encouraged and welcomed!

Contributions to S#MER are welcome! Whether you're passionate about enhancing user experience, optimizing performance, or adding new features, your contributions are valued.

##

#### Project Structure

```bash
├── .github/               # GitHub configuration
│   ├── workflows/         # GitHub Actions workflows for CI/CD
├── actions/               # Server actions
│   ├── auth.ts            # Authentication actions
│   ├── db.ts              # Database actions
│   ├── streams.ts         # Stream management actions
│   ├── users.ts           # User management actions
│   └── utils.ts           # Utility functions
├── api/                    # Backend API
│   ├── routes/             # API routes
│   │   ├── auth.js
│   │   ├── streams.js
│   │   └── users.js
│   ├── models/             # Database models
│   │   ├── User.js
│   │   └── Stream.js
│   ├── middlewares/        # Express middlewares
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── utils/              # Utility functions
│   │   └── db.js
│   ├── server.js           # Express server
│   └── index.js            # Entry point
├── app/                   # Next.js app
│   ├── pages/             # Next.js pages
│   │   ├── _app.tsx       # Global app component
│   │   ├── _document.tsx  # Custom document
│   │   ├── index.tsx      # Home page
│   │   └── ....           # Other pages
│   ├── components/        # React components
│   │   ├── Auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── ....
│   │   ├── Home/
│   │   │   ├── HomeHero.tsx
│   │   │   ├── FeaturedStreams.tsx
│   │   │   └── ....
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ....
│   │   ├── Live/
│   │   │   ├── LivePlayer.tsx
│   │   │   ├── LiveChat.tsx
│   │   │   └── ....
│   │   ├── Profile/
│   │   │   ├── ProfileHeader.tsx
│   │   │   ├── ProfileContent.tsx
│   │   │   └── ....
│   │   ├── Settings/
│   │   │   ├── AccountSettings.tsx
│   │   │   ├── AppearanceSettings.tsx
│   │   │   └── ....
│   │   └── Video/
│   │       ├── VideoPlayer.tsx
│   │       ├── VideoInfo.tsx
│   │       └── ....
├── hooks/                 # Custom hooks
│   ├── useAuth.ts
│   ├── useStream.ts
│   └── ....
├── lib/                   # Shared lib
│   └── services           # API clients
│       ├── auth.ts
│       ├── streams.ts
│       └── users.ts
├── prisma/                # Prisma schema & migrations
│   ├── schema.prisma
│   └── migrations/
├── public/                # Static assets
│   ├── fonts/
│   ├── images/
│   └── styles/
├── store/                 # State management
│   ├── index.ts
│   └── slices/
│       ├── authSlice.ts
│       ├── streamsSlice.ts
│       └── usersSlice.ts
├── utils/                 # Utility functions
│   ├── formatTime.ts
│   └── ...
├── next.config.js          # Next.js configuration
├── package.json
├── README.md
├── tsconfig.json
└── ....
```

## Tech Stack

`Typescript, React, Next.js, TailwindCSS, Shadcn-ui, Prisma, MySQL, Socket.io, WebRTC, WebSockets, Clerk, Clerk/themes, Livekit/components-react, Livekit-client, Livekit-server-sdk, Tanstack/react-table, Uploadthing, JWT-decode, Sonner, Svix, Ngrok, Zustand, Webhooks, RTMP and WHIP connections, Server actions and more. `

##

#### Installation & Setup

```bash
# install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#### Setup .env file

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CLERK_WEBHOOK_SECRET=

DATABASE_URL=''

LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

#### Setup Prisma

```bash
# install prisma
npm i @prisma/client
# init
npx prisma init
# create a new migration
npx prisma migrate
# create a new database
npx prisma db push

npx prisma studio

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### License

[MIT](https://choosealicense.com/licenses/mit/)
