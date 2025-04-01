<div style="width: 100%; display: flex; align-items: center; justify-content: center">
<table >
  <tr>
  </tr>

</table></div>

## TeamVerse

TeamVerse is a gamified team-bonding platform designed for teams to connect, collaborate, and build stronger relationships. Through interactive activities like icebreakers, trivia battles, escape room challenges, and virtual coffee chats, team members engage in a fun and immersive environment. Whether onboarding new employees or strengthening existing teams, TeamVerse transforms  team-building into an exciting digital adventure.

## Development Setup

```bash
git clone https://github.com/zintarh/TeamVerse.git
cd TeamVerse
```


### Build and Run TeamVerse

#### Frontend

```bash
# Navigate to the client directory
cd client

# Install dependencies
npm install

# Run
npm run dev
```

#### Backend

```bash
# Navigate to the backend directory
cd api

# Install dependencies
yarn install

# Load environment variables
cp sample.env .env

# Build app
yarn build

# Create local database
node create:db-local 

# Run
yarn start:dev
```

#### Contracts

```bash
# Navigate to the ochain directory
cd contracts

# Run & Install dependencies
scarb  build
```

## License

This project is licensed under the MIT License. See [License](https://opensource.org/license/mit) for more information

## Contributing

For more info and guidance on contributing, join the contributors Telegram group: https://t.me/+CirNKP39tNBiYmY0

