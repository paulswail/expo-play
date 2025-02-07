# paul expo play

Goals of this are:
- [ ] Understand the Expo development workflow
- [x] Use a feature based folder structure rather than file-type folders
- [ ] Try Nativewind for styling
- [x] Use standard TS dev tools from server/web dev:
   - [x] Biome for linting
   - [x] PNPM for package management
- [ ] Integrate with a REST API with strongly typed sdk code-generated from OpenAPI spec (e.g. generating a React Query client)
- [ ] Auth flow for email/password + Google auth
- [ ] Patterns for doing data validation, ideally using Zod
- [ ] Patterns for auth middleware
- [ ] Understand how to build/package during CI/CD
- [ ] Understand how to release over-the-air and via App Store/Play Store (EAS?)

----

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    pnpm start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).
